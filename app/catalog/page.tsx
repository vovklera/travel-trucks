import { Suspense } from "react";
import { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { fetchCampers, getFilters } from "@/lib/api";
import { filterSearchParams } from "@/components/utils/filterParams";
import CampersClient from "./CampersClient";

export const metadata: Metadata = {
  title: "Camper catalog",
  description:
    "Browse available campers, compare options, and find the right one for your trip.",
};

interface CatalogProps {
  searchParams: Promise<{
    location?: string;
    form?: string;
    engine?: string;
    transmission?: string;
  }>;
}

export default async function Catalog({ searchParams }: CatalogProps) {
  const queryClient = new QueryClient();
  const params = await searchParams;

  const urlSearchParams = new URLSearchParams(params);
  const filters = filterSearchParams(urlSearchParams);

  await queryClient.prefetchQuery({
    queryKey: ["filters"],
    queryFn: getFilters,
  });

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam }) => fetchCampers(pageParam, filters),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={null}>
        <CampersClient />
      </Suspense>
    </HydrationBoundary>
  );
}

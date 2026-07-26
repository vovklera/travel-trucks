import { Metadata } from "next";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";

import { getFilters } from "@/lib/api";
import CampersClient from "./CampersClient";

export const metadata: Metadata = {
  title: "Camper catalog",
  description:
    "Browse available campers, compare options, and find the right one for your trip.",
};

export default async function Catalog() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["filters"],
    queryFn: getFilters,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CampersClient />
    </HydrationBoundary>
  );
}

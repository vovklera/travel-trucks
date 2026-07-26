"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { fetchCampers } from "@/lib/api";
import { Filter } from "@/types/filter";
import CamperList from "../CamperList/CamperList";
import MessageNoCampers from "../MessageNoCampers/MessageNoCampers";

import css from "./CampersSection.module.css";

type Props = {
  filters: Filter;
  onLoadingChange: (loading: boolean) => void;
};

export default function CampersSection({ filters, onLoadingChange }: Props) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    error,
  } = useInfiniteQuery({
    queryKey: ["campers", filters],

    queryFn: ({ pageParam }) => {
      return fetchCampers(pageParam, filters);
    },
    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;

      return nextPage <= lastPage.totalPages ? nextPage : undefined;
    },

    select: (data) => ({
      ...data,
      campers: data.pages.flatMap((page) => page.campers),
    }),
  });

  useEffect(() => {
    onLoadingChange(isFetching);
  }, [isFetching, onLoadingChange]);

  if (error) return <p>Something went wrong</p>;

  if (!data) {
    return null;
  }

  if (data.campers.length === 0) {
    return <MessageNoCampers />;
  }

  return (
    <div className={css.campersSection}>
      <CamperList campers={data.campers} />

      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className={css.loadMoreButton}
        >
          Load more
        </button>
      )}
    </div>
  );
}

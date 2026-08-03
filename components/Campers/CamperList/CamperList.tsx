"use client";

import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchCampers } from "@/lib/api";
import { Camper } from "@/types/camper";
import { Filter } from "@/types/filter";

import CamperCard from "../CamperCard/CamperCard";
import MessageNoCampers from "@/components/Campers/MessageNoCampers/MessageNoCampers";

import css from "./CamperList.module.css";

interface CamperListProps {
  filters: Filter;
  onLoadingChange: (loading: boolean) => void;
  onClear: () => void;
}

export default function CamperList({
  filters,
  onLoadingChange,
  onClear,
}: CamperListProps) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isFetched,
    isError,
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

  const campers = data?.campers ?? [];
  const hasCampers = campers.length > 0;
  const showNoResults = isFetched && !isError && !hasCampers;

  // TODO create error ui component
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {showNoResults && <MessageNoCampers onClear={onClear} />}

      {hasCampers && (
        <div className={css.campersSection}>
          <ul className={css.list}>
            {campers.map((camper: Camper, index) => (
              <CamperCard
                key={camper.id}
                camper={camper}
                isFirst={index === 0}
              />
            ))}
          </ul>
          {hasNextPage && (
            <button
              type="button"
              onClick={() => fetchNextPage()}
              disabled={isFetching || !hasNextPage}
              className={css.loadMoreButton}
            >
              {isFetchingNextPage ? "Loading more..." : "Load more"}
            </button>
          )}
        </div>
      )}
    </>
  );
}

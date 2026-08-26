"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Filter } from "@/types/filter";

import {
  filterParams,
  filterSearchParams,
} from "@/components/utils/filterParams";
import Filters from "@/components/Filters/Filters/Filters";
import Loader from "@/components/Loader/Loader";
import CamperList from "@/components/Campers/CamperList/CamperList";

import css from "./CampersClient.module.css";

const initialFilters: Filter = {
  location: "",
  form: "",
  engine: "",
  transmission: "",
};

export default function CampersClient() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const urlFilters = filterSearchParams(searchParams);

  const [filters, setFilters] = useState(urlFilters);
  const [submittedFilters, setSubmittedFilters] = useState(urlFilters);

  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (filters: Filter) => {
    setSubmittedFilters(filters);

    const params = new URLSearchParams(filterParams(filters));
    router.push(`/catalog?${params.toString()}`);
  };

  const handleClear = () => {
    setFilters(initialFilters);
    setSubmittedFilters(initialFilters);

    router.push(`/catalog`);
  };

  return (
    <div className={css.mainContent}>
      <div className="container">
        <div className={css.catalogWrap}>
          {isLoading && <Loader />}

          <Filters
            filters={filters}
            setFilters={setFilters}
            submittedFilters={submittedFilters}
            onSearch={handleSearch}
            onClear={handleClear}
            isLoading={isLoading}
          />

          <CamperList
            filters={submittedFilters}
            onLoadingChange={setIsLoading}
            onClear={handleClear}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

import { Filter } from "@/types/filter";
import Filters from "@/components/Filters/Filters/Filters";
import Loader from "@/components/Loader/Loader";

import css from "./CampersClient.module.css";
import CamperList from "@/components/Campers/CamperList/CamperList";

export default function CampersClient() {
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState<Filter>({
    location: "",
    form: "",
    engine: "",
    transmission: "",
  });

  return (
    <div className={css.mainContent}>
      <div className="container">
        <div className={css.catalogWrap}>
          {isLoading && <Loader />}
          <Filters filters={filters} onSearch={setFilters} />
          <CamperList filters={filters} onLoadingChange={setIsLoading} />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

import { Filter } from "@/types/filter";
import Sidebar from "@/components/Sidebar/Sidebar";
import CampersSection from "@/components/CampersSection/CampersSection";
import Loader from "@/components/Loader/Loader";

import css from "./CampersClient.module.css";

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
          <Sidebar onSearch={setFilters} />
          <CampersSection filters={filters} onLoadingChange={setIsLoading} />
        </div>
      </div>
    </div>
  );
}

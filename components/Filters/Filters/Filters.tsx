"use client";

import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";

import { getFilters } from "@/lib/api";
import { EngineType, Filter, FormType, TransmissionType } from "@/types/filter";

import css from "./Filters.module.css";
import FilterRadio from "../FiltersRadio/FiltersRadio";

interface SidebarProps {
  filters: Filter;
  onSearch: (filters: Filter) => void;
}

export default function Filters({ filters, onSearch }: SidebarProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    data: filtersData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["filters"],
    queryFn: getFilters,
    refetchOnMount: false,
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const values: Filter = {
      location: formData.get("location")?.toString().trim() ?? "",
      form: (formData.get("form") as FormType) ?? "",
      engine: (formData.get("engine") as EngineType) ?? "",
      transmission: (formData.get("transmission") as TransmissionType) ?? "",
    };

    onSearch(values);
  };

  const handleClear = () => {
    formRef.current?.reset();

    onSearch({
      location: "",
      form: "",
      engine: "",
      transmission: "",
    });
  };

  if (isPending) {
    return <aside className={css.sidebar}>Loading filters...</aside>;
  }

  if (isError || !filtersData) {
    return <aside className={css.sidebar}>Failed to load filters.</aside>;
  }

  const createOptions = <T extends string>(filterItems: T[]) => {
    return filterItems.map((filterItem) => ({
      label: filterItem
        .replaceAll("_", " ")
        .replace(/^./, (character) => character.toUpperCase()),
      value: filterItem,
    }));
  };

  return (
    <aside className={css.sidebar}>
      <form className={css.form} onSubmit={handleSearch} ref={formRef}>
        <div className={css.content}>
          <div className={css.test}>
            <label htmlFor="location" className={css.location}>
              Location
            </label>
            <div className={css.locationInputWrapper}>
              <input
                id="location"
                type="text"
                name="location"
                placeholder="City"
                className={css.locationInput}
              />
              <svg width="20" height="20" className={css.locationIcon}>
                <use href="/icons.svg#icon-Map" />
              </svg>
            </div>
          </div>

          <div className={css.filters}>
            <h2 className={css.filtersTitle}>Filters</h2>
            <FilterRadio<FormType>
              title="Camper form"
              name="form"
              options={createOptions(filtersData.forms)}
              // value={filters.form}
              // onChange={(value) => onSearch({ ...filters, form: value })}
            />

            <FilterRadio<EngineType>
              title="Engine"
              name="engine"
              options={createOptions(filtersData.engines)}
            />

            <FilterRadio<TransmissionType>
              title="Transmission"
              name="transmission"
              options={createOptions(filtersData.transmissions)}
            />
          </div>
        </div>

        <div className={css.actions}>
          <button className={css.searchButton} type="submit">
            Search
          </button>
          <button
            className={css.clearButton}
            type="button"
            onClick={handleClear}
          >
            <svg width="24" height="24" className={css.closeButtonIcon}>
              <use href="/icons.svg#icon-close" />
            </svg>
            Clear filters
          </button>
        </div>
      </form>
    </aside>
  );
}

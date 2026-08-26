"use client";

import { useQuery } from "@tanstack/react-query";

import { IoCloseOutline } from "react-icons/io5";
import { BsMap } from "react-icons/bs";

import { getFilters } from "@/lib/api";
import { EngineType, Filter, FormType, TransmissionType } from "@/types/filter";
import FilterRadio from "../FiltersRadio/FiltersRadio";
import { createOptions } from "@/components/utils/formatLabel";

import css from "./Filters.module.css";

interface SidebarProps {
  filters: Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
  submittedFilters: Filter;
  onSearch: (filters: Filter) => void;
  onClear: () => void;
  isLoading: boolean;
}

export default function Filters({
  filters,
  setFilters,
  submittedFilters,
  onSearch,
  onClear,
  isLoading,
}: SidebarProps) {
  const { data: filtersData, isError } = useQuery({
    queryKey: ["filters"],
    queryFn: getFilters,
    refetchOnMount: false,
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(filters);
  };

  const isFiltersEmpty = Object.values(filters).every((value) => !value);
  const isFiltersChanged =
    JSON.stringify(filters) == JSON.stringify(submittedFilters);

  if (isError) {
    return (
      <aside className={css.sidebar}>
        <p className={css.errorText}>
          Something went wrong while loading filters.
        </p>
      </aside>
    );
  }

  if (!filtersData) {
    return null;
  }

  return (
    <aside className={css.sidebar}>
      <form className={css.form} onSubmit={handleSearch}>
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
                value={filters.location}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    location: e.target.value,
                  })
                }
              />
              <BsMap className={css.locationIcon} />
            </div>
          </div>

          <div className={css.filters}>
            <h2 className={css.filtersTitle}>Filters</h2>
            <FilterRadio<FormType>
              title="Camper form"
              name="form"
              options={createOptions(filtersData.forms)}
              value={filters.form}
              onChange={(value) => setFilters({ ...filters, form: value })}
            />

            <FilterRadio<EngineType>
              title="Engine"
              name="engine"
              options={createOptions(filtersData.engines)}
              value={filters.engine}
              onChange={(value) => setFilters({ ...filters, engine: value })}
            />

            <FilterRadio<TransmissionType>
              title="Transmission"
              name="transmission"
              options={createOptions(filtersData.transmissions)}
              value={filters.transmission}
              onChange={(value) =>
                setFilters({ ...filters, transmission: value })
              }
            />
          </div>
        </div>

        <div className={css.actions}>
          <button
            className={css.searchButton}
            type="submit"
            disabled={isLoading || isFiltersChanged}
          >
            Search
          </button>
          <button
            className={css.clearButton}
            type="button"
            onClick={onClear}
            disabled={isLoading || isFiltersEmpty}
          >
            <IoCloseOutline className={css.closeButtonIcon} />
            Clear filters
          </button>
        </div>
      </form>
    </aside>
  );
}

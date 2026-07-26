"use client";

import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";

import { getFilters } from "@/lib/api";
import { EngineType, Filter, FormType, TransmissionType } from "@/types/filter";

import css from "./Sidebar.module.css";

interface SidebarProps {
  onSearch: (filters: Filter) => void;
}

export default function Sidebar({ onSearch }: SidebarProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    data: filters,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["filters"],
    queryFn: getFilters,
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

  if (isError || !filters) {
    return <aside className={css.sidebar}>Failed to load filters.</aside>;
  }

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
            <div>
              <p className={css.filterText}>Camper form</p>
              <div className={css.radioWrapper}>
                {filters.forms.map((formItem) => (
                  <label key={formItem} className={css.radioContent}>
                    <input
                      type="radio"
                      name="form"
                      value={formItem}
                      className={css.radio}
                    />
                    <p>{formItem}</p>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className={css.filterText}>Engine</p>
              <div className={css.radioWrapper}>
                {filters.engines.map((engineItem) => (
                  <label key={engineItem} className={css.radioContent}>
                    <input
                      type="radio"
                      name="engine"
                      value={engineItem}
                      className={css.radio}
                    />
                    <p>{engineItem}</p>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className={css.filterText}>Transmission</p>
              <div className={css.radioWrapper}>
                {filters.transmissions.map((transmissionItem) => (
                  <label key={transmissionItem} className={css.radioContent}>
                    <input
                      type="radio"
                      name="transmission"
                      value={transmissionItem}
                      className={css.radio}
                    />
                    <p>{transmissionItem}</p>
                  </label>
                ))}
              </div>
            </div>
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

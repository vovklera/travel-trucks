import { Filter, FormType, EngineType, TransmissionType } from "@/types/filter";

export const filterParams = (filters: Filter) => {
  return Object.fromEntries(
    Object.entries(filters).filter(([, value]) => value),
  );
};

export const filterSearchParams = (searchParams: URLSearchParams): Filter => ({
  location: searchParams.get("location") ?? "",
  form: (searchParams.get("form") as FormType) ?? "",
  engine: (searchParams.get("engine") as EngineType) ?? "",
  transmission: (searchParams.get("transmission") as TransmissionType) ?? "",
});

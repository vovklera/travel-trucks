import { Filter } from "@/types/filter";

export const filterParams = (filters: Filter) => {
  return Object.fromEntries(
    Object.entries(filters).filter(([, value]) => value),
  );
};

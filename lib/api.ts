import axios from "axios";

import { Camper } from "@/types/camper";
import { Filter } from "@/types/filter";

const CAMPERS_BASE_URL = process.env.NEXT_PUBLIC_CAMPERS_URL;

const api = axios.create({
  baseURL: CAMPERS_BASE_URL,
});

// CampersResponse
interface FetchCampersResponse {
  page: number;
  totalPages: number;
  campers: Camper[];
}

export const fetchCampers = async (
  page: number = 1,
  filters: Filter,
): Promise<FetchCampersResponse> => {
  const params = {
    page,
    ...Object.fromEntries(Object.entries(filters).filter(([, value]) => value)),
  };

  const response = await api.get("/campers", {
    params,
  });

  return response.data;
};

// FiltersResponse
export interface getFiltersResponse {
  forms: string[];
  transmissions: string[];
  engines: string[];
}

export const getFilters = async (): Promise<getFiltersResponse> => {
  const response = await api.get<getFiltersResponse>("/campers/filters");
  return response.data;
};

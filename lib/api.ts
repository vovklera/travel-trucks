import axios from "axios";

import { Camper } from "@/types/camper";

const CAMPERS_BASE_URL = process.env.NEXT_PUBLIC_CAMPERS_URL;

const api = axios.create({
  baseURL: CAMPERS_BASE_URL,
});

interface FetchCampersResponse {
  total: number;
  totalPages: number;
  campers: Camper[];
}

export const fetchCampers = async (
  page: number = 1,
  perPage: number = 4,
): Promise<FetchCampersResponse> => {
  const response = await api.get<FetchCampersResponse>("/campers", {
    params: {
      page,
      perPage,
    },
  });
  return response.data;
};

interface getFiltersResponse {
  forms: string[];
  transmissions: string[];
  engines: string[];
}

export const getFilters = async (): Promise<getFiltersResponse> => {
  const response = await api.get<getFiltersResponse>("/campers/filters");
  return response.data;
};

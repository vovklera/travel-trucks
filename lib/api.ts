import axios from "axios";

import { Camper, CamperReviews } from "@/types/camper";
import { Filter, FormType, EngineType, TransmissionType } from "@/types/filter";
import { filterParams } from "@/components/utils/filterParams";

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
    ...filterParams(filters),
  };

  const response = await api.get<FetchCampersResponse>("/campers", {
    params,
  });

  return response.data;
};

// FiltersResponse
export interface GetFiltersResponse {
  forms: FormType[];
  transmissions: TransmissionType[];
  engines: EngineType[];
}

export const getFilters = async (): Promise<GetFiltersResponse> => {
  const response = await api.get<GetFiltersResponse>("/campers/filters");
  return response.data;
};

export const getCamperById = async (camperId: string): Promise<Camper> => {
  const response = await api.get<Camper>(`/campers/${camperId}`);
  return response.data;
};

export const getCamperByIdReviews = async (
  camperId: string,
): Promise<CamperReviews[]> => {
  const response = await api.get<CamperReviews[]>(
    `/campers/${camperId}/reviews`,
  );
  return response.data;
};

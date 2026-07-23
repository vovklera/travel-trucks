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
  perPage: number = 5,
): Promise<FetchCampersResponse> => {
  const respons = await api.get<FetchCampersResponse>("/campers", {
    params: {
      page,
      perPage,
    },
  });
  return respons.data;
};

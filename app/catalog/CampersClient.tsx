"use client";

import CamperList from "@/components/CamperList/CamperList";
import { fetchCampers } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import css from "./CampersClient.module.css";

export default function CampersClient() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["campers"],
    queryFn: () => fetchCampers(),
  });

  if (isPending) return <p>Loading...</p>;

  if (isError) return <p>Something went wrong.</p>;

  return (
    <div className="container">
      <div className={css.catalogWrap}>
        <CamperList campers={data?.campers} />
      </div>
    </div>
  );
}

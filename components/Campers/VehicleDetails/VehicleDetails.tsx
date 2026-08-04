"use client";

import { useState } from "react";
import css from "./VehicleDetails.module.css";

interface VehicleDetailsProps {
  badges: string[];
}

export default function VehicleDetails({ badges }: VehicleDetailsProps) {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div className={css.vehicleWrapper}>
        <h2 className={css.vehicleTitle}>Vehicle details</h2>
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className={css.showAllButton}
        >
          {showAll ? "Show less" : "Show all"}
        </button>
      </div>
      <ul
        className={`${css.badgesContainer} ${showAll ? css.showAllBages : ""}`}
      >
        {badges.map((badge) => (
          <li key={badge} className={css.badgeItem}>
            <p>{badge}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

import { Camper } from "@/types/camper";

import css from "./CamperList.module.css";

interface CamperListProps {
  campers: Camper[];
}

export default function CamperList({ campers }: CamperListProps) {
  return (
    <ul className={css.list}>
      {campers.map((camper: Camper) => (
        <li key={camper.id} className={css.listItem}>
          <Image
            src={camper.coverImage}
            alt={camper.name}
            width={220}
            height={240}
            className={css.image}
          />
          <div className={css.content}>
            <div>
              <div className={css.title}>
                <h2>{camper.name}</h2>
                <p className={css.price}>€{camper.price}</p>
              </div>
              <div className={css.detailsWrapper}>
                <div className={css.details}>
                  <svg width="16" height="16" className={css.icons}>
                    <use href="/icons.svg#icon-Star-full" />
                  </svg>
                  <p>
                    {camper.rating}({camper.totalReviews} Reviews)
                  </p>
                </div>
                <div className={css.details}>
                  <svg width="16" height="16" className={css.icons}>
                    <use href="/icons.svg#icon-Map" />
                  </svg>
                  <p>{camper.location}</p>
                </div>
              </div>
            </div>
            <p className={css.description}>{camper.description}</p>
            <ul className={css.badgeList}>
              <li className={css.badgeItem}>
                <svg width="20" height="20">
                  <use href="/icons.svg#icon-Petrol" />
                </svg>
                <p>{camper.form}</p>
              </li>
              <li className={css.badgeItem}>
                <svg width="20" height="20">
                  <use href="/icons.svg#icon-Automatic" />
                </svg>
                <p>{camper.engine}</p>
              </li>
              <li className={css.badgeItem}>
                <svg width="20" height="20">
                  <use href="/icons.svg#icon-Car" />
                </svg>
                <p>{camper.transmission}</p>
              </li>
            </ul>
            <Link href={camper.id} className={css.link}>
              Show more
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

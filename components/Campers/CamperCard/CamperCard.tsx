import Image from "next/image";
import Link from "next/link";

import { FaStar } from "react-icons/fa";
import { BsMap } from "react-icons/bs";
import { BsFuelPump } from "react-icons/bs";
import { LiaSitemapSolid } from "react-icons/lia";
import { IoCar } from "react-icons/io5";

import { Camper } from "@/types/camper";
import { formatLocation, formatText } from "@/components/utils/formatLabel";

import css from "./CamperCard.module.css";

interface CamperCardProps {
  camper: Camper;
  isFirst: boolean;
}

export default function CamperCard({ camper, isFirst }: CamperCardProps) {
  const loading = isFirst ? "eager" : "lazy";

  const badges = [
    {
      icon: BsFuelPump,
      label: formatText(camper.form),
    },
    {
      icon: LiaSitemapSolid,
      label: formatText(camper.engine),
    },
    {
      icon: IoCar,
      label: formatText(camper.transmission),
    },
  ];

  return (
    <li className={css.listItem}>
      <Image
        src={camper.coverImage}
        alt={camper.name}
        width={220}
        height={240}
        className={css.image}
        loading={loading}
      />
      <div className={css.content}>
        <div>
          <div className={css.title}>
            <h2>{camper.name}</h2>
            <p className={css.price}>€{camper.price}</p>
          </div>
          <div className={css.detailsWrapper}>
            <div className={css.details}>
              <FaStar className={`${css.detailsIcons} ${css.starIcon}`} />
              <p>
                {camper.rating}({camper.totalReviews} Reviews)
              </p>
            </div>
            <div className={css.details}>
              <BsMap className={css.detailsIcons} />
              <p>{formatLocation(camper.location)}</p>
            </div>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>

        <ul className={css.badgeList}>
          {badges.map((badge) => {
            const Icon = badge.icon;

            return (
              <li key={badge.label} className={css.badgeItem}>
                <Icon className={css.badgeIcons} />
                <p>{badge.label}</p>
              </li>
            );
          })}
        </ul>

        <Link href={`catalog/${camper.id}`} className={css.link}>
          Show more
        </Link>
      </div>
    </li>
  );
}

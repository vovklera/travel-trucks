import Image from "next/image";
import Link from "next/link";

// Icons
import { FaStar } from "react-icons/fa";
import { BsMap } from "react-icons/bs";
import { BsFuelPump } from "react-icons/bs";
import { LiaSitemapSolid } from "react-icons/lia";
import { IoCar } from "react-icons/io5";

import { Camper } from "@/types/camper";

import css from "./CamperCard.module.css";

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <li className={css.listItem}>
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
              <FaStar className={`${css.detailsIcons} ${css.starIcon}`} />
              <p>
                {camper.rating}({camper.totalReviews} Reviews)
              </p>
            </div>
            <div className={css.details}>
              <BsMap className={css.detailsIcons} />
              <p>{camper.location}</p>
            </div>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>
        <ul className={css.badgeList}>
          <li className={css.badgeItem}>
            <BsFuelPump className={css.badgeIcons} />
            <p>{camper.form}</p>
          </li>
          <li className={css.badgeItem}>
            <LiaSitemapSolid className={css.badgeIcons} />
            <p>{camper.engine}</p>
          </li>
          <li className={css.badgeItem}>
            <IoCar className={css.badgeIcons} />
            <p>{camper.transmission}</p>
          </li>
        </ul>
        <Link href={camper.id} className={css.link}>
          Show more
        </Link>
      </div>
    </li>
  );
}

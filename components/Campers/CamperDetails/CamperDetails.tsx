import { FaStar } from "react-icons/fa";
import { BsMap } from "react-icons/bs";

import { GalleryImage, VehicleSpec } from "@/types/camper";
import { formatLocation } from "@/components/utils/formatLabel";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import CamperGallery from "@/components/Campers/CamperGallery/CamperGallery";

import css from "./CamperDetails.module.css";

interface CamperDetailsProps {
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  badges: string[];
  specs: VehicleSpec[];
  gallery: GalleryImage[];
}

export default function CamperDetails({
  name,
  price,
  rating,
  totalReviews,
  location,
  description,
  badges,
  specs,
  gallery,
}: CamperDetailsProps) {
  return (
    <div className={css.camperDetails}>
      <div className={css.camperGallery}>
        <CamperGallery gallery={gallery} camperName={name} />
      </div>

      <div className={css.vehicleWrapper}>
        <div className={`${css.vehicleInfo} ${css.vehicleBlock}`}>
          <h1 className={css.title}>{name}</h1>
          <div className={css.infoWrapper}>
            <div className={css.infoGroup}>
              <div className={css.infoItem}>
                <FaStar className={`${css.detailsIcons} ${css.starIcon}`} />
                <p className={css.vehicleRating}>
                  {rating}({totalReviews} Reviews)
                </p>
              </div>
              <div className={css.infoItem}>
                <BsMap className={css.detailsIcons} />
                <p className={css.vehicleRating}>{formatLocation(location)}</p>
              </div>
            </div>
            <p className={css.price}>€{price}</p>
          </div>
          <p className={css.vehicleDescription}>{description}</p>
        </div>
        <div className={css.vehicleInfo}>
          <VehicleDetails badges={badges} />
          <div className={css.separateLine}></div>
          <ul className={css.specsList}>
            {specs.map((spec) => (
              <li key={spec.label} className={css.specsItem}>
                <p className={css.specsText}>{spec.label}</p>
                <p className={css.specsText}>{spec.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

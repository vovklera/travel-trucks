import { notFound } from "next/navigation";

import {
  CAMPERS_LIVE_URL,
  getCamperById,
  getCamperByIdReviews,
} from "@/lib/api";

import CamperDetails from "@/components/Campers/CamperDetails/CamperDetails";
import { formatText, removeLetters } from "@/components/utils/formatLabel";
import ReviewsSection from "@/components/ReviewsSection/ReviewsSection";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const camper = await getCamperById(id);

  return {
    title: camper?.name,
    description: camper?.description?.slice(0, 80),
    openGraph: {
      title: `Camper: ${camper?.name}`,
      description: camper?.description?.slice(0, 80),
      url: `${CAMPERS_LIVE_URL}/catalog/${id}`,
      siteName: "TravelTrucks",
      images: [
        {
          url: camper?.gallery[0].original,
          width: 1200,
          height: 630,
          alt: camper?.name,
        },
      ],
      type: "article",
    },
  };
}

export default async function CamperPage({ params }: PageProps) {
  const { id } = await params;
  const camper = await getCamperById(id);

  if (!camper) {
    notFound();
  }

  const reviews = await getCamperByIdReviews(id);

  const vehicleBadges = [
    camper.transmission,
    ...camper.amenities,
    camper.engine,
  ];

  const [consumption, distance] = removeLetters(camper.consumption).split("/");

  const vehicleSpecs: {
    label: string;
    value: string;
  }[] = [
    { label: "Form", value: formatText(camper.form) },
    { label: "Length", value: `${removeLetters(camper.length)} m` },
    { label: "Width", value: `${removeLetters(camper.width)} m` },
    { label: "Height", value: `${removeLetters(camper.height)} m` },
    { label: "Tank", value: `${removeLetters(camper.tank)} l` },
    { label: "Consumption", value: `${consumption} l / ${distance}km` },
  ];

  return (
    <div className="container">
      <CamperDetails
        name={camper.name}
        price={camper.price}
        rating={camper.rating}
        totalReviews={camper.totalReviews}
        location={camper.location}
        description={camper.description}
        badges={vehicleBadges}
        specs={vehicleSpecs}
        gallery={camper.gallery}
      />
      <ReviewsSection reviews={reviews} camperId={id} />
    </div>
  );
}

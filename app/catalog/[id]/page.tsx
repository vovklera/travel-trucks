import { getCamperById } from "@/lib/api";
import CamperDetails from "@/components/Campers/CamperDetails/CamperDetails";
import { formatText, removeLetters } from "@/components/utils/formatLabel";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CamperPage({ params }: PageProps) {
  const { id } = await params;
  const camper = await getCamperById(id);

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
    </div>
  );
}

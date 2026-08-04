import CamperDetails from "@/components/Campers/CamperDetails/CamperDetails";
import { getCamperById } from "@/lib/api";

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

  // Text formatting for label
  const formatLable = (value: string) =>
    value
      .replaceAll("_", " ")
      .replace(/^./, (char) => char.toLocaleUpperCase());

  const vehicleSpecs: {
    label: string;
    value: string;
  }[] = [
    { label: "Form", value: formatLable(camper.form) },
    { label: "Length", value: camper.length },
    { label: "Width", value: camper.width },
    { label: "Height", value: camper.height },
    { label: "Tank", value: camper.tank },
    { label: "Consumption", value: camper.consumption },
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
      />
    </div>
  );
}

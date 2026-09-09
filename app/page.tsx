import { Metadata } from "next";

import { CAMPERS_LIVE_URL } from "@/lib/api";
import Hero from "@/components/Hero/Hero";

export const metadata: Metadata = {
  title: "TravelTrucks",
  description:
    "Choose the perfect camper and start planning your next adventure.",
  openGraph: {
    title: `TravelTrucks`,
    description:
      "Choose the perfect camper and start planning your next adventure.",
    url: `${CAMPERS_LIVE_URL}/`,
    siteName: "TravelTrucks",
    images: [
      {
        url: `${CAMPERS_LIVE_URL}/images/Hero.webp`,
        width: 1200,
        height: 630,
        alt: "TravelTrucks",
      },
    ],
    type: "article",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}

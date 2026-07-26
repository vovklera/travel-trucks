import { Metadata } from "next";
import Hero from "@/components/Hero/Hero";

export const metadata: Metadata = {
  title: "Find your camper",
  description:
    "Choose the perfect camper and start planning your next adventure.",
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}

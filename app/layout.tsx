import type { Metadata } from "next";
import { Inter } from "next/font/google";

import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "TravelTrucks",
  description:
    "Find and rent campers for comfortable and unforgettable road trips.",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackProvider>
          <Header />
          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}

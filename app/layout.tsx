import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel Trucks",
  description: "Campers of your dreams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

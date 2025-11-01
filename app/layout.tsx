import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Family Home for Sale in Nolan Hill, Calgary NW | Getty Group Real Estate",
  description: "Discover your family's dream home at 144 Nolancrest Circle NW — a spacious, modern property in the heart of Calgary's family-friendly Nolan Hill community.",
  keywords: "Nolan Hill homes for sale, Calgary NW real estate, family homes Calgary, Getty Group listings",
  openGraph: {
    title: "144 Nolancrest Circle NW - Family Home in Nolan Hill",
    description: "A beautifully designed home in a family-first community, offering the perfect balance of comfort, connection, and convenience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

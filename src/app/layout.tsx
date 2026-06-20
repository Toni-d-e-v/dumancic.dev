import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0e0e0e",
};

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dumancic.dev"),
  title: {
    default: "Toni Dumančić — Web3 & full-stack products that ship",
    template: "%s · dumancic.dev",
  },
  description:
    "I'm Toni — a Mostar-based developer who designs, builds and scales modern Web3 and full-stack products through my studio, dumancic.dev.",
  openGraph: {
    title: "Toni Dumančić — dumancic.dev",
    description:
      "Web3 & full-stack products that ship. Built in Mostar, for teams everywhere.",
    url: "https://dumancic.dev",
    siteName: "dumancic.dev",
    images: ["/images/og/home.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${hanken.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

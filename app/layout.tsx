import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/motion/page-transition";
import { JsonLd } from "@/components/seo/json-ld";
import { GoogleTagManagerNoScript, TrackingScripts } from "@/components/seo/tracking-scripts";
import { siteUrl } from "@/lib/site-data";
import { rootStructuredData } from "@/lib/structured-data";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Logistics Companies in Dubai | Freight & Warehouse | VaultX",
  description:
    "VaultX - Dubai's most trusted logistics partner. Freight forwarding, warehousing & supply chain solutions for businesses of all sizes. Get a free quote today.",
  authors: [{ name: "VaultX" }],
  publisher: "VaultX",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  other: {
    "msapplication-TileImage": "/favicon.png",
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": "25.2048;55.2708",
    ICBM: "25.2048, 55.2708",
  },
  openGraph: {
    title: "Logistics Companies in Dubai | Freight & Warehouse | VaultX",
    description:
      "VaultX - Dubai's most trusted logistics partner. Freight forwarding, warehousing & supply chain solutions for businesses of all sizes. Get a free quote today.",
    url: "/",
    siteName: "VaultX",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/images/hero-welcome.webp",
        width: 1200,
        height: 630,
        alt: "VaultX Premium Warehousing and Logistics Facility in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logistics Companies in Dubai | Freight & Warehouse | VaultX",
    description:
      "VaultX - Dubai's most trusted logistics partner. Freight forwarding, warehousing & supply chain solutions for businesses of all sizes. Get a free quote today.",
    images: ["/images/hero-welcome.webp"],
    site: "@vaultxae",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full bg-black text-white">
        <TrackingScripts />
        <GoogleTagManagerNoScript />
        <JsonLd data={rootStructuredData} />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

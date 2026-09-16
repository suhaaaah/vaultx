import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { AboutPage } from "@/components/sections/core-pages/about-page";
import { SiteShell } from "@/components/site/site-shell";
import { buildAboutStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Top-Rated Logistic Company in Dubai | VaultX Logistics",
  description:
    "VaultX is a certified logistic company in Dubai - built on trust, precision & local expertise. Freight forwarding, storage & seamless last-mile delivery.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "Top-Rated Logistic Company in Dubai | VaultX Logistics",
    description:
      "VaultX is a certified logistic company in Dubai - built on trust, precision & local expertise. Freight forwarding, storage & seamless last-mile delivery.",
    url: "/about/",
    images: [
      {
        url: "/images/warehouse-storage-optimization-dubai.webp",
        width: 1200,
        height: 630,
        alt: "VaultX warehouse storage facility in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top-Rated Logistic Company in Dubai | VaultX Logistics",
    description:
      "VaultX is a certified logistic company in Dubai - built on trust, precision & local expertise. Freight forwarding, storage & seamless last-mile delivery.",
    images: ["/images/warehouse-storage-optimization-dubai.webp"],
  },
};

export default function AboutRoute() {
  return (
    <SiteShell>
      <JsonLd data={buildAboutStructuredData()} />
      <AboutPage />
    </SiteShell>
  );
}

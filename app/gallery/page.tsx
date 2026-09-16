import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { GalleryPage } from "@/components/sections/core-pages/gallery-page";
import { SiteShell } from "@/components/site/site-shell";
import { buildGalleryStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Best Warehouse Facility Dubai | Logistics Solutions | VaultX",
  description:
    "Tour our world-class warehouse facility Dubai. VaultX offers climate-controlled storage, modern equipment & secure vaults. See our facility in action today!",
  alternates: {
    canonical: "/gallery/",
  },
  openGraph: {
    title: "Best Warehouse Facility Dubai | Logistics Solutions | VaultX",
    description:
      "Tour our world-class warehouse facility Dubai. VaultX offers climate-controlled storage, modern equipment & secure vaults. See our facility in action today!",
    url: "/gallery/",
    images: [
      {
        url: "/images/warehouse-storage-optimization-dubai.webp",
        width: 1200,
        height: 630,
        alt: "VaultX warehouse facilities gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Warehouse Facility Dubai | Logistics Solutions | VaultX",
    description:
      "Tour our world-class warehouse facility Dubai. VaultX offers climate-controlled storage, modern equipment & secure vaults. See our facility in action today!",
    images: ["/images/warehouse-storage-optimization-dubai.webp"],
  },
};

export default function GalleryRoute() {
  return (
    <SiteShell>
      <JsonLd data={buildGalleryStructuredData()} />
      <GalleryPage />
    </SiteShell>
  );
}

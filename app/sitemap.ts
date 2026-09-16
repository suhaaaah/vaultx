import type { MetadataRoute } from "next";
import { absoluteSiteUrl } from "@/lib/site-data";

type SitemapRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const lastModified = new Date("2026-06-08T00:00:00.000Z");
const contentLastModified = new Date("2026-06-09T00:00:00.000Z");

const indexableRoutes: SitemapRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/gallery/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/storage-solutions/", changeFrequency: "weekly", priority: 0.9 },
  { path: "/storage-solutions/self-storage-units/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/storage-solutions/business/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/storage-solutions/residential-moving/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/storage-solutions/e-commerce-fulfillment/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/logistics-solutions/", changeFrequency: "weekly", priority: 0.9 },
  { path: "/logistics-solutions/air-freight/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/logistics-solutions/sea-freight/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/logistics-solutions/land-freight/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/logistics-solutions/courier/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/logistics-solutions/custom-clearance/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/logistics-solutions/crypto-mining-equipments/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog/", changeFrequency: "weekly", priority: 0.7 },
  { path: "/blog/crypto-mining-logistics-uae/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/air-freight-vs-sea-freight/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/ecommerce-fulfillment-dubai/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/choose-reliable-logistics-company-dubai/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/choose-right-warehousing-services-dubai/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/secure-storage-facility-dubai/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/import-asic-miners-dubai-customs/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/reduce-logistics-costs-delivery-speed/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/choose-shipping-company-dubai/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/urgent-international-shipments-dubai/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog/business-storage-space-dubai/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lp/storage-solutions/", changeFrequency: "weekly", priority: 0.9 },
  { path: "/lp/logistics-solutions/", changeFrequency: "weekly", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((route) => ({
    url: absoluteSiteUrl(route.path),
    lastModified: route.path.startsWith("/blog/") ? contentLastModified : lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

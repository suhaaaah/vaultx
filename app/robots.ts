import type { MetadataRoute } from "next";
import { absoluteSiteUrl, siteUrl } from "@/lib/site-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/admin/blog/", "/api/"],
    },
    sitemap: absoluteSiteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}

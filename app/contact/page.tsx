import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactPage } from "@/components/sections/core-pages/contact-page";
import { SiteShell } from "@/components/site/site-shell";
import { buildContactStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Top Forwarding Companies in Dubai | Secure VaultX Services",
  description:
    "Contact VaultX, one of the top forwarding companies in dubai. Get a free quote, partnership info, or instant support via WhatsApp & email. Reach us today!",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Top Forwarding Companies in Dubai | Secure VaultX Services",
    description:
      "Contact VaultX, one of the top forwarding companies in dubai. Get a free quote, partnership info, or instant support via WhatsApp & email. Reach us today!",
    url: "/contact/",
    images: [
      {
        url: "/images/hero-welcome.webp",
        width: 1200,
        height: 630,
        alt: "VaultX logistics and storage team contact page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Forwarding Companies in Dubai | Secure VaultX Services",
    description:
      "Contact VaultX, one of the top forwarding companies in dubai. Get a free quote, partnership info, or instant support via WhatsApp & email. Reach us today!",
    images: ["/images/hero-welcome.webp"],
  },
};

export default function ContactRoute() {
  return (
    <SiteShell>
      <JsonLd data={buildContactStructuredData()} />
      <ContactPage />
    </SiteShell>
  );
}

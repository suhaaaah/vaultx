import type { BlogPost } from "@/lib/blog-data";
import { blogListingMetadata } from "@/lib/blog-data";
import { aboutFaqs, galleryItems } from "@/lib/core-pages-data";
import type { ServiceCard, ServicePageData } from "@/lib/service-pages-data";
import { homeFaqs, logisticsServices, storageServices } from "@/lib/site-data";
import { absoluteSiteUrl } from "@/lib/site-data";

type JsonLdNode = Record<string, unknown>;

const organizationId = absoluteSiteUrl("/#organization");
const websiteId = absoluteSiteUrl("/#website");
const phoneNumber = "+971586992781";

const address = {
  "@type": "PostalAddress",
  streetAddress: "79VV+R8W, Al Qusais Industrial Area 3",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  addressCountry: "AE",
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: "25.247584",
  longitude: "55.338099",
};

const officeHours = {
  "@type": "OpeningHoursSpecification",
  name: "Office Hours",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  opens: "09:00",
  closes: "20:00",
};

const warehouseHours = {
  "@type": "OpeningHoursSpecification",
  name: "Warehouse Access",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  opens: "00:00",
  closes: "23:59",
};

function graph(nodes: (JsonLdNode | null | undefined)[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}

function organizationRef() {
  return { "@id": organizationId };
}

function webpageId(path: string) {
  return absoluteSiteUrl(`${path}#webpage`);
}

function serviceId(path: string) {
  return absoluteSiteUrl(`${path}#service`);
}

function businessId(path: string) {
  return absoluteSiteUrl(`${path}#business`);
}

function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteSiteUrl(item.path),
    })),
  };
}

function faqPage(faqs: { q: string; a: string }[] | undefined): JsonLdNode | null {
  if (!faqs?.length) {
    return null;
  }

  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

function offerCatalog(name: string, items: string[]) {
  const uniqueItems = [...new Set(items.filter(Boolean))];

  if (!uniqueItems.length) {
    return undefined;
  }

  return {
    "@type": "OfferCatalog",
    name,
    itemListElement: uniqueItems.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: item,
      },
    })),
  };
}

function serviceItemNames(page: ServicePageData) {
  return page.sections.flatMap((section) => section.items.map((item: ServiceCard) => item.title));
}

function serviceBreadcrumb(page: ServicePageData) {
  const segments = page.id.split("/");
  const landingName = segments[0] === "storage-solutions" ? "Storage Solutions" : "Logistics Solutions";
  const currentName = page.hero.title.join(" ");

  if (segments.length === 1) {
    return breadcrumb([
      { name: "Home", path: "/" },
      { name: landingName, path: `/${page.id}/` },
    ]);
  }

  return breadcrumb([
    { name: "Home", path: "/" },
    { name: landingName, path: `/${segments[0]}/` },
    { name: currentName, path: `/${page.id}/` },
  ]);
}

function pageWebPage(type: string, path: string, name: string, description: string, breadcrumbName = name): JsonLdNode {
  const isHome = path === "/";

  return {
    "@type": type,
    "@id": webpageId(path),
    url: absoluteSiteUrl(path),
    name,
    description,
    isPartOf: {
      "@id": websiteId,
    },
    about: organizationRef(),
    breadcrumb: breadcrumb(isHome ? [{ name: "Home", path: "/" }] : [
      { name: "Home", path: "/" },
      { name: breadcrumbName, path },
    ]),
  };
}

export const rootStructuredData = graph([
  {
    "@type": ["Organization", "LocalBusiness"],
    "@id": organizationId,
    name: "VaultX",
    legalName: "VaultX Secure Logistics L.L.C",
    url: absoluteSiteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteSiteUrl("/images/vaultx-logo-blue.svg"),
    },
    image: absoluteSiteUrl("/images/hero-welcome.webp"),
    description:
      "Dubai-based premium logistics and warehousing solutions provider offering freight forwarding, self-storage, e-commerce fulfillment, and customs clearance.",
    foundingDate: "2020",
    telephone: phoneNumber,
    email: "info@vaultx.ae",
    address,
    geo,
    sameAs: ["https://twitter.com/vaultxae"],
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phoneNumber,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
      hoursAvailable: [officeHours, warehouseHours],
    },
    openingHoursSpecification: [officeHours, warehouseHours],
  },
  {
    "@type": "WebSite",
    "@id": websiteId,
    url: absoluteSiteUrl("/"),
    name: "VaultX",
    publisher: organizationRef(),
    inLanguage: "en-AE",
  },
  {
    "@type": "Service",
    "@id": absoluteSiteUrl("/#services"),
    serviceType: "Logistics and Warehousing Services UAE",
    provider: organizationRef(),
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    hasOfferCatalog: offerCatalog("VaultX Logistics & Warehousing Services", [
      ...storageServices.map((service) => service.title),
      ...logisticsServices.map((service) => service.title),
    ]),
  },
]);

export function buildHomeStructuredData() {
  return graph([
    pageWebPage(
      "WebPage",
      "/",
      "Logistics Companies in Dubai | Freight & Warehouse | VaultX",
      "Enterprise-grade warehousing and logistics solutions for businesses and individuals in Dubai. Climate-controlled storage, freight forwarding, and 24/7 security.",
    ),
    faqPage(homeFaqs),
  ]);
}

export function buildAboutStructuredData() {
  return graph([
    pageWebPage(
      "AboutPage",
      "/about/",
      "About VaultX | Top-Rated Logistics Company in Dubai",
      "Learn about VaultX, Dubai's trusted logistics and warehousing partner since 2020.",
      "About",
    ),
    {
      "@type": "LocalBusiness",
      "@id": organizationId,
      name: "VaultX",
      url: absoluteSiteUrl("/"),
      logo: absoluteSiteUrl("/images/vaultx-logo-blue.svg"),
      image: absoluteSiteUrl("/images/warehouse-storage-optimization-dubai.webp"),
      description:
        "VaultX is Dubai's logistics and warehousing company, offering freight forwarding, self-storage, e-commerce fulfillment, and customs clearance.",
      foundingDate: "2020",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: 150,
      },
      telephone: phoneNumber,
      address,
      geo,
    },
    faqPage(aboutFaqs),
  ]);
}

export function buildContactStructuredData() {
  return graph([
    pageWebPage(
      "ContactPage",
      "/contact/",
      "Contact VaultX | Get a Free Logistics Quote in Dubai",
      "Get in touch with VaultX for storage, freight, and logistics enquiries in Dubai. Request a free quote or speak to our team.",
      "Contact",
    ),
    {
      "@type": "LocalBusiness",
      "@id": organizationId,
      name: "VaultX",
      url: absoluteSiteUrl("/"),
      telephone: phoneNumber,
      address,
      geo,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: phoneNumber,
          contactType: "customer service",
          availableLanguage: ["English", "Arabic"],
          areaServed: {
            "@type": "Country",
            name: "United Arab Emirates",
          },
          hoursAvailable: [officeHours, warehouseHours],
        },
      ],
      openingHoursSpecification: [officeHours, warehouseHours],
    },
  ]);
}

export function buildGalleryStructuredData() {
  return graph([
    {
      "@type": "ImageGallery",
      "@id": absoluteSiteUrl("/gallery/#gallery"),
      url: absoluteSiteUrl("/gallery/"),
      name: "VaultX Facility Gallery | Dubai Warehouse & Logistics Photos",
      description:
        "Photos of VaultX's warehousing and logistics facilities in Dubai, including climate-controlled storage units, loading docks, freight operations, and the Al Qusais site.",
      publisher: organizationRef(),
      image: galleryItems.map((item) => ({
        "@type": "ImageObject",
        name: item.title,
        url: absoluteSiteUrl(item.image),
      })),
      breadcrumb: breadcrumb([
        { name: "Home", path: "/" },
        { name: "Gallery", path: "/gallery/" },
      ]),
    },
  ]);
}

export function buildBlogListingStructuredData(posts: BlogPost[]) {
  return graph([
    {
      "@type": "Blog",
      "@id": absoluteSiteUrl("/blog/#blog"),
      url: absoluteSiteUrl("/blog/"),
      name: "VaultX Blog | Logistics & Warehousing Insights for the UAE",
      description: blogListingMetadata.description,
      publisher: organizationRef(),
      inLanguage: "en-AE",
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: absoluteSiteUrl(`/blog/${post.slug}/`),
        image: absoluteSiteUrl(post.image),
      })),
      breadcrumb: breadcrumb([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog/" },
      ]),
    },
  ]);
}

export function buildServicePageStructuredData(page: ServicePageData) {
  const path = `/${page.id}/`;
  const isLandingPage = page.id === "storage-solutions" || page.id === "logistics-solutions";
  const serviceNames = serviceItemNames(page);
  const common = {
    "@id": isLandingPage ? webpageId(path) : serviceId(path),
    name: page.metadata.title,
    url: absoluteSiteUrl(path),
    description: page.metadata.description,
    breadcrumb: serviceBreadcrumb(page),
  };

  const primaryNode: JsonLdNode = isLandingPage
    ? {
        "@type": "WebPage",
        ...common,
        isPartOf: {
          "@id": websiteId,
        },
        about: organizationRef(),
      }
    : {
        "@type":
          page.id === "storage-solutions/self-storage-units"
            ? "SelfStorage"
            : page.id === "storage-solutions/residential-moving"
              ? "MovingCompany"
              : "Service",
        ...common,
        "@id":
          page.id === "storage-solutions/self-storage-units" ||
          page.id === "storage-solutions/residential-moving"
            ? businessId(path)
            : serviceId(path),
        serviceType: page.hero.title.join(" "),
        provider: organizationRef(),
        areaServed: [
          { "@type": "City", name: "Dubai" },
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        telephone:
          page.id === "storage-solutions/self-storage-units" ||
          page.id === "storage-solutions/residential-moving"
            ? phoneNumber
            : undefined,
        address:
          page.id === "storage-solutions/self-storage-units" ||
          page.id === "storage-solutions/residential-moving"
            ? address
            : undefined,
        openingHoursSpecification:
          page.id === "storage-solutions/self-storage-units" ? [officeHours, warehouseHours] : undefined,
        hasOfferCatalog: offerCatalog(`${page.hero.title.join(" ")} Features`, serviceNames),
      };

  const nodes: JsonLdNode[] = [primaryNode];

  if (isLandingPage) {
    const items = page.id === "storage-solutions" ? storageServices : logisticsServices;

    nodes.push({
      "@type": "ItemList",
      name: page.id === "storage-solutions" ? "VaultX Storage Solutions" : "VaultX Logistics Solutions",
      description:
        page.id === "storage-solutions"
          ? "All storage and warehousing services offered by VaultX in Dubai."
          : "All freight, courier, customs clearance, and specialized logistics services offered by VaultX.",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: absoluteSiteUrl(item.href),
      })),
    });
  }

  const faq = faqPage(page.faqs);
  if (faq) {
    nodes.push(faq);
  }

  return graph(nodes);
}

function toIsoDate(value: string | undefined) {
  if (!value) {
    return undefined;
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

export function buildBlogArticleStructuredData(post: BlogPost) {
  const canonical = absoluteSiteUrl(`/blog/${post.slug}/`);
  const publishedDate = toIsoDate(post.sourceDate);
  const description = post.metaDescription ?? post.excerpt;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    image: {
      "@type": "ImageObject",
      url: absoluteSiteUrl(post.image),
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Organization",
      name: "VaultX",
      url: absoluteSiteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      "@id": organizationId,
      name: "VaultX",
      logo: {
        "@type": "ImageObject",
        url: absoluteSiteUrl("/images/vaultx-logo-blue.svg"),
      },
    },
    datePublished: publishedDate,
    dateModified: publishedDate,
    url: canonical,
    inLanguage: "en-AE",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };
}

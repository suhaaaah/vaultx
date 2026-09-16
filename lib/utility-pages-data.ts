import type { Metadata } from "next";

type UtilityMetadataSource = {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  image: string;
  imageAlt: string;
  noindex?: boolean;
};

export type LegalPageData = {
  id: "privacy" | "terms";
  eyebrow: string;
  title: string;
  metadata: UtilityMetadataSource;
  sections: {
    title: string;
    body: string;
  }[];
};

export type ThankYouResource = {
  title: string;
  description: string;
  href: string;
};

export const legalPages: Record<LegalPageData["id"], LegalPageData> = {
  privacy: {
    id: "privacy",
    eyebrow: "LEGAL",
    title: "Privacy Policy",
    metadata: {
      title: "Privacy Policy - VaultX Data Protection & Privacy Practices",
      description:
        "Read VaultX Privacy Policy to understand how we collect, use, and protect your personal information. Learn about our data security measures, cookie usage, and your rights regarding your personal data.",
      keywords: ["privacy policy", "data protection", "VaultX privacy", "personal data", "GDPR compliance"],
      canonical: "/privacy/",
      image: "/images/hero-welcome.webp",
      imageAlt: "VaultX privacy policy",
    },
    sections: [
      {
        title: "Introduction",
        body: "VaultX Secure Logistics L.L.C is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our services or visit our website.",
      },
      {
        title: "Information We Collect",
        body: "We collect information you provide directly, including name, email address, phone number, company details, and shipping/storage requirements. We may also collect usage data and analytics to improve our services.",
      },
      {
        title: "How We Use Your Information",
        body: "Your information is used to provide and improve our services, process transactions, communicate important updates, respond to inquiries, and comply with legal obligations.",
      },
      {
        title: "Data Security",
        body: "We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information from unauthorized access, alteration, or disclosure.",
      },
      {
        title: "Contact Us",
        body: "If you have questions about this Privacy Policy, please contact us at info@vaultx.ae or call +971 58 699 2781.",
      },
    ],
  },
  terms: {
    id: "terms",
    eyebrow: "LEGAL",
    title: "Terms of Service",
    metadata: {
      title: "Terms of Service - VaultX Service Agreement & Conditions",
      description:
        "Review VaultX Terms of Service outlining the conditions for using our storage and logistics services. Understand your rights, responsibilities, and our service commitments for a transparent business relationship.",
      keywords: ["terms of service", "terms and conditions", "VaultX terms", "service agreement", "user agreement"],
      canonical: "/terms/",
      image: "/images/hero-welcome.webp",
      imageAlt: "VaultX terms of service",
    },
    sections: [
      {
        title: "Acceptance of Terms",
        body: "By accessing or using VaultX services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
      },
      {
        title: "Service Description",
        body: "VaultX provides storage, warehousing, and logistics services including but not limited to self-storage, business storage, freight forwarding, and customs clearance. Services are subject to availability and applicable regulations.",
      },
      {
        title: "User Responsibilities",
        body: "You agree to provide accurate information, use our services only for lawful purposes, comply with all applicable laws and regulations, and not store prohibited items including hazardous materials, illegal goods, or perishables without prior arrangement.",
      },
      {
        title: "Limitation of Liability",
        body: "VaultX shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total liability shall not exceed the fees paid for the specific service giving rise to the claim.",
      },
      {
        title: "Governing Law",
        body: "These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai.",
      },
    ],
  },
};

export const thankYouMetadataSource: UtilityMetadataSource = {
  title: "Thank You - VaultX Inquiry Received",
  description:
    "Thank you for contacting VaultX. Our team will review your inquiry and respond with storage or logistics support as soon as possible.",
  keywords: ["VaultX thank you", "inquiry received", "storage quote", "logistics quote"],
  canonical: "/thank-you/",
  image: "/images/hero-welcome.webp",
  imageAlt: "VaultX inquiry confirmation",
  noindex: true,
};

export const thankYouSteps = [
  {
    title: "We Review Your Request",
    description:
      "Our team will carefully review your inquiry and gather all necessary information to provide you with the best solution.",
  },
  {
    title: "Expert Consultation",
    description:
      "A dedicated account manager will contact you within 24 hours to discuss your specific needs and provide a customized quote.",
  },
  {
    title: "Tailored Solution",
    description:
      "We'll work with you to design a logistics or storage solution that perfectly fits your requirements and budget.",
  },
];

export const thankYouResources: ThankYouResource[] = [
  {
    title: "Storage Solutions",
    description: "Explore our climate-controlled storage facilities",
    href: "/storage-solutions/",
  },
  {
    title: "Logistics Solutions",
    description: "Learn about our freight and customs services",
    href: "/logistics-solutions/",
  },
  {
    title: "Blog & Insights",
    description: "Read expert tips on logistics and warehousing",
    href: "/blog/",
  },
];

export function buildUtilityMetadata(source: UtilityMetadataSource): Metadata {
  return {
    title: source.title,
    description: source.description,
    alternates: {
      canonical: source.canonical,
    },
    openGraph: {
      title: source.title,
      description: source.description,
      url: source.canonical,
      images: [
        {
          url: source.image,
          width: 1200,
          height: 630,
          alt: source.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: source.title,
      description: source.description,
      images: [source.image],
    },
    robots: source.noindex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

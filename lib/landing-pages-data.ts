import type { Metadata } from "next";

type MetadataSource = {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  canonical: string;
};

export type LandingPageField = {
  type: "text" | "email" | "tel" | "select" | "textarea";
  name: string;
  placeholder: string;
  required?: boolean;
  rows?: number;
  options?: string[];
};

export type LandingPageData = {
  id: "storage-solutions" | "logistics-solutions";
  metadata: MetadataSource;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    benefits: {
      title: string;
      description: string;
    }[];
    stats: {
      number: string;
      label: string;
    }[];
  };
  form: {
    heading: string;
    description: string;
    selectPlaceholder: string;
    messagePlaceholder: string;
    primaryButton: string;
    bottomButton: string;
    fields: LandingPageField[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    cards: {
      title: string;
      desc: string;
      features: string[];
    }[];
  };
  stats: {
    number: string;
    label: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  bottomCta: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

const commonFormFields = (
  selectPlaceholder: string,
  selectOptions: string[],
  messagePlaceholder: string,
): LandingPageField[] => [
  { type: "text", name: "name", placeholder: "Your Name *", required: true },
  { type: "email", name: "email", placeholder: "Your Email *", required: true },
  { type: "tel", name: "phone", placeholder: "Your Phone *", required: true },
  {
    type: "select",
    name: "service",
    placeholder: selectPlaceholder,
    required: true,
    options: selectOptions,
  },
  { type: "textarea", name: "message", placeholder: messagePlaceholder, rows: 4 },
];

export const landingPages: Record<LandingPageData["id"], LandingPageData> = {
  "storage-solutions": {
    id: "storage-solutions",
    metadata: {
      title: "Secure Storage Solutions in Dubai - Get Free Quote | VaultX",
      description:
        "Get a free quote for VaultX secure storage solutions in Dubai. Climate-controlled, 24/7 secured storage facilities with flexible terms for personal storage, business warehousing, residential moving, and e-commerce fulfillment.",
      keywords: [
        "storage solutions Dubai",
        "secure storage Dubai",
        "climate controlled storage",
        "self storage units Dubai",
        "business storage Dubai",
        "storage quote Dubai",
      ],
      image: "/images/hero-storage.webp",
      imageAlt: "Modern climate-controlled storage facility in Dubai",
      canonical: "/lp/storage-solutions/",
    },
    hero: {
      eyebrow: "PREMIUM STORAGE SOLUTIONS",
      title: "Secure Storage Solutions in Dubai",
      description:
        "Climate-controlled, 24/7 secured storage facilities with flexible terms. From personal storage to business warehousing, we protect what matters most.",
      image: "/images/hero-storage.webp",
      imageAlt: "Modern climate-controlled storage facility in Dubai",
      benefits: [
        {
          title: "Climate-Controlled Facilities",
          description: "Temperature and humidity regulated 24/7",
        },
        {
          title: "24/7 Security & Access",
          description: "CCTV monitoring with individual unit alarms",
        },
        {
          title: "Flexible Terms from 1 Week",
          description: "No long-term commitments required",
        },
        {
          title: "Starting at 0.4 AED/Sqft Daily",
          description: "Transparent pricing with no hidden fees",
        },
      ],
      stats: [
        { number: "100k+", label: "Sq Storage Space" },
        { number: "99.8%", label: "Security Rate" },
        { number: "24/7", label: "Access Available" },
      ],
    },
    form: {
      heading: "Get Your Free Quote",
      description: "Fill out the form and our team will contact you within 24 hours",
      selectPlaceholder: "Select Storage Type *",
      messagePlaceholder: "Tell us about your storage needs",
      primaryButton: "Get Free Quote",
      bottomButton: "Get Your Free Quote Now",
      fields: commonFormFields(
        "Select Storage Type *",
        ["Self Storage Units", "Business Storage", "Residential Moving", "E-commerce Fulfillment"],
        "Tell us about your storage needs",
      ),
    },
    services: {
      eyebrow: "OUR SERVICES",
      title: "Complete Storage Solutions",
      description:
        "From personal belongings to business inventory, we offer comprehensive storage solutions tailored to your needs",
      cards: [
        {
          title: "Self Storage Units",
          desc: "Flexible storage spaces for personal belongings with 24/7 access",
          features: ["Climate-controlled units", "Multiple size options", "24/7 CCTV monitoring"],
        },
        {
          title: "Business Storage",
          desc: "Scalable warehousing solutions for inventory and equipment",
          features: ["Flexible terms from 1 week", "Loading dock access", "Inventory management"],
        },
        {
          title: "Residential Moving",
          desc: "Secure storage during relocation with packing services",
          features: ["Short & long-term options", "Packing materials included", "Door-to-door service"],
        },
        {
          title: "E-commerce Fulfillment",
          desc: "Complete order fulfillment and inventory management",
          features: ["Real-time inventory tracking", "Pick, pack & ship services", "Returns processing"],
        },
      ],
    },
    stats: [
      { number: "5,000+", label: "Sq Ft Storage Space" },
      { number: "99.8%", label: "Security Success Rate" },
      { number: "24/7", label: "Access Available" },
      { number: "500+", label: "Satisfied Clients" },
    ],
    faqs: [
      {
        q: "What sizes of storage units do you offer?",
        a: "We offer a wide range of storage unit sizes from 25 sq ft (suitable for small items and boxes) up to 500+ sq ft (suitable for large inventory or vehicles). Our team can help you determine the right size based on your needs.",
      },
      {
        q: "Is the storage facility climate-controlled?",
        a: "Yes, all our storage facilities are climate-controlled with temperature and humidity regulation 24/7. This protects your belongings from Dubai's extreme heat and humidity, especially important for electronics, documents, furniture, and sensitive items.",
      },
      {
        q: "What are your pricing and payment terms?",
        a: "Our storage rates start at 0.4 AED per square foot daily with flexible terms from 1 week onwards. We offer transparent pricing with no hidden fees. Payment can be made monthly, quarterly, or annually with discounts for longer commitments.",
      },
      {
        q: "How secure are your storage facilities?",
        a: "Security is our top priority. All facilities feature 24/7 CCTV monitoring, individual unit alarms, biometric access control, and on-site security personnel. We maintain a 99.8% security success rate.",
      },
      {
        q: "Can I access my storage unit anytime?",
        a: "Yes, we offer 24/7 access to your storage unit. You'll receive a personal access code and can visit your unit whenever needed. For business storage clients, we also provide loading dock access during business hours.",
      },
    ],
    bottomCta: {
      eyebrow: "GET STARTED TODAY",
      title: "Ready to Secure Your Storage?",
      description:
        "Get a free quote and discover why businesses across Dubai trust VaultX for their storage needs",
    },
  },
  "logistics-solutions": {
    id: "logistics-solutions",
    metadata: {
      title: "Reliable Logistics Solutions in Dubai - Get Free Quote | VaultX",
      description:
        "Get a free quote for VaultX logistics solutions in Dubai. End-to-end logistics with real-time tracking, air freight, sea freight, land freight, customs clearance, and 24/7 customer support.",
      keywords: [
        "logistics solutions Dubai",
        "logistics company UAE",
        "air freight Dubai",
        "sea freight UAE",
        "customs clearance Dubai",
        "logistics quote Dubai",
      ],
      image: "/images/hero-logistics.webp",
      imageAlt: "Professional logistics operations with air freight and cargo handling",
      canonical: "/lp/logistics-solutions/",
    },
    hero: {
      eyebrow: "GLOBAL LOGISTICS SOLUTIONS",
      title: "Reliable Logistics Solutions in Dubai",
      description:
        "End-to-end logistics services with real-time tracking. From air freight to customs clearance, we deliver your cargo safely and on time.",
      image: "/images/hero-logistics.webp",
      imageAlt: "Professional logistics operations with air freight and cargo handling",
      benefits: [
        {
          title: "Multi-Modal Transportation",
          description: "Air, sea, and land freight options",
        },
        {
          title: "Real-Time Tracking",
          description: "Monitor your shipments 24/7 online",
        },
        {
          title: "Expert Customs Clearance",
          description: "Fast processing with compliance management",
        },
        {
          title: "50+ Countries Coverage",
          description: "Global network for international shipping",
        },
      ],
      stats: [
        { number: "10,000+", label: "Shipments" },
        { number: "99.5%", label: "On-Time Rate" },
        { number: "24/7", label: "Support" },
      ],
    },
    form: {
      heading: "Get Your Free Quote",
      description: "Fill out the form and our team will contact you within 24 hours",
      selectPlaceholder: "Select Service Type *",
      messagePlaceholder: "Tell us about your logistics needs",
      primaryButton: "Get Free Quote",
      bottomButton: "Get Your Free Quote Now",
      fields: commonFormFields(
        "Select Service Type *",
        ["Air Freight", "Sea Freight", "Land Freight", "Customs Clearance"],
        "Tell us about your logistics needs",
      ),
    },
    services: {
      eyebrow: "OUR SERVICES",
      title: "Complete Logistics Solutions",
      description:
        "From urgent air freight to cost-effective sea shipping, we provide comprehensive logistics services for all your needs",
      cards: [
        {
          title: "Air Freight",
          desc: "Fast international shipping with priority handling",
          features: ["Express delivery options", "Real-time tracking", "Customs clearance included"],
        },
        {
          title: "Sea Freight",
          desc: "Cost-effective ocean shipping for large volumes",
          features: ["FCL & LCL options", "Door-to-door service", "Competitive rates"],
        },
        {
          title: "Land Freight",
          desc: "Reliable ground transportation across GCC",
          features: ["Same-day delivery available", "Temperature-controlled trucks", "Flexible scheduling"],
        },
        {
          title: "Customs Clearance",
          desc: "Expert customs brokerage and documentation",
          features: ["Fast clearance processing", "Compliance management", "Duty optimization"],
        },
      ],
    },
    stats: [
      { number: "10,000+", label: "Shipments Delivered" },
      { number: "50+", label: "Countries Served" },
      { number: "99.5%", label: "On-Time Delivery" },
      { number: "24/7", label: "Customer Support" },
    ],
    faqs: [
      {
        q: "What logistics services do you provide?",
        a: "We offer comprehensive logistics solutions including air freight, sea freight, land freight, customs clearance, warehousing, and last-mile delivery. Our services cover both domestic UAE and international shipping to over 50 countries worldwide.",
      },
      {
        q: "How long does international shipping take?",
        a: "Delivery times vary by destination and service type. Air freight typically takes 3-7 days, while sea freight takes 15-45 days depending on the route. We offer express options for urgent shipments with delivery in 1-3 days to major destinations.",
      },
      {
        q: "Do you handle customs clearance?",
        a: "Yes, we provide complete customs clearance services including documentation preparation, duty calculation, compliance management, and coordination with customs authorities. Our expert team ensures smooth and fast clearance for all your shipments.",
      },
      {
        q: "Can you ship hazardous or special cargo?",
        a: "Yes, we have expertise in handling special cargo including hazardous materials, perishables, oversized items, and high-value goods. We ensure proper packaging, documentation, and compliance with all safety regulations for specialized shipments.",
      },
      {
        q: "How can I track my shipment?",
        a: "All shipments include real-time tracking through our online portal. You'll receive a tracking number and can monitor your shipment's location and status 24/7. We also provide proactive updates via email and SMS at key milestones.",
      },
    ],
    bottomCta: {
      eyebrow: "GET STARTED TODAY",
      title: "Ready to Ship Your Cargo?",
      description:
        "Get a free quote and discover why businesses across Dubai trust VaultX for their logistics needs",
    },
  },
};

export function landingPage(id: LandingPageData["id"]) {
  return landingPages[id];
}

export function buildLandingMetadata(page: LandingPageData): Metadata {
  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: {
      canonical: page.metadata.canonical,
    },
    openGraph: {
      title: page.metadata.title,
      description: page.metadata.description,
      url: page.metadata.canonical,
      images: [
        {
          url: page.metadata.image,
          width: 1200,
          height: 630,
          alt: page.metadata.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadata.title,
      description: page.metadata.description,
      images: [page.metadata.image],
    },
  };
}

export const aboutSpecialties = [
  {
    title: "Premium Storage Solutions",
    description:
      "Climate-controlled facilities with 24/7 security, flexible unit sizes from 50 to 5,000+ sq ft, and professional inventory management systems.",
  },
  {
    title: "Global Freight Forwarding",
    description:
      "Comprehensive air, sea, and land freight services with real-time tracking, competitive rates, and door-to-door delivery worldwide.",
  },
  {
    title: "Customs Clearance",
    description:
      "Licensed customs brokers with expertise in UAE regulations, ensuring fast clearance and full compliance for all imports and exports.",
  },
  {
    title: "E-commerce Fulfillment",
    description:
      "End-to-end fulfillment services including receiving, storage, picking, packing, and last-mile delivery for online retailers.",
  },
  {
    title: "Crypto Logistics",
    description:
      "Specialized logistics services for cryptocurrency mining equipment including import/export handling, customs clearance, secure transportation, climate-controlled warehousing, and professional equipment handling.",
  },
  {
    title: "Residential & Commercial Moving",
    description:
      "Professional relocation services for homes and businesses, with careful handling, secure transport, and optional storage solutions.",
  },
];

export const aboutPromises = [
  {
    title: "Security First",
    description:
      "Your goods are protected by 24/7 surveillance, individual unit alarms, and professional security personnel.",
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, real-time tracking, and clear communication at every step of your logistics journey.",
  },
  {
    title: "Reliability",
    description:
      "On-time delivery, consistent service quality, and a 99.9% uptime guarantee for all our facilities.",
  },
  {
    title: "Flexibility",
    description:
      "Scalable solutions that grow with your business, from monthly rentals to long-term partnerships.",
  },
];

export const leadershipTeam = [
  { name: "Nizam A.R", role: "Managing Director" },
  { name: "Nause Moideen", role: "CEO" },
  { name: "Aqeel Anas", role: "Director" },
];

export const certifications = ["ISO 9001:2015", "IATA Certified", "Dubai Chamber Member", "FIATA Member", "WCA Network"];

export const aboutFaqs = [
  {
    q: "When was VaultX founded?",
    a: "VaultX was established to serve the growing logistics and storage needs of Dubai's business community. We've built our reputation on reliability, security, and customer-focused service.",
  },
  {
    q: "Where is VaultX located?",
    a: "Our main facility is located at 79VV+R8W, Al Qusais Industrial Area 3, Dubai, UAE. This strategic location provides easy access to Dubai International Airport, Jebel Ali Port, and all major highways.",
  },
  {
    q: "What certifications and licenses does VaultX hold?",
    a: "VaultX is a licensed logistics and warehousing provider registered with Dubai Municipality. Our team includes certified customs brokers, professional movers, and logistics specialists with international qualifications.",
  },
  {
    q: "How many employees does VaultX have?",
    a: "Our team consists of over 50 dedicated professionals including logistics experts, security personnel, warehouse managers, and customer service representatives.",
  },
  {
    q: "Does VaultX have any partnerships or affiliations?",
    a: "Yes, we partner with international freight forwarders and logistics networks to provide comprehensive services to our clients.",
  },
  {
    q: "What is your company's environmental policy?",
    a: "We're committed to sustainable practices including energy-efficient facilities, waste management programs, and eco-friendly packaging options for our logistics services.",
  },
];

export const galleryFilters = ["all", "storage", "transportation", "services"] as const;

export type GalleryFilter = (typeof galleryFilters)[number];

export const galleryItems: {
  id: number;
  category: Exclude<GalleryFilter, "all">;
  title: string;
  image: string;
}[] = [
  {
    id: 1,
    category: "storage",
    title: "Climate-Controlled Storage Units",
    image: "/images/self-storage-units-dubai.webp",
  },
  {
    id: 2,
    category: "storage",
    title: "Secure Storage Vault",
    image: "/images/residential-moving-dubai.webp",
  },
  {
    id: 3,
    category: "storage",
    title: "Personal Storage Units",
    image: "/images/warehouse-racking-dubai.webp",
  },
  {
    id: 4,
    category: "storage",
    title: "Business Inventory Storage",
    image: "/images/business-storage-warehouse-dubai.webp",
  },
  {
    id: 5,
    category: "storage",
    title: "Climate Control System",
    image: "/images/climate-control-system-dubai.webp",
  },
  {
    id: 6,
    category: "storage",
    title: "Organized Storage Facility",
    image: "/images/organized-storage-facility-dubai.webp",
  },
  {
    id: 7,
    category: "transportation",
    title: "Logistics Fleet",
    image: "/images/logistics-fleet-truck-dubai.webp",
  },
  {
    id: 8,
    category: "transportation",
    title: "Cargo Handling Operations",
    image: "/images/warehouse-cargo-handling-dubai.webp",
  },
  {
    id: 9,
    category: "transportation",
    title: "Air Freight Services",
    image: "/images/air-freight-aircraft-dubai.webp",
  },
  {
    id: 10,
    category: "transportation",
    title: "Sea Freight Shipping",
    image: "/images/sea-freight-container-ship-dubai.webp",
  },
  {
    id: 11,
    category: "transportation",
    title: "Land Transport Fleet",
    image: "/images/land-transport-fleet-dubai.webp",
  },
  {
    id: 12,
    category: "transportation",
    title: "Delivery Operations",
    image: "/images/delivery-operations-dubai.webp",
  },
  {
    id: 13,
    category: "services",
    title: "Customs Clearance",
    image: "/images/customs-clearance-documents-dubai.webp",
  },
  {
    id: 14,
    category: "services",
    title: "Real-Time Tracking System",
    image: "/images/real-time-tracking-system-dubai.webp",
  },
  {
    id: 15,
    category: "services",
    title: "Inventory Management",
    image: "/images/inventory-management-checklist-dubai.webp",
  },
  {
    id: 16,
    category: "services",
    title: "Professional Packing",
    image: "/images/professional-packing-service-dubai.webp",
  },
  {
    id: 17,
    category: "services",
    title: "Security & Monitoring",
    image: "/images/security-monitoring-system-dubai.webp",
  },
  {
    id: 18,
    category: "services",
    title: "Crypto Logistics",
    image: "/images/crypto-logistics-mining-equipment-dubai.webp",
  },
];

export const contactCards = [
  { icon: "phone", label: "Call Us", value: "+971 58 699 2781", href: "tel:+971586992781", action: "Call Now" },
  { icon: "mail", label: "Email Us", value: "info@vaultx.ae", href: "mailto:info@vaultx.ae", action: "Send Email" },
  {
    icon: "message",
    label: "WhatsApp",
    value: "+971 58 699 2781",
    href: "https://wa.me/971586992781",
    action: "Chat Now",
  },
  { icon: "clock", label: "Business Hours", value: "Office: 09:00-20:00", href: null, action: "Warehouse: 24/7" },
];

export const serviceOptions = [
  { value: "", label: "Select Service *" },
  { value: "self-storage", label: "Self Storage" },
  { value: "business-storage", label: "Business Storage" },
  { value: "residential-moving", label: "Residential Moving" },
  { value: "ecommerce", label: "E-commerce Fulfillment" },
  { value: "air-freight", label: "Air Freight" },
  { value: "sea-freight", label: "Sea Freight" },
  { value: "land-freight", label: "Land Freight" },
  { value: "customs", label: "Customs Clearance" },
  { value: "crypto", label: "Crypto Logistics" },
  { value: "other", label: "Other" },
];

export const contactLocations = [
  {
    title: "Al Qusais Industrial Area 3 (WH1)",
    description:
      "Warehouse No. 5.2 - Owned by Dubai Real Estate Corporation - Deira - Al Qusais Industrial Area 3",
    mapSrc: "https://maps.google.com/maps?q=25.2817,55.3872&hl=en&z=15&output=embed",
    mapsHref: "https://maps.app.goo.gl/fW3Jpf8eRJqUWnvF7?g_st=aw",
  },
  {
    title: "Al Quoz Location",
    description: "13 17A St - Al Qouz Ind.second - Al Quoz - Dubai",
    mapSrc: "https://maps.google.com/maps?q=25.1334,55.2329&hl=en&z=15&output=embed",
    mapsHref: null,
  },
  {
    title: "Al Quoz Industrial Area 1 (WH2 & WH3)",
    description: "Al Quoz Industrial Area 1 - Dubai",
    mapSrc: "https://maps.google.com/maps?q=25.1334,55.2329&hl=en&z=15&output=embed",
    mapsHref: null,
  },
];

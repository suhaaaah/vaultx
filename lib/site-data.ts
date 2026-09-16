export type NavItem = {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
};

const fallbackSiteUrl = "https://vaultx.ae";

function normalizeSiteUrl(value: string) {
  try {
    return new URL(value).origin;
  } catch {
    return fallbackSiteUrl;
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl);

export function absoluteSiteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

export const navItems: NavItem[] = [
  { id: "home", label: "HOME", href: "/" },
  { id: "about", label: "ABOUT US", href: "/about/" },
  {
    id: "storage-solutions",
    label: "STORAGE SOLUTIONS",
    href: "/storage-solutions/",
    children: [
      {
        id: "storage-solutions/self-storage-units",
        label: "Self Storage Units",
        href: "/storage-solutions/self-storage-units/",
      },
      {
        id: "storage-solutions/business",
        label: "Business Storage Solutions",
        href: "/storage-solutions/business/",
      },
      {
        id: "storage-solutions/residential-moving",
        label: "Residential Moving Solutions",
        href: "/storage-solutions/residential-moving/",
      },
      {
        id: "storage-solutions/e-commerce-fulfillment",
        label: "E-commerce Fulfillment",
        href: "/storage-solutions/e-commerce-fulfillment/",
      },
    ],
  },
  {
    id: "logistics-solutions",
    label: "LOGISTICS SOLUTIONS",
    href: "/logistics-solutions/",
    children: [
      { id: "logistics-solutions/air-freight", label: "Air Freight", href: "/logistics-solutions/air-freight/" },
      { id: "logistics-solutions/sea-freight", label: "Sea Freight", href: "/logistics-solutions/sea-freight/" },
      { id: "logistics-solutions/land-freight", label: "Land Freight", href: "/logistics-solutions/land-freight/" },
      { id: "logistics-solutions/courier", label: "Courier", href: "/logistics-solutions/courier/" },
      {
        id: "logistics-solutions/custom-clearance",
        label: "Custom Clearance",
        href: "/logistics-solutions/custom-clearance/",
      },
      {
        id: "logistics-solutions/crypto-mining-equipments",
        label: "Crypto Logistics",
        href: "/logistics-solutions/crypto-mining-equipments/",
      },
    ],
  },
  { id: "gallery", label: "GALLERY", href: "/gallery/" },
  { id: "blog", label: "BLOG", href: "/blog/" },
  { id: "contact", label: "CONTACT", href: "/contact/" },
];

export const heroSlides = [
  {
    title: "Welcome to VaultX",
    subtitle: "Premium Logistics & Storage Solutions",
    description:
      "Enterprise-grade warehousing and logistics solutions for businesses and individuals in Dubai. With state-of-the-art facilities, 24/7 security, and climate-controlled options, we ensure your goods are kept safe, organized, and accessible at all times.",
    image: "/images/hero-welcome.webp",
    href: "/about/",
  },
  {
    title: "Storage Solutions",
    subtitle: "Safe, Secure & Climate-Controlled",
    description:
      "From personal belongings to business inventory, our flexible storage units range from 50 to 5,000+ sq ft. Climate-controlled environments, professional inventory management, and 24/7 access ensure your items are always protected.",
    image: "/images/hero-storage.webp",
    href: "/storage-solutions/",
  },
  {
    title: "Logistics Solutions",
    subtitle: "Global Reach, Local Expertise",
    description:
      "Comprehensive freight services including air, sea, and land transportation. Expert customs clearance, real-time tracking, and dedicated account management for seamless international and domestic logistics.",
    image: "/images/hero-logistics.webp",
    href: "/logistics-solutions/",
  },
  {
    title: "Crypto Logistics",
    subtitle: "Specialized Equipment Storage Solutions",
    description:
      "Secure storage and logistics solutions for cryptocurrency mining equipment. Climate-controlled facilities with enhanced security, specialized handling, and flexible storage options designed for valuable crypto mining hardware.",
    image: "/images/hero-crypto.webp",
    href: "/logistics-solutions/crypto-mining-equipments/",
  },
];

export const features = [
  {
    title: "24/7 Security Monitoring",
    desc: "Our facilities are protected by advanced CCTV surveillance systems, professional security personnel, and state-of-the-art access control. Every entry and exit is logged and monitored in real-time.",
  },
  {
    title: "Climate-Controlled Storage",
    desc: "Maintain optimal temperature and humidity levels for sensitive goods including electronics, artwork, pharmaceuticals, and documents. Our systems are monitored 24/7 to ensure consistent conditions.",
  },
  {
    title: "Real-Time GPS Tracking",
    desc: "Monitor your shipments every step of the way with our advanced GPS tracking system. Receive instant notifications and detailed status updates through our customer portal or mobile app.",
  },
  {
    title: "Flexible & Scalable Solutions",
    desc: "Whether you need 50 sq ft or 50,000 sq ft, our storage solutions scale with your business. No long-term commitments required; upgrade or downgrade as your needs change.",
  },
  {
    title: "Experienced Logistics Team",
    desc: "Our team of logistics professionals brings decades of combined experience in freight forwarding, customs clearance, and supply chain management. We handle complex logistics so you don't have to.",
  },
  {
    title: "Strategic Dubai Locations",
    desc: "Al Qusais Industrial Area 1 offers easy access to residential zones like Al Qusais First, major roads for quick commutes to Sharjah and Dubai, public transport, essential amenities, and a logistics hub location for businesses and residents seeking affordability and connectivity.",
  },
];

export const stats = [
  { number: "500+", label: "Satisfied Clients Worldwide" },
  { number: "10,000+", label: "Square Feet of Storage" },
  { number: "99.8%", label: "On-Time Delivery Rate" },
  { number: "24/7", label: "Customer Support Available" },
];

export const storageServices = [
  {
    title: "Self Storage Units",
    description:
      "Personal and small business storage solutions with flexible sizing from 50 to 500 sq ft. Perfect for household items, seasonal goods, or personal belongings with 24/7 access and individual unit security.",
    features: [
      "Daily Storage Space starts @ 0.4AED/Sqft",
      "Climate controlled environments",
      "24/7 secure access",
      "Flexible lease terms from 1 week",
      "Free shelving and organization tools",
      "Loading docks and trolleys available",
    ],
    href: "/storage-solutions/self-storage-units/",
  },
  {
    title: "Business Storage Solutions",
    description:
      "Scalable warehousing solutions from 1,000 to 5,000+ sq ft designed for businesses of all sizes. Ideal for inventory storage, distribution centers, and overflow stock management.",
    features: [
      "Dedicated warehouse sections",
      "Professional inventory management",
      "Forklift and pallet services",
      "Custom racking systems",
      "Receiving and dispatch services",
      "Integration with your ERP systems",
    ],
    href: "/storage-solutions/business/",
  },
  {
    title: "Residential Moving Solutions",
    description:
      "Complete moving and storage services for families relocating within Dubai or internationally. Our expert team handles everything from packing to unpacking with care and precision.",
    features: [
      "Professional packing services",
      "Secure transportation fleet",
      "Short and long-term storage",
      "International relocation support",
      "Furniture assembly/disassembly",
      "Specialized handling for valuables",
    ],
    href: "/storage-solutions/residential-moving/",
  },
  {
    title: "E-commerce Fulfillment",
    description:
      "End-to-end fulfillment services for online retailers. From receiving inventory to picking, packing, and shipping orders, we handle your logistics so you can focus on growing your business.",
    features: [
      "Same-day order processing",
      "Real-time inventory tracking",
      "Multi-channel integration",
      "Custom packaging options",
      "Returns management",
      "Last-mile delivery partnerships",
    ],
    href: "/storage-solutions/e-commerce-fulfillment/",
  },
];

export const logisticsServices = [
  {
    title: "Air Freight",
    desc: "Express international shipping with door-to-door delivery. Ideal for time-sensitive cargo, we offer next-day delivery to major destinations worldwide with full tracking and customs support.",
    href: "/logistics-solutions/air-freight/",
  },
  {
    title: "Sea Freight",
    desc: "Cost-effective ocean freight for bulk shipments. FCL and LCL options available with competitive rates to all major ports. Perfect for large-volume, non-urgent cargo.",
    href: "/logistics-solutions/sea-freight/",
  },
  {
    title: "Land Freight",
    desc: "Reliable road transportation across the UAE and GCC region. Same-day delivery within Dubai, next-day to all emirates, and scheduled services throughout the Gulf.",
    href: "/logistics-solutions/land-freight/",
  },
  {
    title: "Courier Services",
    desc: "Express document and small package delivery for businesses. Time-definite delivery options with proof of delivery and real-time tracking for complete peace of mind.",
    href: "/logistics-solutions/courier/",
  },
  {
    title: "Customs Clearance",
    desc: "Expert import and export documentation handling. Our licensed customs brokers ensure smooth clearance with full compliance to UAE regulations and international trade laws.",
    href: "/logistics-solutions/custom-clearance/",
  },
  {
    title: "Crypto Logistics",
    desc: "Specialized logistics for cryptocurrency mining equipment. Expert customs clearance, secure transportation, climate-controlled storage, and professional handling services for ASIC miners and crypto hardware.",
    href: "/logistics-solutions/crypto-mining-equipments/",
  },
];

export const blogCards = [
  {
    id: "crypto-mining-logistics-uae",
    title: "Why UAE is the Premier Hub for Crypto Equipment Logistics",
    excerpt:
      "Discover how the UAE's strategic location, favorable regulations, and world-class infrastructure are making it the preferred destination for cryptocurrency mining equipment imports, storage, and logistics services.",
    category: "Industry Insights",
    image: "/images/crypto-mining-logistics-uae-data-center.webp",
    imageAlt:
      "Large-scale cryptocurrency mining facility with rows of ASIC miners in a professional data center environment",
    readTime: "12 min read",
    href: "/blog/crypto-mining-logistics-uae/",
  },
  {
    id: "air-freight-vs-sea-freight",
    title: "Air Freight vs Sea Freight: Choosing the Right Shipping Method for Your Business",
    excerpt:
      "A comprehensive comparison of air and sea freight options to help you make informed decisions about your international shipping needs based on cost, speed, and cargo type.",
    category: "Logistics Guide",
    image: "/images/air-freight-vs-sea-freight-shipping.webp",
    imageAlt: "Aerial view of busy international shipping port with container vessels and cargo cranes",
    readTime: "11 min read",
    href: "/blog/air-freight-vs-sea-freight/",
  },
  {
    id: "ecommerce-fulfillment-dubai",
    title: "The Future of Logistics in Dubai: Trends Shaping 2025 and Beyond",
    excerpt:
      "Explore the emerging trends and technologies transforming Dubai's logistics industry, from AI-powered supply chains to sustainable shipping solutions and smart warehousing.",
    category: "Industry Trends",
    image: "/images/ecommerce-fulfillment-center-dubai.webp",
    imageAlt: "Modern e-commerce fulfillment center with automated conveyor systems and organized inventory storage",
    readTime: "11 min read",
    href: "/blog/ecommerce-fulfillment-dubai/",
  },
];

export const homeFaqs = [
  {
    q: "What makes VaultX different from other storage and logistics providers in Dubai?",
    a: "VaultX combines state-of-the-art facilities with personalized service. Our Al Qusais location offers strategic access to all major transport hubs, while our climate-controlled storage, 24/7 security, and experienced team ensure your goods are always protected. We also specialize in unique services like crypto mining logistics that most providers don't offer.",
  },
  {
    q: "How do I access my stored items and what are your facility hours?",
    a: "All our storage units feature 24/7 access using your unique PIN code and access card. You can visit anytime, day or night. Our office staff is available daily from 09:00 to 20:00 to assist with any questions or special requirements.",
  },
  {
    q: "What security measures do you have in place to protect my belongings?",
    a: "Security is our top priority. We employ advanced CCTV monitoring covering all areas with 90-day footage retention, professional security personnel on-site 24/7, individual unit alarms, and regular security audits. All visitors are logged and verified.",
  },
  {
    q: "What are your pricing options and are there any long-term discounts?",
    a: "Our pricing is transparent with no hidden fees. Daily rates start 0.4 AED/sq ft for small units. We offer significant discounts for long-term commitments: 10% off for 6-month contracts, 15% off for annual contracts, and custom rates for large-scale business storage. Contact us for a personalized quote.",
  },
  {
    q: "Can I upgrade, downgrade, or cancel my storage unit at any time?",
    a: "Absolutely! We understand that your needs may change. You can upgrade to a larger unit anytime subject to availability, or downgrade with 14 days notice. For cancellations, we require 30 days notice for monthly contracts. There are no penalties for changes; we're here to accommodate your evolving requirements.",
  },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact", href: "/contact/" },
];

export const footerServices = [
  { label: "Storage Solutions", href: "/storage-solutions/" },
  { label: "Logistics Solutions", href: "/logistics-solutions/" },
  { label: "Crypto Miner Logistics", href: "/logistics-solutions/crypto-mining-equipments/" },
  { label: "Business Storage", href: "/storage-solutions/business/" },
  { label: "Customs Clearance", href: "/logistics-solutions/custom-clearance/" },
];

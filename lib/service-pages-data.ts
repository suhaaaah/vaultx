import type { Metadata } from "next";
import { logisticsServices, storageServices } from "@/lib/site-data";

type MetadataSource = {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  canonical: string;
};

export type ServiceStat = {
  value: string;
  label: string;
};

export type ServiceCard = {
  title: string;
  description?: string;
  value?: string;
  size?: string;
  price?: string;
  detail?: string;
  features?: string[];
};

export type ServiceSection = {
  eyebrow: string;
  title: string;
  description?: string;
  layout: "cards" | "steps" | "split" | "testimonials";
  columns?: "two" | "three" | "four" | "five";
  items: ServiceCard[];
  imageGrid?: {
    src: string;
    alt: string;
  }[];
};

export type ServicePageData = {
  id: string;
  metadata: MetadataSource;
  backHref?: string;
  backLabel?: string;
  hero: {
    eyebrow: string;
    title: string[];
    description: string;
    image: string;
    imageAlt: string;
    heightClass?: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta?: string;
    secondaryHref?: string;
  };
  stats?: ServiceStat[];
  intro?: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    bullets: string[];
    image: string;
    imageAlt: string;
    badgeValue: string;
    badgeLabel: string;
  };
  sections: ServiceSection[];
  faqs?: {
    q: string;
    a: string;
  }[];
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta?: string;
    secondaryHref?: string;
    whatsappCta?: string;
    whatsappHref?: string;
  };
};

export function buildServiceMetadata(page: ServicePageData): Metadata {
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

const contactHref = "/contact/";
const callHref = "tel:+971586992781";
const whatsappHref = "https://wa.me/971586992781";

const storageFaqs = [
  {
    q: "What sizes of storage units do you offer?",
    a: "VaultX offers flexible storage options from small lockers and 50 sq ft personal units to large commercial spaces above 5,000 sq ft. Our team helps match your belongings or inventory with the right unit size.",
  },
  {
    q: "Are the storage units climate-controlled?",
    a: "Yes. Climate-controlled environments are available for sensitive goods such as electronics, documents, artwork, furniture, pharmaceuticals, textiles, and business inventory.",
  },
  {
    q: "What items cannot be stored?",
    a: "Hazardous materials, illegal goods, flammable liquids, live animals, perishable food, explosives, and other restricted items cannot be stored. Our team can review your list before move-in.",
  },
  {
    q: "Do you provide moving and packing services?",
    a: "Yes. VaultX can support packing, moving, loading, shelving, and organization services so that items are handled safely from pickup through storage.",
  },
  {
    q: "Can I cancel or change my storage plan?",
    a: "Flexible terms are available, including short-term options. You can upgrade, downgrade, or cancel based on your storage agreement and operational requirements.",
  },
  {
    q: "How do payments work?",
    a: "Payment options and billing cycles are confirmed during booking. Our team provides a clear quote before move-in with no hidden handling surprises.",
  },
];

const logisticsFaqs = [
  {
    q: "What is the difference between FCL and LCL shipping?",
    a: "FCL gives you a full container for one shipment, while LCL combines smaller shipments in a shared container. FCL is best for larger volumes; LCL is often more cost-effective for smaller cargo.",
  },
  {
    q: "How long does customs clearance take?",
    a: "Clearance timing depends on cargo type, documentation, inspection requirements, and destination rules. VaultX prepares documents early to reduce delays and keep shipments moving.",
  },
  {
    q: "Do you provide real-time shipment tracking?",
    a: "Yes. VaultX logistics services include shipment visibility through tracking updates, coordination support, and proof-of-delivery documentation where applicable.",
  },
  {
    q: "What documents are needed for international shipping?",
    a: "Common documents include commercial invoice, packing list, bill of lading or airway bill, certificate of origin, trade license, and any route-specific permits.",
  },
  {
    q: "Can you handle hazardous or regulated cargo?",
    a: "Regulated cargo can be reviewed case by case. Proper classification, packaging, documentation, and carrier approvals are required before acceptance.",
  },
];

const storageStats = [
  { value: "10,000+", label: "Square Feet of Storage" },
  { value: "24/7", label: "Secure Access" },
  { value: "0.4 AED", label: "Daily Sqft Starts" },
  { value: "1 Week", label: "Flexible Terms" },
];

const logisticsStats = [
  { value: "150+", label: "Countries Served" },
  { value: "500+", label: "Partner Agents" },
  { value: "50K+", label: "Shipments Annually" },
  { value: "99.2%", label: "On-Time Delivery" },
];

export const servicePages: Record<string, ServicePageData> = {
  "storage-solutions": {
    id: "storage-solutions",
    metadata: {
      title: "VaultX | Secure & Flexible Warehouse in Dubai Storage",
      description:
        "VaultX: State-of-the-art warehouse in Dubai. Flexible, secure & climate-controlled storage near you. Reliable storage for home & business. Call now!",
      keywords: [
        "Warehouse in Dubai",
        "storage company Dubai",
        "storage near me",
      ],
      image: "/images/hero-storage.webp",
      imageAlt: "VaultX storage solutions in Dubai",
      canonical: "/storage-solutions/",
    },
    hero: {
      eyebrow: "OUR SERVICES",
      title: ["Storage Solutions"],
      description:
        "Comprehensive storage options designed for every need, from personal items to large-scale business inventory.",
      image: "/images/business-storage-warehouse-dubai.webp",
      imageAlt: "Storage Solutions",
      heightClass: "h-[60vh] min-h-[400px]",
      primaryCta: "Get Free Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
    stats: storageStats,
    sections: [
      {
        eyebrow: "STORAGE OPTIONS",
        title: "Choose the Right Storage Solution",
        description:
          "VaultX preserves the old public service map with personal, business, residential moving, and e-commerce fulfillment options.",
        layout: "cards",
        columns: "four",
        items: storageServices.map((service) => ({
          title: service.title,
          description: service.description,
          features: service.features,
        })),
      },
      {
        eyebrow: "WHY CHOOSE US",
        title: "The VaultX Advantage",
        layout: "cards",
        columns: "three",
        items: [
          {
            title: "Climate Controlled",
            description:
              "Protected storage environments for electronics, documents, furniture, artwork, inventory, textiles, and other sensitive goods.",
          },
          {
            title: "24/7 Access",
            description:
              "Secure access, warehouse support, and flexible move-in arrangements designed around real storage workflows.",
          },
          {
            title: "Advanced Security",
            description:
              "CCTV monitoring, controlled entry, logged access, and professional facility oversight keep stored goods protected.",
          },
          {
            title: "Flexible Terms",
            description:
              "Short-term and long-term plans are available, with scalable space as your personal or business needs change.",
          },
          {
            title: "Professional Staff",
            description:
              "Experienced warehouse teams help with receiving, loading, inventory handling, and organized storage setup.",
          },
        ],
      },
      {
        eyebrow: "HOW IT WORKS",
        title: "Getting Started is Easy",
        layout: "steps",
        columns: "four",
        items: [
          {
            title: "Choose Your Unit",
            value: "01",
            description: "Select the right storage size with help from the VaultX team.",
          },
          {
            title: "Book Online or Visit",
            value: "02",
            description: "Confirm your space, timing, access needs, and storage plan.",
          },
          {
            title: "Move In",
            value: "03",
            description: "Bring your items or use VaultX packing and moving support.",
          },
          {
            title: "Access Anytime",
            value: "04",
            description: "Retrieve, rotate, or add items as your needs change.",
          },
        ],
      },
      {
        eyebrow: "CLIENT FEEDBACK",
        title: "Trusted by Dubai Customers",
        layout: "testimonials",
        columns: "four",
        items: [
          {
            title: "Ahmed Al-Rashid",
            detail: "Business Owner",
            description:
              "VaultX gave us the flexible business storage space we needed while our inventory volumes changed month to month.",
          },
          {
            title: "Sarah Thompson",
            detail: "Dubai Resident",
            description:
              "The team made our move much easier. The storage facility felt secure, clean, and easy to access.",
          },
          {
            title: "Mohammed Hassan",
            detail: "E-commerce Founder",
            description:
              "Their warehousing and dispatch support helped us keep orders moving without taking on more overhead.",
          },
          {
            title: "Lisa Chen",
            detail: "Relocation Client",
            description:
              "Professional packing, careful handling, and clear communication throughout our relocation and storage period.",
          },
        ],
      },
    ],
    faqs: storageFaqs,
    cta: {
      eyebrow: "START STORING TODAY",
      title: "Ready to Store with VaultX?",
      description:
        "Get a custom storage quote for personal belongings, business inventory, moving support, or fulfillment operations.",
      primaryCta: "Get Free Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
  },
  "storage-solutions/self-storage-units": {
    id: "storage-solutions/self-storage-units",
    backHref: "/storage-solutions/",
    backLabel: "Back to Storage Solutions",
    metadata: {
      title: "VaultX | Affordable Self Storage Dubai & Secure Vaults",
      description:
        "Secure self-storage in Dubai. Clean, month-to-month units for home or business. No hidden fees & transparent pricing. Book your VaultX unit today!",
      keywords: [
        "self storage Dubai",
        "rental storage units Dubai",
        "storage solutions dubai",
      ],
      image: "/images/warehouse-storage-optimization-dubai.webp",
      imageAlt: "VaultX self storage units in Dubai",
      canonical: "/storage-solutions/self-storage-units/",
    },
    hero: {
      eyebrow: "PERSONAL STORAGE IN DUBAI",
      title: ["Self Storage", "Units"],
      description:
        "Secure, flexible, climate-controlled storage units for personal belongings and small business inventory.",
      image: "/images/self-storage-units-dubai.webp",
      imageAlt: "Self Storage",
      heightClass: "h-[50vh] min-h-[400px]",
      primaryCta: "Reserve Your Unit",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
    stats: [
      { value: "50-500", label: "Sq Ft Units" },
      { value: "24/7", label: "Secure Access" },
      { value: "1 Week", label: "Minimum Term" },
      { value: "0.4 AED", label: "Daily Sqft Starts" },
    ],
    intro: {
      eyebrow: "STORAGE GUIDE",
      title: "What Can You Store?",
      paragraphs: [
        "VaultX self storage is designed for households, professionals, expats, students, and small businesses that need clean and accessible space without long-term warehouse commitments.",
        "Store seasonal items, business stock, furniture, documents, electronics, sports equipment, and personal belongings in a secure environment monitored around the clock.",
      ],
      bullets: [
        "Furniture and appliances",
        "Seasonal items",
        "Sports equipment",
        "Books and documents",
        "Clothing and textiles",
        "Electronics",
        "Collectibles and art",
        "Garden equipment",
      ],
      image: "/images/security-monitoring-system-dubai.webp",
      imageAlt: "Organized storage unit",
      badgeValue: "24/7",
      badgeLabel: "Access Available",
    },
    sections: [
      {
        eyebrow: "FEATURES",
        title: "Flexible Self Storage Features",
        layout: "cards",
        columns: "three",
        items: [
          {
            title: "Flexible Unit Sizes",
            description: "Choose compact lockers, personal units, or larger spaces for household and business needs.",
          },
          {
            title: "24/7 Access",
            description: "Access your belongings with secure entry and support from the VaultX facility team.",
          },
          {
            title: "Climate Control",
            description: "Protect temperature-sensitive items from Dubai heat, dust, and humidity.",
          },
          {
            title: "Month-to-Month Rental",
            description: "Use storage for a short move, seasonal overflow, or a longer transition period.",
          },
          {
            title: "Advanced Security",
            description: "CCTV, controlled access, monitoring, and facility staff help keep your goods safe.",
          },
          {
            title: "Free Move-In Assistance",
            description: "Use trolleys, loading support, shelving guidance, and move-in coordination.",
          },
        ],
      },
      {
        eyebrow: "SIMPLE PROCESS",
        title: "How Self Storage Works",
        layout: "steps",
        columns: "four",
        items: [
          { value: "01", title: "Pick a Size", description: "Tell us what you need to store and choose a suitable unit." },
          { value: "02", title: "Reserve Space", description: "Confirm dates, access requirements, and storage terms." },
          { value: "03", title: "Move In", description: "Bring your goods or ask the VaultX team for moving support." },
          { value: "04", title: "Access Anytime", description: "Retrieve or add items whenever your plan allows." },
        ],
      },
      {
        eyebrow: "UNIT SIZES & PRICING",
        title: "Find Your Perfect Unit",
        layout: "cards",
        columns: "four",
        items: [
          {
            title: "Small Locker",
            value: "Personal",
            size: "50 sq ft",
            price: "From AED 500/Month",
            description: "Ideal for boxes, documents, seasonal goods, and compact personal items.",
          },
          {
            title: "Medium Unit",
            value: "Apartment",
            size: "100-250 sq ft",
            price: "From AED 1000/Month",
            description: "A practical fit for studio or one-bedroom overflow, furniture, and appliances.",
          },
          {
            title: "Large Unit",
            value: "Home",
            size: "300-500 sq ft",
            price: "From AED 3000/Month",
            description: "Storage for larger household moves, renovations, and multiple furniture pieces.",
          },
          {
            title: "Extra Large Units",
            value: "Business",
            size: "500-2500 sq ft",
            price: "From AED 5000/Month",
            description: "Flexible space for small business stock, equipment, and larger inventory.",
          },
        ],
      },
    ],
    faqs: storageFaqs,
    cta: {
      eyebrow: "RESERVE YOUR UNIT",
      title: "Reserve Your Unit Today",
      description:
        "Ask about current move-in offers and get help choosing the right storage space for your belongings.",
      primaryCta: "Get Free Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
  },
  "storage-solutions/business": {
    id: "storage-solutions/business",
    backHref: "/storage-solutions/",
    backLabel: "Back to Storage Solutions",
    metadata: {
      title: "Best Business Storage Solutions Dubai | VaultX Logistics",
      description:
        "Scalable business storage in Dubai. Flexible warehousing, inventory management & B2B fulfillment. Cut overhead costs & grow with VaultX. Get a quote today!",
      keywords: [
        "business storage solutions Dubai",
        "warehouse solutions Dubai",
        "inventory management Dubai",
      ],
      image: "/images/warehouse-storage-optimization-tips-dubai.webp",
      imageAlt: "VaultX commercial warehouse storage",
      canonical: "/storage-solutions/business/",
    },
    hero: {
      eyebrow: "COMMERCIAL WAREHOUSING",
      title: ["Business Storage", "Solutions"],
      description:
        "Scalable warehouse space, inventory support, receiving, dispatch, and professional handling for growing companies.",
      image: "/images/business-storage-warehouse-dubai.webp",
      imageAlt: "Business Storage",
      heightClass: "h-[50vh] min-h-[400px]",
      primaryCta: "Request Consultation",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
    stats: [
      { value: "5,000+", label: "Square Feet" },
      { value: "8m", label: "Ceiling Height" },
      { value: "99.9%", label: "Inventory Accuracy" },
      { value: "4 hrs", label: "Avg Processing" },
    ],
    intro: {
      eyebrow: "WHY CHOOSE US",
      title: "Benefits for Your Business",
      paragraphs: [
        "VaultX business storage helps companies reduce overhead, avoid long leases, and scale warehouse capacity as inventory volumes change.",
        "Our Dubai facilities support stock holding, receiving, dispatch, racking, forklift services, and organized inventory workflows.",
      ],
      bullets: ["Reduce overhead costs", "Improve cash flow", "Focus on core business", "Maintain a professional image"],
      image: "/images/warehouse-racking-dubai.webp",
      imageAlt: "Commercial warehouse racking",
      badgeValue: "24/7",
      badgeLabel: "Operations",
    },
    sections: [
      {
        eyebrow: "FEATURES",
        title: "Commercial Storage Capabilities",
        layout: "cards",
        columns: "three",
        items: [
          {
            title: "Scalable Warehousing",
            description: "Expand or reduce space as your inventory, campaigns, or seasonal demand changes.",
          },
          {
            title: "Inventory Management",
            description: "Organized storage, stock visibility, receiving, dispatch, and warehouse coordination.",
          },
          {
            title: "Document Archiving",
            description: "Secure and organized storage for records, financial documents, and business files.",
          },
          {
            title: "Dedicated Account Manager",
            description: "A single point of contact keeps storage, handling, and dispatch workflows aligned.",
          },
          {
            title: "Loading Dock Access",
            description: "Move pallets, cartons, and equipment with warehouse handling support.",
          },
        ],
      },
      {
        eyebrow: "INDUSTRIES WE SERVE",
        title: "Business Storage for Every Operation",
        layout: "cards",
        columns: "four",
        items: [
          { title: "E-commerce & Retail", description: "Inventory overflow, campaign stock, packaging, and order support." },
          { title: "Manufacturing", description: "Raw materials, finished goods, spare parts, and industrial equipment." },
          { title: "Healthcare & Pharma", description: "Controlled storage support for approved healthcare supplies and materials." },
          { title: "Technology & Electronics", description: "Secure, organized storage for sensitive electronics and hardware." },
          { title: "Construction", description: "Tools, fixtures, site materials, and project inventory." },
          { title: "Food & Beverage", description: "Dry goods, non-perishable stock, packaging, and seasonal inventory." },
          { title: "Automotive", description: "Parts, accessories, tools, and dealership overflow stock." },
          { title: "Event Management", description: "Props, booths, signage, equipment, and reusable event material." },
        ],
      },
      {
        eyebrow: "FACILITY SPECIFICATIONS",
        title: "Built for Business Inventory",
        layout: "cards",
        columns: "three",
        items: [
          { title: "Storage Space", value: "5,000+ Square Feet", description: "Scalable commercial zones for inventory and equipment." },
          { title: "Ceiling Height", value: "8m", description: "Useful vertical space for organized warehouse operations." },
          { title: "Operations", value: "24/7", description: "Facility support for businesses with active logistics schedules." },
          { title: "Accuracy", value: "99.9%", description: "Inventory handling processes designed for clear stock control." },
          { title: "Processing", value: "4 hrs", description: "Average order processing target for eligible fulfillment workflows." },
          { title: "Environment", value: "Climate Controlled", description: "Storage options for sensitive commercial inventory." },
        ],
      },
    ],
    cta: {
      eyebrow: "BUSINESS STORAGE",
      title: "Let's Discuss Your Requirements",
      description:
        "Share your storage volume, handling needs, and dispatch requirements so VaultX can build a practical warehouse plan.",
      primaryCta: "Request Consultation",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
  },
  "storage-solutions/residential-moving": {
    id: "storage-solutions/residential-moving",
    backHref: "/storage-solutions/",
    backLabel: "Back to Storage Solutions",
    metadata: {
      title: "Top-Rated Moving Company Dubai | Secure Relocations | VaultX",
      description:
        "Moving company Dubai: VaultX provides expert movers Dubai for homes & offices. Safe packing & UAE-wide delivery. Stress-free moving services Dubai. Book now!",
      keywords: [
        "Moving company Dubai",
        "movers Dubai",
        "moving services Dubai",
      ],
      image: "/images/hero-storage.webp",
      imageAlt: "VaultX residential moving and storage services",
      canonical: "/storage-solutions/residential-moving/",
    },
    hero: {
      eyebrow: "RESIDENTIAL MOVING",
      title: ["Residential Moving", "Solutions"],
      description:
        "Complete moving and storage services for families relocating within Dubai or internationally.",
      image: "/images/residential-moving-dubai.webp",
      imageAlt: "Residential Moving",
      heightClass: "h-[50vh] min-h-[400px]",
      primaryCta: "Book Free Survey",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
    stats: [
      { value: "Local", label: "Dubai Moves" },
      { value: "Global", label: "Relocation Support" },
      { value: "Secure", label: "Storage Options" },
      { value: "Careful", label: "Packing Team" },
    ],
    sections: [
      {
        eyebrow: "MOVING SERVICES",
        title: "Home Relocation Support",
        layout: "cards",
        columns: "three",
        items: [
          {
            title: "Professional Packing",
            description: "Careful packing for household goods, valuables, electronics, artwork, and fragile items.",
          },
          {
            title: "Local & International Moving",
            description: "Dubai relocations and international coordination with trusted logistics partners.",
          },
          {
            title: "Temporary Storage",
            description: "Store belongings between move-out and move-in dates with flexible storage terms.",
          },
          {
            title: "Furniture Assembly",
            description: "Disassembly, careful handling, and reassembly support for furniture and fixtures.",
          },
          {
            title: "Unpacking Services",
            description: "Reduce move-in stress with unpacking and placement support at your destination.",
          },
        ],
      },
      {
        eyebrow: "OUR PROCESS",
        title: "How It Works",
        layout: "steps",
        columns: "four",
        items: [
          { value: "01", title: "Free Survey", description: "Review items, access, timing, packing needs, and destination details." },
          { value: "02", title: "Packing Day", description: "Professional packing and labeling to protect belongings during transit." },
          { value: "03", title: "Transportation", description: "Secure movement by the VaultX team or trusted relocation partners." },
          { value: "04", title: "Delivery & Setup", description: "Delivery, unpacking, placement, and optional storage support." },
        ],
      },
    ],
    cta: {
      eyebrow: "PLAN YOUR MOVE",
      title: "Plan Your Move Today",
      description:
        "Book a survey for your Dubai move, international relocation, temporary storage, or packing requirements.",
      primaryCta: "Book Free Survey",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
  },
  "storage-solutions/e-commerce-fulfillment": {
    id: "storage-solutions/e-commerce-fulfillment",
    backHref: "/storage-solutions/",
    backLabel: "Back to Storage Solutions",
    metadata: {
      title: "Best E-Commerce Fulfillment Services Dubai | VaultX",
      description:
        "Scale with e commerce fulfillment services dubai by VaultX. Fast same-day dispatch, real-time inventory & seamless returns. Flawless order delivery. Book now!",
      keywords: [
        "e commerce fulfillment services dubai",
        "e-commerce fulfillment Dubai",
        "fulfillment center Dubai",
      ],
      image: "/images/ecommerce-fulfillment-center-dubai.webp",
      imageAlt: "VaultX e-commerce fulfillment center",
      canonical: "/storage-solutions/e-commerce-fulfillment/",
    },
    hero: {
      eyebrow: "ONLINE RETAIL LOGISTICS",
      title: ["E-commerce Fulfillment"],
      description:
        "End-to-end fulfillment services for online retailers, from receiving inventory to packing, shipping, returns, and last-mile delivery.",
      image: "/images/warehouse-racking-dubai.webp",
      imageAlt: "E-commerce Fulfillment",
      heightClass: "h-[50vh] min-h-[400px]",
      primaryCta: "Get Fulfillment Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
    stats: [
      { value: "99.8%", label: "Order Accuracy" },
      { value: "<24h", label: "Processing Time" },
      { value: "50+", label: "Active Clients" },
      { value: "100K+", label: "Orders/Month" },
    ],
    sections: [
      {
        eyebrow: "FULFILLMENT SERVICES",
        title: "Everything Your Online Store Needs",
        layout: "cards",
        columns: "three",
        items: [
          {
            title: "Inventory Receiving",
            description: "Receive inbound stock, inspect cartons, organize SKUs, and prepare inventory for sale.",
          },
          {
            title: "Pick & Pack",
            description: "Accurate picking, careful packing, branded packaging options, and quality checks.",
          },
          {
            title: "Multi-Channel Integration",
            description: "Operational support for storefronts, marketplaces, and order channels as your business grows.",
          },
          {
            title: "Same-Day Shipping",
            description: "Eligible orders can be processed quickly for fast dispatch across Dubai and the UAE.",
          },
          {
            title: "Returns Management",
            description: "Receive, inspect, restock, or quarantine returned goods with transparent handling.",
          },
          {
            title: "Real-Time Analytics",
            description: "Track stock movement, order status, and fulfillment performance for smarter decisions.",
          },
        ],
      },
      {
        eyebrow: "FULFILLMENT FLOW",
        title: "From Stock Arrival to Customer Delivery",
        layout: "steps",
        columns: "five",
        items: [
          { value: "01", title: "Receive", description: "Inbound inventory arrives at the VaultX facility." },
          { value: "02", title: "Store", description: "Items are organized and prepared for order processing." },
          { value: "03", title: "Pick", description: "Orders are picked accurately against the request." },
          { value: "04", title: "Pack", description: "Products are packed securely with approved packaging." },
          { value: "05", title: "Ship", description: "Orders are dispatched through last-mile partners." },
        ],
      },
    ],
    cta: {
      eyebrow: "OUTSOURCE FULFILLMENT",
      title: "Ready to Outsource Fulfillment?",
      description:
        "Let VaultX handle receiving, storage, order processing, shipping, and returns while you focus on growth.",
      primaryCta: "Get Fulfillment Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
  },
  "logistics-solutions": {
    id: "logistics-solutions",
    metadata: {
      title: "Best Shipping Company Dubai | Secure Cargo Solutions | VaultX",
      description:
        "VaultX: Your reliable shipping company Dubai. Expert freight forwarding, customs clearance, and air, sea & land logistics. Total peace of mind. Get a quote!",
      keywords: [
        "shipping company Dubai",
        "freight forwarding Dubai",
        "logistics solutions Dubai",
      ],
      image: "/images/hero-logistics.webp",
      imageAlt: "VaultX logistics solutions in Dubai",
      canonical: "/logistics-solutions/",
    },
    hero: {
      eyebrow: "GLOBAL LOGISTICS",
      title: ["Logistics Solutions"],
      description:
        "Comprehensive freight services including air, sea, land, courier, customs clearance, and specialized crypto equipment logistics.",
      image: "/images/warehouse-cargo-handling-dubai.webp",
      imageAlt: "Logistics Solutions",
      heightClass: "h-[60vh] min-h-[400px]",
      primaryCta: "Get Free Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
    stats: logisticsStats,
    sections: [
      {
        eyebrow: "LOGISTICS OPTIONS",
        title: "Move Cargo with VaultX",
        description:
          "The active React route map presents these logistics services as the public landing page choices.",
        layout: "cards",
        columns: "three",
        items: logisticsServices.map((service) => ({
          title: service.title,
          description: service.desc,
        })),
      },
      {
        eyebrow: "WHY CHOOSE US",
        title: "The VaultX Logistics Advantage",
        layout: "cards",
        columns: "three",
        items: [
          {
            title: "Global Network",
            description: "Partner networks and trade routes connect Dubai with major destinations worldwide.",
          },
          {
            title: "Real-Time Tracking",
            description: "Shipment visibility and coordinated updates from pickup through final delivery.",
          },
          {
            title: "Customs Expertise",
            description: "Licensed customs broker support for import, export, and compliance documentation.",
          },
          {
            title: "Competitive Rates",
            description: "Freight options are matched to the cargo, urgency, and budget for each shipment.",
          },
          {
            title: "Dedicated Support",
            description: "A responsive operations team helps with quotes, bookings, routing, and issue resolution.",
          },
        ],
      },
      {
        eyebrow: "GLOBAL REACH",
        title: "Connecting Dubai to the World",
        layout: "split",
        items: [
          {
            title: "Key Trade Routes",
            features: [
              "UAE to Europe",
              "UAE to Asia Pacific",
              "UAE to Americas",
              "UAE to Africa",
              "GCC regional routes",
            ],
          },
          {
            title: "Industry Specializations",
            features: [
              "E-commerce and retail",
              "Pharmaceuticals",
              "Technology and electronics",
              "Automotive",
              "Crypto mining equipment",
            ],
          },
        ],
        imageGrid: [
          {
            src: "/images/air-freight-aircraft-dubai.webp",
            alt: "Air freight aircraft",
          },
          {
            src: "/images/sea-freight-container-ship-dubai.webp",
            alt: "Container ship at port",
          },
          {
            src: "/images/logistics-fleet-truck-dubai.webp",
            alt: "Road freight truck",
          },
          {
            src: "/images/warehouse-cargo-handling-dubai.webp",
            alt: "Warehouse logistics operation",
          },
        ],
      },
      {
        eyebrow: "CLIENT FEEDBACK",
        title: "Trusted Logistics Support",
        layout: "testimonials",
        columns: "four",
        items: [
          {
            title: "Khalid Al-Mansoori",
            detail: "Importer",
            description: "VaultX made our Dubai customs and delivery process clear, fast, and predictable.",
          },
          {
            title: "Jennifer Williams",
            detail: "Operations Director",
            description: "Their freight team communicates well and keeps our urgent shipments moving.",
          },
          {
            title: "Raj Patel",
            detail: "E-commerce Founder",
            description: "The combination of warehousing, courier support, and freight options is valuable for us.",
          },
          {
            title: "Fatima Al-Hashimi",
            detail: "Procurement Lead",
            description: "Reliable coordination, clear documents, and practical shipping advice.",
          },
        ],
      },
    ],
    faqs: logisticsFaqs,
    cta: {
      eyebrow: "START SHIPPING TODAY",
      title: "Ready to Ship with VaultX?",
      description:
        "Get support for air freight, sea freight, land freight, courier delivery, customs clearance, or specialized equipment logistics.",
      primaryCta: "Get Free Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
  },
  "logistics-solutions/air-freight": {
    id: "logistics-solutions/air-freight",
    backHref: "/logistics-solutions/",
    backLabel: "Back to Logistics Solutions",
    metadata: {
      title: "Best Air Cargo Dubai | Secure Air Freight Solutions | VaultX",
      description:
        "VaultX offers fast air cargo Dubai to worldwide destinations. Expert freight forwarders, real-time tracking & urgent shipment handling. Get your rate today!",
      keywords: [
        "air cargo dubai",
        "air freight Dubai",
        "freight forwarders Dubai",
      ],
      image: "/images/air-freight-vs-sea-freight-shipping.webp",
      imageAlt: "VaultX air freight services",
      canonical: "/logistics-solutions/air-freight/",
    },
    hero: {
      eyebrow: "GLOBAL AIR CARGO SOLUTIONS FROM DUBAI",
      title: ["Air Freight", "Services"],
      description:
        "Fast international shipping for time-sensitive cargo with door-to-door service, customs support, and shipment visibility.",
      image: "/images/air-freight-aircraft-dubai.webp",
      imageAlt: "Air Freight Services - VaultX",
      primaryCta: "Get Air Freight Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
    stats: [
      { value: "200+", label: "Destinations" },
      { value: "1-5 Days", label: "Transit" },
      { value: "99.8%", label: "On-Time Rate" },
      { value: "24/7", label: "Operations" },
      { value: "IATA", label: "Certified" },
    ],
    intro: {
      eyebrow: "WHY CHOOSE VAULTX",
      title: "Dubai's Premier Air Freight Partner",
      paragraphs: [
        "VaultX air freight services are built for urgent cargo, high-value shipments, and supply chains that cannot wait for ocean transit.",
        "Our team coordinates rates, booking, documentation, customs support, tracking, and final delivery so time-sensitive cargo keeps moving.",
      ],
      bullets: [
        "IATA Certified",
        "Real-Time Tracking",
        "Customs Expertise",
        "Temperature Control",
        "DG Handling",
        "24/7 Support",
      ],
      image: "/images/air-cargo-operations-dubai.webp",
      imageAlt: "Air cargo operations",
      badgeValue: "5+",
      badgeLabel: "Years Experience",
    },
    sections: [
      {
        eyebrow: "OUR SERVICES",
        title: "Complete Air Cargo Solutions",
        layout: "cards",
        columns: "three",
        items: [
          { title: "Express Air Freight", description: "Priority air cargo for urgent shipments and critical deadlines." },
          { title: "Standard Air Cargo", description: "Reliable air freight for planned international shipments." },
          { title: "Charter Services", description: "Dedicated air capacity for oversized, urgent, or specialized cargo." },
          { title: "Temperature-Controlled", description: "Cold-chain support for pharmaceuticals, perishables, and sensitive goods." },
          { title: "Dangerous Goods (DG)", description: "DG handling subject to correct classification, approval, and documentation." },
          { title: "AOG & Critical Parts", description: "Rapid support for aircraft-on-ground and urgent spare parts logistics." },
        ],
      },
      {
        eyebrow: "GLOBAL NETWORK",
        title: "Major Air Freight Trade Lanes",
        layout: "cards",
        columns: "four",
        items: [
          { title: "Europe", value: "2-3 Days", description: "London LHR, Frankfurt FRA, Paris CDG, Amsterdam AMS." },
          { title: "Asia Pacific", value: "3-4 Days", description: "Shanghai, Hong Kong, Singapore, Bangkok, Sydney." },
          { title: "Americas", value: "2-3 Days", description: "New York, Chicago, Los Angeles, Toronto, Sao Paulo." },
          { title: "Africa", value: "4-5 Days", description: "Cairo, Nairobi, Johannesburg, Lagos, Casablanca." },
        ],
      },
      {
        eyebrow: "HOW IT WORKS",
        title: "Air Freight Process",
        layout: "steps",
        columns: "five",
        items: [
          { value: "01", title: "Request Quote", description: "Share cargo details, dimensions, deadlines, and destination." },
          { value: "02", title: "Get Rates", description: "Receive options based on speed, route, and cargo requirements." },
          { value: "03", title: "Book Shipment", description: "Confirm booking, documentation, pickup, and customs support." },
          { value: "04", title: "Track Cargo", description: "Monitor status as cargo moves through the air freight chain." },
          { value: "05", title: "Delivery", description: "Coordinate destination clearance and final delivery." },
        ],
      },
      {
        eyebrow: "INDUSTRIES WE SERVE",
        title: "Air Cargo for Critical Industries",
        layout: "cards",
        columns: "three",
        items: [
          { title: "Pharmaceuticals", description: "Temperature-sensitive healthcare shipments and controlled handling." },
          { title: "Electronics", description: "Fast, secure movement of high-value devices and components." },
          { title: "Fashion & Retail", description: "Seasonal merchandise, samples, launches, and urgent replenishment." },
          { title: "Aerospace", description: "AOG parts, spares, and urgent aviation logistics." },
          { title: "Automotive", description: "Parts, components, samples, and urgent production support." },
          { title: "Crypto Mining Equipments", description: "Time-sensitive ASIC miner and hardware imports." },
        ],
      },
    ],
    faqs: [
      {
        q: "How fast can air freight reach Europe?",
        a: "Typical Europe air freight transit can be 2-3 days depending on airline schedules, route, documentation, customs, and final delivery requirements.",
      },
      {
        q: "Can VaultX handle dangerous goods by air?",
        a: "DG cargo can be reviewed case by case and requires correct classification, packaging, documentation, and carrier approval before acceptance.",
      },
      {
        q: "Is there a maximum shipment weight?",
        a: "Air freight capacity depends on aircraft, route, dimensions, and cargo type. Oversized or heavy cargo can be routed through special handling or charter options.",
      },
      {
        q: "Can you support pharmaceutical temperature control?",
        a: "Yes, temperature-controlled options are available for eligible cargo, with routing and packaging planned around the required temperature range.",
      },
      {
        q: "Will I get tracking updates?",
        a: "Yes. VaultX provides shipment visibility and coordination updates from pickup through delivery.",
      },
    ],
    cta: {
      eyebrow: "AIR FREIGHT QUOTE",
      title: "Ready to Ship by Air?",
      description:
        "Move urgent cargo through Dubai with air freight options matched to your deadline, cargo type, and destination.",
      primaryCta: "Get Air Freight Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
  },
  "logistics-solutions/sea-freight": {
    id: "logistics-solutions/sea-freight",
    backHref: "/logistics-solutions/",
    backLabel: "Back to Logistics Solutions",
    metadata: {
      title: "Reliable Sea Freight Dubai | VaultX: Global Cargo Solutions",
      description:
        "VaultX offers reliable sea freight Dubai. Expert FCL, LCL & project cargo shipping with secure, on-time global delivery. Get your competitive quote today!",
      keywords: [
        "sea freight Dubai",
        "sea freight shipping Dubai",
        "container shipping Dubai",
      ],
      image: "/images/air-freight-vs-sea-freight-shipping-comparison.webp",
      imageAlt: "VaultX sea freight and container shipping",
      canonical: "/logistics-solutions/sea-freight/",
    },
    hero: {
      eyebrow: "GLOBAL OCEAN FREIGHT FROM JEBEL ALI",
      title: ["Sea Freight", "Services"],
      description:
        "Cost-effective FCL, LCL, reefer, project cargo, and ocean shipping solutions through Dubai's global port network.",
      image: "/images/sea-freight-container-ship-dubai.webp",
      imageAlt: "Sea Freight Services - VaultX",
      primaryCta: "Get Sea Freight Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
    stats: [
      { value: "500+", label: "Global Ports" },
      { value: "15-45 Days", label: "Transit" },
      { value: "99.2%", label: "On-Time Rate" },
      { value: "24/7", label: "Operations" },
      { value: "NVOCC", label: "Licensed" },
    ],
    intro: {
      eyebrow: "WHY CHOOSE VAULTX",
      title: "Dubai's Trusted Ocean Freight Partner",
      paragraphs: [
        "VaultX sea freight services support cost-effective bulk movement from Dubai to major ports worldwide.",
        "Our team coordinates FCL, LCL, reefer cargo, project cargo, documentation, customs support, and destination delivery planning.",
      ],
      bullets: [
        "NVOCC Licensed",
        "Real-Time Tracking",
        "Customs Expertise",
        "Reefer Capable",
        "Project Cargo",
        "24/7 Support",
      ],
      image: "/images/warehouse-cargo-handling-dubai.webp",
      imageAlt: "Ocean freight logistics",
      badgeValue: "5+",
      badgeLabel: "Years Experience",
    },
    sections: [
      {
        eyebrow: "OUR SERVICES",
        title: "Complete Ocean Freight Solutions",
        layout: "cards",
        columns: "three",
        items: [
          { title: "Full Container Load (FCL)", description: "Dedicated containers for larger shipments with direct movement and container control." },
          { title: "Less than Container (LCL)", description: "Shared container space for smaller cargo volumes and cost-effective ocean freight." },
          { title: "Reefer Containers", description: "Temperature-controlled container options for eligible cold-chain cargo." },
          { title: "Project & Break-Bulk", description: "Planning and routing for cargo that does not fit standard container workflows." },
          { title: "RoRo Services", description: "Roll-on roll-off support for vehicles and wheeled equipment." },
          { title: "Dangerous Goods (DG)", description: "DG sea freight reviewed with correct documentation, packaging, and carrier approval." },
        ],
      },
      {
        eyebrow: "GLOBAL PORTS",
        title: "Ocean Freight Trade Lanes",
        layout: "cards",
        columns: "four",
        items: [
          { title: "Europe", value: "20-30 Days", description: "Rotterdam, Hamburg, Felixstowe, Antwerp, Genoa." },
          { title: "Asia Pacific", value: "15-25 Days", description: "Shanghai, Ningbo, Singapore, Port Klang, Sydney." },
          { title: "Americas", value: "30-45 Days", description: "New York, Savannah, Los Angeles, Vancouver, Santos." },
          { title: "Africa", value: "15-35 Days", description: "Mombasa, Durban, Lagos, Alexandria, Casablanca." },
        ],
      },
      {
        eyebrow: "CONTAINER TYPES",
        title: "Choose the Right Container",
        layout: "cards",
        columns: "three",
        items: [
          {
            title: "20ft Standard",
            value: "Compact FCL",
            description: "Useful for dense cargo, smaller FCL shipments, and heavy goods within container limits.",
          },
          {
            title: "40ft Standard",
            value: "General FCL",
            description: "Common option for bulk cargo, retail stock, equipment, and larger ocean shipments.",
          },
          {
            title: "40ft High Cube",
            value: "Extra Height",
            description: "Additional vertical space for lighter, higher-volume cargo and oversized packaging.",
          },
        ],
      },
      {
        eyebrow: "HOW IT WORKS",
        title: "Sea Freight Process",
        layout: "steps",
        columns: "five",
        items: [
          { value: "01", title: "Request Quote", description: "Share cargo details, volume, destination, and timing." },
          { value: "02", title: "Book Space", description: "Confirm carrier, sailing, container type, and documentation." },
          { value: "03", title: "Cargo Pickup", description: "Arrange collection, container loading, or warehouse receiving." },
          { value: "04", title: "Ocean Transit", description: "Cargo moves by sea with tracking and coordination updates." },
          { value: "05", title: "Delivery", description: "Coordinate destination clearance, unloading, and final delivery." },
        ],
      },
    ],
    faqs: [
      {
        q: "Should I choose FCL or LCL?",
        a: "Choose FCL when you have enough cargo for a dedicated container or need more control. Choose LCL for smaller shipments where shared container space is more economical.",
      },
      {
        q: "How long does sea freight to Europe take?",
        a: "Typical ocean transit from Dubai to Europe can range from 20-30 days depending on port, route, sailing, transshipment, and destination clearance.",
      },
      {
        q: "Can VaultX handle customs clearance?",
        a: "Yes. Customs documentation and clearance support can be coordinated with your sea freight shipment.",
      },
      {
        q: "Do you support temperature-controlled cargo?",
        a: "Reefer container options may be available for eligible temperature-sensitive cargo when booked with the correct requirements.",
      },
      {
        q: "What documents are needed for sea freight?",
        a: "Common documents include commercial invoice, packing list, bill of lading, certificate of origin, trade license, and any cargo-specific permits.",
      },
    ],
    cta: {
      eyebrow: "SEA FREIGHT QUOTE",
      title: "Ready to Ship by Sea?",
      description:
        "Plan FCL, LCL, reefer, RoRo, or project cargo movement through Dubai with VaultX ocean freight support.",
      primaryCta: "Get Sea Freight Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
  },
  "logistics-solutions/land-freight": {
    id: "logistics-solutions/land-freight",
    backHref: "/logistics-solutions/",
    backLabel: "Back to Logistics Solutions",
    metadata: {
      title: "Best Land Freight Dubai | Secure UAE & GCC Logistics | VaultX",
      description:
        "VaultX offers reliable land freight Dubai and GCC road transport. FTL & LTL options, real-time tracking & cross-border expertise. Get your quote today!",
      keywords: [
        "land freight Dubai",
        "land freight transport Dubai",
        "road freight dubai",
      ],
      image: "/images/hero-logistics.webp",
      imageAlt: "VaultX land freight and trucking services",
      canonical: "/logistics-solutions/land-freight/",
    },
    hero: {
      eyebrow: "PREMIUM ROAD TRANSPORTATION IN UAE & GCC",
      title: ["Land Freight", "Services"],
      description:
        "Reliable road transportation from same-day UAE deliveries to cross-border freight across the GCC.",
      image: "/images/scania-truck-header.webp",
      imageAlt: "VaultX land freight truck",
      primaryCta: "Get Freight Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
    stats: [
      { value: "50+", label: "Fleet Vehicles" },
      { value: "6", label: "GCC Countries" },
      { value: "99.5%", label: "On-Time Delivery" },
      { value: "24/7", label: "Operations" },
      { value: "10K+", label: "Deliveries/Year" },
    ],
    intro: {
      eyebrow: "WHY CHOOSE VAULTX",
      title: "Best Land Freight Services in the UAE",
      paragraphs: [
        "VaultX road transportation connects businesses across the UAE and GCC through a modern fleet, experienced drivers, and a Dubai-based operations team.",
        "From parcels to full truckloads, temperature-sensitive cargo, and heavy machinery, our land freight workflows are built around safety, timing, and visibility.",
      ],
      bullets: ["GPS-Tracked Fleet", "Real-Time Updates", "Licensed Drivers", "Customs Expertise", "24/7 Support"],
      image: "/images/vaultx-truck-fleet.webp",
      imageAlt: "VaultX branded truck fleet",
      badgeValue: "5+",
      badgeLabel: "Years Experience",
    },
    sections: [
      {
        eyebrow: "OUR SERVICES",
        title: "Complete Road Transportation Solutions",
        layout: "cards",
        columns: "three",
        items: [
          { title: "Full Truckload (FTL)", description: "Dedicated vehicles for large shipments requiring direct, secure delivery." },
          { title: "Less than Truckload (LTL)", description: "Shared trucking for smaller shipments with scheduled GCC movement." },
          { title: "Same-Day & Express Delivery", description: "Urgent deliveries within Dubai and the Northern Emirates." },
          { title: "Cross-Border Transport", description: "Road freight to Saudi Arabia, Oman, Kuwait, Bahrain, and Qatar." },
          { title: "Temperature-Controlled Freight", description: "Refrigerated transport for eligible cold-chain and sensitive goods." },
          { title: "Heavy Haulage & Project Cargo", description: "Specialized planning for oversized machinery and industrial cargo." },
        ],
      },
      {
        eyebrow: "OUR FLEET",
        title: "Modern Vehicle Fleet",
        layout: "cards",
        columns: "four",
        items: [
          {
            title: "Pickup Trucks",
            value: "1-3 Tons",
            features: ["Covered/Open Options", "Same-Day Service", "City Deliveries", "Express Available"],
          },
          {
            title: "Medium Trucks",
            value: "5-10 Tons",
            features: ["Box Body", "Tail Lift Option", "Furniture Moving", "Retail Distribution"],
          },
          {
            title: "Heavy Trucks",
            value: "15-25 Tons",
            features: ["Flatbed/Curtain Side", "Construction Materials", "Industrial Cargo", "GCC Routes"],
          },
          {
            title: "Trailers",
            value: "30-40 Tons",
            features: ["40ft Containers", "Project Cargo", "Cross-Border", "Heavy Machinery"],
          },
        ],
      },
      {
        eyebrow: "SERVICE COVERAGE",
        title: "GCC-Wide Network",
        layout: "cards",
        columns: "three",
        items: [
          { title: "UAE (All Emirates)", value: "Same-day to Next-day", description: "Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, UAQ." },
          { title: "Saudi Arabia", value: "2-3 Business Days", description: "Riyadh, Jeddah, Dammam, and major cities." },
          { title: "Oman", value: "1-2 Business Days", description: "Muscat, Sohar, Salalah via Hatta border." },
          { title: "Kuwait", value: "3-4 Business Days", description: "Kuwait City and industrial areas." },
          { title: "Bahrain", value: "2-3 Business Days", description: "Manama and surrounding areas via Saudi transit." },
          { title: "Qatar", value: "2-3 Business Days", description: "Doha and industrial zones." },
        ],
      },
      {
        eyebrow: "HOW IT WORKS",
        title: "Simple Booking Process",
        layout: "steps",
        columns: "five",
        items: [
          { value: "01", title: "Request Quote", description: "Share cargo details, pickup, and delivery locations." },
          { value: "02", title: "Get Pricing", description: "Receive a route and rate based on timing and cargo." },
          { value: "03", title: "Schedule Pickup", description: "Choose your preferred pickup date and time." },
          { value: "04", title: "Track Shipment", description: "Follow GPS tracking and operational updates." },
          { value: "05", title: "Delivery & POD", description: "Receive delivery confirmation and proof of delivery." },
        ],
      },
    ],
    cta: {
      eyebrow: "ROAD FREIGHT QUOTE",
      title: "Ready to Move Cargo by Road?",
      description:
        "Get a land freight quote for local UAE movement, GCC cross-border transport, or dedicated truck requirements.",
      primaryCta: "Get Freight Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
  },
  "logistics-solutions/courier": {
    id: "logistics-solutions/courier",
    backHref: "/logistics-solutions/",
    backLabel: "Back to Logistics Solutions",
    metadata: {
      title: "VaultX | Fast Courier Service Dubai | Same-Day Delivery",
      description:
        "VaultX is your reliable courier service Dubai. Same-day & next-day delivery with real-time tracking and secure handling. Book your pickup in minutes!",
      keywords: [
        "courier service dubai",
        "courier services Dubai",
        "courier services near me",
      ],
      image: "/images/hero-logistics.webp",
      imageAlt: "VaultX courier services",
      canonical: "/logistics-solutions/courier/",
    },
    hero: {
      eyebrow: "EXPRESS DELIVERY SERVICES IN UAE & WORLDWIDE",
      title: ["Courier", "Services"],
      description:
        "Fast, reliable, and secure courier solutions for same-day Dubai deliveries and international express shipping across 220+ countries.",
      image: "/images/courier-delivery-header.webp",
      imageAlt: "VaultX courier delivery service",
      primaryCta: "Schedule Pickup",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
    stats: [
      { value: "2 Hours", label: "Express Delivery" },
      { value: "220+", label: "Countries Served" },
      { value: "99.8%", label: "Delivery Success" },
      { value: "24/7", label: "Tracking Available" },
      { value: "50K+", label: "Packages/Month" },
    ],
    intro: {
      eyebrow: "WHY CHOOSE VAULTX",
      title: "Dubai's Most Trusted Courier Partner",
      paragraphs: [
        "VaultX courier services combine speed, reliability, and secure handling for urgent documents, parcels, and business deliveries.",
        "Our delivery network supports real-time tracking, proof of delivery, customer support, and business courier workflows.",
      ],
      bullets: ["Real-Time Tracking", "Proof of Delivery", "Customs Clearance", "Cash on Delivery", "24/7 Support"],
      image: "/images/courier-delivery-header.webp",
      imageAlt: "VaultX courier delivering package",
      badgeValue: "2hr",
      badgeLabel: "Express Delivery",
    },
    sections: [
      {
        eyebrow: "OUR SERVICES",
        title: "Complete Courier Solutions",
        layout: "cards",
        columns: "three",
        items: [
          { title: "Same-Day Delivery", description: "Urgent deliveries within Dubai and UAE emirates for time-critical packages." },
          { title: "Next-Day Delivery", description: "Reliable next-day service across all UAE emirates with proof of delivery." },
          { title: "2-Hour Express", description: "Ultra-fast Dubai delivery for emergency documents and urgent supplies." },
          { title: "International Express", description: "Door-to-door international courier to 220+ countries." },
          { title: "Document Services", description: "Secure handling for legal documents, contracts, passports, and sensitive paperwork." },
          { title: "E-commerce Fulfillment", description: "Last-mile delivery support, COD options, and returns management." },
        ],
      },
      {
        eyebrow: "DELIVERY COVERAGE",
        title: "Delivery Times & Coverage",
        layout: "cards",
        columns: "four",
        items: [
          { title: "Dubai", value: "2-4 Hours", description: "Downtown Dubai, Business Bay, DIFC, JBR & Marina, Al Quoz, Deira." },
          { title: "UAE Emirates", value: "Same/Next Day", description: "Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, UAQ." },
          { title: "GCC Countries", value: "1-3 Days", description: "Saudi Arabia, Kuwait, Bahrain, Qatar, Oman." },
          { title: "International", value: "2-7 Days", description: "China, Hong Kong, Europe, Americas, Asia Pacific, Africa, Australia." },
        ],
      },
      {
        eyebrow: "BUSINESS SOLUTIONS",
        title: "Corporate Courier Packages",
        layout: "cards",
        columns: "three",
        items: [
          {
            title: "Starter",
            value: "Up to 50/month",
            detail: "Best for small businesses",
            features: ["Same-day within Dubai", "Next-day UAE-wide", "Real-time tracking", "Email notifications", "Monthly invoicing"],
          },
          {
            title: "Business",
            value: "Up to 200/month",
            detail: "Best for growing companies",
            features: ["Priority scheduling", "Dedicated account manager", "COD collection", "API integration later", "Custom reporting"],
          },
          {
            title: "Enterprise",
            value: "Unlimited",
            detail: "Best for large organizations",
            features: ["Volume discounts", "SLA guarantees", "White-label options", "Multi-location pickup", "24/7 priority support"],
          },
        ],
      },
      {
        eyebrow: "HOW IT WORKS",
        title: "Simple 4-Step Process",
        layout: "steps",
        columns: "four",
        items: [
          { value: "01", title: "Book Online", description: "Schedule pickup via web, contact form, or phone." },
          { value: "02", title: "We Collect", description: "Courier arrives at your location for pickup." },
          { value: "03", title: "Track Live", description: "Monitor delivery progress with status updates." },
          { value: "04", title: "Delivered", description: "Proof of delivery is confirmed after handoff." },
        ],
      },
    ],
    faqs: [
      {
        q: "What's the cutoff time for same-day delivery?",
        a: "Same-day delivery depends on route and availability. The old source references a 2 PM cutoff for Dubai same-day delivery and 6 PM for 2-hour express bookings.",
      },
      {
        q: "Do you offer Cash on Delivery (COD) services?",
        a: "Yes, COD courier support is listed in the old service content for eligible e-commerce businesses.",
      },
      {
        q: "How can I track my package?",
        a: "Every courier shipment can receive tracking and status updates through the VaultX operations team.",
      },
      {
        q: "What items cannot be shipped?",
        a: "Hazardous, illegal, explosive, flammable, and restricted goods cannot be moved without appropriate approvals and compliant handling.",
      },
      {
        q: "Do you provide packaging materials?",
        a: "Packaging options can be discussed during booking, including envelopes, boxes, protective material, and tamper-evident packaging.",
      },
    ],
    cta: {
      eyebrow: "GET STARTED TODAY",
      title: "Ready to Ship?",
      description:
        "Schedule a pickup or get a courier quote for same-day, next-day, business, or international delivery needs.",
      primaryCta: "Schedule Pickup",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
  },
  "logistics-solutions/custom-clearance": {
    id: "logistics-solutions/custom-clearance",
    backHref: "/logistics-solutions/",
    backLabel: "Back to Logistics Solutions",
    metadata: {
      title: "Trusted Custom Clearance Dubai | VaultX: Hassle-Free Service",
      description:
        "VaultX provides expert custom clearance dubai with speed & precision. HS code classification, documentation & full compliance. Avoid delays—get a quote!",
      keywords: [
        "custom clearance dubai",
        "custom clearance Dubai",
        "customs broker Dubai",
      ],
      image: "/images/hero-logistics.webp",
      imageAlt: "VaultX customs clearance services",
      canonical: "/logistics-solutions/custom-clearance/",
    },
    hero: {
      eyebrow: "LOGISTICS SOLUTIONS",
      title: ["Custom Clearance"],
      description:
        "Expert import and export documentation handling with licensed customs broker support and UAE trade compliance.",
      image: "/images/warehouse-cargo-handling-dubai.webp",
      imageAlt: "Custom Clearance",
      heightClass: "h-[50vh] min-h-[400px]",
      primaryCta: "Get Clearance Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
    sections: [
      {
        eyebrow: "CLEARANCE SERVICES",
        title: "Import and Export Support",
        layout: "cards",
        columns: "three",
        items: [
          { title: "Import Clearance", description: "Import documentation, HS code classification, duty calculation, and compliance support." },
          { title: "Export Clearance", description: "Export documentation, certificates of origin, and required permits." },
          { title: "Free Zone Clearance", description: "Clearance support for Dubai free zones including JAFZA, DAFZA, and Dubai South." },
          { title: "Temporary Import", description: "Temporary import permits for exhibitions, samples, and equipment." },
          { title: "Re-Export Services", description: "Documentation and clearance for re-export, transit, and transshipment handling." },
          { title: "Compliance Advisory", description: "Guidance on UAE customs regulations, restricted goods, and trade compliance." },
        ],
      },
      {
        eyebrow: "REQUIRED DOCUMENTS",
        title: "What You Need",
        layout: "cards",
        columns: "two",
        items: [
          {
            title: "For Import",
            features: [
              "Commercial Invoice",
              "Packing List",
              "Bill of Lading / Airway Bill",
              "Certificate of Origin",
              "Trade License Copy",
              "Import Permit if required",
            ],
          },
          {
            title: "For Export",
            features: [
              "Commercial Invoice",
              "Packing List",
              "Certificate of Origin",
              "Export Declaration",
              "Letter of Credit if applicable",
              "Product Specifications",
            ],
          },
        ],
      },
    ],
    cta: {
      eyebrow: "EXPERT CLEARANCE",
      title: "Clear Your Shipment Today",
      description:
        "VaultX customs brokers are ready to assist with import, export, free zone, and re-export clearance needs.",
      primaryCta: "Get Clearance Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
  },
  "logistics-solutions/crypto-mining-equipments": {
    id: "logistics-solutions/crypto-mining-equipments",
    backHref: "/logistics-solutions/",
    backLabel: "Back to Logistics Solutions",
    metadata: {
      title: "Crypto Mining Storage Solutions Dubai | VaultX: Get a Quote",
      description:
        "VaultX offers premium crypto mining storage solutions dubai. Secure, temperature-controlled vaults for ASIC miners. High-security for UAE operations. Book now!",
      keywords: [
        "crypto mining storage solutions dubai",
        "crypto mining uae",
        "crypto mining Dubai",
      ],
      image: "/images/hero-crypto.webp",
      imageAlt: "VaultX crypto mining equipment logistics",
      canonical: "/logistics-solutions/crypto-mining-equipments/",
    },
    hero: {
      eyebrow: "BEST CRYPTO EQUIPMENT LOGISTICS IN UAE",
      title: ["Crypto", "Logistics"],
      description:
        "Dubai's premier logistics partner for cryptocurrency mining equipment, ASIC miner imports, secure storage, and specialized handling.",
      image: "/images/crypto-logistics-mining-equipment-dubai.webp",
      imageAlt: "Crypto Mining",
      primaryCta: "Get Crypto Logistics",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
    },
    stats: [
      { value: "5000+", label: "Miners Shipped" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "24/7", label: "Support" },
      { value: "Fast", label: "Custom Clearance" },
    ],
    intro: {
      eyebrow: "WHY CHOOSE VAULTX",
      title: "Best Crypto Equipment Logistics in the UAE",
      paragraphs: [
        "VaultX provides specialized logistics for cryptocurrency mining hardware, including ASIC miner imports, customs clearance, climate-controlled storage, and secure transportation.",
        "Our Dubai location provides strong access to global shipping routes for mining equipment imports from China, Europe, and the Americas.",
      ],
      bullets: [
        "Licensed Customs Broker",
        "Climate-Controlled Transport",
        "Anti-Static Handling",
        "Real-Time GPS Tracking",
        "24/7 Technical Support",
      ],
      image: "/images/crypto-mining-bitcoin-equipment-dubai.webp",
      imageAlt: "Bitcoin Mining",
      badgeValue: "5+",
      badgeLabel: "Years Experience",
    },
    sections: [
      {
        eyebrow: "OUR SERVICES",
        title: "Complete Crypto Equipment Logistics",
        description:
          "From manufacturer pickup to secure delivery, VaultX handles the crypto hardware logistics chain with specialized care.",
        layout: "cards",
        columns: "three",
        items: [
          {
            title: "ASIC Miner Import & Customs",
            description:
              "Customs clearance for major mining hardware brands, HS code classification, import documentation, and duty calculations.",
          },
          {
            title: "Secure Transportation",
            description:
              "Climate-controlled and shock-aware transportation designed for sensitive mining equipment.",
          },
          {
            title: "Equipment Storage & Warehousing",
            description:
              "Climate-controlled warehousing with anti-static environments and 24/7 security monitoring.",
          },
          {
            title: "Specialized Handling Services",
            description:
              "Handling protocols, anti-static packaging, and shock-absorbing materials for delicate hardware.",
          },
          {
            title: "International Freight Forwarding",
            description:
              "Air and sea freight coordination from major manufacturing hubs with documentation and delivery visibility.",
          },
        ],
      },
      {
        eyebrow: "EQUIPMENT EXPERTISE",
        title: "Mining Hardware We Handle",
        layout: "cards",
        columns: "four",
        items: [
          { title: "Bitmain", value: "ASIC Miners", features: ["Antminer S21", "Antminer S19 XP", "Antminer L7", "Antminer KA3"] },
          { title: "MicroBT", value: "ASIC Miners", features: ["Whatsminer M50S", "Whatsminer M30S++", "Whatsminer M53", "Whatsminer M56"] },
          { title: "Canaan", value: "ASIC Miners", features: ["Avalon A1366", "Avalon A1246", "Avalon A1166 Pro", "Avalon A1126"] },
          { title: "IceRiver", value: "KAS Miners", features: ["KS3M", "KS3L", "KS0 Pro", "KS1/KS2"] },
        ],
      },
      {
        eyebrow: "LOGISTICS CAPABILITIES",
        title: "Specialized Storage & Handling",
        layout: "cards",
        columns: "three",
        items: [
          { title: "Storage Capacity", value: "10,000+ Square Feet", description: "Dedicated space for crypto equipment." },
          { title: "Climate Control", value: "18-24 degrees C", description: "Temperature and humidity control for sensitive hardware." },
          { title: "Security", value: "24/7 Monitoring", description: "CCTV surveillance and controlled access." },
          { title: "Handling Equipment", value: "Specialized Tools", description: "Anti-static and shock-aware handling support." },
          { title: "Customs Clearance", value: "Fast Processing", description: "Documentation and compliance support." },
        ],
      },
      {
        eyebrow: "HOW IT WORKS",
        title: "Our Logistics Process",
        layout: "steps",
        columns: "five",
        items: [
          { value: "01", title: "Consultation", description: "Discuss requirements, equipment specifications, and delivery timeline." },
          { value: "02", title: "Documentation", description: "Prepare customs documents and import permits." },
          { value: "03", title: "Collection & Shipping", description: "Coordinate secure pickup and tracked shipping." },
          { value: "04", title: "Customs Clearance", description: "Clear equipment with proper HS codes and compliance." },
          { value: "05", title: "Delivery", description: "Deliver securely to your facility or storage location." },
        ],
      },
    ],
    faqs: [
      {
        q: "What is the customs clearance process for ASIC miners in UAE?",
        a: "ASIC miners are typically classified as digital processing units. VaultX supports commercial invoice, packing list, certificate of origin, airway bill or bill of lading, and customs declaration preparation.",
      },
      {
        q: "How do you ensure mining equipment arrives safely?",
        a: "VaultX uses climate-aware transport, secure handling, anti-static packaging guidance, shock-absorbing materials, and tracking workflows for sensitive electronics.",
      },
      {
        q: "Can you handle bulk orders of 100+ miners?",
        a: "Yes. The old service scope includes large-scale crypto equipment logistics, including manufacturer coordination, freight planning, secure storage, and final delivery.",
      },
      {
        q: "What storage options do you offer for crypto mining equipment?",
        a: "VaultX offers climate-controlled warehousing, monitored facilities, controlled access, and flexible short-term or long-term storage options.",
      },
      {
        q: "What documentation is required for importing crypto mining equipment to UAE?",
        a: "Common documents include commercial invoice, packing list, bill of lading or airway bill, certificate of origin, and trade license. Additional permits may depend on shipment specifics.",
      },
      {
        q: "Is cryptocurrency mining legal in Dubai/UAE?",
        a: "The old source says cryptocurrency mining is legal in the UAE and recommends legal advice for specific operating requirements. This migration preserves that informational note without adding legal guidance.",
      },
    ],
    cta: {
      eyebrow: "GET STARTED WITH CRYPTO LOGISTICS",
      title: "Ready to Import Your Equipment?",
      description:
        "Get a customized quote for mining hardware imports, customs support, secure transport, storage, or final delivery.",
      primaryCta: "Get Crypto Logistics Quote",
      primaryHref: contactHref,
      secondaryCta: "Call +971 58 699 2781",
      secondaryHref: callHref,
      whatsappCta: "WhatsApp Us",
      whatsappHref,
    },
  },
};

export const storageRouteIds = [
  "storage-solutions",
  "storage-solutions/self-storage-units",
  "storage-solutions/business",
  "storage-solutions/residential-moving",
  "storage-solutions/e-commerce-fulfillment",
];

export const logisticsRouteIds = [
  "logistics-solutions",
  "logistics-solutions/air-freight",
  "logistics-solutions/sea-freight",
  "logistics-solutions/land-freight",
  "logistics-solutions/courier",
  "logistics-solutions/custom-clearance",
  "logistics-solutions/crypto-mining-equipments",
];

export const serviceRouteIds = [...storageRouteIds, ...logisticsRouteIds];

export function servicePage(id: string) {
  const page = servicePages[id];

  if (!page) {
    throw new Error(`Unknown service page: ${id}`);
  }

  return page;
}

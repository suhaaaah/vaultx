import { NextRequest, NextResponse } from "next/server";

const approvedPublicRoutes = new Set([
  "/about",
  "/gallery",
  "/contact",
  "/privacy",
  "/terms",
  "/thank-you",
  "/storage-solutions",
  "/storage-solutions/self-storage-units",
  "/storage-solutions/business",
  "/storage-solutions/residential-moving",
  "/storage-solutions/e-commerce-fulfillment",
  "/logistics-solutions",
  "/logistics-solutions/air-freight",
  "/logistics-solutions/sea-freight",
  "/logistics-solutions/land-freight",
  "/logistics-solutions/courier",
  "/logistics-solutions/custom-clearance",
  "/logistics-solutions/crypto-mining-equipments",
  "/blog",
  "/blog/crypto-mining-logistics-uae",
  "/blog/air-freight-vs-sea-freight",
  "/blog/ecommerce-fulfillment-dubai",
  "/blog/choose-reliable-logistics-company-dubai",
  "/blog/choose-right-warehousing-services-dubai",
  "/blog/secure-storage-facility-dubai",
  "/blog/import-asic-miners-dubai-customs",
  "/blog/reduce-logistics-costs-delivery-speed",
  "/blog/choose-shipping-company-dubai",
  "/blog/urgent-international-shipments-dubai",
  "/blog/business-storage-space-dubai",
  "/lp/storage-solutions",
  "/lp/logistics-solutions",
]);

const legacyRedirects = new Map([
  ["/storage", "/storage-solutions/"],
  ["/storage/", "/storage-solutions/"],
  ["/logistics", "/logistics-solutions/"],
  ["/logistics/", "/logistics-solutions/"],
  ["/storage-solutions/personal", "/storage-solutions/self-storage-units/"],
  ["/storage-solutions/personal/", "/storage-solutions/self-storage-units/"],
  ["/storage-solutions/ecommerce-fulfillment", "/storage-solutions/e-commerce-fulfillment/"],
  ["/storage-solutions/ecommerce-fulfillment/", "/storage-solutions/e-commerce-fulfillment/"],
  ["/logistics-solutions/land-transport", "/logistics-solutions/land-freight/"],
  ["/logistics-solutions/land-transport/", "/logistics-solutions/land-freight/"],
  ["/logistics-solutions/customs-clearance", "/logistics-solutions/custom-clearance/"],
  ["/logistics-solutions/customs-clearance/", "/logistics-solutions/custom-clearance/"],
  ["/logistics-solutions/crypto-mining", "/logistics-solutions/crypto-mining-equipments/"],
  ["/logistics-solutions/crypto-mining/", "/logistics-solutions/crypto-mining-equipments/"],
  ["/blog/air-freight-guide", "/blog/air-freight-vs-sea-freight/"],
  ["/blog/air-freight-guide/", "/blog/air-freight-vs-sea-freight/"],
  ["/blog/sea-freight-guide", "/blog/air-freight-vs-sea-freight/"],
  ["/blog/sea-freight-guide/", "/blog/air-freight-vs-sea-freight/"],
  ["/sitemap_index.xml", "/sitemap.xml"],
  ["/page-sitemap.xml", "/sitemap.xml"],
  ["/post-sitemap.xml", "/sitemap.xml"],
]);

function permanentRedirect(request: NextRequest, destinationPath: string) {
  const url = new URL(request.url);
  url.pathname = destinationPath;
  url.search = request.nextUrl.search;

  return new NextResponse(null, {
    status: 308,
    headers: {
      Location: url.toString(),
    },
  });
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const legacyDestination = legacyRedirects.get(pathname);

  if (legacyDestination) {
    return permanentRedirect(request, legacyDestination);
  }

  if (approvedPublicRoutes.has(pathname)) {
    return permanentRedirect(request, `${pathname}/`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/|_next/|.*\\..*).*)", "/sitemap_index.xml", "/page-sitemap.xml", "/post-sitemap.xml"],
};

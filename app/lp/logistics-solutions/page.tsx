import { LandingPage } from "@/components/sections/landing-pages/landing-page";
import { SiteShell } from "@/components/site/site-shell";
import { buildLandingMetadata, landingPage } from "@/lib/landing-pages-data";

const pageData = landingPage("logistics-solutions");

export const metadata = buildLandingMetadata(pageData);

export default function LogisticsLandingRoute() {
  return (
    <SiteShell>
      <LandingPage page={pageData} />
    </SiteShell>
  );
}

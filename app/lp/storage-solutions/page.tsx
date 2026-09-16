import { LandingPage } from "@/components/sections/landing-pages/landing-page";
import { SiteShell } from "@/components/site/site-shell";
import { buildLandingMetadata, landingPage } from "@/lib/landing-pages-data";

const pageData = landingPage("storage-solutions");

export const metadata = buildLandingMetadata(pageData);

export default function StorageLandingRoute() {
  return (
    <SiteShell>
      <LandingPage page={pageData} />
    </SiteShell>
  );
}

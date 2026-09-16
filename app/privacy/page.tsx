import { LegalPage } from "@/components/sections/utility-pages/legal-page";
import { SiteShell } from "@/components/site/site-shell";
import { buildUtilityMetadata, legalPages } from "@/lib/utility-pages-data";

const pageData = legalPages.privacy;

export const metadata = buildUtilityMetadata(pageData.metadata);

export default function PrivacyRoute() {
  return (
    <SiteShell>
      <LegalPage page={pageData} />
    </SiteShell>
  );
}

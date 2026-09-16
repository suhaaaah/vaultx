import { LegalPage } from "@/components/sections/utility-pages/legal-page";
import { SiteShell } from "@/components/site/site-shell";
import { buildUtilityMetadata, legalPages } from "@/lib/utility-pages-data";

const pageData = legalPages.terms;

export const metadata = buildUtilityMetadata(pageData.metadata);

export default function TermsRoute() {
  return (
    <SiteShell>
      <LegalPage page={pageData} />
    </SiteShell>
  );
}

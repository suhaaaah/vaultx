import { ServicePage } from "@/components/sections/service-pages/service-page";
import { SiteShell } from "@/components/site/site-shell";
import { buildServiceMetadata, servicePage } from "@/lib/service-pages-data";

const pageData = servicePage("storage-solutions/business");

export const metadata = buildServiceMetadata(pageData);

export default function BusinessStorageRoute() {
  return (
    <SiteShell>
      <ServicePage page={pageData} />
    </SiteShell>
  );
}

import { ServicePage } from "@/components/sections/service-pages/service-page";
import { SiteShell } from "@/components/site/site-shell";
import { buildServiceMetadata, servicePage } from "@/lib/service-pages-data";

const pageData = servicePage("logistics-solutions/crypto-mining-equipments");

export const metadata = buildServiceMetadata(pageData);

export default function CryptoMiningEquipmentsRoute() {
  return (
    <SiteShell>
      <ServicePage page={pageData} />
    </SiteShell>
  );
}

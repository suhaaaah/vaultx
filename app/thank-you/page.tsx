import { ThankYouPage } from "@/components/sections/utility-pages/thank-you-page";
import { ThankYouConversionEvent } from "@/components/seo/thank-you-conversion-event";
import { SiteShell } from "@/components/site/site-shell";
import { buildUtilityMetadata, thankYouMetadataSource } from "@/lib/utility-pages-data";

export const metadata = buildUtilityMetadata(thankYouMetadataSource);

export default function ThankYouRoute() {
  return (
    <SiteShell>
      <ThankYouConversionEvent />
      <ThankYouPage />
    </SiteShell>
  );
}

import { JsonLd } from "@/components/seo/json-ld";
import { HomePage } from "@/components/sections/home/home-page";
import { SiteShell } from "@/components/site/site-shell";
import { buildHomeStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <SiteShell>
      <JsonLd data={buildHomeStructuredData()} />
      <HomePage />
    </SiteShell>
  );
}

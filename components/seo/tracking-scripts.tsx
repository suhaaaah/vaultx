import Script from "next/script";
import { trackingConfig } from "@/lib/tracking";

export function TrackingScripts() {
  const { gtmId, tidioPublicKey, umamiScriptSrc, umamiWebsiteId } = trackingConfig;

  return (
    <>
      {gtmId ? (
        <Script
          id="vaultx-gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      ) : null}

      {tidioPublicKey ? (
        <Script
          id="vaultx-tidio"
          src={`https://code.tidio.co/${tidioPublicKey}.js`}
          strategy="lazyOnload"
        />
      ) : null}

      {umamiScriptSrc && umamiWebsiteId ? (
        <Script
          id="vaultx-umami"
          src={umamiScriptSrc}
          strategy="lazyOnload"
          data-website-id={umamiWebsiteId}
        />
      ) : null}
    </>
  );
}

export function GoogleTagManagerNoScript() {
  const { gtmId } = trackingConfig;

  if (!gtmId) {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}

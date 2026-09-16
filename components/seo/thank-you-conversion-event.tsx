import Script from "next/script";

export function ThankYouConversionEvent() {
  return (
    <Script
      id="vaultx-thank-you-conversion-event"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "form_submission_success",
            page_path: "/thank-you/"
          });
        `,
      }}
    />
  );
}

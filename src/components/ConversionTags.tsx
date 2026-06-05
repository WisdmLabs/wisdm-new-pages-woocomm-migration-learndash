"use client";

import { useEffect } from "react";
import Script from "next/script";

// Fires GA4 + Google Ads conversion on /thank-you load (deck §4.3–4.4).
// No-ops cleanly until the env IDs are supplied before launch.
const GA4_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GADS_CONVERSION_ID;
const ADS_LABEL = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function ConversionTags() {
  const gtagId = GA4_ID || ADS_ID;

  useEffect(() => {
    if (!window.gtag) return;
    if (GA4_ID) window.gtag("event", "generate_lead", { value: 1 });
    if (ADS_ID && ADS_LABEL) {
      window.gtag("event", "conversion", { send_to: `${ADS_ID}/${ADS_LABEL}` });
    }
  }, []);

  if (!gtagId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${GA4_ID ? `gtag('config', '${GA4_ID}');` : ""}
          ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
        `}
      </Script>
    </>
  );
}

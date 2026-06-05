"use client";

import { useEffect } from "react";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GADS_CONVERSION_ID;
const ADS_LABEL = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;

export function ConversionTags() {
  useEffect(() => {
    if (!window.gtag) return;
    if (GA4_ID) window.gtag("event", "generate_lead", { value: 1 });
    if (ADS_ID && ADS_LABEL) {
      window.gtag("event", "conversion", { send_to: `${ADS_ID}/${ADS_LABEL}` });
    }
  }, []);

  return null;
}

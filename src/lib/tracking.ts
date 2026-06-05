// Lightweight attribution capture for the paid funnel.
// On landing, persist gclid + UTM params so they survive to form submit and the
// thank-you conversion. No third-party dependency.

const STORAGE_KEY = "wdm_attribution";

export type Attribution = {
  gclid: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  page_path: string;
};

const EMPTY: Attribution = {
  gclid: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
  page_path: "",
};

/** Read attribution from the current URL and merge over anything already stored. */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return EMPTY;
  const stored = readAttribution();
  const params = new URLSearchParams(window.location.search);
  const fromUrl: Partial<Attribution> = {};
  (Object.keys(EMPTY) as (keyof Attribution)[]).forEach((k) => {
    const v = params.get(k);
    if (v) fromUrl[k] = v;
  });
  const merged: Attribution = {
    ...stored,
    ...fromUrl,
    // page_path is always the first landing path; keep the earliest one.
    page_path: stored.page_path || window.location.pathname,
  };
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {
    /* sessionStorage unavailable — proceed without persistence */
  }
  return merged;
}

export function readAttribution(): Attribution {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? { ...EMPTY, ...JSON.parse(raw) } : EMPTY;
  } catch {
    return EMPTY;
  }
}

# store-audit-lp

WooCommerce lead-gen landing pages for **store-audit.wisdmlabs.com** — Next.js (App Router) on Vercel, visually matched to wisdmlabs.com.

Built from the approved copy deck (`campaigns/2026-q3/lead-gen-pilot/landing-pages/woocommerce/copy-deck.md`) and build brief `2026-06-03-woocommerce-leadgen-landing-pages-build`.

## Status

**Phase 1 (this slice):** shared chrome + modules + the `/` core page + `/thank-you` stub, for design sign-off.
**Phase 2 (after sign-off):** `/outgrown-shopify`, `/subscription-billing`, `/b2b-wholesale`, finished `/thank-you` scheduler.

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS 3.4 — brand tokens in `tailwind.config.ts` (reverse-engineered from wisdmlabs.com: navy `#131821`, ink `#121519`, amber accent `#FFB300`)
- Inter self-hosted via `next/font/google` (no runtime Google request)

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build / typecheck
```

## Design decisions (locked)

1. **Branded chrome, no nav exits** — same logo/colors/font as wisdmlabs.com, but the site nav menu is removed so paid traffic has no exit. Only on-page actions + the footer brand-halo link back to wisdmlabs.com.
2. **Pixel-faithful** — tokens and logo extracted from the live site.
3. **Env-placeholder integrations** — see below; build runs with blanks.
4. **Core page first** — variant pages replicate the shared modules after sign-off.

## Integrations (`.env.local`)

Copy `.env.example` → `.env.local` and fill before launch. With blanks, the form
simulates submit and redirects to `/thank-you`; conversion tags no-op.

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` / `NEXT_PUBLIC_HUBSPOT_FORM_GUID` | Form submit → HubSpot Contact + Deal |
| `NEXT_PUBLIC_HUBSPOT_MEETINGS_URL` | Meetings scheduler embed on `/thank-you` |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | GA4 `generate_lead` on `/thank-you` |
| `NEXT_PUBLIC_GADS_CONVERSION_ID` / `NEXT_PUBLIC_GADS_CONVERSION_LABEL` | Google Ads conversion on `/thank-you` |

Attribution (`gclid`, UTMs, landing path) is captured on landing into `sessionStorage`
(`src/lib/tracking.ts`) and attached to the HubSpot submission.

## Deploy

Vercel project → set the env vars above → point `store-audit.wisdmlabs.com` (DNS owner TBC) at the deployment.

## Pre-launch checklist

- [ ] Real HubSpot / GA4 / Google Ads IDs in Vercel env
- [ ] Subdomain + DNS confirmed and pointed at Vercel
- [ ] Resolve deck `[VERIFY]` copy items (B2B case study; 13-vs-12 years; current 125+ migrations figure)
- [ ] Privacy / Terms / Contact pages added on the subdomain (footer links currently stubbed)

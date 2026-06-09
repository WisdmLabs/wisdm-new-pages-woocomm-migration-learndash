# WisdmLabs Services Landing Pages

Lead-generation landing pages for WisdmLabs WooCommerce services, deployed at `services.wisdmlabs.com`.

## Stack

- **Framework:** Next.js 16 (App Router) with React 19, TypeScript
- **Styling:** Tailwind CSS 3
- **Email:** Resend (sales team notifications via `/api/notify`)
- **CRM:** HubSpot form submissions (portal ID + form GUID via env vars)
- **Tracking:** Google Ads (gclid), UTM attribution, Google Tag Manager
- **Deploy:** Vercel

## Project Structure

```
src/
  app/                          # Next.js App Router pages
    api/notify/route.ts         # Resend email notification endpoint
    woocommerce-store-development/   # Core services page
    woocommerce-migration-services/  # Migration hub + sub-pages
    shopify-to-woocommerce-migration/
    thank-you/
  components/                   # Shared UI components
    AssessmentForm.tsx           # HubSpot-integrated lead capture form
    CtaButton.tsx                # CTA that scrolls to #book anchor
    LandingPage.tsx              # Page shell used by all landing pages
    MigrationPage.tsx            # Page shell for migration variants
    CoreContent.tsx              # Shared section components
    HashScrollFix.tsx            # Client-side scroll-to-hash fix
  content/
    pages.tsx                    # Per-page content data (PageContent type)
    migration.tsx                # Migration page content data
  lib/
    tracking.ts                  # Attribution capture (gclid, UTMs)
```

## Key Patterns

- **Content-driven pages.** Page content is defined as typed data objects in `src/content/`. Components render that data. Don't hardcode copy in components.
- **Shared components.** All pages use `LandingPage` or `MigrationPage` shells. Reusable sections live in `CoreContent.tsx`. Don't fork them per page.
- **Single CTA target.** Every CTA scrolls to `#book` (the `BookSection` with the form). Use `CtaButton` component. Don't add competing CTAs.
- **noindex pages.** These are paid landing pages, not meant for organic SEO. `robots: { index: false }` is set in the root layout.
- **Attribution flow.** `tracking.ts` captures gclid/UTMs on page load into sessionStorage. `AssessmentForm` reads them and sends to HubSpot + triggers `/api/notify`.

## Environment Variables

```
NEXT_PUBLIC_HUBSPOT_PORTAL_ID   # HubSpot portal ID
NEXT_PUBLIC_HUBSPOT_FORM_GUID   # HubSpot form GUID
NEXT_PUBLIC_GTM_ID              # Google Tag Manager container ID
RESEND_API_KEY                  # Resend API key for email notifications
RESEND_FROM_EMAIL               # Sender address (default: noreply@services.wisdmlabs.com)
```

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Rules

- Read `DESIGN-PLAYBOOK.md` before editing any page layout or copy.
- All CTA labels must use the constant from `CoreContent.tsx`, never hardcoded strings.
- Hero sections stay lean: short H1, one-sentence subhead, exactly 3 bullets.
- Headings are center-aligned, body text left-aligned in grids. Never cap heading width with `max-w-*`.
- Budget field values in `AssessmentForm.tsx` must exactly match HubSpot internal property values.

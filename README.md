# WisdmLabs Services Landing Pages

Lead-gen landing pages for **services.wisdmlabs.com** — Next.js (App Router) on Vercel, visually matched to wisdmlabs.com.

## Live Pages

| Page | URL |
|------|-----|
| WooCommerce Development | [services.wisdmlabs.com](https://services.wisdmlabs.com) |
| Migration Hub | [/migration](https://services.wisdmlabs.com/migration) |
| Shopify → WooCommerce | [/migration/shopify-to-woocommerce](https://services.wisdmlabs.com/migration/shopify-to-woocommerce) |
| Magento → WooCommerce | [/migration/magento-to-woocommerce](https://services.wisdmlabs.com/migration/magento-to-woocommerce) |
| BigCommerce → WooCommerce | [/migration/bigcommerce-to-woocommerce](https://services.wisdmlabs.com/migration/bigcommerce-to-woocommerce) |
| PrestaShop → WooCommerce | [/migration/prestashop-to-woocommerce](https://services.wisdmlabs.com/migration/prestashop-to-woocommerce) |
| Thank You | [/thank-you](https://services.wisdmlabs.com/thank-you) |

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS — brand tokens in `tailwind.config.ts` (navy `#131821`, ink `#121519`, amber `#FFB300`)
- Inter via `next/font/google`
- Deployed on Vercel

## Local Development

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev                   # http://localhost:3000
npm run build                 # production build / typecheck
```

## Form Submission Flow

Every page has an assessment form (`src/components/AssessmentForm.tsx`) that:

1. **Submits to HubSpot** via the Forms API (`api.hsforms.com`) — creates a Contact with name, email, website, budget range, project details, and attribution data (gclid, UTMs, landing page path)
2. **Sends email notification** to the sales team via `/api/notify` (Resend) — includes lead name, email, message, country (auto-detected from IP), and source page
3. **Redirects to /thank-you** with a HubSpot meetings scheduler embed

### Budget Field Values

The budget dropdown shows formatted labels but sends HubSpot-compatible internal values:

| Display Label | Value Sent to HubSpot |
|---|---|
| <$3,000 | `<$3000` |
| $3,000–$5,000 | `$3000-$5000` |
| $5,000–$10,000 | `$5000-$10000` |
| Above $10,000 | `Above $10000` |

### Email Notification Recipients

On each form submission, `/api/notify` sends an email to:
- sales@wisdmlabs.com
- sales-lead@wisdmlabs.com
- csm@wisdmlabs.com
- sme@wisdmlabs.com
- helpdesk@wisdmlabs.com
- tariq.kotwal@wisdmlabs.com
- arunesh.parab@wisdmlabs.com
- shailesh.vishwakarma@wisdmlabs.com
- growth@wisdmlabs.com

Country is auto-detected from the visitor's IP via Vercel's `x-vercel-ip-country` header.

## Attribution Tracking

`src/lib/tracking.ts` captures attribution data on landing:
- `gclid` — Google Ads click ID
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
- `page_path` — first landing page in the session

Data is stored in `sessionStorage` and attached to the HubSpot form submission.

## Conversion Tracking

Fires on `/thank-you` page load:
- **GA4** — `generate_lead` event
- **Google Ads** — conversion pixel

## Environment Variables

Copy `.env.example` → `.env.local` for local dev. Set in Vercel for production.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` | HubSpot portal ID |
| `NEXT_PUBLIC_HUBSPOT_FORM_GUID` | HubSpot form GUID |
| `NEXT_PUBLIC_HUBSPOT_MEETINGS_URL` | Meetings scheduler on /thank-you |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | GA4 measurement ID |
| `NEXT_PUBLIC_GADS_CONVERSION_ID` | Google Ads conversion ID |
| `NEXT_PUBLIC_GADS_CONVERSION_LABEL` | Google Ads conversion label |
| `RESEND_API_KEY` | Resend API key for email notifications |
| `RESEND_FROM_EMAIL` | Sender address (requires verified domain in Resend) |

## Deploy

Pushes to `main` auto-deploy to Vercel. For manual deploy:

```bash
npx vercel --prod
```

## Design Decisions

1. **No nav exits** — paid traffic has no navigation menu; only on-page CTAs and footer link back to wisdmlabs.com
2. **Env-placeholder integrations** — build works with blank env vars (form simulates submit, conversion tags no-op)
3. **Fire-and-forget notifications** — email notification doesn't block the user's redirect to /thank-you

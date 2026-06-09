# SEO and Tracking

These are paid landing pages for Google Ads campaigns, not organic SEO pages.

- All pages have `robots: { index: false, follow: true }`. This is intentional. Don't add indexing.
- Google Tag Manager is loaded via `GoogleTags` component in the root layout. GTM container ID comes from `NEXT_PUBLIC_GTM_ID`.
- Conversion tracking fires on the `/thank-you` page after successful form submission. The `ConversionTags` component handles this.
- Attribution capture (`gclid`, UTMs) happens in `src/lib/tracking.ts` using sessionStorage. It must run client-side on page load before form submit.

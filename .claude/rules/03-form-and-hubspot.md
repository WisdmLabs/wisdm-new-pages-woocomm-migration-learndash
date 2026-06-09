# Form and HubSpot Integration

`AssessmentForm.tsx` is the single lead capture form used across all pages. It submits to HubSpot and triggers an email notification via `/api/notify`.

- Budget dropdown values must exactly match HubSpot's internal property values (e.g. `"$3000-$5000"`, not `"$3,000-$5,000"`). A mismatch silently drops the field on the contact record.
- Attribution (gclid, UTMs) is captured on page load by `tracking.ts` and attached to the HubSpot submission. Don't bypass this flow.
- The `/api/notify` route uses Resend to email the sales team. Recipients are hardcoded in the route file. Update both the route and any relevant HubSpot workflows when changing notification targets.
- Environment variables `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` and `NEXT_PUBLIC_HUBSPOT_FORM_GUID` must be set. The form silently fails without them.

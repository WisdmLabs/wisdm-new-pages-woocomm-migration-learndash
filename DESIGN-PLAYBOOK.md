# Landing-Page Design & Copy Playbook

**Read this before building or editing any page in this repo.** Every rule below comes
from a real correction made while finalizing the core page (`/`). The point is to not
re-make these mistakes on the variant pages (`/outgrown-shopify`, `/subscription-billing`,
`/b2b-wholesale`) or `/thank-you`.

The canonical reference implementation is the **core page** — match its structure,
spacing, and component usage. Shared content lives in `src/components/CoreContent.tsx`;
reuse those components, don't fork them.

---

## 1. Hero / first fold

- **Keep the first fold lean.** It was rejected twice for being "text-heavy and cluttered."
  - H1 = **one short, impactful line** (e.g., "Your Store Has **Outgrown Its Template**."),
    with one key phrase carrying the amber underline accent.
  - Subhead = **one sentence**, max ~`max-w-md`.
  - Bullets = **exactly 3, short and scannable** (3–5 words each, e.g. "125+ migrations,
    zero data loss"). No long clauses.
- **Subheads must be full, verb-led sentences.** "Senior WooCommerce engineering for…" was
  rejected as nonsense. Start with a subject + verb: **"We build custom WooCommerce
  platforms for fast-growing brands whose…"**
- **No revenue numbers in headline copy.** Don't put "$500K–$10M" in the H1/subhead — use
  qualitative framing like **"fast-growing brands."** (The Budget field still qualifies.)
- **Hero right side = trust visual, not the form** (chosen layout, Option B). Use
  `HeroTrustVisual` (credential badges + star ratings + stat bar). The form lives lower.
- **One hero action.** Don't stack competing CTAs in the fold.

## 2. CTAs

- **One short label everywhere: `Book Free Assessment`.** The long "Book a Commerce
  Platform Assessment — Free 60 Minutes" was an eye-sore. Use the `CTA_LABEL` constant in
  `CoreContent.tsx` — never hardcode a different label.
- All CTAs anchor to `#book` (the booking form). The header CTA, hero CTA, "what you get"
  CTA, and closing-band CTA all point there.

## 3. Headings

- **`text-wrap: balance` is set globally** (`globals.css`) so headings never strand a lone
  word. Keep it.
- **Never cap heading width** with `max-w-*`. A `max-w-2xl` on the container forced ugly
  wraps. Headings use full content width; only **body paragraphs** get a width cap
  (`max-w-2xl` + `mx-auto`).
- **Section headings are center-aligned** (eyebrow + H2 + intro paragraph). Use the shared
  `SectionHead` — it already does this. Body/cards below stay left-aligned in their grids.

## 4. Trust, proof & credibility

- **Use real assets, self-hosted in `/public`** — never placeholders. Already downloaded:
  - `public/badges/` — Woo Partner, Top Rated Agency, WordPress, Clutch, DesignRush, Google.
  - `public/authors/` — testimonial headshots (Heske, Tom, Karl, Suntke, Marcel).
  - `public/logos/` — recommendation logos (yith, Barn2, Clutch, DesignRush, learnwoo, Cloudways).
- **Stats must be visually prominent**, not a thin strip (big bold numbers — see
  `HeroTrustVisual`'s stat bar).
- **The "Trusted by…" recommendation logos must be FULL COLOR.** Grayscale was rejected.
  (`TrustedBy.tsx` — no `grayscale`/low-opacity.)
- Credential elements to surface: Official Woo Partner, Top Rated Agency 2025, WordPress
  Core Contributors, Clutch 4.7, DesignRush 5.0, Google 4.5.

## 5. Testimonials / success stories

- **Use real testimonials with author photos** from
  `wisdmlabs.com/woocommerce-website-development`. The `Testimonials` component supports an
  `image` field (falls back to initials).
- **Highlight the result callout so it grabs attention** — solid amber chip + trend icon +
  bold navy text (already in `Testimonials.tsx`). Don't let the key metric blend in.

## 6. Case studies & proof sections (current)

- **"What we build" and the old Complexity Grid are now ONE section** — six high-impact
  system blocks (`whatWeBuild.items`), **no inline case-study examples inside the blocks**
  (they "looked bad"). Keep blocks to capability + description only.
- **Proof lives in its own section: "WooCommerce Projects That Delivered Real Results"**
  (`projects` field) — replicated from `wisdmlabs.com/woocommerce-development/`, rethemed
  to navy/amber + Inter. Static (all projects visible, alternating text/image rows), real
  client images in `public/projects/`, amber metric numbers, and "View Full Case Study"
  links that open the wisdmlabs.com case study **in a new tab** (the one allowed off-site
  exit, kept brand-halo). This replaced the earlier compact Results strip.
- Highlight result metrics in **amber** wherever they appear.

## 7. Form

- **Compact, but keep every field.** Pair fields into rows (Name | Email, Website | Budget),
  tight vertical spacing. A long, scrolly form was rejected. See `AssessmentForm.tsx`.
- **Form placement (Option B): at the end of the page, ABOVE the FAQ.**
  Order: … → Why WisdmLabs → **BookSection (form)** → FAQ → Closing CTA band.
- Keep the hidden `gclid`/UTM capture and the HubSpot/redirect logic intact on every page.

## 8. Icons & visual rhythm

- **Use icons throughout** for visual breaks (problem cards, build cards, value props, trust
  markers). Use the inline-SVG `Icon` component — no icon-library dependency.
- **Every card in a grid gets an icon.** A grid card was shipped icon-less ("We own the
  outcome…") and flagged. Don't leave one card bare.

## 9. Brand & aesthetics

- **Navy/amber brand — match wisdmlabs.com.** Borrow *layout and cleanliness* from
  references (e.g., `free-store-audit.wisdmlabs.com`) but **not** their red HPC sub-brand
  palette. Tokens: navy `#131821`, ink `#121519`, amber accent `#FFB300`.
- **Maintain white/tint section rhythm.** Alternate `bg-white` / `bg-surface` and use a
  `border-t`/tint to separate adjacent same-color bands so nothing blends.
- **Branded chrome, no nav exits.** Header = logo + single CTA only. Footer = trust/legal +
  the one brand-halo link to wisdmlabs.com. No site nav menu (paid-traffic leak).

## 10. Process

- **Work in slices, screenshot, iterate.** Build → `npm run build` (must be clean) →
  `npm run start` → screenshot each fold/section → compare against the live site.
- **Keep shared content in `CoreContent.tsx`** so pages can't drift apart. Variant-specific
  copy should be data passed into shared components, not duplicated markup.
- **Verify before claiming done:** form → `/thank-you` redirect works; gclid/UTM captured;
  headings balanced; build clean.

---

### Per-page pre-ship checklist

- [ ] Lean first fold (1-line H1, 1-sentence subhead, 3 short bullets)
- [ ] Subhead is a verb-led sentence; no revenue band in headline copy
- [ ] All CTAs = `Book Free Assessment`, anchored to `#book`
- [ ] Headings centered, full-width, balanced (no stranded words, no `max-w` cap)
- [ ] Real badges/photos/logos; "Trusted by" logos in color; stats prominent
- [ ] Testimonials have photos; result chips highlighted (amber)
- [ ] Form compact (paired fields), placed above the FAQ
- [ ] Every grid card has an icon
- [ ] Navy/amber brand; white/tint rhythm; no nav exits
- [ ] `noindex, follow` metadata; canonical → core for variant pages
- [ ] Build clean; form→thank-you + attribution verified

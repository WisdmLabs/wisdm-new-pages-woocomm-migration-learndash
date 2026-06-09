import type { Metadata } from "next";
import type { IconName } from "@/components/Icon";
import type { FaqItem } from "@/components/Faq";
import type { Testimonial } from "@/components/Testimonials";
import type { PageContent } from "./pages";

// Migration core page (`/migration`) content. Copy is from the approved migration
// copy-deck.md (Section A), trimmed to the lean-hero rules in DESIGN-PLAYBOOK.md.
// Hosted at services.wisdmlabs.com/migration; built here as a route in the same
// repo so the design system stays single-sourced (playbook §10).

// Intended canonical host for this page set (deck B3). The route in this repo is
// `/migration`; the deploy maps that to the subdomain root.
const MIGRATION_CORE_URL = "https://services.wisdmlabs.com/woocommerce-migration-services";

export const migrationMeta: Metadata = {
  title: "Get Expert WooCommerce Migration Services Today",
  description:
    "Move your store with WooCommerce migration experts. Get secure data transfer, SEO retention, and a smooth migration process.",
  // Paid LP: noindex but crawlable for the Ads quality bot (deck B3).
  robots: { index: false, follow: true },
  alternates: { canonical: MIGRATION_CORE_URL },
};

export const CTA_LABEL = "Get Migration Risk Assessment";
export const CTA_NOTE = "A senior migration engineer, not a sales rep. No commitment.";

export const HERO = {
  eyebrow: "Official WooCommerce Migration Partners · WooExpert",
  titleLead: "Migrate to WooCommerce Without Losing ",
  titleAccent: "Data, SEO, or Revenue",
  titleTrail: ".",
  subhead:
    "We migrate stores to WooCommerce from Shopify, Magento, BigCommerce, and PrestaShop, with 300+ done and zero data loss.",
  bullets: [
    "300+ migrations, zero data loss",
    "SEO, subscriptions & data kept intact",
    "Official WooCommerce Migration Partners",
  ],
};

// Stat trio shown in the hero trust collage (migration figures, deck B4).
export const HERO_STATS = [
  { value: "300+", label: "migrations" },
  { value: "12+", label: "years" },
  { value: "100%", label: "data intact" },
];

// Proof bar directly under the hero (deck A2 / B2).
export const PROOF_BAR: { icon: IconName; label: string }[] = [
  { icon: "repeat", label: "300+ WooCommerce migrations" },
  { icon: "award", label: "12+ years in commerce & learning" },
  { icon: "shield", label: "Zero data loss guaranteed" },
  { icon: "star", label: "Official WooCommerce Migration Partners" },
  { icon: "trend", label: "4.7★ on Clutch" },
];

// Problem / stakes (deck A3).
export const STAKES = {
  title: "A Migration That Goes Wrong Doesn’t Just Cost a Weekend. It Costs Customers.",
  intro:
    "Migrations rarely fail loudly. They fail in the details: a subscription that quietly stops renewing, a 301 that never got mapped, an order history that came across broken. By the time you notice, the traffic and revenue are gone. So we don’t start with a quote. We start by showing you exactly where yours is most likely to break.",
  items: [
    { icon: "route", title: "SEO rankings & traffic", desc: "Broken URLs and lost redirects can wipe out organic revenue overnight." },
    { icon: "users", title: "Customer accounts & order history", desc: "Incomplete data transfer breaks support, returns, and lifetime-value tracking." },
    { icon: "repeat", title: "Active subscriptions & billing", desc: "Renewal dates, proration, and stored tokens must map perfectly, or customers get double-charged, or not charged at all." },
    { icon: "cart", title: "Checkout & payment gateways", desc: "A gateway that doesn’t reconnect cleanly is lost sales from minute one." },
    { icon: "gauge", title: "Store performance", desc: "A migration done without optimization can land you slower than you started." },
  ] as { icon: IconName; title: string; desc: string }[],
  rescueTitle: "Already mid-migration and stuck?",
  rescueBody:
    "We’re regularly called in to take over migrations that stalled in-house or with another agency, and finish them without losing the work already done.",
};

// How the migration works (deck A4).
export const MIGRATE = {
  title: "What We Migrate, and How We Keep It Intact",
  intro:
    "Migrating to WooCommerce doesn’t mean starting from scratch. We transfer every critical piece of your store, validated against your live data before anything goes near production.",
  whatTitle: "What we migrate",
  what: [
    { icon: "tag", title: "Products", desc: "Names, SKUs, descriptions, pricing & special pricing, meta titles/descriptions, tags, barcodes (EAN-13/UPC)." },
    { icon: "users", title: "Customers & accounts", desc: "Profiles, billing/shipping addresses, stored cards, preferred payment methods." },
    { icon: "file", title: "Orders", desc: "Active, closed, and archived orders, payment methods, shipping information." },
    { icon: "repeat", title: "Subscriptions", desc: "Billing schedules, renewal dates, proration logic, payment tokens." },
    { icon: "layers", title: "Categories & catalog structure", desc: "Names, descriptions, images, SEO metadata." },
    { icon: "list", title: "Coupons", desc: "Codes, applicability conditions, validity windows." },
    { icon: "star", title: "Reviews & ratings", desc: "Full reviews, images, timestamps, reviewer details." },
    { icon: "route", title: "SEO", desc: "Titles, descriptions, SEO-friendly URLs, and 301 redirects so rankings carry over." },
  ] as { icon: IconName; title: string; desc: string }[],
  processTitle: "Our proven 4-step process",
  process: [
    { title: "Audit & Risk Plan", desc: "We map your current store, identify what’s most likely to break, and hand you a written migration plan. (This is the assessment you book here.)" },
    { title: "Staging Build & Parallel Validation", desc: "We rebuild on staging and run your real data through it while your live store keeps selling. Nothing touches production unvalidated." },
    { title: "Test Migration & Sign-off", desc: "Full test run, data integrity check, and your review before go-live." },
    { title: "Go-Live with Rollback & 301s", desc: "Switch over with under an hour of downtime, redirects in place to protect SEO, and a rollback path if anything looks wrong, plus 1 month of free post-migration support." },
  ],
  outcomes: ["< 1 hour downtime", "301 redirects mapped", "1 month free post-migration support"],
};

// Case studies (deck A5). Same alternating text/image layout as the WooCommerce page
// (CoreContent → ProjectsSection). Only migrations with a real client image are
// featured (playbook §4: real assets, never placeholders); the 26k-student e-learning
// migration has no authentic client image, so it stays as a copy/FAQ proof point.
export const MIGRATION_PROJECTS: NonNullable<PageContent["projects"]> = {
  title: "Migrations That Delivered Real Results",
  intro:
    "Real businesses, real data, real deadlines: a sample of migrations we’ve run end-to-end to WooCommerce.",
  items: [
    {
      name: "Magento to WooCommerce in a Week",
      image: "/projects/magento-imatest.webp",
      problem:
        "Migrating a full Magento store to WooCommerce within one week, without disrupting sales or customer experience.",
      solution:
        "A fast, end-to-end migration ensuring all products, orders, and customer data transferred accurately.",
      metrics: [
        { value: "7 days", label: "Store live, start to finish" },
        { value: "40%", label: "Lower maintenance cost" },
        { value: "100%", label: "Data migrated" },
      ],
      href: "https://wisdmlabs.com/case-study/magento-to-woocommerce-migration-in-a-week/",
    },
    {
      name: "Tao of Tea: WooCommerce Migration",
      image: "/projects/tao-of-tea.webp",
      problem:
        "Migrating a complex catalog and subscription system to WooCommerce without affecting customers or order flows.",
      solution: "A seamless migration with clean data transfer and an optimized store structure.",
      metrics: [
        { value: "45%", label: "Improved store speed" },
        { label: "Zero data loss" },
        { label: "Business continuity maintained" },
      ],
      href: "https://wisdmlabs.com/case-study/tao-of-tea-woocommerce-migration/",
    },
    {
      name: "700+ Subscribers from Xero to WooCommerce",
      image: "/projects/onpack.webp",
      problem:
        "A complex base of users and subscription data in Xero had to move to WooCommerce, without losing billing data or interrupting recurring plans.",
      solution:
        "A fully custom migration script to pull, map, and import user + subscription data into the WooCommerce Subscriptions format.",
      metrics: [
        { value: "100%", label: "Accurate subscriptions migration" },
        { label: "Zero data loss" },
        { label: "Business continuity maintained" },
      ],
      href: "https://wisdmlabs.com/case-study/xero-to-woocommerce-subscription-migration/",
    },
  ],
};

// Assessment deliverables (deck A9 "What you get").
export const ASSESSMENT_VALUE: { icon: IconName; title: string; desc: string }[] = [
  { icon: "file", title: "A written risk plan", desc: "for your migration: what’s most likely to break and how we’d prevent it." },
  { icon: "list", title: "A data & SEO preservation checklist", desc: "URLs, redirects, subscriptions, and payment tokens." },
  { icon: "clock", title: "A realistic timeline & downtime estimate", desc: "for a store like yours." },
  { icon: "route", title: "A clear, fixed-scope path to go-live", desc: "if you decide to proceed." },
];

// Testimonials (deck A6). Karl (Shopify migration) leads. Quotes verbatim.
export const TESTIMONIALS: Testimonial[] = [
  {
    result: "100% platform migration success",
    quote:
      "You guys were always spot-on, responsive, just doing the right thing for the right reason. It gave me peace of mind. You made this Shopify to WooCommerce migration very easy. I almost want to cause problems so we can keep this relationship going.",
    name: "Karl Newman",
    org: "Director, Finest Known | USA",
    image: "/authors/karl.webp",
  },
  {
    result: "Smooth migration, lower costs & scalable setup",
    quote: "WisdmLabs made our website transition seamless. We now have a faster, cost-effective, and easy-to-manage site.",
    name: "Heske Van Doornen",
    org: "Institute for New Economic Thinking | NYC, USA",
    image: "/authors/heske.webp",
  },
  {
    result: "Thorough, professional, on time",
    quote:
      "It was a hassle-free pleasure working with WisdmLabs. They were thorough, professional, insightful, and timely. They are at the top of my ‘call’ list when I need some work on my site.",
    name: "Tom Elliott",
    org: "American Portable Nuclear | USA",
    image: "/authors/tom.webp",
  },
  {
    result: "Scalable solution, consistent support",
    quote:
      "We’ve evolved our platform multiple times to meet changing user needs. WisdmLabs’ ability to adapt, communicate effectively, and deliver quality solutions has improved since 2018. I highly recommend them!",
    name: "Suntke Remmers",
    org: "RES Education | Germany",
    image: "/authors/suntke.webp",
  },
  {
    result: "Deep technical expertise, timely delivery",
    quote:
      "A very competent and professional WordPress development company that has demonstrated a depth of technical expertise when solving the issues we had with our new website, in a timely and cost-efficient manner.",
    name: "Marcel Wepfer",
    org: "President, Kino-Orion | Switzerland",
    image: "/authors/marcel.webp",
  },
];

// Why WisdmLabs (deck A7).
export const WHY = {
  intro:
    "Seamless, secure, and sales-ready: we keep your store live, fast, and fully operational through the transition, backed by 1 month of free post-migration support.",
  pillars: [
    { icon: "award", title: "Official WooCommerce Migration Partners", desc: "Recognised experts, trusted by WooCommerce." },
    { icon: "shield", title: "Fail-Safe Data Migration", desc: "99.9% data accuracy, secure transfer protocols, GDPR-compliant processes." },
    { icon: "route", title: "SEO-Optimized Migration", desc: "Preserve rankings, URLs, site speed, and checkout flows with mapped 301 redirects." },
    { icon: "wrench", title: "End-to-End Support", desc: "We stay with you until every product, order, and subscriber is migrated, plus a month of free support after go-live." },
  ] as { icon: IconName; title: string; desc: string }[],
  badges: [
    "Official Woo Partners",
    "WordPress Core Contributors",
    "Top Rated Agency 2025",
    "Clutch 4.7★",
    "DesignRush 4.9★",
    "Google 4.5★",
  ],
};

// Security & data (deck A8).
export const SECURITY = {
  intro:
    "Your store’s data is protected with enterprise-grade security at every step of the migration, from encryption to monitoring. Zero compromise on safety.",
  items: [
    { icon: "database", title: "Server Security", desc: "Hardened environments throughout the migration." },
    { icon: "lock", title: "Data Encryption", desc: "All transfers protected with SSL & HTTPS protocols." },
    { icon: "globe", title: "GDPR & CCPA Compliance", desc: "Full compliance with international data laws." },
    { icon: "file", title: "NDA Protection", desc: "Your credentials and records are never stored or reused." },
    { icon: "cart", title: "Payment Security", desc: "Transactions handled via trusted global gateways." },
  ] as { icon: IconName; title: string; desc: string }[],
};

// Booking offer (deck A9).
export const BOOK = {
  eyebrow: "Book your assessment",
  title: "Get a Migration Risk Assessment Before You Commit a Thing",
  lead: "A 30-minute working session with a senior migration engineer, not a sales call. You leave with:",
  bullets: [
    "A written risk plan for your specific migration.",
    "A data & SEO preservation checklist.",
    "A realistic timeline and downtime estimate.",
  ],
  note: "No obligation to hire us. If the honest answer is to wait, we’ll tell you that.",
  placeholder: "What platform are you migrating from, and what’s your timeline?",
  submitLabel: "Get Migration Risk Assessment",
  microcopy: "Free · 30 minutes · written plan · no commitment.",
};

// FAQ (deck A10).
export const FAQ: FaqItem[] = [
  {
    q: "Will my store be offline during the migration?",
    a: "No meaningful downtime. We build and validate on staging while your live store keeps selling, then switch over with under an hour of downtime.",
  },
  {
    q: "Will my SEO rankings and URLs be preserved?",
    a: "Yes. We map all URLs, preserve metadata, and set up 301 redirects so your rankings carry over. Protecting SEO equity is a core part of every migration we run.",
  },
  {
    q: "I tried migrating on my own and got stuck. Can you take over?",
    a: "Yes. We’ve handled exactly these requests before. We assess what’s already been done and finish the migration without losing that work.",
  },
  {
    q: "Will my products, orders, and customer data migrate safely?",
    a: "Yes. Products, customers, orders, subscriptions, categories, coupons, and reviews all transfer, validated against your live data before go-live. 99.9% data accuracy, zero data loss guaranteed.",
  },
  {
    q: "Will my active subscribers be affected?",
    a: "No. Subscription schedules, renewal dates, proration, and payment tokens are mapped so billing continues uninterrupted. We’ve migrated subscription bases of 26,000+ with full data integrity.",
  },
  {
    q: "Will payment gateways and saved payment methods keep working?",
    a: "Yes. We reconnect supported gateways and migrate stored payment methods so checkout works from go-live.",
  },
  {
    q: "How long does a migration take?",
    a: "It depends on data and subscription complexity. We’ve delivered a full Magento store in a week. Your assessment includes a realistic timeline for your store.",
  },
  {
    q: "What happens after the migration is complete?",
    a: "You get 1 month of free post-migration support, plus a rollback path at go-live if anything needs attention.",
  },
];

export const CLOSING = {
  title: "Your migration gets one chance to go right.",
  subtitle:
    "Get a written read on your specific migration (the risks and how we’d handle them) before you commit a thing.",
};

/* ── Page model: core + 4 source pages (deck Section C) ───────────────────────
   Each source page = the core page with a swapped hero, a source-tuned stakes
   intro, an optional extra at-risk bullet, a lead-proof placement, and 1–2 source
   FAQs. Everything else is inherited. All source pages: noindex,follow, canonical
   → core. ────────────────────────────────────────────────────────────────────── */

export type LeadProof =
  | { kind: "quote"; testimonial: Testimonial }
  | { kind: "stat"; label: string; items: { value: string; label: string }[] };

export type MigrationPageData = {
  slug: string; // "" for core
  meta: Metadata;
  sourceName?: string; // tailors the offer/form headings, e.g. "Shopify"
  hero: typeof HERO;
  stakesIntro: string;
  extraStakeBullet?: { icon: IconName; title: string; desc: string };
  leadProof?: LeadProof;
  rescueHigh?: boolean; // promote the rescue callout above the stakes grid
  testimonials: Testimonial[];
  projects: NonNullable<PageContent["projects"]>;
  faq: FaqItem[];
};

function variantMeta(title: string, description: string): Metadata {
  return {
    title,
    description,
    robots: { index: false, follow: true },
    alternates: { canonical: MIGRATION_CORE_URL },
  };
}

export const CORE_PAGE: MigrationPageData = {
  slug: "",
  meta: migrationMeta,
  hero: HERO,
  stakesIntro: STAKES.intro,
  testimonials: TESTIMONIALS,
  projects: MIGRATION_PROJECTS,
  faq: FAQ,
};

/* ── C1. Shopify (flagship) ───────────────────────────────────────────────── */
export const SHOPIFY: MigrationPageData = {
  slug: "shopify-to-woocommerce-migration",
  sourceName: "Shopify",
  meta: variantMeta(
    "Migrate Shopify to WooCommerce With Experts",
    "Get Shopify to WooCommerce migration done right. Move products, customers, and orders with expert support and SEO care."
  ),
  hero: {
    eyebrow: "Shopify → WooCommerce Migration · Official WooExpert Partners",
    titleLead: "Migrate from Shopify to WooCommerce Without Losing ",
    titleAccent: "Sales, SEO, or Subscribers",
    titleTrail: ".",
    subhead:
      "Own your store, leave the transaction fees behind, and keep every order, customer, and ranking intact.",
    bullets: HERO.bullets,
  },
  stakesIntro:
    "Leaving Shopify isn’t a theme swap. Your customer accounts, subscription billing, app integrations, and years of SEO equity all have to move cleanly, or you feel it in revenue the first week.",
  extraStakeBullet: {
    icon: "tag",
    title: "Transaction fees & app-stack costs",
    desc: "The reason you’re leaving. We make sure the move actually captures the saving instead of trading it for new overhead.",
  },
  leadProof: { kind: "quote", testimonial: TESTIMONIALS[0] }, // Karl, Shopify migration
  // Karl leads as the hero-adjacent proof, so drop him from the grid below.
  testimonials: TESTIMONIALS.slice(1),
  projects: MIGRATION_PROJECTS,
  faq: [
    ...FAQ,
    {
      q: "Is Shopify-to-WordPress migration the same as Shopify-to-WooCommerce?",
      a: "Effectively yes. WooCommerce runs on WordPress, so migrating to WooCommerce means your store lives on WordPress with WooCommerce powering commerce. We handle both the store data and the WordPress build.",
    },
    {
      q: "Will my Shopify subscriptions and apps come across?",
      a: "We map Shopify subscriptions to WooCommerce Subscriptions (schedules, renewal dates, and payment tokens) and replace the key app functions you rely on with WooCommerce equivalents, identified in your assessment.",
    },
  ],
};

/* ── C2. Magento ──────────────────────────────────────────────────────────── */
export const MAGENTO: MigrationPageData = {
  slug: "magento-to-woocommerce",
  sourceName: "Magento",
  meta: variantMeta(
    "Magento to WooCommerce Migration Services",
    "Get Magento to WooCommerce migration done right. Move products, customers, and orders with expert support and SEO retention."
  ),
  hero: {
    eyebrow: "Magento → WooCommerce Migration · Official WooExpert Partners",
    titleLead: "Migrate from Magento to WooCommerce: ",
    titleAccent: "Lower Maintenance",
    titleTrail: ", Same Catalog Power.",
    subhead:
      "Keep the complex catalog; lose the security patching, the specialist hosting bill, and the developer scarcity.",
    bullets: HERO.bullets,
  },
  stakesIntro:
    "Magento gives you power, but the upkeep (security patches, specialist developers, heavy hosting) compounds. Migrating to WooCommerce keeps your catalog logic while cutting that overhead. The risk sits in the data: large catalogs, customer groups, and tiered pricing have to move precisely.",
  extraStakeBullet: {
    icon: "layers",
    title: "Catalog complexity",
    desc: "Attributes, customer groups, and tiered/B2B pricing mapped to WooCommerce equivalents, not flattened.",
  },
  leadProof: {
    kind: "stat",
    label: "Proven on Magento",
    items: [
      { value: "7 days", label: "Store live, start to finish" },
      { value: "40%", label: "Lower maintenance cost" },
      { value: "100%", label: "Data migrated" },
    ],
  },
  testimonials: TESTIMONIALS,
  projects: MIGRATION_PROJECTS, // Magento card already leads the showcase
  faq: [
    ...FAQ,
    {
      q: "I’m on Magento 1 or an unsupported version. Can you still migrate?",
      a: "Yes. We’ve migrated legacy and end-of-life Magento stores; the version changes the data mapping, not whether it can be done. We cover that mapping in your assessment.",
    },
    {
      q: "Can my Magento storefront design be replicated in WooCommerce?",
      a: "Yes. We can rebuild your storefront in WooCommerce to match or improve the current design.",
    },
  ],
};

/* ── C3. BigCommerce (universal proof only) ───────────────────────────────── */
export const BIGCOMMERCE: MigrationPageData = {
  slug: "bigcommerce-to-woocommerce",
  sourceName: "BigCommerce",
  meta: variantMeta(
    "Migrate BigCommerce to WooCommerce: Own Your Store, Zero Data Loss | WisdmLabs",
    "Move from BigCommerce to WooCommerce without API limits or plan-gated features. 300+ migrations, zero data loss, full SEO preservation. Official Woo partners. Get a free Migration Risk Assessment."
  ),
  hero: {
    eyebrow: "BigCommerce → WooCommerce Migration · Official WooExpert Partners",
    titleLead: "Migrate from BigCommerce to WooCommerce: ",
    titleAccent: "Full Control",
    titleTrail: ", No Platform Limits.",
    subhead: "Escape API call limits and plan-gated features, and own your store outright.",
    bullets: HERO.bullets,
  },
  stakesIntro:
    "BigCommerce’s API call limits and plan-based feature gates are fine, until they aren’t and you can’t code your way around them. WooCommerce gives you full ownership. The migration still has to bring your catalog, customers, and order history across clean.",
  // No invented BigCommerce metric: lead with the rescue hook + universal proof.
  rescueHigh: true,
  testimonials: [TESTIMONIALS[1], TESTIMONIALS[2], TESTIMONIALS[0], TESTIMONIALS[3], TESTIMONIALS[4]],
  projects: MIGRATION_PROJECTS,
  faq: [
    ...FAQ,
    {
      q: "Can you migrate BigCommerce product options and customer data?",
      a: "Yes. Products, variants and options, customers, and full order history transfer, validated against your live data before go-live.",
    },
  ],
};

/* ── C4. PrestaShop (universal proof only) ────────────────────────────────── */
export const PRESTASHOP: MigrationPageData = {
  slug: "prestashop-to-woocommerce",
  sourceName: "PrestaShop",
  meta: variantMeta(
    "Migrate PrestaShop to WooCommerce: Zero Data Loss, SEO Preserved | WisdmLabs",
    "Move from PrestaShop’s module treadmill to WooCommerce without losing catalog, customers, or SEO. 300+ migrations, zero data loss. Official Woo partners. Get a free Migration Risk Assessment."
  ),
  hero: {
    eyebrow: "PrestaShop → WooCommerce Migration · Official WooExpert Partners",
    titleLead: "Migrate from PrestaShop to WooCommerce, ",
    titleAccent: "Off the Module Treadmill",
    titleTrail: ".",
    subhead:
      "Trade module conflicts and version-upgrade headaches for a platform that scales with you.",
    bullets: HERO.bullets,
  },
  stakesIntro:
    "PrestaShop’s module ecosystem and version jumps (1.6 to 1.7 to 8) turn routine changes into compatibility projects, and support thins out fast. WooCommerce’s ecosystem is broader and better maintained. The migration still has to bring your catalog, customers, and SEO across without breakage.",
  rescueHigh: true,
  testimonials: [TESTIMONIALS[1], TESTIMONIALS[2], TESTIMONIALS[4], TESTIMONIALS[0], TESTIMONIALS[3]],
  projects: MIGRATION_PROJECTS,
  faq: [
    ...FAQ,
    {
      q: "Can you migrate PrestaShop combinations and customer groups?",
      a: "Yes. Product combinations, customer groups, addresses, and order history map to WooCommerce equivalents; the mapping is covered in your assessment.",
    },
  ],
};

import type { Metadata } from "next";
import type { IconName } from "@/components/Icon";
import type { FaqItem } from "@/components/Faq";

// Per-page content model. All four pages share the Option B structure (see
// DESIGN-PLAYBOOK.md); only this data changes. Copy is from copy-deck.md, trimmed
// to the playbook's lean-hero rules.

export type PageContent = {
  slug: string; // "" for core
  meta: { title: string; description: string };
  canonical?: boolean; // true on core (self-canonical); variants canonical → core
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    titleTrail: string;
    subhead: string;
    bullets: string[];
  };
  problem: { title: string; intro: string; items: { icon: IconName; text: string }[]; outro?: string };
  // Merged "what we build" = the high-impact system blocks (no inline case examples).
  whatWeBuild: {
    title: string;
    intro?: string;
    items: { icon: IconName; title: string; desc: string }[];
    pricingNote?: string; // centered engagement-pricing line
  };
  // Case-study showcase ("Projects That Delivered Real Results", from the live site).
  projects?: {
    title: string;
    intro: string;
    items: {
      name: string;
      image: string;
      problem: string;
      solution: string;
      metrics: { value?: string; label: string }[];
      href: string;
    }[];
  };
  formPlaceholder: string;
  faq: FaqItem[];
};

const CORE_URL = "https://services.wisdmlabs.com/woocommerce-store-development";

export function metaFor(c: PageContent): Metadata {
  return {
    title: c.meta.title,
    description: c.meta.description,
    // Paid LPs: noindex but crawlable for the Ads quality bot (parent plan §7).
    robots: { index: false, follow: true },
    alternates: { canonical: c.canonical ? CORE_URL : `${CORE_URL}/${c.slug}` },
  };
}

/* ── Core `/` ─────────────────────────────────────────────────────────────── */
export const CORE: PageContent = {
  slug: "",
  canonical: true,
  meta: {
    title: "Custom WooCommerce Development Services for Your Store",
    description:
      "Get custom WooCommerce development services built for growth. Improve user experience, add custom features, and scale your store today.",
  },
  hero: {
    eyebrow: "Custom WooCommerce development",
    titleLead: "Your Store Has ",
    titleAccent: "Outgrown Its Template",
    titleTrail: ".",
    subhead:
      "We build custom WooCommerce platforms for fast-growing brands that have outgrown off-the-shelf plugins and generalist agencies.",
    bullets: [
      "450+ WooCommerce platforms engineered — not themes configured",
      "125+ complex migrations with zero data loss",
      "A senior engineering partner who owns the outcome, not a task list",
    ],
  },
  problem: {
    title: "You already know your setup is the bottleneck",
    intro:
      "You didn’t come here to learn what WooCommerce is. You’re here because something specific is breaking:",
    items: [
      { icon: "plug", text: "Every new feature means another plugin — and the plugin stack is now the risk." },
      { icon: "cart", text: "Checkout, subscriptions, or pricing logic works until an edge case loses an order." },
      { icon: "users", text: "Your last developer left, and nobody fully understands the build anymore." },
      { icon: "diagnosis", text: "A generalist agency quoted the work but clearly doesn't understand how your business actually makes money." },
    ],
    outro:
      "A template-and-plugins store is fine until it isn’t. At your revenue, the cost of it breaking is measured in lost orders and engineering firefights — not theme licenses.",
  },
  whatWeBuild: {
    title: "We architect WooCommerce as a platform, not a website",
    intro:
      "We're a commerce engineering partner: senior ownership of your build, accountable for the outcome — the opposite of a freelancer you manage task by task. These are the high-impact systems we engineer.",
    items: [
      { icon: "repeat", title: "Subscription & recurring billing", desc: "When the subscription plugin can't model your proration, dunning, or a billing migration — we build custom recurring-revenue logic and migrate live subscribers without breaking a renewal." },
      { icon: "users", title: "B2B & wholesale", desc: "Customer- and tier-specific pricing, net terms, PO numbers, minimums, multi-warehouse, and B2B alongside D2C — custom pricing engines plugins can't model." },
      { icon: "globe", title: "Multi-currency & cross-border", desc: "Real multi-currency pricing, tax/VAT handling, and region logic — not a converter widget. For brands selling across the US, UK, EU, and beyond." },
      { icon: "layers", title: "Headless & custom storefronts", desc: "A decoupled front end (React/Next.js) on WooCommerce for speed or a bespoke buying experience — built so the commerce engine and storefront stay in sync." },
      { icon: "plug", title: "ERP / NetSuite & systems integration", desc: "WooCommerce wired to NetSuite, your ERP, CRM, and fulfillment so inventory, orders, and customers stay in sync — no nightly CSV exports, no drift." },
      { icon: "cart", title: "Custom checkout & conversion", desc: "A checkout engineered around your funnel, your payment methods, and your conversion data — not the default flow." },
    ],
    pricingNote: "Typical engagement: $10K–$40K to build; $3K–$8K/month to run it with you.",
  },
  projects: {
    title: "WooCommerce Projects That Delivered Real Results",
    intro:
      "How we've helped businesses transform their stores with custom WooCommerce development — from site speed and UX to complex product workflows.",
    items: [
      {
        name: "Seamless SaaS Integration with WooCommerce",
        image: "/projects/interakt.webp",
        problem: "The client needed to integrate their SaaS product with WooCommerce for smooth subscription sync and automated access.",
        solution: "Built a custom bridge between their SaaS logic and WooCommerce checkout, including custom user-role mapping and webhook triggers.",
        metrics: [
          { label: "Seamless SaaS ↔ WooCommerce sync" },
          { value: "100%", label: "Reduction in manual admin tasks" },
          { value: "100%", label: "Automated user access + billing" },
        ],
        href: "https://wisdmlabs.com/case-study/integrating-saas-application-with-woocommerce/",
      },
      {
        name: "Custom Product Subscription System for an Eyecare Business",
        image: "/projects/twooak.webp",
        problem: "The client couldn't manage repeat prescriptions and shipping cycles for online eye-care product sales.",
        solution: "Designed a custom WooCommerce subscription workflow with dynamic pricing, scheduling, and renewal logic.",
        metrics: [
          { value: "+15%", label: "Increase in repeat orders" },
          { label: "Improved repeat-purchase experience" },
          { label: "Automated recurring billing" },
        ],
        href: "https://wisdmlabs.com/case-study/custom-woocommerce-product-subscription-online-eyecare-business/",
      },
      {
        name: "Optimized a Grass Seed Distributor's WooCommerce Store",
        image: "/projects/grass-seed.webp",
        problem: "The store gave a poor user experience: slow load times, a long checkout, and weak mobile UX.",
        solution: "Ran a full performance audit, then implemented caching, image compression, mobile-UX fixes, and a simplified checkout.",
        metrics: [
          { value: "2.2s", label: "Load time (down from 6.4s)" },
          { value: "+67%", label: "Conversion rate" },
          { value: "+89%", label: "Mobile sales" },
        ],
        href: "https://wisdmlabs.com/case-study/grass-seed-store-woocommerce-optimization-case-study/",
      },
      {
        name: "Migrated 700+ Users from Xero to Woo Subscriptions",
        image: "/projects/onpack.webp",
        problem: "A complex database of users and subscription data in Xero had to move to WooCommerce — without losing billing data or interrupting recurring plans.",
        solution: "Built a fully custom migration script to pull, map, and import user + subscription data into the WooCommerce Subscriptions format.",
        metrics: [
          { value: "100%", label: "Accurate subscriptions migration" },
          { label: "Zero data loss" },
          { label: "Business continuity maintained" },
        ],
        href: "https://wisdmlabs.com/case-study/xero-to-woocommerce-subscription-migration/",
      },
    ],
  },
  formPlaceholder:
    "Tell us what's breaking or what you're trying to build — the catalog, subscription, B2B, multi-currency, ERP, or checkout problem — and roughly when you need it solved.",
  faq: [
    { q: "Are you a good fit if we're under $500K revenue?", a: "Usually not. Our builds start at meaningful scope; below that a plugin configuration is often the right call, and we'll tell you so on the assessment." },
    { q: "Do you just configure plugins?", a: "No. We build custom architecture and use plugins only where they're genuinely the right tool." },
    { q: "Are you a staffing/dev-for-hire shop?", a: "No — we're an engineering partner accountable for outcomes, not hours. If you need a body to manage, we're not the fit." },
    {
      q: "Moving off Shopify, Magento, or another platform?",
      a: (
        <>
          That&rsquo;s our{" "}
          <a
            href="https://services.wisdmlabs.com/woocommerce-migration-services"
            className="font-medium text-ink underline hover:text-navy"
          >
            Migration Risk Assessment
          </a>{" "}
          — start there.
        </>
      ),
    },
    { q: "What does it cost?", a: "Builds typically $10K–$40K by complexity; retainers $3K–$8K/month. The assessment gives you the range before any proposal." },
    { q: "What happens on the 30-minute assessment?", a: "See the offer above — a straight diagnosis, your top 3 constraints, and a build approach. No obligation." },
  ],
};

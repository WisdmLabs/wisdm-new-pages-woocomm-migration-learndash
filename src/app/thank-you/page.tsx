import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { TrustFooter } from "@/components/TrustFooter";
import { ConversionTags } from "@/components/ConversionTags";

// PAGE 5 — /thank-you. Dedicated conversion URL (deck §4.3–4.4). Phase 1 stub:
// content + conversion tags wired; HubSpot Meetings embed slots in when the URL env is set.
export const metadata: Metadata = {
  title: "You're Booked | WisdmLabs Commerce Platform Assessment",
  robots: { index: false, follow: false },
};

const MEETINGS_URL = process.env.NEXT_PUBLIC_HUBSPOT_MEETINGS_URL;

const NEXT_STEPS: [string, string][] = [
  ["Check your inbox", "a calendar invite and a short pre-assessment note are on the way."],
  [
    "Before we talk",
    "if you shared your website, a senior engineer will review it so the 30 minutes are spent on your problem, not on catch-up.",
  ],
  ["What to expect", "a straight diagnosis, your top 3 constraints, and a build approach. No pitch."],
];

export default function ThankYouPage() {
  return (
    <main id="top">
      <ConversionTags />
      <SiteHeader />

      <section className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-[13px] font-semibold uppercase tracking-wider text-accent">
            Booked
          </div>
          <h1 className="mt-3 text-[34px] font-semibold leading-tight md:text-[44px]">
            You&rsquo;re Booked. Here&rsquo;s What Happens Next.
          </h1>
        </div>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
          {NEXT_STEPS.map(([title, body]) => (
            <li key={title} className="rounded-xl border border-line bg-white p-6 text-left">
              <h2 className="text-[16px] font-semibold text-ink">{title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ul>

        {MEETINGS_URL ? (
          <div className="mx-auto mt-12 max-w-3xl">
            <h2 className="text-center text-2xl font-semibold">Pick a Time That Works</h2>
            <div
              className="meetings-iframe-container mt-6"
              data-src={`${MEETINGS_URL}?embed=true`}
            />
            {/* HubSpot Meetings embed loader */}
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="https://static.hsappstatic.net/MeetingsEmbedCode/static-1/MeetingsEmbedCode.js" />
          </div>
        ) : (
          <p className="mx-auto mt-12 max-w-xl text-center text-[16px] leading-relaxed text-muted">
            We&rsquo;ve received your details and will reach out within one business day to confirm
            your assessment time.
          </p>
        )}

        <p className="mx-auto mt-12 max-w-xl text-center text-[14px] text-muted">
          While you wait — see how we rebuilt{" "}
          <a
            href="https://wisdmlabs.com/woocommerce-development/"
            className="font-medium text-ink underline"
          >
            The Grass Seed Store&rsquo;s
          </a>{" "}
          store for +67% conversion.
        </p>
      </section>

      <TrustFooter />
    </main>
  );
}

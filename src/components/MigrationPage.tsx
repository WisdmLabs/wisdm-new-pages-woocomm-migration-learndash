import { SiteHeader } from "./SiteHeader";
import { TrustFooter } from "./TrustFooter";
import { HeroTrustVisual } from "./HeroTrustVisual";
import { BookSection } from "./BookSection";
import { Testimonials } from "./Testimonials";
import { TrustMarkers } from "./TrustMarkers";
import { TrustedBy } from "./TrustedBy";
import { Faq } from "./Faq";
import { Icon, type IconName } from "./Icon";
import { CtaButton } from "./CtaButton";
import { HeroCopy, Section, SectionHead, ClosingBand, ProjectsSection } from "./CoreContent";
import {
  CTA_LABEL,
  CTA_NOTE,
  HERO_STATS,
  PROOF_BAR,
  STAKES,
  MIGRATE,
  ASSESSMENT_VALUE,
  WHY,
  SECURITY,
  BOOK,
  CLOSING,
  type MigrationPageData,
  type LeadProof as LeadProofData,
} from "@/content/migration";

// One Option B shell for the whole migration set (core + 4 source pages). Per-page
// deltas come in via `data` (deck Section C: swapped hero, source-tuned stakes intro,
// optional extra at-risk bullet, a lead-proof placement, source FAQs). Everything else
// is inherited verbatim. Design language matches the WooCommerce page (DESIGN-PLAYBOOK).
export function MigrationPage({ data }: { data: MigrationPageData }) {
  const stakeItems = data.extraStakeBullet ? [...STAKES.items, data.extraStakeBullet] : STAKES.items;
  const assessmentTitle = data.sourceName
    ? `A ${data.sourceName} Migration Risk Assessment in 30 minutes, no pitch`
    : "A Migration Risk Assessment in 30 minutes, no pitch";
  const bookTitle = data.sourceName
    ? `Get a ${data.sourceName} Migration Risk Assessment Before You Commit a Thing`
    : BOOK.title;

  return (
    <main id="top">
      <SiteHeader ctaLabel={CTA_LABEL} />

      {/* Hero: copy + CTA left, trust collage right (Option B) */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-content items-center gap-12 px-5 pb-14 pt-12 md:px-8 md:pb-16 md:pt-16 lg:grid-cols-[1.05fr_0.95fr]">
          <HeroCopy hero={data.hero} showCta ctaLabel={CTA_LABEL} ctaNote={CTA_NOTE} />
          <HeroTrustVisual stats={HERO_STATS} />
        </div>
      </section>

      <ProofBar />
      {data.leadProof && <LeadProof proof={data.leadProof} />}
      {data.rescueHigh && (
        <Section>
          <RescueCallout />
        </Section>
      )}

      <Stakes intro={data.stakesIntro} items={stakeItems} showRescue={!data.rescueHigh} />
      <MigrateSection />
      <ProjectsSection projects={data.projects} />
      <AssessmentValueSection title={assessmentTitle} />
      <TrustedBy />
      <Testimonials
        items={data.testimonials}
        title="What Our Clients Say About Migrating With Us"
        subtitle="From Shopify, Magento, and legacy platforms: real businesses we moved to WooCommerce without losing data, SEO, or revenue."
      />
      <TrustMarkers />
      <WhySection />
      <SecuritySection />

      <BookSection
        placeholder={BOOK.placeholder}
        eyebrow={BOOK.eyebrow}
        title={bookTitle}
        lead={BOOK.lead}
        bullets={BOOK.bullets}
        note={BOOK.note}
        submitLabel={BOOK.submitLabel}
        microcopy={BOOK.microcopy}
      />

      <Faq items={data.faq} />

      <ClosingBand title={CLOSING.title} subtitle={CLOSING.subtitle} ctaLabel={CTA_LABEL} />

      <TrustFooter />
    </main>
  );
}

/* ── Proof bar (deck A2) ──────────────────────────────────────────────────── */

function ProofBar() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-6 px-5 py-8 md:grid-cols-5 md:px-8">
        {PROOF_BAR.map((p) => (
          <div key={p.label} className="flex items-center gap-3">
            <Icon name={p.icon} width={22} height={22} className="flex-none text-accent" />
            <span className="text-[14px] font-medium leading-tight text-ink">{p.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Lead proof (deck Section C): a hero-adjacent quote or stat strip ─────────
   Shopify leads with the Karl quote; Magento with the 7-day stat. ──────────── */

function LeadProof({ proof }: { proof: LeadProofData }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-5 pt-12 md:px-8">
        {proof.kind === "quote" ? (
          <figure className="mx-auto max-w-3xl rounded-2xl border border-line bg-surface p-7 text-center md:p-9">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[12.5px] font-bold text-navy shadow-sm">
              <Icon name="trend" width={14} height={14} className="flex-none" />
              {proof.testimonial.result}
            </span>
            <blockquote className="mt-4 text-[17px] leading-relaxed text-ink md:text-[19px]">
              &ldquo;{proof.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center justify-center gap-3">
              {proof.testimonial.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={proof.testimonial.image}
                  alt={proof.testimonial.name}
                  className="h-11 w-11 flex-none rounded-full object-cover"
                />
              )}
              <span className="text-left">
                <span className="block text-[15px] font-semibold text-ink">
                  {proof.testimonial.name}
                </span>
                <span className="block text-[13px] text-muted">{proof.testimonial.org}</span>
              </span>
            </figcaption>
          </figure>
        ) : (
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-navy">
            <div className="px-6 py-3 text-center text-[12px] font-semibold uppercase tracking-wider text-accent">
              {proof.label}
            </div>
            <div className="flex flex-wrap items-stretch justify-center divide-line border-t border-white/10 text-center sm:flex-nowrap sm:divide-x">
              {proof.items.map((s) => (
                <div key={s.label} className="flex-1 px-5 py-5">
                  <div className="text-[26px] font-bold leading-none text-white">{s.value}</div>
                  <div className="mt-1.5 text-[12px] leading-tight text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ── Rescue callout (deck A3): reused inside Stakes or promoted hero-adjacent ─ */

function RescueCallout() {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-accent/40 bg-accent/10 p-6 sm:flex-row sm:items-center">
      <Icon name="wrench" width={26} height={26} className="flex-none text-accent" />
      <p className="text-[15px] leading-relaxed text-ink">
        <strong className="font-semibold">{STAKES.rescueTitle}</strong> {STAKES.rescueBody}
      </p>
    </div>
  );
}

/* ── Problem / stakes (deck A3) ───────────────────────────────────────────── */

function Stakes({
  intro,
  items,
  showRescue,
}: {
  intro: string;
  items: { icon: IconName; title: string; desc: string }[];
  showRescue: boolean;
}) {
  return (
    <Section tint>
      <SectionHead eyebrow="What’s at stake" title={STAKES.title}>
        {intro}
      </SectionHead>
      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <li key={s.title} className="rounded-xl border border-line bg-white p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface text-navy">
              <Icon name={s.icon} width={22} height={22} />
            </span>
            <h3 className="mt-4 text-[16px] font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.desc}</p>
          </li>
        ))}
      </ul>

      {showRescue && (
        <div className="mt-8">
          <RescueCallout />
        </div>
      )}
    </Section>
  );
}

/* ── How the migration works (deck A4) ────────────────────────────────────── */

function MigrateSection() {
  return (
    <Section>
      <SectionHead eyebrow="How the migration works" title={MIGRATE.title}>
        {MIGRATE.intro}
      </SectionHead>

      {/* What we migrate */}
      <h3 className="mt-10 text-center text-[15px] font-semibold uppercase tracking-wider text-muted">
        {MIGRATE.whatTitle}
      </h3>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {MIGRATE.what.map((w) => (
          <div key={w.title} className="rounded-xl border border-line bg-white p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white">
              <Icon name={w.icon} width={22} height={22} />
            </span>
            <h4 className="mt-4 text-[16px] font-semibold text-ink">{w.title}</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">{w.desc}</p>
          </div>
        ))}
      </div>

      {/* 4-step process */}
      <h3 className="mt-14 text-center text-[15px] font-semibold uppercase tracking-wider text-muted">
        {MIGRATE.processTitle}
      </h3>
      <ol className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {MIGRATE.process.map((step, i) => (
          <li key={step.title} className="relative rounded-xl border border-line bg-white p-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-[15px] font-bold text-navy">
              {i + 1}
            </span>
            <h4 className="mt-4 text-[16px] font-semibold text-ink">{step.title}</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">{step.desc}</p>
          </li>
        ))}
      </ol>

      {/* Outcome strip */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl bg-navy px-6 py-5 text-center">
        {MIGRATE.outcomes.map((o) => (
          <span key={o} className="flex items-center gap-2 text-[15px] font-semibold text-white">
            <Icon name="check" width={18} height={18} className="flex-none text-accent" />
            {o}
          </span>
        ))}
      </div>
    </Section>
  );
}

/* ── What you get on the assessment (deck A9 deliverables) ────────────────── */

function AssessmentValueSection({ title }: { title: string }) {
  return (
    <Section>
      <SectionHead eyebrow="What you get" title={title}>
        A senior migration engineer reviews where you’re moving from and gives you a written read on
        your specific migration:
      </SectionHead>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {ASSESSMENT_VALUE.map((v) => (
          <div key={v.title} className="rounded-xl border border-line bg-white p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-navy">
              <Icon name={v.icon} width={22} height={22} />
            </span>
            <h3 className="mt-4 text-[16px] font-semibold text-ink">{v.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{v.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-center gap-4 text-center">
        <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-muted">
          No obligation to hire us. You leave with a clear read on your migration either way.
        </p>
        <CtaButton href="#book">{CTA_LABEL}</CtaButton>
      </div>
    </Section>
  );
}

/* ── Why WisdmLabs (deck A7) ──────────────────────────────────────────────── */

function WhySection() {
  return (
    <Section>
      <SectionHead
        eyebrow="Why WisdmLabs"
        title="Why Businesses Trust WisdmLabs With a High-Stakes Migration"
      >
        {WHY.intro}
      </SectionHead>
      <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {WHY.pillars.map((p) => (
          <li key={p.title} className="rounded-xl border border-line bg-white p-6">
            <Icon name={p.icon} width={24} height={24} className="text-accent" />
            <h3 className="mt-4 text-[16px] font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.desc}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        {WHY.badges.map((b) => (
          <span
            key={b}
            className="rounded-full border border-line bg-surface px-4 py-1.5 text-[13px] font-medium text-ink"
          >
            {b}
          </span>
        ))}
      </div>
    </Section>
  );
}

/* ── Security & data (deck A8) ────────────────────────────────────────────── */

function SecuritySection() {
  return (
    <Section tint>
      <SectionHead eyebrow="Security & data" title="Data Security You Can Trust">
        {SECURITY.intro}
      </SectionHead>
      <div className="mt-8 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
        {SECURITY.items.map((s) => (
          <div key={s.title} className="rounded-xl border border-line bg-white p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white">
              <Icon name={s.icon} width={22} height={22} />
            </span>
            <h3 className="mt-4 text-[15px] font-semibold text-ink">{s.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

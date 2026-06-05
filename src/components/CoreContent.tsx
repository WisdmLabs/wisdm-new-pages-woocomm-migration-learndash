// Shared, content-driven sections for every landing page (Option B structure).
// Per-page copy comes from src/content/pages.tsx; this file owns the layout + the
// sections that are identical on all pages (What you get, Why, Testimonials, Trust).
import { CtaButton } from "./CtaButton";
import { TrustedBy } from "./TrustedBy";
import { Testimonials, type Testimonial } from "./Testimonials";
import { TrustMarkers } from "./TrustMarkers";
import { Faq, type FaqItem } from "./Faq";
import { Icon, type IconName } from "./Icon";
import type { PageContent } from "@/content/pages";

export const CTA_LABEL = "Book Free Assessment";

const ASSESSMENT_VALUE: { icon: IconName; title: string; desc: string }[] = [
  { icon: "diagnosis", title: "A straight diagnosis", desc: "of your current architecture and where it's constraining you." },
  { icon: "list", title: "The 3 highest-risk constraints", desc: "to fix first — and why." },
  { icon: "layers", title: "A build approach and rough scope", desc: "so you know what solving this actually takes." },
];

const TESTIMONIALS: Testimonial[] = [
  { result: "Smooth migration, lower costs & scalable setup", quote: "WisdmLabs made our website transition seamless. We now have a faster, cost-effective, and easy-to-manage site.", name: "Heske Van Doornen", org: "Institute for New Economic Thinking | NYC, USA", image: "/authors/heske.webp" },
  { result: "Cost efficiency: −30% vs market rate", quote: "It was a hassle-free pleasure working with WisdmLabs. They were thorough, professional, insightful, and timely. They are at the top of my 'call' list when I need work on my site.", name: "Tom Elliott", org: "American Portable Nuclear | USA", image: "/authors/tom.webp" },
  { result: "100% platform migration success", quote: "You guys were always spot-on, responsive, just doing the right thing for the right reason — it gave me peace of mind. You made this Shopify to WooCommerce migration very easy.", name: "Karl Newman", org: "Director at Finest Known | USA", image: "/authors/karl.webp" },
  { result: "Scalable solution, consistent support", quote: "We've evolved our platform multiple times to meet changing user needs. WisdmLabs' ability to adapt, communicate effectively, and deliver quality solutions has only improved since 2018. Highly recommend them.", name: "Suntke Remmers", org: "RES Education | Germany", image: "/authors/suntke.webp" },
  { result: "Project delivered on-time", quote: "A very competent and professional team that demonstrated real technical depth solving the issues we had with our new website — timely and cost-efficient. Extremely happy with our decision.", name: "Marcel Wepfer", org: "President, Kino-Orion | Switzerland", image: "/authors/marcel.webp" },
  { result: "Trust before any agreement", quote: "I really appreciated the detailed analysis you did even before we signed any agreement. It was very professional and I felt I could trust you guys from the get-go.", name: "Francesco", org: "Entrepreneur | Italy" },
];

const WHY: { icon: IconName; t: string; d: string }[] = [
  { icon: "award", t: "Official Woo Partner", d: "WordPress Core Contributors and a Top Rated Agency 2025 — recognised by the people who build the platform." },
  { icon: "globe", t: "13 years, 27+ countries", d: "450+ WooCommerce projects, 98% client satisfaction, 4.7/5 on Clutch — depth, not a portfolio of themes." },
  { icon: "wrench", t: "We fix builds that went wrong", d: "We've been called in to finish migrations and rescue platforms other agencies couldn't." },
];

/* ── shared layout helpers ────────────────────────────────────────────────── */

export function Section({ children, tint }: { children: React.ReactNode; tint?: boolean }) {
  return (
    <section className={tint ? "bg-surface" : "bg-white"}>
      <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <div className="text-[13px] font-semibold uppercase tracking-wider text-accent">{eyebrow}</div>
      <h2 className="mt-3 text-2xl font-semibold md:text-[32px]">{title}</h2>
      {children && (
        <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">{children}</p>
      )}
    </div>
  );
}

/* ── hero copy (left column) ──────────────────────────────────────────────── */

export function HeroCopy({
  hero,
  showCta,
  ctaLabel = CTA_LABEL,
  ctaNote = "A senior engineer, not a sales rep. No obligation.",
}: {
  hero: PageContent["hero"];
  showCta?: boolean;
  ctaLabel?: string;
  ctaNote?: string;
}) {
  return (
    <div>
      <div className="text-[13px] font-semibold uppercase tracking-wider text-accent">
        {hero.eyebrow}
      </div>
      <h1 className="mt-4 text-[34px] font-semibold leading-[1.12] md:text-[48px]">
        {hero.titleLead}
        <span className="underline decoration-accent decoration-4 underline-offset-[6px]">
          {hero.titleAccent}
        </span>
        {hero.titleTrail}
      </h1>
      <p className="mt-5 max-w-md text-[17px] leading-relaxed text-muted md:text-[18px]">
        {hero.subhead}
      </p>
      <ul className="mt-7 space-y-3">
        {hero.bullets.map((b) => (
          <li key={b} className="flex items-center gap-3 text-[16px] font-medium text-ink">
            <Icon name="check" width={20} height={20} className="flex-none text-accent" />
            {b}
          </li>
        ))}
      </ul>
      {showCta && (
        <div className="mt-8">
          <CtaButton href="#book">{ctaLabel}</CtaButton>
          <p className="mt-3 text-[13px] text-muted">{ctaNote}</p>
        </div>
      )}
    </div>
  );
}

/* ── mid-page sections (Problem + What we build are per-page; rest shared) ──── */

export function MidSections({ content }: { content: PageContent }) {
  const { problem, whatWeBuild } = content;
  return (
    <>
      {/* Problem */}
      <Section tint>
        <SectionHead eyebrow="The problem" title={problem.title}>
          {problem.intro}
        </SectionHead>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {problem.items.map((p) => (
            <li key={p.text} className="flex gap-4 rounded-xl border border-line bg-white p-5">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-surface text-navy">
                <Icon name={p.icon} width={20} height={20} />
              </span>
              <span className="text-[15px] leading-relaxed text-ink">{p.text}</span>
            </li>
          ))}
        </ul>
        {problem.outro && (
          <p className="mx-auto mt-6 max-w-3xl text-center text-[16px] leading-relaxed text-muted">
            {problem.outro}
          </p>
        )}
      </Section>

      {/* What We Build — merged systems grid (6 high-impact blocks, no inline cases) */}
      <Section>
        <SectionHead eyebrow="What we build" title={whatWeBuild.title}>
          {whatWeBuild.intro}
        </SectionHead>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whatWeBuild.items.map((b) => (
            <div key={b.title} className="rounded-xl border border-line bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white">
                <Icon name={b.icon} width={22} height={22} />
              </span>
              <h3 className="mt-4 text-[17px] font-semibold text-ink">{b.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{b.desc}</p>
            </div>
          ))}
        </div>
        {whatWeBuild.pricingNote && (
          <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] font-medium text-ink">
            {whatWeBuild.pricingNote}
          </p>
        )}
      </Section>

      {content.projects && <ProjectsSection projects={content.projects} />}

      {/* What you get (shared) */}
      <Section>
        <SectionHead eyebrow="What you get" title="A free Commerce Platform Assessment — 30 minutes, no pitch">
          A senior WisdmLabs engineer reviews your store and your problem, then walks you through:
        </SectionHead>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
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
            No proposal pressure, no sales rep. If the honest answer is &ldquo;you don&rsquo;t need a
            custom build,&rdquo; we&rsquo;ll tell you that — analysis before any agreement.
          </p>
          <CtaButton href="#book">{CTA_LABEL}</CtaButton>
        </div>
      </Section>

      <TrustedBy />

      <Testimonials items={TESTIMONIALS} />

      <TrustMarkers />

      {/* Why WisdmLabs (shared) */}
      <Section>
        <SectionHead eyebrow="Why WisdmLabs" title="The partner brands call when the build has to be right" />
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {WHY.map((w) => (
            <li key={w.t} className="rounded-xl border border-line bg-white p-6">
              <Icon name={w.icon} width={24} height={24} className="text-accent" />
              <h3 className="mt-4 text-[16px] font-semibold text-ink">{w.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{w.d}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

export function FaqSection({ items }: { items: FaqItem[] }) {
  return <Faq items={items} />;
}

/* ── Projects that delivered real results (replicated from the live site, ──────
   rethemed to navy/amber; static, all projects visible, alternating layout) ── */

export function ProjectsSection({ projects }: { projects: NonNullable<PageContent["projects"]> }) {
  return (
    <Section tint>
      <SectionHead eyebrow="Case studies" title={projects.title}>
        {projects.intro}
      </SectionHead>
      <div className="mt-10 space-y-6">
        {projects.items.map((p, i) => (
          <article
            key={p.name}
            className="grid items-center gap-6 rounded-2xl border border-line bg-white p-6 md:grid-cols-2 md:gap-10 md:p-8"
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <h3 className="text-[19px] font-semibold text-ink md:text-[22px]">{p.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                <strong className="font-semibold text-ink">Problem:</strong> {p.problem}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                <strong className="font-semibold text-ink">Solution:</strong> {p.solution}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-5">
                {p.metrics.map((m) => (
                  <div key={m.label} className="min-w-[130px] max-w-[190px]">
                    <div className="flex h-7 items-end">
                      {m.value ? (
                        <span className="text-[26px] font-bold leading-none text-accent">{m.value}</span>
                      ) : (
                        <Icon name="check" width={24} height={24} className="text-accent" />
                      )}
                    </div>
                    <div className="mt-1.5 text-[12px] leading-tight text-muted">{m.label}</div>
                  </div>
                ))}
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy underline-offset-4 hover:underline"
              >
                View Full Case Study
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.name}
                className="w-full rounded-xl border border-line object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ── closing CTA band (shared) ────────────────────────────────────────────── */

export function ClosingBand({
  title = "Your store’s growth shouldn’t wait on a plugin stack.",
  subtitle = "Get a straight diagnosis from a senior engineer — your top constraints and a build approach, before any proposal.",
  ctaLabel = CTA_LABEL,
}: {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-content px-5 py-16 text-center md:px-8 md:py-20">
        <h2 className="mx-auto max-w-2xl text-2xl font-semibold text-white md:text-[34px]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/70">
          {subtitle}
        </p>
        <a
          href="#book"
          className="mt-8 inline-flex items-center justify-center rounded-pill bg-accent px-7 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:bg-[#ffc333]"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}

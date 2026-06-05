import { SiteHeader } from "./SiteHeader";
import { TrustFooter } from "./TrustFooter";
import { HeroTrustVisual } from "./HeroTrustVisual";
import { BookSection } from "./BookSection";
import { HeroCopy, MidSections, FaqSection, ClosingBand } from "./CoreContent";
import type { PageContent } from "@/content/pages";

// One shell for every landing page (Option B structure). Per-page copy is `content`.
export function LandingPage({ content }: { content: PageContent }) {
  return (
    <main id="top">
      <SiteHeader />

      {/* Hero — copy + CTA left, trust collage right */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-content items-center gap-12 px-5 pb-14 pt-12 md:px-8 md:pb-16 md:pt-16 lg:grid-cols-[1.05fr_0.95fr]">
          <HeroCopy hero={content.hero} showCta />
          <HeroTrustVisual />
        </div>
      </section>

      <MidSections content={content} />

      <BookSection placeholder={content.formPlaceholder} />

      <FaqSection items={content.faq} />

      <ClosingBand />

      <TrustFooter />
    </main>
  );
}

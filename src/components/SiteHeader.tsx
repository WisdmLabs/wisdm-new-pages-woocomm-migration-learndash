// Branded chrome, NO nav exits (build brief decision #1).
// Same logo + light header bar as wisdmlabs.com, but the site nav menu is removed
// so paid traffic has no exit. The only action is the on-page CTA → #assessment.
import { CtaButton } from "./CtaButton";

export function SiteHeader({ ctaLabel = "Book Free Assessment" }: { ctaLabel?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[#f5f5f5]/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-content items-center justify-between px-5 md:px-8">
        {/* Logo is a non-exit: scroll-to-top of the same page, not a link off-site. */}
        <a href="#top" aria-label="WisdmLabs" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/wisdmlabs-logo.webp"
            alt="WisdmLabs"
            width={150}
            height={31}
            className="h-[31px] w-auto"
          />
        </a>
        <CtaButton href="#book" className="hidden md:inline-flex">
          {ctaLabel}
        </CtaButton>
      </div>
    </header>
  );
}

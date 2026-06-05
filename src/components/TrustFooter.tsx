// Trust Footer (deck §Shared Modules → [Trust Footer]).
// Required for fresh-subdomain Ads policy + trust. Visual style matches the navy
// wisdmlabs.com footer; content is the minimal trust set. The single link back to
// wisdmlabs.com is intentional (brand halo) — the only outbound link in the chrome.

const OFFICES = [
  {
    label: "USA Office",
    lines: ["2035 Sunset Lake Road, Suite B-2", "Newark, Delaware, 19702, United States"],
  },
  {
    label: "Mumbai Office",
    lines: ["105, Aniket, Kolbad, Thane (West)", "Mumbai, India – 400 601"],
  },
  {
    label: "Dubai Office",
    lines: ["T1-12-4K RAKEZ Amenity Centre", "Al Hamra Industrial Zone FZ, RAK, UAE"],
  },
];

const BADGES = ["Official Woo Partner", "WordPress Core Contributor", "4.7/5 on Clutch", "4.5/5 on Google"];

export function TrustFooter() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-content px-5 py-14 md:px-8">
        {/* Brand + offices */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wisdmlabs-logo.webp"
              alt="WisdmLabs"
              width={160}
              height={33}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              A WisdmLabs commerce engineering team. Delivering excellence across 27+ countries and
              counting.
            </p>
            <a
              href="https://wisdmlabs.com"
              className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
            >
              wisdmlabs.com →
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {OFFICES.map((office) => (
              <div key={office.label}>
                <div className="text-sm font-semibold text-white">{office.label}</div>
                <address className="mt-2 not-italic text-sm leading-relaxed text-white/55">
                  {office.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-8">
          {BADGES.map((badge) => (
            <span key={badge} className="text-xs font-medium uppercase tracking-wide text-white/50">
              {badge}
            </span>
          ))}
        </div>

        {/* Legal */}
        <div className="mt-8 flex flex-col gap-4 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </div>
          <div>© {new Date().getFullYear()} WisdmLabs. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

// Option B hero visual — a curated trust collage built from the credential elements
// of the "Recommended by the people who build the platform" section.

const PARTNERS = [
  { img: "/badges/woo-partner.webp", label: "Official Woo Partner" },
  { img: "/badges/top-rated-agency.webp", label: "Top Rated Agency 2025" },
  { img: "/badges/wordpress.webp", label: "WP Core Contributor" },
];

const RATINGS = [
  { img: "/badges/clutch.webp", label: "Clutch", value: "4.7" },
  { img: "/badges/designrush.webp", label: "DesignRush", value: "5.0" },
  { img: "/badges/google.webp", label: "Google", value: "4.5" },
];

const DEFAULT_STATS = [
  { value: "450+", label: "builds" },
  { value: "98%", label: "satisfaction" },
  { value: "27+", label: "countries" },
];

function Star() {
  return (
    <svg viewBox="0 0 20 20" width={12} height={12} fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  );
}

export function HeroTrustVisual({
  stats = DEFAULT_STATS,
}: {
  stats?: { value: string; label: string }[];
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#eef4fb] via-white to-[#eef4fb] p-6 ring-1 ring-line shadow-[0_20px_60px_-24px_rgba(18,21,25,0.28)] md:p-8">
      <div className="text-center">
        <div className="text-[12px] font-semibold uppercase tracking-wider text-accent">
          Recognised by the industry
        </div>
        <h2 className="mt-2 text-[19px] font-semibold leading-snug text-ink md:text-[21px]">
          The people who build the platform recommend us
        </h2>
      </div>

      {/* Partner badges */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        {PARTNERS.map((p) => (
          <div
            key={p.label}
            className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 text-center ring-1 ring-line"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.img} alt={p.label} className="h-9 w-9 object-contain" />
            <span className="text-[12px] font-medium leading-tight text-ink">{p.label}</span>
          </div>
        ))}
      </div>

      {/* Ratings */}
      <div className="mt-3 grid grid-cols-3 gap-3">
        {RATINGS.map((r) => (
          <div
            key={r.label}
            className="flex flex-col items-center gap-1.5 rounded-2xl bg-white p-4 text-center ring-1 ring-line"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={r.img} alt={r.label} className="h-7 w-7 object-contain" />
            <div className="flex items-center gap-0.5 text-accent">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} />
              ))}
            </div>
            <span className="text-[12px] font-semibold text-ink">
              {r.value}
              <span className="font-normal text-muted">/5</span>
            </span>
          </div>
        ))}
      </div>

      {/* Stats footer */}
      <div className="mt-6 flex items-stretch divide-x divide-line overflow-hidden rounded-2xl bg-navy text-center">
        {stats.map((s) => (
          <div key={s.label} className="flex-1 px-3 py-4">
            <div className="text-[22px] font-bold leading-none text-white">{s.value}</div>
            <div className="mt-1 text-[11px] uppercase tracking-wide text-white/55">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

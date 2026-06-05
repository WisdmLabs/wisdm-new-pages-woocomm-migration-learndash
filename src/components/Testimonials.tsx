import { Icon } from "./Icon";

// Real client testimonials pulled from wisdmlabs.com/woocommerce-website-development,
// including the authors' photos. `image` is optional — falls back to initials.
export type Testimonial = {
  quote: string;
  name: string;
  org: string;
  result: string;
  image?: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials({
  items,
  eyebrow = "Success stories",
  title = "Real businesses. Real results. Real partnerships.",
  subtitle = "We don’t just build WooCommerce stores — we solve real business problems with measurable impact.",
}: {
  items: Testimonial[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
        <div className="text-center">
          <div className="text-[13px] font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </div>
          <h2 className="mt-3 text-2xl font-semibold md:text-[32px]">{title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[16px] leading-relaxed text-muted">{subtitle}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm"
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[12.5px] font-bold text-navy shadow-sm">
                <Icon name="trend" width={14} height={14} className="flex-none" />
                {t.result}
              </span>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                {t.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={t.image}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 flex-none rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-navy text-[14px] font-semibold text-white">
                    {initials(t.name)}
                  </span>
                )}
                <span>
                  <span className="block text-[15px] font-semibold text-ink">{t.name}</span>
                  <span className="block text-[13px] text-muted">{t.org}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

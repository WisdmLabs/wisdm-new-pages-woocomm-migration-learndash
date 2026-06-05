// "Trusted by WooCommerce Industry Leaders" — recommendation logo strip
// (from wisdmlabs.com/woocommerce-website-development).
const LOGOS: { src: string; alt: string }[] = [
  { src: "/logos/yith.webp", alt: "YITH" },
  { src: "/logos/barn2.webp", alt: "Barn2 Plugins" },
  { src: "/logos/clutch.webp", alt: "Clutch" },
  { src: "/logos/designrush.webp", alt: "DesignRush" },
  { src: "/logos/learnwoo.webp", alt: "LearnWoo" },
  { src: "/logos/cloudways.webp", alt: "Cloudways" },
];

export function TrustedBy() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-content px-5 py-14 text-center md:px-8">
        <h2 className="text-2xl font-semibold md:text-[28px]">
          Trusted by WooCommerce Industry Leaders
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
          Recommended by leading industry experts for our WooCommerce engineering work.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {LOGOS.map((l) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              className="h-8 w-auto object-contain transition hover:scale-105 md:h-9"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

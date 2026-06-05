import { Icon, type IconName } from "./Icon";

// Icon row reinforcing the offer's no-risk framing (reference layout).
const MARKERS: { icon: IconName; label: string }[] = [
  { icon: "diagnosis", label: "Reviewed by senior engineers" },
  { icon: "award", label: "Official Woo Partner" },
  { icon: "shield", label: "Zero data loss on migrations" },
  { icon: "clock", label: "Response within one business day" },
];

export function TrustMarkers() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-8">
        {MARKERS.map((m) => (
          <div key={m.label} className="flex items-center gap-3">
            <Icon name={m.icon} width={22} height={22} className="flex-none text-accent" />
            <span className="text-[14px] font-medium leading-tight text-ink">{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

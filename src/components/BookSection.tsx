import { AssessmentForm } from "./AssessmentForm";

const DEFAULT_BULLETS = [
  "A straight diagnosis of where your architecture is constraining you.",
  "Your 3 highest-risk constraints to fix first.",
  "A build approach and rough scope.",
];

// Full booking section near the end of the page (offer + form), id="book".
export function BookSection({
  placeholder,
  eyebrow = "Book your assessment",
  title = "A free 30-minute Commerce Platform Assessment",
  lead = "A senior engineer gives you:",
  bullets = DEFAULT_BULLETS,
  note = "No sales pitch — if you don’t need a custom build, we’ll say so.",
  submitLabel,
  microcopy,
}: {
  placeholder: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  bullets?: string[];
  note?: string;
  submitLabel?: string;
  microcopy?: string;
}) {
  return (
    <section id="book" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
        {/* Offer */}
        <div>
          <div className="text-[13px] font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </div>
          <h2 className="mt-3 text-2xl font-semibold md:text-[32px]">{title}</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">{lead}</p>
          <ul className="mt-5 space-y-3">
            {bullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                <span className="text-[16px] leading-relaxed text-ink">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">{note}</p>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-line bg-white p-6 shadow-sm md:p-8">
          <AssessmentForm
            detailsPlaceholder={placeholder}
            submitLabel={submitLabel}
            microcopy={microcopy}
          />
        </div>
      </div>
    </section>
  );
}

// Shared FAQ module — per-page items (deck writes the Q&A in full per page).
// `a` is a ReactNode so answers can include links (e.g. the Migration assessment).
export type FaqItem = { q: string; a: React.ReactNode };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <section className="mx-auto max-w-content px-5 py-16 md:px-8">
      <h2 className="text-2xl font-semibold md:text-3xl">Questions, answered straight</h2>
      <div className="mt-8 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-medium text-ink">
              {item.q}
              <span className="text-muted transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

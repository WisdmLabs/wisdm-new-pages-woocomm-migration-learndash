# Follow the Design Playbook

Before editing any page layout, copy, or component styling, read `DESIGN-PLAYBOOK.md` in the project root. Every rule there came from a real rejection during the build.

Key constraints:
- Hero = one short H1, one-sentence subhead, exactly 3 bullets. No clutter.
- All CTAs use the `CTA_LABEL` constant from `CoreContent.tsx` and anchor to `#book`.
- Headings are center-aligned via `SectionHead`. Never cap heading width with `max-w-*`.
- Body paragraphs get `max-w-2xl mx-auto`, headings do not.
- `text-wrap: balance` is set globally. Keep it.

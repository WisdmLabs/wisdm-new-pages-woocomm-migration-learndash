# Don't Fork Shared Components

All landing pages share the same visual structure. Reuse, don't fork.

- `LandingPage` is the page shell for services pages. `MigrationPage` is for migration variants. Both compose from shared section components.
- `CoreContent.tsx` contains shared section renderers (`SectionHead`, trust markers, closing band, etc.). Extend these rather than creating page-specific alternatives.
- The `Icon` component maps icon names to inline SVGs. Add new icons there rather than importing external icon libraries.
- `TrustMarkers`, `TrustedBy`, `Testimonials`, and `TrustFooter` are global trust elements. They appear on every page and should not vary per page.

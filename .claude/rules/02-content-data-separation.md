# Content Lives in src/content/, Not in Components

All page copy is defined as typed `PageContent` objects in `src/content/pages.tsx` (services pages) or `src/content/migration.tsx` (migration pages). Components in `src/components/` render this data.

- Never hardcode copy strings in components.
- To add a new page, add a new content object in the appropriate content file and create a thin page.tsx that passes it to `LandingPage` or `MigrationPage`.
- The `PageContent` type in `pages.tsx` is the contract. If you need a new section, extend the type first.

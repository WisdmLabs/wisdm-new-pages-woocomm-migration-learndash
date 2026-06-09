# CTA Scroll Behavior

Every CTA on every page scrolls to the `#book` anchor (the `BookSection` containing the form). This is the only conversion action.

- Use the `CtaButton` component for all CTAs. It handles smooth scroll and repeat-click edge cases.
- `HashScrollFix` is a client component in the root layout that fixes browser hash-scroll timing issues. Don't remove it.
- If CTA clicks stop working after scroll, the issue is likely the browser's native hash handling conflicting with React hydration. The fix is in `HashScrollFix.tsx` and `CtaButton.tsx` — check there first.

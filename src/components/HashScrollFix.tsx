"use client";

import { useEffect } from "react";

// Fix for dead in-page anchors on repeat clicks.
// CTAs use <a href="#book">. The browser only scrolls when the URL hash CHANGES,
// so after the first click (hash already "#book") every later click is a no-op —
// the CTA looks broken once you've scrolled away. We intercept hash-link clicks in
// the capture phase and scroll manually every time, so it works on the Nth click.
// Capture + preventDefault also makes next/link bail (it honors defaultPrevented),
// leaving this handler as the single source of truth. scrollIntoView respects each
// section's scroll-mt-* (scroll-margin-top), so the sticky header offset is kept.
export function HashScrollFix() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      const href = anchor?.getAttribute("href");
      if (!href || href === "#" || !href.startsWith("#")) return;

      const el = document.getElementById(decodeURIComponent(href.slice(1)));
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Keep the URL hash in sync without pushing a new history entry.
      if (location.hash !== href) {
        history.replaceState(null, "", href);
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}

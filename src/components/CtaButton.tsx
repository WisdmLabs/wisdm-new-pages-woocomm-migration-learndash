import Link from "next/link";

// Single CTA style for the whole set — navy pill, white text (matches wisdmlabs.com
// primary button: bg #131821, radius 999px, weight 500). One label across all pages
// per deck (message match / Quality Score).
export function CtaButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-pill bg-navy px-6 py-3 text-center text-[15px] font-medium leading-tight text-white transition-colors hover:bg-black ${className}`}
    >
      {children}
    </Link>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// next/font self-hosts Inter at build time (no runtime request to Google) — satisfies
// the brief's self-host requirement. Inter is the live site's primary typeface.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WisdmLabs — Custom WooCommerce Development",
  // Paid landing pages: keep out of the index but allow link-follow (deck §SEO/meta).
  robots: { index: false, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTags } from "@/components/GoogleTags";
import { HashScrollFix } from "@/components/HashScrollFix";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Custom WooCommerce Development Services for Your Store",
  robots: { index: false, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <GoogleTags />
        <HashScrollFix />
        {children}
      </body>
    </html>
  );
}

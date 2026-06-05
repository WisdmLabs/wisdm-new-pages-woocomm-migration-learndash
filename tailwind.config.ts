import type { Config } from "tailwindcss";

// Brand tokens reverse-engineered from wisdmlabs.com (pixel-faithful, per build brief).
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core ink / navy used for headings, header, and footer on wisdmlabs.com
        ink: "#121519", // heading text rgb(18,21,25)
        navy: "#131821", // header/footer + primary button fill rgb(19,24,33)
        accent: "#FFB300", // brand amber rgb(255,179,0)
        muted: "#717171", // secondary text rgb(113,113,113)
        line: "#e5e7eb", // hairline borders
        surface: "#f7f8fa", // light section background
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;

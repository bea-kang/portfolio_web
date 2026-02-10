import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "almost-black": "#121212",
        "dark-gray": "#242424",
        lime: "#CCFF00",
        "text-sub": "#B3B3B3",
        stroke: "#3E3E3E",
      },
      fontSize: {
        h1: ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["2rem", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["0.875rem", { lineHeight: "1.5", fontWeight: "500" }],
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

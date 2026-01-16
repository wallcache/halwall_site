import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Atomic Orange Design System - High Contrast Editorial
        linen: "#FAF3E1",           // Sustainable Linen - Base Background (solid, no gradient)
        cotton: "#F5E7C6",          // Recycled Cotton - Card/Surface
        oatmilk: "#EBEBDF",         // Oatmilk Latte - Tags background
        orange: "#E9631A",          // Atomic Orange - Brand Primary (accents, borders, buttons)
        tangerine: "#FF6D1F",       // Electric Tangerine - Hover Accent / Spotlight glow
        blackhole: "#222222",       // Black Hole - Text Primary (body text, headings)
        secondary: "#555555",       // Text Secondary - Dates and metadata
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.375rem",
        xl: "0.5rem",
        "2xl": "0.5rem",
        "3xl": "0.5rem",
        "4xl": "0.5rem",
        "5xl": "0.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "highlight": "highlight 3.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        highlight: {
          "0%": { boxShadow: "0 0 0 0px #E9631A" },
          "29%": { boxShadow: "0 0 0 0px #E9631A" },
          "30%": { boxShadow: "0 0 0 3px #E9631A" },
          "72%": { boxShadow: "0 0 0 3px #E9631A" },
          "100%": { boxShadow: "0 0 0 0px #E9631A" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

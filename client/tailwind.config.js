import { nextui } from "@nextui-org/react";
import animationPlugin from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // Enables dark mode with class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        kufam: ["Kufam", "sans-serif"],
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        15: "3.75rem",
        20: "5rem",
        25: "6.25rem", // 100px
        30: "7.5rem", // 120px
        35: "8.75rem", // 140px
        40: "10rem", // 160px
        45: "11.25rem", // 180px
        50: "12.5rem", // 200px
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#09090b",
        secondary: "#27272a",
        customTeal: "#36a9ae",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        shine: {
          from: {
            backgroundPosition: "200% 0",
          },
          to: {
            backgroundPosition: "-200% 0",
            "background-position": "0% 0%",
          },
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      animation: {
        shine: "shine var(--duration) infinite linear",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
    },
  },
  plugins: [
    animationPlugin,
    nextui(),
    
  ],
};

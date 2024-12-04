const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enables dark mode with class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        customTeal: "#36a9ae", // Add your custom teal color
      },
      spacing: {
        15: "3.75rem", // Fixed: Added unit "rem"
        20: "5rem",
        25: "6.25rem", // 100px
        30: "7.5rem", // 120px
        35: "8.75rem", // 140px
        40: "10rem", // 160px
        45: "11.25rem", // 180px
        50: "12.5rem", // 200px
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"], // Added custom font family
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Tailwind CSS Animate Plugin
    nextui(), // NextUI Plugin
  ],
};

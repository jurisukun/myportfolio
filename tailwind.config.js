/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quantums: ["var(--font-quantumfont)", ...fontFamily.sans],
        shary: ["var(--font-sharyfont)", ...fontFamily.sans],
        neurosmall: ["var(--font-neurosmall)", ...fontFamily.sans],
        slant: ["var(--font-zeniq)", ...fontFamily.sans],
        averox: ["var(--font-averox)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

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
        cream: "#FDF6EE",
        rose: {
          DEFAULT: "#E8A598",
          dark: "#C4786A",
        },
        sage: "#8FAF8A",
        brown: {
          DEFAULT: "#5C3D2E",
          light: "#8C6A5A",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Lato", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

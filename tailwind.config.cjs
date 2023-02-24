/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        deco: ["Roboto Slab", ...defaultTheme.fontFamily.sans],
        main: ["Roboto Slab", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        neutral: {
          dark: "hsl(250, 24%, 9%)",
          light: "hsl(250, 21%, 11%)",
          accent: "hsl(245, 17%, 15%)",
        },
        primary: {
          light: "hsla(30, 4%, 91%, 1)",
          muted: "hsla(216, 13%, 53%, 1)",
        },
        accent: "hsla(216, 95%, 85%, 1)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        deco: ['"Advent Pro"', ...defaultTheme.fontFamily.sans],
        main: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        neutral: {
          dark: "hsla(214, 18%, 8%, 1)",
          light: "hsla(213, 19%, 9%, 1)",
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

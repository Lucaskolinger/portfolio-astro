/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        advent: ['"Advent Pro"', ...defaultTheme.fontFamily.sans],
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        neutral: {
          dark: "hsla(214, 18%, 8%, 1)",
          light: "hsla(213, 19%, 9%, 1)",
        },
      },
    },
  },
  plugins: [],
};

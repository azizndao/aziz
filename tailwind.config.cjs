const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      primary: colors.purple,
      secondary: colors.indigo,
      tertiary: colors.orange,
      neutral: colors.neutral,
      danger: colors.red,
      warning: colors.yellow,
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black
    },
  },
  plugins: [],
};

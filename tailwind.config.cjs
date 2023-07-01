const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", defaultTheme.fontFamily.sans],
      },
      borderColor: ({ theme }) => theme("colors.neutral.400"),
    },
    colors: {
      primary: colors.indigo,
      secondary: colors.purple,
      tertiary: colors.orange,
      neutral: colors.neutral,
      slate: colors.slate,
      danger: colors.red,
      warning: colors.yellow,
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

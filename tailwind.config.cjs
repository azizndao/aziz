const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

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
      primary: { ...colors.indigo, DEFAULT: colors.indigo[600] },
      secondary: { ...colors.pink, DEFAULT: colors.pink[600] },
      tertiary: { ...colors.orange, DEFAULT: colors.orange[600] },
      neutral: { ...colors.neutral, DEFAULT: colors.neutral[600] },
      slate: { ...colors.slate, DEFAULT: colors.slate[600] },
      danger: { ...colors.red, DEFAULT: colors.red[600] },
      warning: { ...colors.yellow, DEFAULT: colors.yellow[600] },
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
      background: "rgb(var(--bg-color) / <alpha-value>)",
    },
    ringColor: ({ theme }) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.primary"),
    }),
    accentColor: ({ theme }) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.primary"),
    }),
  },
  plugins: [require("@tailwindcss/typography")],
}

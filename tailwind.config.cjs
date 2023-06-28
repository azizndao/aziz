const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      // primary: colors.indigo,
      // secondary: colors.purple,
      // tertiary: colors.orange,
      // neutral: colors.gray,
      // danger: colors.red,
      // warning: colors.yellow,
      // transparent: colors.transparent,
      // white: colors.white,
      // black: colors.black,
      primary: "var(--color-primary)",
      "on-primary": "var(--color-on-primary)",
      "primary-container": "var(--color-primary-container)",
      "on-primary-container": "var(--color-on-primary-container)",
      secondary: "var(--color-secondary)",
      "on-secondary": "var(--color-on-secondary)",
      "secondary-container": "var(--color-secondary-container)",
      "on-secondary-container": "var(--color-on-secondary-container)",
      tertiary: "var(--color-tertiary)",
      "on-tertiary": "var(--color-on-tertiary)",
      "tertiary-container": "var(--color-tertiary-container)",
      "on-tertiary-container": "var(--color-on-tertiary-container)",
      error: "var(--color-error)",
      "on-error": "var(--color-on-error)",
      "error-container": "var(--color-error-container)",
      "on-error-container": "var(--color-on-error-container)",
      surface: "var(--color-surface)",
      "on-surface": "var(--color-on-surface)",
      "surface-variant": "var(--color-surface-variant)",
      "on-surface-variant": "var(--color-on-surface-variant)",
      background: "var(--color-background)",
      "on-background": "var(--color-on-background)",
      outline: "var(--color-outline)",
      "outline-variant": "var(--color-outline-variant)",
      "inverse-on-surface": "var(--color-inverse-on-surface)",
      "on-inverse-on-surface": "var(--color-inverse-on-surface)",
      "inverse-primary": "var(--color-inverse-primary)",
      "color-shadow": "var(--color-color-shadow)",
      "surface-tint": "var(--color-surface-tint)",
      scrim: "var(--color-scrim)",
    },
  },
  plugins: [],
};

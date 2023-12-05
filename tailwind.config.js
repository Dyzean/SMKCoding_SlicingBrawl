/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/**/*.html"
  ],

  theme: {
    fontFamily: {
      display: ["'DM Sans'", ...defaultTheme.fontFamily.sans],
      base: ["'Roboto'", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      boxShadow: {
        btn: "0 0 72px -6px"
      }
    },
  },

  plugins: [],
}


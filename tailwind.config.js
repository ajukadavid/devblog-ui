/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        loginBg: "url('./static/login-splash-pic.png')"
      },
    },
    colors: {
      ...colors,
      'signupBorder': '#1B0042'
    }
  },
  plugins: [],
}


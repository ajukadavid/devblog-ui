/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        loginBg: "url('./static/login-splash-pic.png')"
      }
    },
    colors: {
      ...colors,
      'signupBorder': '#5B6BBC'
    }
  },
  plugins: [],
}
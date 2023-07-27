/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      transitionProperty:{
        height:'height'
      },
      colors:{
        baseTransparent:'var(--base-transparent)',
        baseDark:'var(--base-dark)',
        baseGray:'var(--base-gray)'
      },
      container: {
        center: true,
      },
      background:{
        baseBGPattern:'var(--bas-bg-card-pattern)'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
      colors: {
        "light-white": "rgba(255 , 255 , 255 , 0.19)",
        'color-body': '#b6cbce',
        'color-heading':'#eef3db',
        'color-base':'#033f47',
        'color-base2':'#022a30',
        'color-brand':'#e0f780',
        'color-brand2':'#deff58'
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
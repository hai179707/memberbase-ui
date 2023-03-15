/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#1d1d1d',
        'primary-hover': '#33383f',
        'secondary': '#626a72',
        'secondary-hover': '#33383f',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

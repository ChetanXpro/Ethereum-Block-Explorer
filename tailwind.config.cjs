/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'regal-blue': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 49%, rgba(0,212,255,1) 80%)'
      }
    },
  },
  plugins: [],
}
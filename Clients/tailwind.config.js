/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Rectangle_95' : "url('../public/bg-svg/Rectangle 95.svg')",
        'Rectangle_96':"url('../public/bg-svg/Rectangle 96.svg')",
        'Slide3_2':"url('../public/bg-svg/Slide3 2.svg')",
        'Slide3_3':"url('../public/bg-svg/Slide3 3.svg')",
      },
    },
  },
  plugins: [],
}

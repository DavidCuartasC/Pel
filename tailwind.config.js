/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit',' sans-serif']
      },
      colors: {
        cl1: '#205D55',
        cl2: '#705117',
        cl3: '#DFDCDC'
      }
    },
  },
  plugins: [],
}


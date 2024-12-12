/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: '380px' }, // Custom breakpoint for screens below 375px
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        inter:['Inter', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}
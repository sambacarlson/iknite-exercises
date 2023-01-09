/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'tablet': '640px',
      'desktop': '1024px'
    },
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'primary': '#3F6745',
      'secondary': '#FD661F'
    }
  },
  plugins: [],
}

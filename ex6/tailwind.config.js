/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'poppins':['Poppins', 'sans-serif'],
      },
      dropShadow: {
        'custom': '4px 4px 3px rgba(0, 0, 0, 0.4)',
      },
      boxShadow: {
        'custom': '0px 0px 5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

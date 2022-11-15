/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors:{
        es_green:'#3F6745',
        es_orange: '#FD661F',
        es_dark_green: '#182A1C',
        es_gray: '#F4F3EF',
        es_fair_pink: '#FBD0C0',
        es_dark:'#0B120B',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/**/*.{html,js}"
  ],
  theme: {
    extend: {
     extend: { colors: {
        primary: 'D11619',
        secondary: 'FFFFFF',
        dark: '131313',
      
      },
      fontFamily: {
        poppins: ['Manrope'],
      },
    

          },
  },
  plugins: [],
}}

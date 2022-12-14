/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily:{
        'basic-sans':['basic-sans'],
        'work-sans':['work-sans'],
        'poppins':['Poppins']
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
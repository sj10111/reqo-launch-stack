/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
  plugins: [],
}
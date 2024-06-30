//Restaurant/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        primary:'#CA923D',
        mainbg:'#0B0F1F',
        secondary:'#1F1D2B',
        accent:'#2D303E',
       
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primaryColor: '#17C788',
        secondaryColor: '#F5F5F5',
        customGreen: '#33FF57',
       
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
        muli: ['Mulish', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
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
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
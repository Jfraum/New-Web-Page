/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
      // ...
      'node_modules/flowbite-react/lib/esm/**/*.js',
    ],
    plugins: [
      // ...
      require('flowbite/plugin'),
    ],
  theme: {
    extend: {
      colors: {
        'eacdc2': '#eacdc2',
        '1e1e1e' : '#1e1e1e',
        'ffe8d6' : '#ffe8d6',
      }
    },
  },
  
  plugins: [],
}


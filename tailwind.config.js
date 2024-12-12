/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js", // Incluye los archivos necesarios
  ],
  theme: {
    extend: {
      colors: {
        eacdc2: '#eacdc2',
        '1e1e1e': '#1e1e1e',
        ffe8d6: '#ffe8d6',
      },
    },
  },

  variants: {
    extend: {
      display: ['horizontalsImages'],
    },
  },
  
  plugins: [
    flowbitePlugin, // Usa la importación en lugar de require
  ],
};



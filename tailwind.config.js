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
        'F39C9C': '#F39C9C', //color beig rosado
        '008698': '#008698', //teal fuerte
        '29CDB5': '#29CDB5', //teal claro
        'E0FFFB': '#E0FFFB', // azul super claro
        'ADBC9F': '#ADBC9F',
        'E0FFFB': '#E0FFFB',
        'E0FFFB': '#E0FFFB',
        'E0FFFB': '#E0FFFB',
      },
      keyframes: {
        underline: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        underline: "underline 1s ease-in-out",
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
    function ({ addUtilities }) {
      addUtilities({
        ".animate-underline": {
          position: "relative",
          "&::after": {
            content: "''",
            position: "absolute",
            left: "0",
            bottom: "-2px",
            height: "2px",
            background: "currentColor",
            width: "0%",
            transition: "width 0.5s ease-in-out",
          },
          "&:hover::after": {
            width: "100%",
          },
        },
      });
    },
  ],
};



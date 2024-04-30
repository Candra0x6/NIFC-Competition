/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./web/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      fontFamily: {
        primary: "MarcellusSC",
        latin: "InkFree",
        alata: "Alata",
      },
      colors: {
        cusOrange: "#FFDA57",
        cusBrown: "#573116",
        cusGrey: "#e6e6e6",
      },
      dropShadow: {
        "3xl": "-8px 6px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "MarcellusSC",
          src: "url(/web/src/assets/font/MarcellusSC-Regular.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "InkFree",
          src: "url(/web/src/assets/font/Inkfree.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Alata",
          src: "url(/web/src/assets/font/Alata-Regular.ttf)",
        },
      });
    }),
  ],
};

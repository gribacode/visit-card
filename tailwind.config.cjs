/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "show 2s ease-in-out",
        roulette: "slide 0.4s ease-in-out",
      },
      keyframes: {
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slide: {
          "100%": {
            transform: "translateY(-100%)",
          },
        },
      },
    },
    colors: {
      white: colors.white,
      transparent: colors.transparent,
      black: "#161616",
      red: {
        300: "rgba(219, 75, 75, 0.18)",
        500: "#DB4B4B",
      },
      blue: {
        300: "rgba(144, 141, 255, 0.18)",
        500: "#908DFF",
      },
      breeze: {
        300: "rgba(75, 219, 202, 0.18)",
        500: "#4BDBCA",
      },
      purple: {
        300: "rgba(216, 74, 202, 0.18)",
        500: "#D84ACA",
      },
      yellow: {
        300: "rgba(219, 204, 75, 0.18)",
        500: "#DBCC4B",
      },
      green: {
        300: "rgba(78, 219, 75, 0.18)",
        500: "#3EBE5E",
        700: "#4EDB4B",
      },
      gray: {
        300: "rgba(255, 255, 255, 0.6)",
        500: "#161B22",
        700: "#A2A2A2",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        appPurple: "#a729f5",
        darkNavy: "#313e51",
        navy: "#3b4d66",
        greyNavy: "#626c7f",
        lightBluish: "#abc1e1",
        lightGrey: "#f4f6fa",
        appGreen: "#26d782",
        appRed: "#EE5454",
      },
    },
  },
  plugins: [],
};

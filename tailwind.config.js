const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#2B2B2B',
      'white': '#FFFFFF',
      'purple': '#8743FF',
      'lightPurple': '#CDA3FF',
      'blue': '#4136F1',
      'lightBlue': '#4C83FF',
      'green': '#46DBC9',
    },

    fontFamily: {
      'jost': ['Jost', 'sans-serif']
    }

  },
  plugins: [],
});

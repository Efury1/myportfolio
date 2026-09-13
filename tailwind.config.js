/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        // Windows 98 classic colours
        "win-blue": "#000080",       // active title bar (navy)
        "win-title": "#000080",
        "win-title-inactive": "#808080", // inactive title bar
        "win-gray": "#C0C0C0",        // button face / dialog background
        "win-light-gray": "#DFDFDF",  // button highlight (soft)
        "win-dark-gray": "#808080",   // button shadow
        "win-darker-gray": "#404040", // button dark shadow
        "win-white": "#FFFFFF",       // button highlight (bright) / window bg
        "win-black": "#000000",       // text / borders
        "win-desktop": "#008080",     // teal desktop

        // Windows 98 highlight (selection blue)
        "win-highlight": "#000080",
        "win-highlight-text": "#FFFFFF",

        // Your existing brand colours
        "brand-yellow": "#FFC759",
        "brand-blue": "#607196",
        "brand-purple": "#BABFD1",
        "sky-blue": "#52DCFC",
        "lavender-pink": "#FDADE2",
        "denim": "#0E64C6",
        "pink-lavender": "#DBAFD3",
        "true-blue": "#4C6E9B",
        "background-peach": "#FDE2D0",
        cream: "#FFF7E6",
        brown: "#5C4033",
        pink: "#FF6F91",
        "dark-brown": "#4A2C2A",
      },

      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },

      zIndex: {
        100: "100",
      },
    },
  },

  plugins: [],
};
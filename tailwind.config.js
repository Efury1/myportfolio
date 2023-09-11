const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'yellow': '#FFC759',
      'pink': '#FF7B9C',
      'blue': '#607196',
      'purple': '#BABFD1',
      'white': '#E8E9ED',
      'sky-blue': '#52DCFCff',
      'lavender-pink': '#FDADE2ff',
      'denim':'#0E64C6ff',
      'pink-lavender': '#DBAFD3ff',
      'true-blue': '#4C6E9Bff',
    },
    extend: {},
  },
  plugins: [],
}
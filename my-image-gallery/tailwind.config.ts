const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};

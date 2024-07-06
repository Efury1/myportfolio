const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

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
      transparent: 'transparent',
      current: 'currentColor',
      'yellow': '#FFC759',
      'blue': '#607196',
      'purple': '#BABFD1',
      'white': '#FFFFFF',
      'sky-blue': '#52DCFCff',
      'lavender-pink': '#FDADE2ff',
      'denim': '#0E64C6ff',
      'pink-lavender': '#DBAFD3ff',
      'true-blue': '#4C6E9Bff',
      // New colors from the image
      'background-peach': '#FDE2D0',
      'cream': '#FFF7E6',
      'brown': '#5C4033',
      'pink': '#FF6F91',
      'dark-brown': '#4A2C2A',
    },
    extend: {
      fontFamily: {
        // add the css variable and include fallback fonts from tailwind default theme
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      zIndex: {
        '100': '100',
      },
    },
  },
  plugins: [],
};

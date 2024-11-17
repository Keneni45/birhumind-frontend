/** @type {import('tailwindcss').Config} */
export default {
  // i want to add a new color to the tailwindcss config with rgba of background: rgba(195, 0, 0, 1);

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-red': 'rgba(195, 0, 0, 1)',
        'light-red': 'rgba(255, 4, 0, 0.86)',
        'dark-red': 'rgba(141, 0, 2, 1)',
        'dim-red': 'rgba(255, 4, 0, 0.47)',
        'superLight-red': 'rgba(254, 247, 255, 1)',
        'shape-red': 'rgba(255, 141, 141, 1)',
        'white-bg': 'rgba(255, 255, 255, 1)',
        'custom-black': 'rgba(42, 40, 47, 1)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 9px 0 rgba(0, 0, 0, 0.1)', // Define your custom shadow here
        'custom-lg': '14px 13px 21px 0px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'xs': {'max': '639px'},  // Define a custom screen size for max 639px
      },
      fontWeight: {
        'extra-bold': '800',
        'bold-black': '900',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mjs}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'oklch(70% 0.15 250)',
        accent: 'oklch(85% 0.2 145)',
      },
      fonts: {
        // Custom fonts can be added here
      },
      typography: {
        DEFAULT: {
          css: {
            'font-size': 'clamp(1rem, 2.5vw + 1rem, 2rem)',
            'line-height': 'clamp(1.5rem, 2.5vw + 1.5rem, 3rem)',
          },
        },
      },
      gridTemplateColumns: {
        'bento': 'repeat(auto-fill, minmax(200px, 1fr))', // Custom Bento Grid
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },
    colors: {
      'link-soft-red': 'hsl(7, 99%, 70%)',
      'link-yellow': 'hsl(51, 100%, 49%)',
      'graphic-design-text-color': 'hsl(167, 40%, 24%)',
      'photography-text-color': 'hsl(198, 62%, 26%)',
      'footer-text-color': 'hsl(168, 34%, 41%)',
      'heading-text-color': 'hsl(212, 27%, 19%)',
      'white': 'hsl(0, 0%, 100%)',
      'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
      'dark-grayish-blue': 'hsl(232, 10%, 55%)',
      'grayish-blue': 'hsl(210, 4%, 67%)',
      'footer-background-color': '#90d4c5',
    },
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      fraunces: ['Fraunces', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}


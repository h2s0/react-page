/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        'suit': ['IBM Plex Sans KR']
      },
      backgroundImage: {
        'hero': 'url("/hero.jpg")',
      }
    },
  },
  plugins: [],
};
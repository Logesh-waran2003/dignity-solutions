/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#BA1B81',
        secondary: '#47398E',
        accent: '#0c4da2',
        dark: '#141d38',
        'gray-light': '#f0f3f9',
        'text-body': '#666666',
      },
    },
  },
  plugins: [],
}

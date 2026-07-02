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
        primary: '#0c4da2',
        'primary-dark': '#09397a',
        secondary: '#f7a906',
        dark: '#141d38',
        'gray-light': '#f0f3f9',
        'text-body': '#666666',
      },
    },
  },
  plugins: [],
}

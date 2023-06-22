/* eslint-disable sort-keys */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.tsx'
  ],
  plugins: [],
  theme  : {
    extend: {
      colors: {
        classy: {
          50 : '#fff9eb',
          100: '#ffedc6',
          200: '#ffd988',
          300: '#ffc14e',
          400: '#ffa720',
          500: '#f98307',
          600: '#dd5e02',
          700: '#b73e06',
          800: '#942f0c',
          900: '#7a280d',
          950: '#461202'
        }
      },
      fontFamily: { sans: 'Rosa Sans, sans-serif' }
    }
  }
}

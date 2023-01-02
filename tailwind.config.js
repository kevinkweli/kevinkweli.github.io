/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        andika: ['"Andika"', 'sans-serif'],
        andika_Kawaida: ['"Prompt"', 'sans-serif'],
        andikaKubwa: ['"Noto Sans JP"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },

      colors: {
        blackish: '#000000',
        blueThing: '#EDF2F4',
        grayMatter: '#5A5757',
        whiting: '#F8F8F8'
      }
    },
  },
  plugins: [],
}

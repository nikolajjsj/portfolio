module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './public/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      }
    }
  },
}

module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'mx2xl': {'max': '1535px'},
      'mxxl': {'max': '1279px'},
      'mxlg': {'max': '1023px'},
      'mxmd': {'max': '767px'},
      'mxsm': {'max': '639px'},
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: [
    './_site/**/*.html',
    './js/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'Asap':'Asap'
    },
    colors:{
      'myGreen':'#10495C',
      'myYellow':'#F2AD5F',
      'myGold':'#986121',
      'myGray':'#B0C3C9',
      'myBlack':'#0F1D37',
      'white':'#FFFFFF',
      'myLightGray':'#FAFAFF',
      'myLightBlue':'#EBFAFC',
      'myBlue':'#65D9E4',
      'myMediumGray':'#CACAD2',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

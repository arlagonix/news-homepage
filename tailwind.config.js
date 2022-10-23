module.exports = {
  content: ['./src/*.html'],
  theme: {
    fontFamily: {
      lexendDeca: 'Lexend Deca, sans-serif',
      bigShoulders: 'Big Shoulders Display, sans-serif',
    },
    extend: {
      colors: {
        softOrange: 'hsl(35, 77%, 62%)',
        softRed: 'hsl(5, 85%, 63%)',
        offWhite: 'hsl(36, 100%, 99%)',
        grayishBlue: 'hsl(233, 8%, 79%)',
        darkGrayishBlue: 'hsl(236, 13%, 42%)',
        veryDarkBlue: 'hsl(240, 100%, 5%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

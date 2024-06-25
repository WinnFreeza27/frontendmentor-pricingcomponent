/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily :{
        'manrope' : ['Manrope'],
      },
      colors : {
        'soft-cyan' : '#A5F3EB',
        'strong-cyan' : '#10D5C2',
        'light-grayish-red' : '#FEECE7',
        'light-red' : '#FF8C66',
        'pale-blue' : '#BDCCFF',
        'very-pale-blue' : '#FAFBFF',
        'light-grayish-blue' : '#EAEEFB',
        'toggle-bg' : '#CDD7EE',
        'grayish-blue' : '#858FAD',
        'dark-desaturated-blue' : '#293356',
      },
    },
  },
  plugins: [],
}


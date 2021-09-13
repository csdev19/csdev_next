// eslint-disable-next-line import/no-extraneous-dependencies
const plugin = require('tailwindcss/plugin');

const focusedSiblingPlugin = plugin(({ addVariant }) => {
  addVariant('focused-sibling', ({ container }) => {
    container.walkRules((rule) => {
      // eslint-disable-next-line no-param-reassign
      rule.selector = `:focus + .focused-sibling\\:${rule.selector.slice(1)}`;
    });
  });
});

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cs-gray': '#B6B6B6',
        'cs-red': '#B6B6B6',
        'cs-white': '#FFFFFF',
        'cs-black': '#0E151D',
      }, 
      fontFamily: {
        title: ['Poppins', 'sans-serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['focused-sibling'],
    },
  },
  plugins: [focusedSiblingPlugin],
};
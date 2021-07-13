const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontFamily: {
        Ubuntu: ['Nunito', 'sans-serif'],
      },
      fontSize: {
        12: '0.75rem',
        14: '0.875rem',
        15: '0.9375rem',
        16: '1rem',
        20: '1.25rem',
        26: '1.625rem',
        28: '1.75rem',
        96: '6rem',
      },
      colors: {
        primary: '#9A64E0',
        secondary: '#BACCFD',
        lightBlue: '#B9C0DE',
        fadeLightBlue1: 'rgba(185, 192, 222, 0.1)',
        darkBlue: '#2A2E39',
        darkGray: '#373D48',
        fadeWhite2: 'rgba(255, 255, 255, 0.2)',
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        8.5: '2.125rem',
        9.5: '2.375rem',
        10.5: '2.625rem',
        11.5: '2.875rem',
        12: '3rem',
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        21: '5.25rem',
        22: '5.5rem',
        22.5: '5.625rem',
        23: '5.75rem',
        24: '6rem',
        25: '6.25rem',
        26: '6.5rem',
        30: '7.5rem',
        31: '7.75rem',
        34: '8.5rem',
        36: '9rem',
      },
      borderRadius: {
        6: '6px',
        18: '18px',
        20: '20px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

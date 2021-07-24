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
    screens: {
      '2xs': '375px',
      xs: '475px',
      sm: '580px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1380px',
    },
    extend: {
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif'],
        Ubuntu: ['Ubuntu', 'sans-serif'],
      },
      fontSize: {
        12: '0.75rem',
        14: '0.875rem',
        15: '0.9375rem',
        16: '1rem',
        19: '1.1875rem',
        20: '1.25rem',
        26: '1.625rem',
        28: '1.75rem',
        48: '3rem',
        84: '5.25rem',
        96: '6rem',
        190: '11.875rem',
      },
      colors: {
        primary: '#9A64E0',
        secondary: '#BACCFD',
        lightBlue: '#B9C0DE',
        fadeLightBlue1: 'rgba(185, 192, 222, 0.1)',
        fadeLightBlue2: 'rgba(185, 192, 222, 0.2)',
        fadeLightBlue4: 'rgba(185, 192, 222, 0.4)',
        fadeLightBlue5: 'rgba(185, 192, 222, 0.5)',
        darkBlue: '#2A2E39',
        lightGray: '#CFCFCF',
        gray: '#4D5059',
        gray2: '#BFBFBF',
        darkGray: '#373D48',
        darkGray2: '#434953',
        darkGray3: '#40444F',
        fadeWhite1: 'rgba(255, 255, 255, 0.1)',
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
        13.5: '3.375rem',
        15: '3.75rem',
        15.5: '3.875rem',
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
        33: '8.25rem',
        34: '8.5rem',
        36: '9rem',
        38: '9.5rem',
        38.5: '9.625rem',
        43: '10.75rem',
        44: '11rem',
        45: '11.25rem',
        54: '13.5rem',
        95: '23.75rem',
        90: '22.5rem',
        100: '25rem',
        103.5: '25.875rem',
        130: '33rem',
        160: '40rem',
      },
      maxWidth: {
        62: '15.5rem',
        66: '16.5rem',
      },
      borderRadius: {
        6: '6px',
        10: '10px',
        12: '12px',
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

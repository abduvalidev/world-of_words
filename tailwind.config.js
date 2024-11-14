/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '560px',
        'sm': '640px',
        'md': '768px',
        'lg': '960px',
        'xl': '1180px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
      fontFamily: {
        'monserrat': ["Montserrat", "serif"],
        'copperplate': 'Copperplate',
      },
      colors: {
        primary: '#3D2736',
        secondary: '#4C2D42',
        accent: '#513748',
        dark: '#271220',
        brand: {
          green: {
            500: '#714A63',
            600: '#7A4D6A',
            700: '#4F2D44'
          },
          black: {
            400: '#21151D'
          }
        }
      },
      borderRadius: {
        '28': '1.75rem'
      },
      spacing: {
        'five': '0.3125rem',
        'nine': '0.5625rem',
        15: '0.9375rem',
        1140: '71.25rem',
        "base": '82.375rem',
        'base-2': '120rem'
      },
    },
  },
  plugins: [],
}
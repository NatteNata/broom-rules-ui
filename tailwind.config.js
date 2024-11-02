/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        accent: {
          100: '#73a5ff',
          300: '#4c8dff',
          500: '#397df6',
          700: '#2f68cc',
          900: '#234e99',
        },
        danger: {
          100: '#ff8099',
          300: '#f23d61',
          500: '#cc1439',
          700: '#990f2b',
          900: '#660a1d',
        },
        dark: {
          100: '#4c4c4c',
          300: '#333333',
          400: '#212121',
          500: '#171717',
          700: '#0d0d0d',
          900: '#000000',
        },
        light: {
          100: '#ffffff',
          300: '#f7fbff',
          500: '#edf3fa',
          700: '#d5dae0',
          900: '#8d9094',
        },
        success: {
          100: '#80ffbf',
          300: '#22e584',
          500: '#14cc70',
          700: '#0f9954',
          900: '#0a6638',
        },
        tabs: {
          active: '#73a5ff26',
          hovered: '#234e9926',
        },
        warning: {
          100: '#ffd073',
          300: '#e5ac39',
          500: '#d99000',
          700: '#964d00',
          900: '#643300',
        },
      },
      fontFamily: {
        inter: ['Inter'],
        roboto: ['Roboto'],
      },
    },
  },
}

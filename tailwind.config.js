/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f8e9',
          100: '#e5edc8',
          200: '#d4e1a5',
          300: '#c2d681',
          400: '#b4cd64',
          500: '#a7c449',
          600: '#97b441',
          700: '#82a037',
          800: '#6d8c2e',
          900: '#4a6b1e',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
    },
  },
  plugins: [],
};

const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(
      () => {},
      {
        theme: {
          extend: {
            colors: ({ theme }) => ({
              primary: 'var(--color-primary)',
              secondary: 'var(--color-secondary)'
            })
          }
        }
      }
    )
  ]
};

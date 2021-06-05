module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: 'var(--white)',
        black: 'var(--black)',
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)'
        },
        blue: {
          100: 'var(--blue-100)',
          200: 'var(--blue-200)',
          300: 'var(--blue-300)',
          400: 'var(--blue-400)'
        },
        yellow: {
          100: 'var(--yellow-100)',
          200: 'var(--yellow-200)'
        },
        green: {
          100: 'var(--green-100)'
        },
        red: 'var(--red)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

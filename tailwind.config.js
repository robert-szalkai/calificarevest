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
          100: 'var(--gray-100)'
        },
        blue: {
          100: 'var(--yellow-100)',
          200: 'var(--yellow-200)',
          300: 'var(--yellow-300)',
          400: 'var(--yellow-400)'
        },
        yellow: {
          100: 'var(--yellow-100)',
          200: 'var(--yellow-200)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

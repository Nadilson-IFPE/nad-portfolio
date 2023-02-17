module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(-5deg)' },
        },
      },
      animation: {
        spin: 'spin 3s linear infinite',
        wiggle: 'wiggle 2s linear infinite',
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography', '@tailwindcss/aspect-ratio')],
  variants: {},
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        border: 'border 4s ease infinite',
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      colors: {
        primary: {
          'ash': '#707070;',
          'blue': '#0000EE;',
        }
      },
      fontFamily: {
        mori: ["morigothic", "sans-serif"],
        mori1: ["morigothic1", "sans-serif"],
        mori2: ["morigothic2", "sans-serif"],
        mori3: ["morigothic3", "sans-serif"],
      },
    },
  },
  plugins: [],
}

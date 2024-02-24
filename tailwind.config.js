/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/**/*.{ts,tsx,html,js}", "./public/**.{html}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

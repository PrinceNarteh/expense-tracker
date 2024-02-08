/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#302b54",
        "primary-light": "#3b3364",
        "brand-turquoise": "#00cbfe",
        "brand-orange": "#fa6b4b",
        "brand-yellow": "#ffe945",
      },
    },
  },
  plugins: [],
};

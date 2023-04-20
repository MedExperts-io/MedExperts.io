/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      oswald: ["Playfair Display SC"],
    },
    extend: {},
  },
  plugins: [],
};

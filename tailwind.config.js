/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-yellow-up": " rgba(253,164,175, 1) -50px -50px 50px 0px inset",
        "custom-yellow": " rgba(253,164,175, 1) 0px -80px 50px 20px inset",
      },
      fontFamily: {
        "londrina-outline": ["Londrina Outline", "cursive"],
        "londrina-solid": ["Londrina Solid", "cursive"],
        "ubuntu-font": ["Ubuntu", "cursive"],
        "montserrat-font": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

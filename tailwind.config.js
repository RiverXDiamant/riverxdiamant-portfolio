/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    // set the break points for sm, md, lg and xl
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1536px",
    },
    // add colors within the extend object
    extend: {},
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { max: "540px" },

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

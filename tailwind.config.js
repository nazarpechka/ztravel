module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#979797",
        secondary: "#91CB82",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

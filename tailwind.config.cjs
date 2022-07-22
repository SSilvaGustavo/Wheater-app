/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        day: "url(/src/assets/day-background.png)",
        nigth: "url(/src/assets/nigth-background.png)",
      },
    },
  },
  plugins: [],
};

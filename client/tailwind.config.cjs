/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('./assets/bg.png')",
      },
      colors: {
        primary: "#ef4444",
      },
    },
  },
  plugins: [],
};

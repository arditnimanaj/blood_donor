/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "blood-bg": "url('./assets/red.png')",
      },
      colors: {
        primary: "#ef4444",
      },
    },
  },
  plugins: [],
};

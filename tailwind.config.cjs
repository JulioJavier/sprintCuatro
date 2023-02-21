/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-1000": "#FFE031",
      },
      fontFamily: {
        josefin: "'Josefin Sans', 'serif'",
      },
    },
  },
  plugins: [],
};

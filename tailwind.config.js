/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "25px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#1e293b",
      },
    },
  },
  plugins: [],
};

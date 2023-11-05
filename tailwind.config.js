/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "3xs": "0.5rem",
        "2xs": "0.625rem",
      },
    },
  },
  plugins: [],
}

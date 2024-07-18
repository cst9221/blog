/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**"],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "576px",
      tablet: "768px",
      desktop: "992px"
    },
    colors: {
      primary: "#529E72",
      "primary-dark": "#396f5c",
      secondary: "#c2ffe9",
      "secondary-light": "#e0fff4",
      white: "#fafafa",
      transparent: "transparent",
      current: "currentColor"
    },
    fontSize: {
      "2sm": "0.6rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem"
    }
  },
  plugins: [
    ({addUtilities}) => {
      addUtilities({
        ".contain-paint": {
          contain: "paint"
        }
      })
    },
    require("@tailwindcss/typography")
  ]
}

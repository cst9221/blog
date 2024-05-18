/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**"],
  darkMode: "class",
  theme: {
    // screens: {
    //   // 1280px 보다 큼
    //   lg: "1280px",
    //   // 1280px 보다 작고 768px 보다 큼
    //   md: "768px",
    //   // 768px 보다 작고 576px 보다 큼
    //   sm: "576px"
    //   // 576px 보다 작음
    // },
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   white: "#ffffff",
    //   black: "#101010"
    // },
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)"
      },
      colors: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        gray0: "#f8f9fa",
        gray1: "#f4f5f6",
        gray2: "#e9ecef",
        gray3: "#dee2e6",
        gray4: "#ced4da",
        gray5: "#adb5bd",
        gray6: "#868e96",
        gray7: "#495057",
        gray8: "#343a40",
        gray9: "#212529"
      },
      fontSize: {
        "3xs": "0.5rem",
        "2xs": "0.625rem"
      },
      height: {
        screen: "100vh"
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
        5000: "5000ms"
      }
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

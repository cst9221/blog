/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      // 1280px 보다 큼
      'lg': '1280px',
      // 1280px 보다 작고 768px 보다 큼
      'md': '768px',
      // 768px 보다 작고 576px 보다 큼
      'sm': '576px'
      // 576px 보다 작음
    },
    extend: {
      fontSize: {
        "3xs": "0.5rem",
        "2xs": "0.625rem",
      },
    },
  },
  plugins: [],
}

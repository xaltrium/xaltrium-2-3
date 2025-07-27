/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#25548c",
        secondary: "#95206d",
        accent: "#e7246f",
        teal: "#1bcdbe",
        dark: "#180d3a"
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
      }
    }
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors: {
        dark1: "#000",
        dark2: "#141414",
        light:"#fff",
        brownDark:"#2F1E12",
        brownMedium:"#A37A5F",
        brownLight:"#E3E0D8"
      }
    },
  },
  plugins: [],
}
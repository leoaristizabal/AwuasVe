/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hover: "#b2cce3",
        blue1: "#3694ed",
        blue2: "#7375eeff",
        red1:"#ff103d",
        orange1: "#fead2c",
      },
      boxShadow: {
        'xl': '0px 10px 60px 0px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}

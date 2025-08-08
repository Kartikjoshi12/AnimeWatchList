/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         colors: {
      color1: "#78C0E0",
      color2: "#F1E4F3",
      color3: "#000000",
      color4: "#6F686D",
    },
  },
  plugins: [],
}
}

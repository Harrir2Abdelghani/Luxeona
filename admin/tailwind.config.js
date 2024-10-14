/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#252E8A',
        customPurple: '#9A4D87',  
      },
    },
  },
  plugins: [],
}

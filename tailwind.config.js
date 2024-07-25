/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brownBlack: '#4B3B2B', 
      },
      fontFamily: {
        times: ['Times New Roman', 'sans-serif'], // Define the custom font family
      },
    },
  },
  plugins: [],
}

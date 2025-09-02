/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        instrument: ['"Instrument Sans"', "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
      borderRadius: { card: "1rem" },
    },
  },
  plugins: [],
};

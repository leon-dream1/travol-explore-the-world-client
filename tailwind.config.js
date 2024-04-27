/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: '"Raleway", sans-serif',
        montserrat: '"Montserrat", sans-serif',
        merriweather: '"Merriweather", serif',
        inter: '"Inter", sans-serif',
      },
      backgroundImage: {
        banner1: "url('/public/banner1.jpg')",
        banner2: "url('/public/banner2.jpg')",
        banner3: "url('/public/banner3.jpg')",
        // "banner3" : "url('/public/maldives-island_1203-2584.jpg')",
        banner4: "url('/public/banner4.jpg')",
        banner5: "url('/public/banner5.jpg')",
        banner6: "url('/public/banner6.jpg')",
        banner7: "url('/public/banner7.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};

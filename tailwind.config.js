module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PatuaOne: ["'Patua One', cursive"],
        Londrina: ["'Londrina Outline', cursive"],
      },
      backgroundImage: {
        linkden: "url('/linkden.png')",
        "linkden-blue": "url('/linkden-blue.png')",
        jpmorgan: "url('/jpmorgan.png')",
        citiustech: "url('/citiustech.png')",
        capgemini: "url('/capgemini.png')",
        "jpmorgan-color": "url('/jpmorgan-color.png')",
        "citiustech-color": "url('/citiustech-color.png')",
        "capgemini-color": "url('/capgemini-color.png')",
      },
    },
  },
  plugins: [],
};

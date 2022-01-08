module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PatuaOne: ["'Patua One', cursive"],
        Montserrat: ["'Montserrat', sans-serif"],
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
        "javascript-logo": "url('/js.png')",
        "typescript-logo": "url('/typescript.png')",
        "angular-logo": "url('/angular.png')",
        "react-logo": "url('/react.png')",
        "html-logo": "url('/html.png')",
        "css-logo": "url('/css.png')",
        "spring-logo": "url('/spring.png')",
        "java-logo": "url('/java.png')",
        "scss-logo": "url('/scss.png')",
        "tailwind-logo": "url('/tailwind.png')",
        "bootstrap-logo": "url('/bootstrap.png')",
        "oracle-logo": "url('/oracle.png')",
        "npm-logo": "url('/npm.png')",
        "yarn-logo": "url('/yarn.png')",
        "git-logo": "url('/git.png')",
        "bitbucket-logo": "url('/bitbucket.svg')",
        "github-logo": "url('/github.png')",
        "qpid-logo": "url('/qpid.png')",
        "kafka-logo": "url('/kafka.png')",
        desitarils: "url('/project-desitrails.png')",
        "desitarils-logo": "url('/logo-desitrails.gif')",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(0px)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 3.0s ease-out",
      },
    },
  },
  plugins: [],
};

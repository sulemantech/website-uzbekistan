export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        extrasm: "350px",
        tab: "1200px",
        laptop: "1600px",
        laptop2: "1500px",
        laptopxxl: "1890px",
      },
    },
    fontFamily: {
      SairaCondensed: ["Saira Condensed"],
      SairaSemiCondensed: ["Saira Semi Condensed"],
    },
  },
  plugins: [
    require("postcss-import"),
    require("postcss-nesting"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};

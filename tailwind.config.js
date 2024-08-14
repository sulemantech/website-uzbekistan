/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        white: "#fff",
        "giga-fiber-lila": "#903fff",
        blueviolet: "#8643f5",
        black: "#000",
        lavender: "#f5eeff",
      },
      spacing: {},
      borderRadius: {
        "22xl": "41px",
        sm: "14px",
        lg: "18px",
        "12xs": "1px",
      },
      fontSize: {
        base: "1rem",
        "11xl": "1.875rem",
        "36xl": "3.438rem",
        "31xl": "3.125rem",
        "81xl": "6.25rem",
        inherit: "inherit",
      },
    },
    fontFamily: {
      SairaCondensed: ["Saira Condensed"],
      SairaSemiCondensed: ["Saira Semi Condensed"],
      saira: ["Saira"],
      "saira-condensed": ["'Saira Condensed'"],
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

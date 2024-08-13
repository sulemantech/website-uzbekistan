/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "giga-fiber-lila": "#903fff",
        blueviolet: "#8643f5",
        black: "#000",
        lavender: "#f5eeff",
      },
      spacing: {},
      fontFamily: {
        saira: "Saira",
        "saira-condensed": "'Saira Condensed'",
      },
      borderRadius: {
        "22xl": "41px",
        sm: "14px",
        lg: "18px",
        "12xs": "1px",
      },
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
  corePlugins: {
    preflight: false,
  },
};

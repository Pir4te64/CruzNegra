/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black_cruznegra: "#020202",
        neutral_lightest: "#dfdfdf",
        neutral_lighter: "#bfbfbf",
        neutral_light: "#9f9f9f",
        neutral: "#7f7f7f",
        neutral_dark: "#636363",
        nneutral_darker: "#494949",
        nneutral_darkest: "#2b2b2b",
      },
    },
  },
  plugins: [],
};

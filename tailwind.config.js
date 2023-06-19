/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: "#2e344e",
        html5: "#d84924",
        css3: "#2449d8",
        redux: "#7046b2",
        javascript: "#e4d04b",
        firebase: "#e97b0a",
        router: "#c5021a",
        webpack: "#1b72b6",
        npm: "#f2f2f2",
        node: "#7cc327",
        typescript: "#0374c2",
        nextjs: "#6bc9c4",
        mongodb: "#419241",
        postgressql: "#30628a",
        jest: "#913f56",
        react: "#5ccfee",
      },
    },
  },
  plugins: [],
};

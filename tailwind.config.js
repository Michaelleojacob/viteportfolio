/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logoborder: "##2e344e",
        borderColor: "#2e344e",
      },
    },
  },
  plugins: [],
};

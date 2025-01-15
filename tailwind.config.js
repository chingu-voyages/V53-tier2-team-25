export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"], // 'Inter' with a fallback to serif
        raleway: ["Raleway", "serif"], // 'Raleway' with a fallback to serif
      },
      borderRadius: {
        custom: "12px", // Custom border radius
      },
    },
  },
  plugins: [],
};

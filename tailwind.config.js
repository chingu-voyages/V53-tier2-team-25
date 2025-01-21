export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "serif"], 
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        custom: "12px", // Custom border radius
      },
      width: {
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '84': '21rem',
        '96': '24rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '224': '56rem',
        '256': '64rem',
        '288': '72rem',
      },
    },
  },
  plugins: [],
  screens: {
    xs: '480px',
    sm: '640px', // Mobile devices start here
    md: '768px', // Tablets start here
    lg: '1024px', // Desktops start here
    xl: '1280px', // Large desktops start here
  },
};

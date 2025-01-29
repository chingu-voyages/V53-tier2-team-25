const plugin = require('tailwindcss/plugin'); 

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        textOrange: "#f17528",
        darkGreen: "#528540",
        lightGreen: "#ACD084",
        customBlack: "#262924",
        borderOrange: "#FFFBF1",
        lightYellow: "#FFD66F",
        selectNoneRed: "#DB7157",
        selectAllGreen: "#70AB27",
        neutralLight: "#FFFBF1",
        mediumGray: "#ADADAD",
        alertColor: "#CE5C67",
      },
      textShadow: {
        white: "0 0 5px white, 0 0 10px white, 0 0 15px white",
      },
      borderRadius: {
        custom: "12px", // Custom border radius
        custom10: "10px",
        custom22: "22px",
        custom98: "98px",
      },

      borderWidth: {
        custom5: "5px",
      },
      width: {
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        84: "21rem",
        96: "24rem",
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        192: "48rem",
        224: "56rem",
        256: "64rem",
        288: "72rem",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
  plugins: [
    require('tailwindcss-textshadow'),
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.card-style_tw-config': {
          height: '231px',
          width: '206px',
          border: `1px solid ${theme('colors.greenDark')}`,
          listStyleType: 'none',
          borderRadius: theme('borderRadius.custom'),
        },
      });
    }),
  ],
  screens: {
    sm: "640px", // Mobile devices start here
    md: "768px", // Tablets start here
    lg: "1024px", // Desktops start here
    xl: "1280px", // Large desktops start here
  },
};

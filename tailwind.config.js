/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        darkBlue: "#0F609B",
        midBlue: "#4098D7",
        liteBlue: "#B6E0FE",
        whiteBlue: "#DCEEFB",
        blueGreyDark: "#334E68",
        blueGreyMid: "#829AB1",
        blueGreyLite: "#D9E2EC",
        blueGreyWhite: "#F0F4F8",
      },
    },
  },
  plugins: [],
};

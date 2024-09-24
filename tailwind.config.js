/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/.{html,js,js,md,mdx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: "Roboto Mono",
    },
    fontSize: {
      xs: "8px",
      sm: "10px",
      md: "11px",
      lg: "12px",
      xl: "14px",
    },
    colors: {
      primary: "#FFFFFF",
      secondary: "#FD89B3",
      accent: "#7A2C47",
    },
    width: {
      70: "70%",
      80: "80%",
      83: "83%",
      90: "90%",
      97: "97%",
    },
    letterSpacing: {
      wide: ".25em",
    },
    lineHeight: {
      loose: "15px",
      "extra-loose": "19px",
    },
    extend: {
      backgroundColor: {
        bgColor: "#7d2d49",
        inputBg: "#0000",
      },
      height: {
        22: "22px",
        23: "23px",
        68: "68vh",
        72: "72vh",
      },
      screens: {
        xs: { max: "380px" },
      },
    },
    plugins: [],
  },
};

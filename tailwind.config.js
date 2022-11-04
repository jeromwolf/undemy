const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [ "./pages/**/*.{js,jsx,ts,tsx}",
             "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans],
      },
      colors: {
        mainBg: "#040506",
        searchBar: "#100f14",
        primary: "#100f14",
        textColor: "#b1b1b1",
        collectionBg: "rgba(0,0,0,.4)", 
        dark: '#111111',
        light: '#efefef',
        lightHover: '#d7d7d7',
        muted: '#717171', 
      },
      boxShadow: {
        primaryShadow: "0px 3px 20px rgba(0,0,0,0.4)",
      },

      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },

    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'supra-xlightextended': ['Supra-XLightExtended', 'sans-serif'],
        'supra-xboldextended': ['Supra-XBoldExtended', 'sans-serif'],
        'supra-normalextended': ['Supra-NormalExtended', 'sans-serif'],
      },
      colors: {
        primary: "#0B65C6",
        secondary: "#EEF1F6",
        tertiary: "#0e1133",

        lightBlue: "#E1F6FE",
        lightPink: "#FDEEDC",
        lightGreen: "#E1FDE2",
      },
      lineHeight: {
        12: "1.2",
        13: "1.3",
        16: "1.6",
      },
    },
    screens: {
  
      sm: { max: "600px" },
      xs: { max: "400px" },
   
    },
  },
  plugins: [],
}

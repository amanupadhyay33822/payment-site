/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        deepBlue200: "#181C2E",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
        gradient:"linear-gradient(180deg, rgba(74, 144, 245, 0.21) -34.7%, rgba(125, 186, 244, 0.063) 100% , rgba(125, 186, 244, 0.1295) 100%)",
      },},
  },
  plugins: [],
}

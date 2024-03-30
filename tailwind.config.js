module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-black": "#212435",
        "brand-black2": "#2B2F44",
        "brand-primary": "#0BD88F",
        "brand-secondary": "#00C2FF",
        "light-grey": "#F3F5FF",
        "brand-purple": "#4F08E6",
        "brand-red": "#FF4975",
        "brand-grey": "#737B98",
        "brand-grey-light": "#A0A8C3"
      },
      fontSize: {
        "normal": "16px",
      },
    },
  },
  plugins: [],
};

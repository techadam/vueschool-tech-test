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
        "brand-black:": "#212435",
        "brand-primary": "#0BD88F",
        "light-yellow": "#FDF9EE",
        "light-grey": "#F5F5F5",
        "grey": "#5B6E88",
        "grey2": "#2c364c",
        "grey3": "#8F8F8F",
        "brand-black2:": "#292C26",
        "brand-primary-light": "#FFFCF0",
        "brand-green": "#089115",
        "brand-spot": "#ECB20A",
        "brand-mail": "#EE9430",
        "brand-red": "#E51A3C",
      },
    },
  },
  plugins: [],
};

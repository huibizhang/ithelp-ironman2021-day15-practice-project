module.exports = {
  purge: {
    enabled: true,
    content: [
      "./*.{html,js}",
      "./**/*.{html,js}",
    ],
    options: {
      safelist: [/(bg|ring)-(.*)-(\d{1}0{1,2})/]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

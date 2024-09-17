// const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jetBrainsMono: ['"JetBrains Mono", "Courier New", Courier, monospace'] 
      }
    },
  },
  plugins: [],
}

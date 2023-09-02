/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "telegram-blue-primary": "#0088CC",
        "telegram-blue-secondary": "#179CDE",
        "telegram-gray": "#8C8C8C",
        "telegram-dark": "#333333",
        "telegram-light": "#FFFFFF",
        "soco-dark":"#333",
        "soco-red":"#D11515",
        "soco-gray":"#CCCCCC",
        "soco-light-primary":"#FFFFFF",
        "soco-light-secondary":"#F4F4F4",
      },
    },
  },
  plugins: [],
};

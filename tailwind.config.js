/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray-100':'#F5F5F5',//bg color
        'custom-gray-300':'#D9D9D9',//login form input color
        'custom-gray-600':'#ECECEC',
        'custom-gray-900':'#B5B7B9',

        'custom-purple-400':'#9D8AE7',
        'custom-purple-500':'#694BDB',

        'custom-green-100':'#2AEBC8',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
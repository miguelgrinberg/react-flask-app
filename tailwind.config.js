/** @type {import('tailwindcss').Config} */

// DEFAULT
// background #222B31
// primary #FF424F
// secondary (text) #FFFFFF
// accent (secondary text) #9CA3AF

export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: [
          "Arial"
        ]
      },
      colors: {
        background: "#222B31",
        primary: "#FF424F",
        secondary: "#FFFFFF",
        accent: "#9CA3AF"
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}


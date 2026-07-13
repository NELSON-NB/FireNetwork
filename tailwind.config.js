/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fire:   { DEFAULT: '#E3001B', dark: '#9B0012' },
        steel:  { DEFAULT: '#1A2332', light: '#243447' },
        ember:  { DEFAULT: '#FF6B35' },
        gold:   { DEFAULT: '#F4A261' },
      },
    },
  },
  plugins: [],
}
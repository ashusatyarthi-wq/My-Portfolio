/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a', // Dark grey base
        slate: {
          900: '#141414',
          800: '#262626',
          700: '#404040',
          400: '#a3a3a3',
          300: '#d4d4d4',
          200: '#e5e5e5',
        },
        // Re-mapping old colors to grayscale/silver to avoid breaking classes
        violet: { 200: '#d4d4d4', 400: '#a3a3a3', 500: '#737373', 600: '#404040' },
        indigo: { 200: '#e5e5e5', 400: '#d4d4d4', 500: '#a3a3a3', 600: '#525252' },
        cyan: { 400: '#d4d4d4', 500: '#a3a3a3', 600: '#525252' },
        pink: { 400: '#d4d4d4', 500: '#a3a3a3' },
        emerald: { 400: '#d4d4d4', 500: '#a3a3a3' },
        obsidian: '#0a0a0a',
        midnight: '#050505',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Cleaner, more editorial font
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

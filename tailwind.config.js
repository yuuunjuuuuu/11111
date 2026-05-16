/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Codeit Palette
        primary: {
          50: '#f3e8ff',
          100: '#e9d5ff',
          400: '#a855f7',
          500: '#7d31ff', // Codeit Purple
          600: '#6d28d9',
          700: '#5b21b6',
        },
        secondary: {
          500: '#ec4899', // Pink Accent
        },
        dark: {
          950: '#020617', // Deepest Black/Blue
          900: '#0f172a', // Background
          800: '#1e293b', // Card BG
          700: '#334155', // Border
          600: '#475569', // Slate 600 (Added for Scrollbar Hover)
          400: '#94a3b8', // Muted Text
          200: '#e2e8f0', // Primary Text
        },
      },
      fontFamily: {
        serif: ['"Noto Serif KR"', '"Playfair Display"', 'serif'],
        sans: ['"Noto Sans KR"', '"Inter"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'neon': '0 0 20px rgba(125, 49, 255, 0.3)',
        'glow': '0 0 15px rgba(125, 49, 255, 0.5)',
      },
    },
  },
  plugins: [],
}

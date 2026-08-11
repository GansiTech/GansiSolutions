/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#0A0A0C',
          900: '#121215',
          800: '#1B1B20',
          700: '#2A2A31',
        },
        slate: {
          300: '#C3C6CE',
          400: '#9195A0',
        },
        accent: {
          DEFAULT: '#2F6FED',
          light: '#5B8DFB',
          dark: '#1E4FBF',
          glow: 'rgba(47,111,237,0.35)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'accent-glow': '0 0 40px rgba(47,111,237,0.25)',
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at 50% 0%, rgba(47,111,237,0.15), transparent 60%)',
      },
    },
  },
  plugins: [],
}

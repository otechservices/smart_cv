/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
      },
      boxShadow: {
        'soft':   '0 1px 3px 0 rgb(0 0 0 / .06), 0 1px 2px -1px rgb(0 0 0 / .06)',
        'medium': '0 4px 6px -1px rgb(0 0 0 / .08), 0 2px 4px -2px rgb(0 0 0 / .08)',
        'card':   '0 0 0 1px rgb(99 102 241 / .08), 0 4px 24px -4px rgb(99 102 241 / .12)',
        'glow':   '0 0 0 3px rgb(99 102 241 / .20)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'gradient-soft':    'linear-gradient(135deg, #eef2ff 0%, #ede9fe 100%)',
        'gradient-dark':    'linear-gradient(135deg, #1e1b4b 0%, #2e1065 100%)',
      },
      animation: {
        'fade-in':  'fadeIn .25s ease-out',
        'slide-up': 'slideUp .3s ease-out',
      },
      keyframes: {
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};

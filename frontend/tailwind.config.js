/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if needed
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blushPink: '#333333',
        deepPlum: '#FF6B6B',
        roseGold: '#4A5678',
        offWhite: '#FAF9F9',
        charcoalGray: '#333333',
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideUp: 'slideUp 1s ease-out',
        slide: 'slide 6s ease-in-out infinite',
        slide_reverse: 'slide-reverse 6s ease-in-out infinite',
        spin_slow: 'spin 5s linear infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        animation: {
          fadeIn: 'fadeIn 1.5s ease-in-out forwards',
        },
        slide: {
          '0%, 50%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        'slide-reverse': {
          '0%, 50%': { opacity: 0 },
          '50%, 100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
    },
    },
  },
  },
  plugins: [],
};

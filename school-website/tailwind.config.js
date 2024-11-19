module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slide: 'slide 1s ease-in-out',
      },
    },
  },
  plugins: [],
};

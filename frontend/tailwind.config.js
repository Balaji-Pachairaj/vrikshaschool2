/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      rotate: {
        "x-12": "12deg",
      },

      perspective: {
        1000: "1000px",
      },

      //---
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },

      backgroundImage: {
        whitelight:
          "linear-gradient(96deg, #FFF -4.79%, rgba(255, 255, 255, 0.35) 98.05%)",
      },
    },
  },
  variants: {},
  plugins: [],
};
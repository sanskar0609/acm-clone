/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      textShadow: {
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        darkBlue: "#086795",
        lightBlue: "#6ae6ee",
        primaryBlue: "#0a93c4",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(3.75rem)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        scroll: "scroll 2s ease infinite",
        "fade-in-up": "fadeInUp 0.4s ease-out",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

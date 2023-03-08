const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      slate: colors.slate,
      fuchsia: colors.fuchsia,
      teal: colors.teal,
    },
    keyframes: {
      shake: {
        "0% 50% 100%": { transform: "translateX(-4px)" },
        "25% 75%": { transform: "translateX(4px)" },
      },
    },
    animation: {
      shake: "shake 1s ease-in-out infinite",
    },
  },
};

import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },
          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },
          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },
          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
        color: {
          "0%": { color: "#5468ff" },
          "20%": { color: "#CB9DF0" },
          "40%": { color: "#F0C1E1" },
          "60%": { color: "#FDDBBB" },
          "80%": { color: "#FFF9BF" },
          "100%": { color: "#A8CD89" },
        },
      },
      animation: {
        title: "title 3s ease-out forwards",
        "fade-in": "fade-in 3s ease-in-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
        color: "color 5s infinite alternate",
      },
    },
  },
  plugins: [],
} satisfies Config;

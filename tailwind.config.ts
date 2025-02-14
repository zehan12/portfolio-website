import type { Config } from "tailwindcss";

export default {
    safelist: [
        {
            pattern: /text-(red|green|blue|yellow|indigo|purple|pink)-500/,
        },
        {
            pattern: /bg-(red|green|blue|yellow|indigo|purple|pink)-500\/15/,
        },
    ],
    darkMode: ["class"],
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
                    "0%": {
                        color: "#5468ff",
                    },
                    "20%": {
                        color: "#CB9DF0",
                    },
                    "40%": {
                        color: "#F0C1E1",
                    },
                    "60%": {
                        color: "#FDDBBB",
                    },
                    "80%": {
                        color: "#FFF9BF",
                    },
                    "100%": {
                        color: "#A8CD89",
                    },
                },
            },
            animation: {
                title: "title 3s ease-out forwards",
                "fade-in": "fade-in 3s ease-in-out forwards",
                "fade-left": "fade-left 3s ease-in-out forwards",
                "fade-right": "fade-right 3s ease-in-out forwards",
                color: "color 5s infinite alternate",
                fadeLeft: "fadeLeft 3s linear infinite",
                fadeRight: "fadeRight 3s linear infinite",
                // Custom delays
                "fadeLeft-delay-750": "fadeLeft 3s linear infinite 0.75s",
                "fadeRight-delay-750": "fadeRight 3s linear infinite 0.75s",
                "fadeLeft-delay-1500": "fadeLeft 3s linear infinite 1.5s",
                "fadeRight-delay-1500": "fadeRight 3s linear infinite 1.5s",
                "fadeLeft-delay-2250": "fadeLeft 3s linear infinite 2.25s",
                "fadeRight-delay-2250": "fadeRight 3s linear infinite 2.25s",
            },
            animationDelay: {
                750: "750ms",
                1500: "1500ms",
                2250: "2250ms",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#415dc2",
                "primary-dark": "#2a4090",
                "background-light": "#f8fafc", // slate-50
                "background-dark": "#0f172a", // slate-900
                "surface-dark": "#1e293b", // slate-800
                "navy-900": "#0f172a", // Match background-dark or slightly darker
                "text-dark": "#0F172A", // High contrast for light mode
                "text-muted": "#475569", // Muted text for light mode (slate-600)
                "border-light": "#E2E8F0", // Light mode border (slate-200)
            },
            fontFamily: {
                display: "Space Grotesk, sans-serif",
                body: ["Noto Sans", "sans-serif"]
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                "2xl": "1rem",
                full: "9999px"
            },
            animation: {
                'float': 'float 4s ease-in-out infinite',
                'shimmer': 'shimmer 2s infinite',
                'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            transitionDuration: {
                '400': '400ms',
            }
        },
    },
    plugins: [],
}

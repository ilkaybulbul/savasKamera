/** @type {import('tailwindcss').Config} */

// Colors are CSS variables (see src/index.css) so light/dark is a token swap,
// not a second set of classes on every element.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                canvas: token("canvas"),
                surface: token("surface"),
                ink: token("ink"),
                "ink-soft": token("ink-soft"),
                "ink-muted": token("ink-muted"),
                ghost: token("ghost"),
                line: token("line"),
                accent: token("accent"),
                "accent-ink": token("accent-ink"),
                mint: token("mint"),
                night: token("night"),
                "on-night": token("on-night"),
                brand: token("brand"),
            },
            fontFamily: {
                display: ["Archivo", "system-ui", "sans-serif"],
                sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
            },
            borderRadius: {
                // Radius rule: interactive = full pill, media cards = card/hero, plates inside cards = plate.
                plate: "20px",
                card: "32px",
                hero: "48px",
            },
            maxWidth: {
                page: "1440px",
            },
            transitionTimingFunction: {
                out: "cubic-bezier(0.16, 1, 0.3, 1)",
            },
        },
    },
    plugins: [],
}

// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // ...
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Spectral SC', 'serif'],
            }
        },
    },
    darkMode: "class",
    plugins: [nextui({
        themes: {
            aofg: {
                extend: 'dark',
                colors: {},
            }
        }
    })],
};
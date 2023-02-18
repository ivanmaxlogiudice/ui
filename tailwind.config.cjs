// eslint-disable-next-line @typescript-eslint/no-var-requires
const preset = require('./src/exports/tailwind.preset.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{ts,vue}',
        './docs/**/*.{md,ts,vue}',
    ],
    presets: [preset],
    theme: {
        extend: {

        },
    },
    plugins: [],
}

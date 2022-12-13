/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,vue}"],
    theme: {
        extend: {
            fontFamily:{
                'roboto': ['Roboto']
            },
            colors: {
                'dark-gray': '#2C2C2C',
                'light-gray': '#C0C0C0',
                'dark-blue': '#0084BC',
                'light-blue': '#E9F3FF',
            }
        },
    },
    extend: {},
    plugins: [],
}

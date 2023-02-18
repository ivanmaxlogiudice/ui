// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: colors.sky,
                secondary: colors.gray,
                success: colors.green,
                info: colors.blue,
                warning: colors.orange,
                danger: colors.red,
            },
            boxShadow: {
                focus: '0 1px 1px 0,0 0 0 3px',
            },
        },
    },
}

module.exports = {
    extends: [
        '@ivanmaxlogiudice/eslint-config-vue',
        'plugin:tailwindcss/recommended',
    ],
    plugins: [
        'html',
    ],
    settings: {
        tailwindcss: {
            callees: ['cva'],
            config: 'tailwind.config.cjs',
        },
    },
    overrides: [
        {
            files: ['**/*.md/*.*'],
            rules: {
                'vue/singleline-html-element-content-newline': 'off',
                'vue/padding-line-between-blocks': 'off',
                'vue/block-tag-newline': 'off',
            },
        },
    ],
}

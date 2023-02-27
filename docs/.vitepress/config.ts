import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { mdPlugin } from './configs/plugins'

const nav = [
    { text: 'Guide', link: '/guide/getting-started/installation', activeMatch: '/guide/' },
]

const components = [
    { text: 'Button', link: '/guide/components/button' },
    { text: 'Button Group', link: '/guide/components/button-group' },
    { text: 'Badge', link: '/guide/components/badge' },
]

export default defineConfig({
    title: '@ivanmaxlogiudice/ui',
    lastUpdated: true,
    cleanUrls: true,

    base: '/ui/',

    markdown: {
        lineNumbers: true,
        config: md => mdPlugin(md),
    },

    vite: {
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('../../src', import.meta.url)),
            },
            dedupe: ['vue'],
        },
    },

    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ivanmaxlogiudice/ui' },
        ],

        nav,

        sidebar: [
            {
                text: 'Getting Started',
                items: [
                    { text: 'Installation', link: '/guide/getting-started/installation' },
                ],
            },
            { text: 'Components', items: components },
        ],

        outline: 'deep',
    },
})

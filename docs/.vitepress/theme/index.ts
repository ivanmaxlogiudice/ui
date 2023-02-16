import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import type { Component } from 'vue'
import Demo from '../../components/Demo.vue'
import UI from '@/index'

import './styles/main.css'

const extractFileNameFromPath = (path: string) => path.split('/').at(-1)!.split('.')[0]

export default {
    ...DefaultTheme,

    enhanceApp(ctx: EnhanceAppContext) {
        DefaultTheme.enhanceApp(ctx)

        // Register components
        ctx.app.use(UI)
        ctx.app.component('Demo', Demo)

        // Register Demo Components
        const demos = import.meta.glob('../../components/demos/**/*.vue', { eager: true, import: 'default' })

        Object.entries(demos).forEach(([key, value]) => {
            ctx.app.component(extractFileNameFromPath(key), value as Component)
        })
    },
}

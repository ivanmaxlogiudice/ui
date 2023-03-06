import type { ComponentResolver } from 'unplugin-vue-components'

export const IUIResolver = (): ComponentResolver => ({
    type: 'component',
    resolve: (name: string) => {
        if (name.match(/^I[A-Z]/))
            return { name, from: '@ivanmaxlogiudice/ui' }
    },
})

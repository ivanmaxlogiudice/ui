import type { App } from 'vue'
import * as components from './components'

export * from './components'
export * from './resolver'

export default {
    install(app: App) {
        Object.entries(components).forEach(([key, value]) => app.component(key, value))

        return app
    },
}

---
outline: deep
---

# Quick start

## 1. Installation

Install via your favorite package manager.

::: code-group

```bash [pnpm]
pnpm add @ivanmaxlogiudice/ui
```

```bash [npm]
npm add @ivanmaxlogiudice/ui
```

```bash [yarn]
yarn add @ivanmaxlogiudice/ui
```

:::

## 2. Setup TailwindCSS

If you dont have TailwindCSS 3 installed in your project, please see the [install guide](https://tailwindcss.com/docs/guides/vite) before proceeding.

Add the preset *preset* to your TailwindCSS configuration file and the package folder to content section.

```js
/** @type {import('tailwindcss').Config} */ // [!code focus:3]
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,ts}',
        './node_modules/@ivanmaxlogiudice/ui/**/*', // [!code focus]
    ], // [!code focus]
    presets: [ // [!code focus:3]
        require('@ivanmaxlogiudice/ui/preset')
    ],
    theme: {
        extend: {},
    },
    plugins: [],
} // [!code focus]
```

## 3. Usage

After installation, you have many ways to consume the library.

### On-demand import

You need to use the [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) plugin that allow you to auto import the components that you use.

::: code-group

```bash [pnpm]
pnpm add -D unplugin-vue-components
```

```bash [npm]
npm add -D unplugin-vue-components
```

```bash [yarn]
yarn add -D unplugin-vue-components
```

:::

Then add the following to your `vite.config.ts` file.

```ts
import Components from 'unplugin-vue-components/vite'
import { IUIResolver } from '@ivanmaxlogiudice/ui'

export default defineConfig({
    plugins: [
        Components({
            resolvers: [IUIResolver()]
        })
    ]
})
```

### Tree Shaking

You can import the components individually from `@ivanmaxlogiudice/ui`.

```vue
<template>
    <IButton>My Button</IButton> // [!code focus]
</template>

<script setup lang="ts">
import { IButton } from '@ivanmaxlogiudice/ui' // [!code focus]
</script>
```

### Full Import

You can full import all the components in your app.

Add `IUI` to your main entry file.

```ts
// main.ts
...
import IUI from '@ivanmaxlogiudice/ui'

createApp(App).use(IUI).mount('#app')
```

## Volar Support

You can add the `IUI` global component type definition to your `tsconfig.json` file. 
Then [volar](https://github.com/vuejs/language-tools) will help you have a better experience while coding.

```json
// tsconfig.json
{
    "compilerOptions": {
        // ...
        "types": ["@ivanmaxlogiudice/ui/volar"]
    }
}
```
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

:::warning
Please keep in mind, that the components are not registered globally, you still need to import the components per page basis or where you need them, this is done by design.
:::

## 3. Basic Usage

After installation, you may import the components as you need them.

```vue
<template>
    <IButton>My Button</IButton> // [!code focus]
</template>

<script setup lang="ts">
import { IButton } from '@ivanmaxlogiudice/ui' // [!code focus]
</script>
```
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
    <div class="relative flex max-w-4xl space-x-6 p-10">
        <div class="flex flex-col items-center gap-4">
            <div class="flex items-center justify-center gap-2">
                <ITag :closable="closable" :size="size" color="default">Default</ITag>
                <ITag :closable="closable" :size="size" color="primary">Primary</ITag>
                <ITag :closable="closable" :size="size" color="success">Success</ITag>
                <ITag :closable="closable" :size="size" color="info">Info</ITag>
                <ITag :closable="closable" :size="size" color="warning">Warning</ITag>
                <ITag :closable="closable" :size="size" color="danger">Danger</ITag>
            </div>

            <div class="flex items-center justify-center gap-2">
                <ITag :closable="closable" :size="size" variant="outline" color="default">Default</ITag>
                <ITag :closable="closable" :size="size" variant="outline" color="primary">Primary</ITag>
                <ITag :closable="closable" :size="size" variant="outline" color="success">Success</ITag>
                <ITag :closable="closable" :size="size" variant="outline" color="info">Info</ITag>
                <ITag :closable="closable" :size="size" variant="outline" color="warning">Warning</ITag>
                <ITag :closable="closable" :size="size" variant="outline" color="danger">Danger</ITag>
            </div>
        </div>

        <div>
            <div>show <input v-model="show" type="checkbox" /></div>
            <div>closable <input v-model="closable" type="checkbox" /></div>
            <div>
                color
                <select v-model="color">
                    <option value="default">default</option>
                    <option value="primary">primary</option>
                    <option value="success">success</option>
                    <option value="info">info</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                </select>
            </div>
            <div>
                variant
                <select v-model="variant">
                    <option value="solid">solid</option>
                    <option value="outline">outline</option>
                </select>
            </div>
            <div>
                size
                <select v-model="size">
                    <option value="xs">xs</option>
                    <option value="sm">sm</option>
                    <option value="md">md</option>
                    <option value="lg">lg</option>
                </select>
            </div>
            <div>
                shape
                <select v-model="shape">
                    <option value="rounded">rounded</option>
                    <option value="square">square</option>
                </select>
            </div>
        </div>

        <div class="absolute top-2 right-2">
            dark: <input v-model="checked" type="checkbox" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { ITag } from './components'

const checked = ref(false)

const show = ref(true)
const closable = ref(false)
const color = ref<'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'>('default')
const variant = ref<'solid' | 'outline'>('solid')
const size = ref<'xs' | 'sm' | 'md' | 'lg'>('sm')
const shape = ref<'rounded' | 'square'>('rounded')

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    checked.value = true
}
else {
    document.documentElement.classList.remove('dark')
    checked.value = false
}

watch(checked, () => {
    checked.value
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark')
})
</script>

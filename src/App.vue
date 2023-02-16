<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
    <div class="relative flex max-w-4xl space-x-6 p-10">
        <div class="space-y-6">
            <!-- <IBadge variant="secondary">Hola mundo</IBadge> -->
            <div class="space-x-4">
                <IButton size="xs" :color="color" :variant="variant" disabled>Button</IButton>
                <IButton size="sm" :color="color" :variant="variant" disabled>Button</IButton>
                <IButton size="md" :color="color" :variant="variant" disabled>Button</IButton>
                <IButton size="lg" :color="color" :variant="variant" disabled>Button</IButton>
                <IButton size="xl" :color="color" :variant="variant" disabled>Button</IButton>
            </div>

            <div class="space-x-4">
                <IButton size="xs" :color="color" :variant="variant" :disabled="disabled">Button</IButton>
                <IButton size="sm" :color="color" :variant="variant" :disabled="disabled">Button</IButton>
                <IButton size="md" :color="color" :variant="variant" :disabled="disabled">Button</IButton>
                <IButton size="lg" :color="color" :variant="variant" :disabled="disabled">Button</IButton>
                <IButton size="xl" :color="color" :variant="variant" :disabled="disabled">Button</IButton>
            </div>
        </div>

        <div>
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
                    <option value="text">text</option>
                    <option value="link">link</option>
                </select>
            </div>

            <div>
                disabled <input v-model="disabled" type="checkbox" />
            </div>
        </div>

        <div class="absolute top-2 right-2">
            dark: <input v-model="checked" type="checkbox" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { IButton } from './components'

const color = ref<'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'>('default')
const variant = ref<'solid' | 'outline' | 'text' | 'link'>('solid')
const disabled = ref(false)

const checked = ref(false)

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

<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
    <div class="relative flex max-w-4xl space-x-6 p-10">
        <div class="flex items-center space-x-6">
            <div class="space-x-2">
                <IBadge :show="show" :shape="shape" :color="color" :dot="dot" :position="position" :value="9" />
                <IBadge :show="show" :shape="shape" :color="color" :dot="dot" :position="position" :value="99" />
                <IBadge :show="show" :shape="shape" :color="color" :dot="dot" :position="position" :value="999" />
            </div>

            <div>
                <IBadge :show="show" :shape="shape" :color="color" :dot="dot" :position="position" :value="5">
                    <IButton>Button</IButton>
                </IBadge>
            </div>
        </div>

        <div>
            <div>show <input v-model="show" type="checkbox" /></div>
            <div>dot <input v-model="dot" type="checkbox" /></div>
            <div>
                color
                <select v-model="color">
                    <option value="primary">primary</option>
                    <option value="success">success</option>
                    <option value="info">info</option>
                    <option value="warning">warning</option>
                    <option value="danger">danger</option>
                </select>
            </div>
            <div>
                position:
                <select v-model="position">
                    <option value="top-right">top-right</option>
                    <option value="top-left">top-left</option>
                    <option value="bottom-right">bottom-right</option>
                    <option value="bottom-left">bottom-left</option>
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
import { IBadge, IButton } from './components'

const checked = ref(false)

const show = ref(true)
const dot = ref(false)
const color = ref<'primary' | 'success' | 'info' | 'warning' | 'danger'>('primary')
const position = ref<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>('top-right')
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

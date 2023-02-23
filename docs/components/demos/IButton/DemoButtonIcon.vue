<template>
    <div class="space-y-2">
        <div class="flex items-center space-x-2">
            <IButton class="!p-2" color="primary">
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553z" />
                    </svg>
                </template>
            </IButton>

            <IButton rounded class="!p-2" color="success">
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 0 0 5.5 13H9v2.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 1 0-.616-8.958 4.002 4.002 0 1 0-7.753 1.977A3.5 3.5 0 0 0 2 9.5zm9 3.5H9V8a1 1 0 0 1 2 0v5z" clip-rule="evenodd" />
                    </svg>
                </template>
            </IButton>
        </div>

        <div class="flex items-center space-x-2">
            <IButton :icon="ISpinner" color="primary">Loading</IButton>

            <IButton color="success">
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 0 0 5.5 13H9v2.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 1 0-.616-8.958 4.002 4.002 0 1 0-7.753 1.977A3.5 3.5 0 0 0 2 9.5zm9 3.5H9V8a1 1 0 0 1 2 0v5z" clip-rule="evenodd" />
                    </svg>
                </template>
                Download
            </IButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ISpinner } from '../../../../src/components'
</script>

<template>
    <span :class="[ITagStyle({ color, variant, size, rounded })]" @click="onClick">
        <span>
            <slot />
        </span>

        <button v-if="closable" type="button" class="ml-2 inline-flex items-center rounded p-0.5 text-sm transition" aria-label="Remove" @click.stop="onClose">
            <svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>

            <span class="sr-only">Remove tag</span>
        </button>
    </span>
</template>

<script lang="ts" setup>
import { ITagStyle, type ITagStyleProps } from './ITag.theme'

interface ITagProps {
    color?: ITagStyleProps['color']
    variant?: ITagStyleProps['variant']
    size?: ITagStyleProps['size']
    rounded?: boolean
    closable?: boolean
}

defineProps<ITagProps>()

const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void
    (e: 'close', event: MouseEvent): void
}>()

const onClick = (e: MouseEvent) => {
    emit('click', e)
}

const onClose = (e: MouseEvent) => {
    emit('close', e)
}
</script>

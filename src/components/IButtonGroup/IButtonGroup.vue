<template>
    <div
        class="inline-flex [&>:focus]:z-20"
        :class="[
            {
                'w-full': fullWidth,
                'flex-col [&>:first-child]:rounded-b-none [&>:last-child]:rounded-t-none [&>:not(:first-child):not(:last-child)]:rounded-t-none [&>:not(:first-child):not(:last-child)]:rounded-b-none': vertical,
                '[&>:not(:first-child)]:-ml-px [&>:not(:first-child)]:rounded-l-none [&>:not(:last-child)]:rounded-r-none': !vertical,
            },
        ]"
        role="group"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import { type IButtonStyleProps } from '../IButton/IButton.theme'
import { buttonGroupKey } from '@/symbols'

export interface IButtonGroupProps {
    color?: IButtonStyleProps['color']
    variant?: IButtonStyleProps['variant']
    size?: IButtonStyleProps['size']
    fullWidth?: boolean
    disabled?: boolean
    vertical?: boolean
}

const props = defineProps<IButtonGroupProps>()

provide(buttonGroupKey, props)
</script>

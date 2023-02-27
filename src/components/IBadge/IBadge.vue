<template>
    <span class="relative inline-block align-middle">
        <slot />

        <transition
            enter-from-class="transform scale-0"
            enter-active-class="duration-200 ease-[cubic-bezier(0.175,0.885,0.32,1.475)]"
            leave-active-class="duration-200 ease-in"
            leave-to-class="transform scale-0"
        >
            <span v-if="show" v-bind="$attrs" :class="[IBadgeStyle({ color, shape, dot, position: $slots.default ? position : undefined })]">
                {{ formatedValue }}
            </span>
        </transition>
    </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { IBadgeStyle, type IBadgeStyleProps } from './IBadge.theme'

interface IBadgeProps {
    show: boolean
    value?: number | string
    max: number

    color?: IBadgeStyleProps['color']
    position?: IBadgeStyleProps['position']
    shape?: IBadgeStyleProps['shape']
    dot?: boolean
}

const props = withDefaults(defineProps<IBadgeProps>(), {
    show: true,
    max: 99,
    position: 'top-right',
})

const formatedValue = computed(() => props.dot ? '' : (Number(props.value) > props.max) ? `${props.max}+` : props.value)
</script>

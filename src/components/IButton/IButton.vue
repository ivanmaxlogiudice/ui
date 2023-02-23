<template>
    <component
        :is="as"
        :href="hrefValue"
        :to="to"
        :type="(to || href) ? undefined : type"
        :class="[IButtonStyle({ color: _color, variant: _variant, size: _size, rounded, fullWidth: _fullWidth, disabled: _disabled })]"
        :disabled="_disabled || loading"
        :aria-disabled="_disabled || loading || undefined"
    >
        <template v-if="loading">
            <slot name="loading" :loading-text="loadingText">
                <component :is="loadingIcon ?? ISpinner" />

                <span v-if="loadingText">
                    {{ loadingText }}
                </span>
            </slot>
        </template>

        <template v-else-if="icon || $slots.icon">
            <slot name="icon">
                <component :is="icon" />
            </slot>
        </template>

        <span v-if="$slots.default && !(loading && loadingText)">
            <slot />
        </span>
    </component>
</template>

<script lang="ts" setup>
import { type ButtonHTMLAttributes, type Component, computed, inject } from 'vue'
import { ISpinner } from '../ISpinner'
import { IButtonStyle, type IButtonStyleProps } from './IButton.theme'
import { buttonGroupKey } from '@/symbols'

interface IButtonProps {
    color?: IButtonStyleProps['color']
    variant?: IButtonStyleProps['variant']
    size?: IButtonStyleProps['size']

    type?: ButtonHTMLAttributes['type']

    fullWidth?: boolean
    rounded?: boolean
    to?: string | Record<string, unknown>
    href?: string
    icon?: Component
    loading?: boolean
    loadingIcon?: Component
    loadingText?: string
    disabled?: boolean
}

const props = withDefaults(defineProps<IButtonProps>(), {
    type: 'button',
})

const buttonGroupContext = inject(buttonGroupKey, {})

const _color = computed(() => props.color ?? buttonGroupContext?.color)
const _variant = computed(() => props.variant ?? buttonGroupContext?.variant)
const _size = computed(() => props.size ?? buttonGroupContext?.size)
const _fullWidth = computed(() => props.fullWidth ?? buttonGroupContext?.fullWidth)
const _disabled = computed(() => props.disabled ?? buttonGroupContext?.disabled)

const as = computed(() => props.to ? 'router-link' : props.href ? 'a' : 'button')
const hrefValue = computed(() => props.to ? undefined : props.href)
</script>

<template>
    <Component
        :is="as"
        :href="hrefValue"
        :to="to"
        :type="(to || href) ? undefined : type"
        :class="[IButtonStyle({ color: _color, variant: _variant, size: _size, rounded, fullWidth: _fullWidth, disabled: _disabled })]"
        :disabled="_disabled || loading"
        :aria-disabled="_disabled || loading || undefined"
    >
        <template v-if="loading">
            <span>
                <slot name="loading" :loading-text="loadingText">
                    <component :is="loadingIcon ?? ISpinner" class="h-[1.25em] w-[1.25em]" />
                </slot>
            </span>

            <span v-if="loadingText">
                {{ loadingText }}
            </span>
        </template>

        <span v-if="$slots.default && !(loading && loadingText)">
            <slot />
        </span>
    </Component>
</template>

<script lang="ts" setup>
import { type ButtonHTMLAttributes, type Component, computed, inject } from 'vue'
import { ISpinner } from '../ISpinner'
import { IButtonStyle, type IButtonStyleProps } from './IButton.theme'
import { buttonGroupKey } from '@/symbols'

export interface IButtonProps {
    // eslint-disable-next-line vue/require-default-prop
    color?: IButtonStyleProps['color']
    // eslint-disable-next-line vue/require-default-prop
    variant?: IButtonStyleProps['variant']
    // eslint-disable-next-line vue/require-default-prop
    size?: IButtonStyleProps['size']

    type?: ButtonHTMLAttributes['type']

    fullWidth?: boolean
    rounded?: boolean
    to?: string
    href?: string
    loading?: boolean
    loadingIcon?: Component
    loadingText?: string
    disabled?: boolean
}

const props = withDefaults(defineProps<IButtonProps>(), {
    type: 'button',

    to: undefined,
    href: undefined,
    loadingIcon: undefined,
    loadingText: undefined,
    disabled: undefined,
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

/* eslint-disable tailwindcss/no-custom-classname */
import { type VariantProps, cva } from 'class-variance-authority'

export const IBadgeStyle = cva('inline-flex h-[1.67em] min-w-[1.67em] items-center justify-center whitespace-nowrap border px-[0.33em] text-xs font-semibold leading-[1em] text-white', {
    variants: {
        color: {
            primary: 'border-primary-600 bg-primary-500',
            success: 'border-success-600 bg-success-500',
            info: 'border-info-600 bg-info-500',
            warning: 'border-warning-600 bg-warning-500',
            danger: 'border-danger-600 bg-danger-500',
        },
        position: {
            'top-right': 'absolute top-0 right-0 translate-x-[45%] translate-y-[-45%]',
            'top-left': 'absolute top-0 left-0 translate-x-[-45%] translate-y-[-45%]',
            'bottom-right': 'absolute bottom-0 right-0 translate-x-[45%] translate-y-[45%]',
            'bottom-left': 'absolute bottom-0 left-0 translate-x-[-45%] translate-y-[45%]',
        },
        shape: {
            rounded: 'rounded-full',
            square: 'rounded',
        },
        dot: {
            true: '!h-3 !w-3 !min-w-min !p-0',
        },
    },
    defaultVariants: {
        color: 'primary',
        shape: 'rounded',
    },
})

export type IBadgeStyleProps = VariantProps<typeof IBadgeStyle>

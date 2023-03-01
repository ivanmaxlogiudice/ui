/* eslint-disable tailwindcss/no-custom-classname */
import { type VariantProps, cva } from 'class-variance-authority'

export const ITagStyle = cva('inline-flex items-center justify-center border font-medium', {
    variants: {
        color: {
            default: '',
            primary: 'border-primary-400',
            success: 'border-success-400',
            info: 'border-info-400',
            warning: 'border-warning-400',
            danger: 'border-danger-400',
        },
        variant: {
            solid: '',
            outline: '',
        },
        size: {
            xs: 'px-2 py-0.5 text-xs',
            sm: 'px-2.5 py-0.5 text-sm',
            md: 'px-4 py-1 text-sm',
            lg: 'px-5 py-1 text-base',
        },
        rounded: {
            false: 'rounded',
            true: 'rounded-full',
        },
    },
    compoundVariants: [
        { color: 'default', variant: 'solid', class: 'border-gray-300 bg-white text-gray-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 hover:[&>button]:bg-gray-900/10 dark:hover:[&>button]:bg-gray-100/10' },
        { color: 'default', variant: 'outline', class: 'border-gray-300 bg-gray-100 text-gray-700 dark:border-gray-600 dark:bg-gray-500/10 dark:text-gray-200 hover:[&>button]:bg-gray-900/10 dark:hover:[&>button]:bg-gray-100/10' },

        { color: 'primary', variant: 'solid', class: 'bg-primary-400 text-white hover:[&>button]:bg-primary-300' },
        { color: 'primary', variant: 'outline', class: 'border-primary-400 bg-primary-500/10 text-primary-400 hover:[&>button]:bg-primary-500/10' },

        { color: 'success', variant: 'solid', class: 'bg-success-400 text-white hover:[&>button]:bg-success-300' },
        { color: 'success', variant: 'outline', class: 'border-success-400 bg-success-500/10 text-success-400 hover:[&>button]:bg-success-500/10' },

        { color: 'info', variant: 'solid', class: 'bg-info-400 text-white hover:[&>button]:bg-info-300' },
        { color: 'info', variant: 'outline', class: 'border-info-400 bg-info-500/10 text-info-400 hover:[&>button]:bg-info-500/10' },

        { color: 'warning', variant: 'solid', class: 'bg-warning-400 text-white hover:[&>button]:bg-warning-300' },
        { color: 'warning', variant: 'outline', class: 'border-warning-400 bg-warning-500/10 text-warning-400 hover:[&>button]:bg-warning-500/10' },

        { color: 'danger', variant: 'solid', class: 'bg-danger-400 text-white hover:[&>button]:bg-danger-300' },
        { color: 'danger', variant: 'outline', class: 'border-danger-400 bg-danger-500/10 text-danger-400 hover:[&>button]:bg-danger-500/10' },
    ],
    defaultVariants: {
        color: 'default',
        variant: 'solid',
        size: 'sm',
    },
})

export type ITagStyleProps = VariantProps<typeof ITagStyle>

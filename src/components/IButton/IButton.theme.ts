/* eslint-disable tailwindcss/no-custom-classname */
import { type VariantProps, cva } from 'class-variance-authority'

export const IButtonStyle = cva('relative inline-flex select-none appearance-none items-center justify-center space-x-2 whitespace-nowrap font-medium leading-none tracking-wide transition duration-300 focus:shadow-focus focus:outline-none active:shadow-none', {
    variants: {
        color: {
            default: 'enabled:focus:shadow-gray-400/20',
            primary: 'enabled:focus:shadow-primary-400/40',
            success: 'enabled:focus:shadow-success-400/40',
            info: 'enabled:focus:shadow-info-400/40',
            warning: 'enabled:focus:shadow-warning-400/40',
            danger: 'enabled:focus:shadow-danger-400/40',
        },
        variant: {
            solid: 'border shadow-sm',
            outline: 'border shadow-sm',
            text: 'after:absolute after:inset-0 after:scale-50 after:rounded after:opacity-0 after:transition-all after:duration-200 after:ease-in-out after:content-[\'\'] hover:after:scale-100 hover:after:opacity-100 focus:after:scale-100 focus:after:opacity-100',
            link: 'hover:underline disabled:hover:no-underline',
        },
        size: {
            xs: 'px-2 py-1.5 text-xs',
            sm: 'px-3.5 py-2 text-sm',
            md: 'px-5 py-3 text-sm',
            lg: 'px-6 py-3.5 text-base',
            xl: 'px-7 py-4 text-lg',
        },
        rounded: {
            false: 'rounded-md',
            true: 'rounded-full',
        },
        fullWidth: {
            true: 'w-full',
        },
        disabled: {
            true: 'cursor-not-allowed opacity-60 !shadow-none',
        },
    },
    defaultVariants: {
        color: 'default',
        variant: 'solid',
        size: 'md',
        fullWidth: false,
    },
    compoundVariants: [
        { color: 'default', class: 'border-gray-300 text-gray-900 dark:border-gray-600 dark:text-gray-200' },

        { color: 'default', variant: 'solid', class: 'enabled:hover:bg-gray-100 enabled:active:bg-gray-200/80 enabled:dark:bg-gray-700 enabled:dark:hover:bg-gray-800 enabled:dark:active:bg-gray-900/80' },
        { color: 'default', variant: 'outline', class: 'enabled:hover:bg-gray-500/10 enabled:active:bg-gray-500/20' },
        { color: 'default', variant: 'text', class: 'after:bg-gray-400/10' },
        { color: 'default', variant: 'link', class: '' },

        { color: 'primary', variant: 'solid', class: 'border-transparent bg-primary-400 text-white enabled:hover:bg-primary-500 enabled:active:bg-primary-600' },
        { color: 'primary', variant: 'outline', class: 'border-primary-400 text-primary-400 enabled:hover:bg-primary-400/10 enabled:active:bg-primary-400/20' },
        { color: 'primary', variant: 'text', class: 'text-primary-500 after:bg-primary-400/10' },
        { color: 'primary', variant: 'link', class: 'text-primary-500' },

        { color: 'success', variant: 'solid', class: 'border-transparent bg-success-400 text-white enabled:hover:bg-success-500 enabled:active:bg-success-600' },
        { color: 'success', variant: 'outline', class: 'border-success-400 text-success-400 enabled:hover:bg-success-400/10 enabled:active:bg-success-400/20' },
        { color: 'success', variant: 'text', class: 'text-success-500 after:bg-success-400/10' },
        { color: 'success', variant: 'link', class: 'text-success-500' },

        { color: 'info', variant: 'solid', class: 'border-transparent bg-info-400 text-white enabled:hover:bg-info-500 enabled:active:bg-info-600' },
        { color: 'info', variant: 'outline', class: 'border-info-400 text-info-400 enabled:hover:bg-info-400/10 enabled:active:bg-info-400/20' },
        { color: 'info', variant: 'text', class: 'text-info-500 after:bg-info-400/10' },
        { color: 'info', variant: 'link', class: 'text-info-500' },

        { color: 'warning', variant: 'solid', class: 'border-transparent bg-warning-400 text-white enabled:hover:bg-warning-500 enabled:active:bg-warning-600' },
        { color: 'warning', variant: 'outline', class: 'border-warning-400 text-warning-400 enabled:hover:bg-warning-400/10 enabled:active:bg-warning-400/20' },
        { color: 'warning', variant: 'text', class: 'text-warning-500 after:bg-warning-400/10' },
        { color: 'warning', variant: 'link', class: 'text-warning-500 enabled:hover:text-warning-600' },

        { color: 'danger', variant: 'solid', class: 'border-transparent bg-danger-400 text-white enabled:hover:bg-danger-500 enabled:active:bg-danger-600' },
        { color: 'danger', variant: 'outline', class: 'border-danger-400 text-danger-400 enabled:hover:bg-danger-400/10 enabled:active:bg-danger-400/20' },
        { color: 'danger', variant: 'text', class: 'text-danger-500 after:bg-danger-400/10' },
        { color: 'danger', variant: 'link', class: 'text-danger-500' },
    ],
})

export type IButtonStyleProps = VariantProps<typeof IButtonStyle>

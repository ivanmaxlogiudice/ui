/* eslint-disable tailwindcss/no-custom-classname */
import { type VariantProps, cva } from 'class-variance-authority'

export const IButtonStyle = cva('relative inline-flex select-none appearance-none items-center justify-center space-x-2 whitespace-nowrap font-medium leading-none transition duration-300 focus:shadow-focus focus:outline-none active:shadow-none', {
    variants: {
        color: {
            default: 'enabled:focus:shadow-slate-400/40',
            primary: 'enabled:focus:shadow-primary-400/40',
            success: 'enabled:focus:shadow-success-400/40',
            info: 'enabled:focus:shadow-info-400/40',
            warning: 'enabled:focus:shadow-warning-400/40',
            danger: 'enabled:focus:shadow-danger-400/40',
        },
        variant: {
            solid: 'border shadow-md',
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
        { color: 'default', class: 'text-slate-900 dark:text-slate-200' },
        { color: 'default', variant: 'solid', class: 'border-slate-300 bg-white focus:border-slate-400 focus:shadow-slate-200/60 enabled:active:bg-gray-100 dark:border-slate-600 dark:bg-slate-700 dark:focus:shadow-slate-400/10 dark:enabled:active:bg-slate-800' },
        { color: 'default', variant: 'outline', class: 'border-slate-500 enabled:hover:bg-slate-500/10 enabled:active:bg-slate-500/20' },
        { color: 'default', variant: 'text', class: 'after:bg-slate-400/10' },
        { color: 'default', variant: 'link', class: '' },

        { color: 'primary', variant: 'solid', class: 'border-primary-400 bg-primary-400 text-white enabled:hover:border-primary-300 enabled:hover:bg-primary-300 enabled:active:border-primary-500 enabled:active:bg-primary-500' },
        { color: 'primary', variant: 'outline', class: 'border-primary-400 text-primary-400 enabled:hover:bg-primary-400/10 enabled:active:bg-primary-400/20' },
        { color: 'primary', variant: 'text', class: 'text-primary-500 after:bg-primary-400/10' },
        { color: 'primary', variant: 'link', class: 'text-primary-500' },

        { color: 'success', variant: 'solid', class: 'border-success-400 bg-success-400 text-white enabled:hover:border-success-300 enabled:hover:bg-success-300 enabled:active:border-success-500 enabled:active:bg-success-500' },
        { color: 'success', variant: 'outline', class: 'border-success-400 text-success-400 enabled:hover:bg-success-400/10 enabled:active:bg-success-400/20' },
        { color: 'success', variant: 'text', class: 'text-success-500 after:bg-success-400/10' },
        { color: 'success', variant: 'link', class: 'text-success-500' },

        { color: 'info', variant: 'solid', class: 'border-info-400 bg-info-400 text-white enabled:hover:border-info-300 enabled:hover:bg-info-300 enabled:active:border-info-500 enabled:active:bg-info-500' },
        { color: 'info', variant: 'outline', class: 'border-info-400 text-info-400 enabled:hover:bg-info-400/10 enabled:active:bg-info-400/20' },
        { color: 'info', variant: 'text', class: 'text-info-500 after:bg-info-400/10' },
        { color: 'info', variant: 'link', class: 'text-info-500' },

        { color: 'warning', variant: 'solid', class: 'border-warning-400 bg-warning-400 text-white enabled:hover:border-warning-300 enabled:hover:bg-warning-300 enabled:active:border-warning-500 enabled:active:bg-warning-500' },
        { color: 'warning', variant: 'outline', class: 'border-warning-400 text-warning-400 enabled:hover:bg-warning-400/10 enabled:active:bg-warning-400/20' },
        { color: 'warning', variant: 'text', class: 'text-warning-500 after:bg-warning-400/10' },
        { color: 'warning', variant: 'link', class: 'text-warning-500 enabled:hover:text-warning-600' },

        { color: 'danger', variant: 'solid', class: 'border-danger-400 bg-danger-400 text-white enabled:hover:border-danger-300 enabled:hover:bg-danger-300 enabled:active:border-danger-500 enabled:active:bg-danger-500' },
        { color: 'danger', variant: 'outline', class: 'border-danger-400 text-danger-400 enabled:hover:bg-danger-400/10 enabled:active:bg-danger-400/20' },
        { color: 'danger', variant: 'text', class: 'text-danger-500 after:bg-danger-400/10' },
        { color: 'danger', variant: 'link', class: 'text-danger-500' },
    ],
})

export type IButtonStyleProps = VariantProps<typeof IButtonStyle>

import type { InjectionKey } from 'vue'
import type { IButtonGroupProps } from './components/IButtonGroup/IButtonGroup.vue'

export const buttonGroupKey: InjectionKey<IButtonGroupProps> = Symbol('IButtonGroup')

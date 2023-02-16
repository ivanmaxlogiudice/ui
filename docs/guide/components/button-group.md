# Button Group

Used to group related buttons.

## Import

```js
import { IButtonGroup } from '@ivanmaxlogiudice/ui'
```

<!-- 👉 Usage -->
::::card ## Usage

The buttons can be grouped by wrapping them with the `IButtonGroup` component. They need to be immediate children.

:::code DemoButtonGroupUsage
<<< @/components/demos/IButtonGroup/DemoButtonGroupUsage.vue
:::

::::

<!-- 👉 Color -->
::::card ### Color

Use the `color` prop to change the color of buttons.

:::code DemoButtonGroupColor
<<< @/components/demos/IButtonGroup/DemoButtonGroupColor.vue
:::

::::

<!-- 👉 Variants -->
::::card ### Variants

Use the `variant` prop to change the visual style of the buttons.

:::code DemoButtonGroupVariants
<<< @/components/demos/IButtonGroup/DemoButtonGroupVariants.vue
:::

::::

<!-- 👉 Size -->
::::card ### Size

Use the `size` prop to change the size of the buttons.

:::code DemoButtonGroupSize
<<< @/components/demos/IButtonGroup/DemoButtonGroupSize.vue
:::

::::

<!-- 👉 Block -->
::::card ### Block

Use the `fullWidth` to make the buttons use 100% width.

:::code DemoButtonGroupBlock
<<< @/components/demos/IButtonGroup/DemoButtonGroupBlock.vue
:::

::::

<!-- 👉 Vertical -->
::::card ### Vertical

Use the `vertical` to make the buttons be displayed vertically.

:::code DemoButtonGroupVertical
<<< @/components/demos/IButtonGroup/DemoButtonGroupVertical.vue
:::

::::

<!-- 👉 Disabled -->
::::card ### Disabled

Use the `disabled` prop prevents any actions with buttons.

:::code DemoButtonGroupDisabled
<<< @/components/demos/IButtonGroup/DemoButtonGroupDisabled.vue
:::

## Props

| Prop        | Description                       | Accepted Values                                           | Default   |
| :---------- | :-------------------------------- | :-------------------------------------------------------- | :-------- |
| `color`     | The color of the buttons.         | `default` `primary` `success` `info` `warning` `danger`   | `primary` |
| `variant`   | The variant of the buttons.       | `solid` `outline` `link`                                  | `solid`   |
| `size`      | The size of the buttons.          | `xs` `sm` `md` `lg` `xl`                                  | `md`      |
| `fullWidth` | Take full width.                  | `Boolean`                                                 | `false`   |
| `disabled`  | Whether the buttons are disabled. | `Boolean`                                                 | `false`   |
| `vertical`  | Vertical component orientation.   | `Boolean`                                                 | `false`   |

## Accessibility

- The component has <code>role</code> of <code>group</code>.
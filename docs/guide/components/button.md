# Buttons

Buttons allow the user to take actions or make choices.

## Import

```js
import { IButton } from '@ivanmaxlogiudice/ui'
```

<!-- 👉 Usage -->
::::card ## Usage

:::code DemoButtonUsage
<<< @/components/demos/IButton/DemoButtonUsage.vue
:::

::::

<!-- 👉 Colors -->
::::card ### Colors

Use the `color` prop to change the color of the button.

:::code DemoButtonColors
<<< @/components/demos/IButton/DemoButtonColors.vue
:::

::::

<!-- 👉 Sizes -->
::::card ### Sizes

Use the `size` prop to change the size of the button.

:::code DemoButtonSizes
<<< @/components/demos/IButton/DemoButtonSizes.vue
:::

::::

<!-- 👉 Variants -->
::::card ### Variants

Use the `variant` prop to change the visual style of the button.

:::code DemoButtonVariants
<<< @/components/demos/IButton/DemoButtonVariants.vue
:::

::::

<!-- 👉 Rounded -->
::::card ### Rounded

Use the `rounded` props to make the button rounded.

:::code DemoButtonRounded
<<< @/components/demos/IButton/DemoButtonRounded.vue
:::

::::

<!-- 👉 Tag -->
::::card ### Tag

You can change the tag of the `Button` wrapper to any other necessary one. However, we recommend to use other properties. For example, if the `href` property is set, then `Button` will be replaced with `a`, and if the value of the `to` property is passed, the `Button` tag will automatically change to `router-link`.

:::code DemoButtonTag
<<< @/components/demos/IButton/DemoButtonTag.vue
:::

::::

<!-- 👉 Loading State -->
::::card ### Loading State

Use the `loading` prop to show its loading state.

You can also pass the `loadingText` prop to show a spinner and the loading text.

::: tip
You can use the `loading` slot or `loadingIcon` prop to customize the loading component.

INFO: The `loading` slot has higher priority than `loadingIcon` prop.
:::

:::code DemoButtonLoadingState
<<< @/components/demos/IButton/DemoButtonLoadingState.vue
:::

::::

<!-- 👉 Disabled -->
::::card ### Disabled

The `disabled` prop prevents any actions with button.

:::code DemoButtonDisabled
<<< @/components/demos/IButton/DemoButtonDisabled.vue
:::

::::

<!-- 👉 Block -->
::::card ### Block

The `fullWidth` prop to make a block button.

:::code DemoButtonBlock
<<< @/components/demos/IButton/DemoButtonBlock.vue
:::

::::

## Props

| Prop          | Description                               | Accepted Values                                                                          | Default     |
| :------------ | :---------------------------------------- | :--------------------------------------------------------------------------------------- | :---------- |
| `color`       | The color of the button.                  | `default` `primary` `success` `info` `warning` `danger`                                  | `default`   |
| `variant`     | The variant of the button.                | `solid` `outline` `text` `link`                                                          | `solid`     |
| `size`        | The size of the button.                   | `xs` `sm` `md` `lg` `xl`                                                                 | `md`        |
| `rounded`     | Rounded corners.                          | `Boolean`                                                                                | `false`     |
| `fullWidth`   | Take full width.                          | `Boolean`                                                                                | `false`     |
| `to`          | The destination for a router link.        | `String` <code>[RouteLocationRaw](https://router.vuejs.org/api/#routelocationraw)</code> | `undefined` |
| `href`        | The destination for a regular link.       | `String`                                                                                 | `undefined` |
| `type`        | The HTML type attribute of the button.    | `submit` `reset` `button`                                                                | `button`    |
| `loading`     | Whether the button is in a loading state. | `Boolean`                                                                                | `false`     |
| `loadingIcon` | Custom loading icon component.            | `Component`                                                                              | `undefined` |
| `loadingText` | Label to show with the loading state.     | `String`                                                                                 | `undefined` |
| `disabled`    | Whether the button is disabled.           | `Boolean`                                                                                | `false`     |

## Slots

| Name    | Description                                                                |
| :------ | :------------------------------------------------------------------------- |
| default | Default slot for button's content.                                         |
| loading | Slot for loading state. Slot scope properties available: `{ loadingText }` |

# Tag

Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.

## Import

```js
import { ITag } from '@ivanmaxlogiudice/ui'
```

<!-- 👉 Usage -->
::::card ## Usage

:::code DemoTagUsage
<<< @/components/demos/ITag/DemoTagUsage.vue
:::

::::

<!-- 👉 Colors -->
::::card ### Colors

Use the `color` prop to change the color of the tag.

:::code DemoTagColors
<<< @/components/demos/ITag/DemoTagColors.vue
:::

::::

<!-- 👉 Size -->
::::card ### Size

Use the `size` prop to change the color of the tag.

:::code DemoTagSize
<<< @/components/demos/ITag/DemoTagSize.vue
:::

::::

<!-- 👉 Variants -->
::::card ### Variants

Use the `variant` prop to change the visual style of the tag.

:::code DemoTagVariants
<<< @/components/demos/ITag/DemoTagVariants.vue
:::

::::

<!-- 👉 Rounded -->
::::card ### Rounded

Use the `rounded` props to make the tag rounded.

:::code DemoTagRounded
<<< @/components/demos/ITag/DemoTagRounded.vue
:::

::::

<!-- 👉 Closable -->
::::card ### Closable

Use the `closable` prop can make the label display the close button, and the closing event can be used to realize the increase or decrease of the label.

:::code DemoTagClosable
<<< @/components/demos/ITag/DemoTagClosable.vue
:::

::::

## Props

| Prop          | Description                                  | Accepted Values                                         | Default     |
| :------------ | :------------------------------------------- | :------------------------------------------------------ | :---------- |
| `color`       | The color of the tag.                        | `default` `primary` `success` `info` `warning` `danger` | `default`   |
| `variant`     | The variant of the tag.                      | `solid` `outline`                                       | `solid`     |
| `size`        | The size of the tag.                         | `xs` `sm` `md` `lg`                                     | `sm`        |
| `rounded`     | Rounded corners.                             | `Boolean`                                               | `false`     |
| `closable`    | Whether the tag has a close function.        | `Boolean`                                               | `false`     |

## Events

| Name  | Description                                                         | Parameters                  |
| :---- | :------------------------------------------------------------------ | :-------------------------- |
| click | Emitted when the tag is clicked.                                    | `(event: MouseEvent): void` |
| close | Emitted when the tag can be closed and the close button is clicked. | `(event: MouseEvent): void` |

## Slots

| Name    | Description                                                                                         |
| :------ | :-------------------------------------------------------------------------------------------------- |
| default | Slot for tag content                                                                                |

# Badge

Badges are used to inform the user of the status of specific data.

## Import

```js
import { IBadge } from '@ivanmaxlogiudice/ui'
```

<!-- 👉 Usage -->
::::card ## Usage

:::code DemoBadgeUsage
<<< @/components/demos/IBadge/DemoBadgeUsage.vue
:::

::::

<!-- 👉 Colors -->
::::card ### Colors

Use the `color` prop to change the color of the badge.

:::code DemoBadgeColors
<<< @/components/demos/IBadge/DemoBadgeColors.vue
:::

::::

<!-- 👉 Show -->
::::card ### Show

Use the `show` prop to hide/show the badge.

:::code DemoBadgeShow
<<< @/components/demos/IBadge/DemoBadgeShow.vue
:::

::::

<!-- 👉 Dot -->
::::card ### Dot

Use the `dot` prop to transform the badge into an actual dot.

:::code DemoBadgeDot
<<< @/components/demos/IBadge/DemoBadgeDot.vue
:::

::::

<!-- 👉 Position -->
::::card ### Position

Use the `position` prop to position the badge in the corner of the attached component.

:::code DemoBadgePosition
<<< @/components/demos/IBadge/DemoBadgePosition.vue
:::

::::

<!-- 👉 Max -->
::::card ### Max

Use the `max` prop to cap the numeric value of the content.

:::code DemoBadgeMax
<<< @/components/demos/IBadge/DemoBadgeMax.vue
:::

::::

<!-- 👉 Shape -->
::::card ### Shape

Use the `shape` prop to adjust the roudness.

:::code DemoBadgeShape
<<< @/components/demos/IBadge/DemoBadgeShape.vue
:::

::::

<!-- 👉 Size -->
::::card ### Size

You can use font-size utility to adjust the size of badge.

:::code DemoBadgeSize
<<< @/components/demos/IBadge/DemoBadgeSize.vue
:::

::::

<!-- 👉 Standalone -->
::::card ### Standalone

:::code DemoBadgeStandalone
<<< @/components/demos/IBadge/DemoBadgeStandalone.vue
:::

::::

## Props

| Prop       | Description                        | Accepted Values                                     | Default     |
| :--------- | :--------------------------------- | :-------------------------------------------------- | :---------- |
| `show`     | Whether to display the badge.      | `Boolean`                                           | `true`      |
| `value`    | The badge content.                 | `String` `Number`                                   | `undefined` |
| `max`      | Cap the value of the badge.        | `Number`                                            | `99`        |
| `color`    | The color of the badge.            | `primary` `success` `info` `warning` `danger`       | `primary`   |
| `position` | Set the badge position.            | `top-left` `top-right` `bottom-left` `bottom-right` | `top-right` |
| `shape`    | Adjust the roundness of the badge. | `rounded` `square`                                  | `rounded`   |
| `dot`      | Converts badge to a dot            | `Boolean`                                           | `false`     |

## Slots

| Name    | Description                                                                                         |
| :------ | :-------------------------------------------------------------------------------------------------- |
| default | Content to whether the badge will attach to, can be use without one [standalone](#standalone) mode. |

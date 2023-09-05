# Button

### Intro

Buttons are used to trigger an action, such as submitting a form.

### Install

```javascript
import { createApp } from 'vue';
import { Button } from '@cubui/cubui';

const app = createApp();
app.use(Button);
```

### Type

The button supports six types: `default`, `primary`, `info`, `warning`, `danger`, `success`, the default is `default`.

:::demo

```html
<template>
  <cub-button type="primary">Primary</cub-button>
  <cub-button type="info">Info</cub-button>
  <cub-button type="default">Default</cub-button>
  <cub-button type="danger">Danger</cub-button>
  <cub-button type="warning">Warning</cub-button>
  <cub-button type="success">Success</cub-button>
</template>
```

:::

### Plain

The button is set as a plain button through the `plain` property, the text of the plain button is the button color, and the background is white.

:::demo

```html
<template>
  <cub-button plain type="primary">Plain</cub-button>
  <cub-button plain type="info">Plain</cub-button>
</template>
```

:::

### Disabled

The button is disabled through the `disabled` property, and the button cannot be clicked in the disabled state.

:::demo

```html
<template>
  <cub-button disabled type="primary">Disabled</cub-button>
  <cub-button plain disabled type="info">Disabled</cub-button>
  <cub-button plain disabled type="primary">Disabled</cub-button>
</template>
```

:::

### Shape

Set the button shape through the `shape` property, support circle and square buttons, the default is circle.

:::demo

```html
<template>
  <cub-button shape="square" type="primary">Square</cub-button>
  <cub-button type="info">Round</cub-button>
</template>
```

:::

### Loading

:::demo

```html
<template>
  <cub-button loading type="info"></cub-button>
  <cub-button loading type="warning">Loading...</cub-button>
  <cub-button :loading="isLoading" type="success" @click="changeLoading">Click me!</cub-button>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      let isLoading = ref(false);
      const changeLoading = () => {
        isLoading.value = true;
        setTimeout(() => {
          isLoading.value = false;
        }, 3000);
      };
      return {
        isLoading,
        changeLoading
      };
    }
  };
</script>
```

:::

### Icon

:::demo

```html
<template>
  <cub-button shape="square" plain type="primary">
    <template #icon>
      <StarFill />
    </template>
  </cub-button>
  <cub-button shape="square" type="primary">
    <template #icon>
      <Star />
    </template>
    Star
  </cub-button>
</template>
<script lang="ts">
  import { StarFill, Star } from '@cubfe/icons-vue';
  export default {
    components: { StarFill, Star }
  };
</script>
```

:::

### Size

Support `large`, `normal`, `small`, `mini` four sizes, the default is `normal`.

:::demo

```html
<template>
  <cub-button size="large" type="primary">Large</cub-button>
  <cub-button type="primary">Normal</cub-button>
  <cub-button size="small" type="primary">Small</cub-button>
  <cub-button size="mini" type="primary">Mini</cub-button>
</template>
```

:::

### Block

By default, the button is an inline block-level element. The `block` attribute can set the element type of the button to a block-level element, which is often used to implement banner buttons.

:::demo

```html
<template>
  <cub-button block type="primary">Block Element</cub-button>
</template>
```

:::

### Custom Color

The color of the button can be customized through the color property.

:::demo

```html
<template>
  <cub-button color="#7232dd">Pure</cub-button>
  <cub-button color="#7232dd" plain>Pure</cub-button>
  <cub-button color="linear-gradient(to right, #ff6034, #ee0a24)"> Gradient </cub-button>
</template>
```

:::

## API

### Props

| Attribute | Description                                                           | Type    | Default   |
| --------- | --------------------------------------------------------------------- | ------- | --------- |
| type      | Can be set to `primary` `info` `warning` `danger` `success` `default` | string  | `default` |
| size      | Can be set to `large` `small` `mini` `normal`                         | string  | `normal`  |
| shape     | Can be set to `square` `round`                                        | string  | `round`   |
| color     | Button color, support incoming linear-gradient gradient color         | string  | -         |
| plain     | Whether to be plain button                                            | boolean | `false`   |
| disabled  | Whether to disable button                                             | boolean | `false`   |
| block     | Whether to set display block                                          | boolean | `false`   |
| loading   | Whether to show loading status                                        | boolean | `false`   |

### Slots

| Name    | Description    |
| ------- | -------------- |
| default | button content |
| icon    | button icon    |

### Events

| Event | Description                       | Arguments           |
| ----- | --------------------------------- | ------------------- |
| click | Emitted when component is clicked | `event: MouseEvent` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                   | Default Value                                                                                                                     |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| --cub-button-border-radius             | _25px_                                                                                                                            |
| --cub-button-border-width              | _1px_                                                                                                                             |
| --cub-button-icon-width                | _16px_                                                                                                                            |
| --cub-button-default-bg-color          | _var(--cub-white)_                                                                                                                |
| --cub-button-default-border-color      | _rgba(204, 204, 204, 1)_                                                                                                          |
| --cub-button-default-color             | _rgba(102, 102, 102, 1)_                                                                                                          |
| --cub-button-default-padding           | _0 18px_                                                                                                                          |
| --cub-button-mini-padding              | _0 12px_                                                                                                                          |
| --cub-button-small-padding             | _0 12px_                                                                                                                          |
| --cub-button-small-height              | _28px_                                                                                                                            |
| --cub-button-mini-height               | _24px_                                                                                                                            |
| --cub-button-default-height            | _38px_                                                                                                                            |
| --cub-button-large-height              | _48px_                                                                                                                            |
| --cub-button-large-line-height         | _46px_                                                                                                                            |
| --cub-button-small-line-height         | _26px_                                                                                                                            |
| --cub-button-block-height              | _48px_                                                                                                                            |
| --cub-button-default-line-height       | _36px_                                                                                                                            |
| --cub-button-block-line-height         | _46px_                                                                                                                            |
| --cub-button-default-font-size         | _var(--cub-font-size-2)_                                                                                                          |
| --cub-button-large-font-size           | _var(--cub-button-default-font-size)_                                                                                             |
| --cub-button-small-font-size           | _var(--cub-font-size-1)_                                                                                                          |
| --cub-button-mini-font-size            | _var(--cub-font-size-1)_                                                                                                          |
| --cub-button-mini-line-height          | _1.2_                                                                                                                             |
| --cub-button-disabled-opacity          | _0.68_                                                                                                                            |
| --cub-button-primary-color             | _var(--cub-white)_                                                                                                                |
| --cub-button-primary-border-color      | _var(--cub-primary-color)_                                                                                                        |
| --cub-button-primary-background-color  | _linear-gradient(135deg,var(--cub-primary-color) 0%,var(--cub-primary-color-end) 100%)_                                           |
| --cub-button-info-color                | _var(--cub-white)_                                                                                                                |
| --cub-button-info-border-color         | _rgba(73, 106, 242, 1)_                                                                                                           |
| --cub-button-info-background-color     | _linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%)_                                                   |
| --cub-button-success-color             | _var(--cub-white)_                                                                                                                |
| --cub-button-success-border-color      | _rgba(38, 191, 38, 1)_                                                                                                            |
| --cub-button-success-background-color  | _linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)_     |
| --cub-button-danger-color              | _var(--cub-white)_                                                                                                                |
| --cub-button-danger-border-color       | _rgba(250, 44, 25, 1)_                                                                                                            |
| --cub-button-danger-background-color   | _rgba(250, 44, 25, 1)_                                                                                                            |
| --cub-button-warning-color             | _var(--cub-white)_                                                                                                                |
| --cub-button-warning-border-color      | _rgba(255, 158, 13, 1)_                                                                                                           |
| --cub-button-warning-background-color  | _linear-gradient(135deg,rgba(255, 158, 13, 1) 0%,rgba(255, 167, 13, 1) 45%,rgba(255, 182, 13, 1) 83%,rgba(255, 190, 13, 1) 100%)_ |
| --cub-button-plain-background-color    | _var(--cub-white)_                                                                                                                |
| --cub-button-small-round-border-radius | _var(--cub-button-border-radius)_                                                                                                 |

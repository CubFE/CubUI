# trendarrow

### Intro

### Install

```javascript
import { createApp } from 'vue';
import { TrendArrow } from '@cubui/cubui';

const app = createApp();
app.use(TrendArrow);
```

### Basic Usage

:::demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow :sync-text-color="false" :rate="1" />
    <cub-trend-arrow :sync-text-color="false" :rate="-0.2535" />
  </cub-cell>
</template>
```

:::

### Change text color

:::demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow :rate="10.2365" />
    <cub-trend-arrow :rate="-0.2535" />
  </cub-cell>
</template>
```

:::

### Specify decimal places

:::demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow :digits="0" :rate="10.2365" />
    <cub-trend-arrow :digits="0" :rate="-0.2535" />
  </cub-cell>
</template>
```

:::

### Arrow ahead

:::demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow arrowLeft :rate="0.2535" />
    <cub-trend-arrow arrowLeft :rate="-0.2535" />
  </cub-cell>
</template>
```

:::

### Show sign

:::demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow showSign :rate="1" />
    <cub-trend-arrow showSign :rate="-0.2535" />
  </cub-cell>
</template>
```

:::

### Whether to show 0

:::demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow showSign :rate="0" />
    <cub-trend-arrow showSign showZero :rate="0" />
  </cub-cell>
</template>
```

:::

### Custom color

:::demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow :rate="10.2365" rise-color="rgb(73,143,242)" />
    <cub-trend-arrow :rate="-0.2535" showSign drop-color="rgb(255, 190, 13)" />
    <cub-trend-arrow
      :show-text-color="false"
      showSign
      :rate="-0.2535"
      text-color="rgb(39,197,48)"
      drop-color="rgb(255, 190, 13)"
    />
  </cub-cell>
</template>
```

:::

### Custom icon

::: demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow :rate="10.2365">
      <template #up-icon><Success color="blue" width="18" height="18" /></template>
    </cub-trend-arrow>
    <cub-trend-arrow :rate="-10.2365">
      <template #down-icon><Failure color="red" /></template>
    </cub-trend-arrow>
  </cub-cell>
</template>
<script lang="ts">
  import { Success, Failure } from '@cubfe/icons-vue';
  export default {
    components: { Success, Failure }
  };
</script>
```

:::

## API

### Props

| Attribute       | Description                                                                                    | Type    | Default   |
| --------------- | ---------------------------------------------------------------------------------------------- | ------- | --------- |
| rate            | Value, the arrow is up when it is greater than 0, and the arrow is down when it is less than 0 | number  | -         |
| digits          | decimal precision                                                                              | number  | `2`       |
| show-sign       | Whether to display plus and minus signs                                                        | boolean | `false`   |
| show-zero       | whether to show 0                                                                              | boolean | `false`   |
| arrow-left      | whether to show an arrow to the left of the number                                             | boolean | `false`   |
| sync-text-color | Whether the text color is in sync with the arrow                                               | boolean | `true`    |
| text-color      | text color                                                                                     | string  | `#333333` |
| rise-color      | up arrow color                                                                                 | string  | `#fa2c19` |
| drop-color      | down arrow color                                                                               | string  | `#64b578` |

### Slots

| Name      | Description      |
| --------- | ---------------- |
| up-icon   | custom up icon   |
| down-icon | custom down icon |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                | Default Value |
| ----------------------------------- | ------------- |
| --cub-trendarrow-font-size          | _14px_        |
| --cub-trendarrow-before-icon-margin | _4px_         |

# Sticky

### Intro

Use fixed positioning to achieve a ceiling effect similar to `position: sticky`.

### Install

```js
import { createApp } from 'vue';
import { Sticky } from '@cubui/cubui';

const app = createApp();
app.use(Sticky);
```

### Basic Usage

:::demo

```vue
<template>
  <div style="height: 200vh; padding-top: 100px;">
    <cub-sticky>
      <cub-button type="primary">Ceiling button</cub-button>
    </cub-sticky>
  </div>
</template>
```

:::

### Ceiling distance

:::demo

```vue
<template>
  <div style="height: 200vh; padding-top: 200px;">
    <cub-sticky top="120">
      <cub-button type="primary">Ceiling button distance 120px</cub-button>
    </cub-sticky>
  </div>
</template>
```

:::

### Specify container

:::demo

```vue
<template>
  <div style="height: 200vh; padding-top: 100px">
    <div style="width: 100%; height: 150px; background: pink" ref="container">
      <cub-sticky top="20" :container="container">
        <cub-button type="info">Container</cub-button>
      </cub-sticky>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const container = ref(null);
</script>
```

:::

### Suction distance

:::demo

```vue
<template>
  <div style="height: 100vh; padding-top: 100vh">
    <cub-sticky bottom="50" position="bottom">
      <cub-button type="primary">Suction distance 50px</cub-button>
    </cub-sticky>
  </div>
</template>
```

:::

## API

### Props

| Attribute | Description                                       | Type    | Default |
| --------- | ------------------------------------------------- | ------- | ------- |
| position  | Adsorption position（`top`、`bottom`）            | string  | `top`   |
| top       | Ceiling distance, enable when `position = top`    | number  | `0`     |
| bottom    | Suction distance, enable when `position = bottom` | number  | `0`     |
| container | The 'HTML' node of the container                  | Element | -       |
| z-index   | Level of adsorption                               | number  | `99`    |

### Events

| Event  | Description                                 | Arguments        |
| ------ | ------------------------------------------- | ---------------- |
| change | Triggered when the adsorption state changes | `fixed: boolean` |

# Tag

### Intro

Labels for tagging and classification.

### Install

```js
import { createApp } from 'vue';
import { Tag } from '@cubui/cubui';

const app = createApp();
app.use(Tag);
```

### Basic Usage

:::demo

```vue
<template>
  <cub-tag>tag</cub-tag>
  <cub-tag type="primary">tag</cub-tag>
  <cub-tag type="success">tag</cub-tag>
  <cub-tag type="danger">tag</cub-tag>
  <cub-tag type="warning">tag</cub-tag>
</template>
```

:::

### Style

:::demo

```vue
<template>
  <cub-tag plain>plain</cub-tag>
  <cub-tag round type="primary">round</cub-tag>
  <cub-tag mark type="primary">mark</cub-tag>
  <cub-tag v-if="show" closeable @close="close" type="primary">close</cub-tag>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(true);
const close = () => {
  show.value = false;
};
</script>
```

:::

### Custom Color

:::demo

```vue
<template>
  <cub-tag color="#FA685D">background</cub-tag>
  <cub-tag color="#E9E9E9" textColor="#999999">text</cub-tag>
  <cub-tag color="#FA2400" plain>plain</cub-tag>
</template>
```

:::

## API

### Props

| Attribute  | Description                                                   | Type    | Default   |
| ---------- | ------------------------------------------------------------- | ------- | --------- |
| type       | Label type，can be set `primary` `success` `danger` `warning` | string  | `default` |
| color      | Label color                                                   | string  | -         |
| text-color | Text color, which takes precedence over the `color` attribute | string  | `white`   |
| plain      | Whether it is plain                                           | boolean | `false`   |
| round      | Whether it is round                                           | boolean | `false`   |
| mark       | Whether it is mark                                            | boolean | `false`   |
| closeable  | Whether it is a closeable tag                                 | boolean | `false`   |

### Slots

| Name    | Description           |
| ------- | --------------------- |
| default | Label display content |

### Events

| Event | Description | Arguments |
| ----- | ----------- | --------- |
| click | click event | `event`   |
| close | close event | `event`   |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                    | Default Value                                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| --cub-tag-font-size                     | _12px_                                                                                               |
| --cub-tag-default-border-radius         | _4px_                                                                                                |
| --cub-tag-round-border-radius           | _8px_                                                                                                |
| --cub-tag-default-background-color      | _#000000_                                                                                            |
| --cub-tag-primary-background-color      | _#3460fa_                                                                                            |
| --cub-tag-success-background-color      | _#4fc08d_                                                                                            |
| --cub-tag-danger-background-color       | _linear-gradient(135deg,rgba(242, 20, 12, 1) 0%,rgba(232, 34, 14, 1) 70%,rgba(242, 77, 12, 1) 100%)_ |
| --cub-tag-danger-background-color-plain | _#df3526_                                                                                            |
| --cub-tag-warning-background-color      | _#f3812e_                                                                                            |
| --cub-tag-default-color                 | _#ffffff_                                                                                            |
| --cub-tag-border-width                  | _1px_                                                                                                |
| --cub-tag-plain-background-color        | _#fff_                                                                                               |
| --cub-tag-height                        | _auto_                                                                                               |

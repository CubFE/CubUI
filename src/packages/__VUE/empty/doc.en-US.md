# Empty

### Intro

Occupation reminder when empty.

### Install

```js
import { createApp } from 'vue';
import { Empty } from '@cubui/cubui';

const app = createApp();
app.use(Empty);
```

### Basic Usage

:::demo

```vue
<template>
  <cub-empty description="no data"></cub-empty>
</template>
```

:::

### Image Type

:::demo

```vue
<template>
  <cub-tabs v-model="tabValue">
    <cub-tab-pane title="empty">
      <cub-empty image="empty" description="no cotent"></cub-empty>
    </cub-tab-pane>
    <cub-tab-pane title="error">
      <cub-empty image="error" description="error"></cub-empty>
    </cub-tab-pane>
    <cub-tab-pane title="no network">
      <cub-empty image="network" description="network"></cub-empty>
    </cub-tab-pane>
  </cub-tabs>
</template>
<script setup>
import { ref } from 'vue';
const tabValue = ref(0);
</script>
```

:::

### Custom Image

:::demo

```vue
<template>
  <cub-empty
    image="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png"
    description="Description"
  ></cub-empty>
</template>
```

:::

### Bottom Content

:::demo

```vue
<template>
  <cub-empty image="error" description="Failed to load">
    <div style="margin-top: 10px">
      <cub-button icon="refresh" type="primary">Retry</cub-button>
    </div>
  </cub-empty>
</template>
```

:::

## Empty

### Props

| Attribute   | Description                                                          | Type             | Default |
| ----------- | -------------------------------------------------------------------- | ---------------- | ------- |
| image       | Image type, can be set to `empty`, `error`, `network` or image `URL` | string           | `empty` |
| image-size  | Image size                                                           | number \| string | `-`     |
| description | Description                                                          | string           | `-`     |

### Slots

| Name        | Description           |
| ----------- | --------------------- |
| default     | Custom bottom content |
| image       | Custom image          |
| description | Custom description    |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                | Default Value |
| ----------------------------------- | ------------- |
| --cub-empty-padding                 | _32px 0_      |
| --cub-empty-image-size              | _170px_       |
| --cub-empty-description-margin-top  | _4px_         |
| --cub-empty-description-color       | _#666666_     |
| --cub-empty-description-font-size   | _14px_        |
| --cub-empty-description-line-height | _20px_        |
| --cub-empty-description-padding     | _0 40px_      |

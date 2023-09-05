# Drag

### Intro

Implement draggable arbitrary elements

### Install

```javascript
import { createApp } from 'vue';
import { Drag } from '@cubui/cubui';

const app = createApp();
app.use(Drag);
```

### Basic Usage

:::demo

```html
<template>
  <cub-drag>
    <cub-button type="primary">Button</cub-button>
  </cub-drag>
</template>
```

:::

### Limit Direction

:::demo

```html
<template>
  <cub-drag direction="x" :style="{ top: '200px', left: '8px' }">
    <cub-button type="primary">Button</cub-button>
  </cub-drag>
</template>
```

:::

### Attract

:::demo

```html
<template>
  <cub-drag direction="x" :attract="true">
    <cub-button type="primary">Button</cub-button>
  </cub-drag>
</template>
```

:::

### Limit Boundaries

:::demo

```html
<template>
  <div class="drag-boundary"></div>
  <cub-drag :boundary="{ top: 100, left: 9, bottom: bottom(), right: right() }" :style="{ top: '100px', left: '50px' }">
    <cub-button type="primary">Button</cub-button>
  </cub-drag>
</template>
<script>
  export default {
    setup() {
      function right() {
        return document.documentElement.clientWidth - 300 - 9;
      }
      function bottom() {
        return document.documentElement.clientHeight - 300;
      }
      return {
        right,
        bottom
      };
    }
  };
</script>

<style>
  .drag-boundary {
    position: absolute;
    top: 100px;
    left: 8px;
    width: 300px;
    height: 200px;
    border: 1px solid red;
  }
</style>
```

:::

## API

### Props

| Attribute | Description                                                         | Type    | Default                               |
| :-------- | :------------------------------------------------------------------ | :------ | :------------------------------------ |
| attract   | Whether to enable automatic edge suction                            | boolean | `false`                               |
| direction | The drag direction limit of the dragged element **x**/**y**/**all** | string  | `'all' `                              |
| boundary  | The drag boundary of the dragged element                            | object  | `{top: 0,left: 0,right: 0,bottom: 0}` |

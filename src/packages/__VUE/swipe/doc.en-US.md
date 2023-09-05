# Swipe

## Intro

Used for cell components that can slide left and right to display operation buttons.

## Install

```js
import { createApp } from 'vue';
import { Swipe } from '@cubui/cubui';

const app = createApp();
app.use(Swipe);
```

## Demo

### Basic usage

:::demo

```vue
<template>
  <cub-swipe>
    <cub-cell round-radius="0" title="Swipe left to delete" />
    <template #right>
      <cub-button shape="square" style="height:100%" type="danger">Delelte</cub-button>
    </template>
  </cub-swipe>
</template>
```

:::

### Disable swipe

:::demo

```vue
<template>
  <cub-swipe disabled>
    <cub-cell round-radius="0" title="Disable swipe" />
    <template #right>
      <cub-button shape="square" style="height:100%" type="danger">Delelte</cub-button>
    </template>
  </cub-swipe>
</template>
```

:::

### Swipe left and right

:::demo

```vue
<template>
  <cub-swipe>
    <template #left>
      <cub-button shape="square" style="height:100%" type="success">Select</cub-button>
    </template>
    <cub-cell round-radius="0" title="You can swipe left and right" />
    <template #right>
      <cub-button shape="square" style="height:100%" type="danger">Delelte</cub-button>
      <cub-button shape="square" style="height:100%" type="info">Collect</cub-button>
    </template>
  </cub-swipe>
</template>
```

:::

### Async control swipe

:::demo

```vue
<template>
  <cub-switch v-model="checked" @change="changSwitch" />
  <cub-swipe ref="refSwipe">
    <cub-cell title="Async on and off"></cub-cell>
    <template #right>
      <cub-button shape="square" style="height:100%" type="danger">Delelte</cub-button>
    </template>
  </cub-swipe>
</template>
<script setup>
import { ref } from 'vue';
const refSwipe = ref();
const checked = ref(false);
const changSwitch = (value) => {
  if (value) {
    refSwipe.value?.open('left');
  } else {
    refSwipe.value?.close();
  }
};
</script>
```

:::

### Custom

:::demo

```vue
<template>
  <cub-swipe>
    <template #left>
      <cub-button shape="square" style="height:100%" type="success">Select</cub-button>
    </template>
    <cub-cell title="product description">
      <template v-slot:link>
        <cub-input-number v-model="number" />
      </template>
    </cub-cell>
    <template #right>
      <cub-button shape="square" style="height:100%" type="danger">Delelte</cub-button>
      <cub-button shape="square" style="height:100%" type="info">Collect</cub-button>
    </template>
  </cub-swipe>
</template>
<script setup>
import { ref } from 'vue';
const number = ref(0);
</script>
```

:::

### Use SwipeGroup to make swipe exclusive

The prop `name` of Swipe is required.

:::demo

```vue
<template>
  <cub-swipe-group lock>
    <cub-swipe name="11">
      <cub-cell round-radius="0" title="Swipe left to delete" />
      <template #right>
        <cub-button shape="square" style="height: 100%" type="danger">delete</cub-button>
      </template>
    </cub-swipe>
    <cub-swipe name="22">
      <cub-cell round-radius="0" title="Swipe left to delete" />
      <template #right>
        <cub-button shape="square" style="height: 100%" type="danger">delete</cub-button>
      </template>
    </cub-swipe>
    <div>
      <cub-swipe name="33">
        <cub-cell round-radius="0" title="Swipe left to delete" />
        <template #right>
          <cub-button shape="square" style="height: 100%" type="danger">delete</cub-button>
        </template>
      </cub-swipe>
    </div>
  </cub-swipe-group>
</template>
```

:::

## Swipe

### Props

| Attribute                   | Description                                    | Type    | Default |
| --------------------------- | ---------------------------------------------- | ------- | ------- |
| name                        | identifies                                     | string  | -       |
| disabled                    | Whether to disabled swipe                      | string  | `false` |
| touch-move-prevent-default  | Whether to stop touchmove event preventdefault | boolean | `false` |
| touch-move-stop-propagation | Whether to stop touchmove event propagation    | boolean | `false` |

### Events

| Event | Description                                          | Arguments                            |
| ----- | ---------------------------------------------------- | ------------------------------------ |
| open  | Emitted when Swipe is opened, swipe left/swipe right | `name, position: 'left' \| 'right' ` |
| close | Emitted when Swipe is closed, swipe left/swipe right | `name, position: 'left' \| 'right' ` |

### Slots

| Name    | Description    |
| ------- | -------------- |
| left    | Custom left    |
| default | Custom default |
| right   | Custom right   |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get Swipe instance and call instance methods.

| Name  | Description                         | Arguments                                        |
| ----- | ----------------------------------- | ------------------------------------------------ |
| click | click event                         | `name, position: 'left' \| 'content' \| 'right'` |
| open  | open swipe, swipe left/swipe right  | `name, position: 'left' \| 'right' `             |
| close | close swipe, swipe left/swipe right | `name, position: 'left' \| 'right' `             |

## SwipeGroup

### Props

| Attribute    | Description                                  | Type    | Default |
| ------------ | -------------------------------------------- | ------- | ------- |
| lock`v4.1.1` | When a child Swipe opens, others will close. | boolean | `false` |

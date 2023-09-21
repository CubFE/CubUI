# Animate

### Intro

Add animation effects to child elements

### Install

```js
import { createApp } from 'vue';
import { Animate } from '@cubui/cubui';

const app = createApp(Animate);
app.use(Animate);
```

### Trigger animation through show

:::demo

```vue
<template>
  <cub-animate type="slide-right" :show="show1">
    <cub-button type="primary" @click="onClick1">Once</cub-button>
  </cub-animate>
  <cub-animate type="slide-right" :show="show2">
    <cub-button type="primary" @click="onClick2">Several Times</cub-button>
  </cub-animate>
</template>
<script setup>
import { ref } from 'vue';
const show1 = ref(false);
const onClick1 = () => {
  show1.value = true;
};
const show2 = ref(false);
const onClick2 = () => {
  show2.value = true;
  setTimeout(() => {
    show2.value = false;
  }, 500);
};
</script>
```

:::

### Loop animation

:::demo

```vue
<template>
  <cub-animate type="shake" :loop="true">
    <cub-button type="primary">shake-shake</cub-button>
  </cub-animate>
  <cub-animate type="ripple" :loop="true">
    <cub-button type="primary">ripple-ripple</cub-button>
  </cub-animate>
  <cub-animate type="breath" :loop="true">
    <cub-button type="primary">breath-breath</cub-button>
  </cub-animate>
  <cub-animate type="twinkle" :loop="true">
    <cub-button type="primary">twinkle-twinkle</cub-button>
  </cub-animate>
  <cub-animate type="flicker" :loop="true">
    <cub-button type="primary">flicker-flicker</cub-button>
  </cub-animate>
  <cub-animate type="jump" :loop="true">
    <cub-button type="primary">jump-jump</cub-button>
  </cub-animate>
  <cub-animate type="float" :loop="true">
    <cub-button type="primary">float-float</cub-button>
  </cub-animate>
</template>
```

:::

### Clicking to trigger

:::demo

```vue
<template>
  <cub-animate type="slide-right" action="click">
    <cub-button type="primary">From right to left</cub-button>
  </cub-animate>
  <cub-animate type="slide-left" action="click">
    <cub-button type="primary">From left to right</cub-button>
  </cub-animate>
  <cub-animate type="slide-top" action="click">
    <cub-button type="primary">From top to bottom</cub-button>
  </cub-animate>
  <cub-animate type="slide-bottom" action="click">
    <cub-button type="primary">From bottom to top</cub-button>
  </cub-animate>
</template>
```

:::

## API

### Props

| Attribute       | Description                                                                      | Type             | Default |
| --------------- | -------------------------------------------------------------------------------- | ---------------- | ------- |
| show`v4.1.1`    | Trigger animation when show changes from `false` to `true`                       | boolean          | `false` |
| type            | For animation type, see the description of type value below                      | string           | `-`     |
| loop            | Whether to execute circularly. `true`- loop execution; `false`- execute once     | boolean          | `false` |
| duration`4.0.7` | AnimationDuration, ms                                                            | number \| string | -       |
| action          | Triggering method,`initial`- initialization execution; `click`- click to execute | string           | -       |

### Events

| Event           | Description                          | Arguments    |
| --------------- | ------------------------------------ | ------------ |
| animate`v4.1.1` | Trigger of animation                 | -            |
| click           | Triggered when an element is clicked | event: Event |

### Type value description

| Order | Type name    | Description                                        |
| :---- | :----------- | :------------------------------------------------- |
| 1     | shake        | shake，It is recommended that loop be true         |
| 2     | ripple       | ripple                                             |
| 3     | breath       | breath，It is recommended that loop be true        |
| 4     | float        | float，It is recommended that loop be true         |
| 5     | slide-right  | From right to left                                 |
| 6     | slide-left   | From left to right                                 |
| 7     | slide-top    | From top to bottom                                 |
| 8     | slide-bottom | From bottom to top                                 |
| 9     | jump         | jump，It is recommended that loop be true          |
| 10    | twinkle      | twinkle，It is recommended that loop be true       |
| 11    | flicker      | Polish button，It is recommended that loop be true |

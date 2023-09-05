# Indicator

### Intro

Displays the progress of a task or process, which is often used to open a process.

### Install

```js
import { createApp } from 'vue';
import { Indicator } from '@cubui/cubui';

const app = createApp();
app.use(Indicator);
```

### Basic Usage

:::demo

```vue
<template>
  <cub-cell>
    <cub-indicator :size="3" :current="3">step1</cub-indicator>
  </cub-cell>
  <cub-cell>
    <cub-row>
      <cub-col :span="12">
        <cub-button size="small" type="primary">Main button</cub-button>
      </cub-col>
      <cub-col :span="12">
        <cub-indicator block align="right" :size="6" :current="5">step1</cub-indicator>
      </cub-col>
    </cub-row>
  </cub-cell>
</template>
```

:::

### Block usage

:::demo

```vue
<template>
  <cub-cell>
    <cub-indicator block algin="center" :size="6" :current="5">step1</cub-indicator>
  </cub-cell>
  <cub-cell>
    <cub-indicator block align="left" :size="6" :current="1">step1</cub-indicator>
  </cub-cell>
  <cub-cell>
    <cub-indicator block align="right" :size="6" :current="5">step1</cub-indicator>
  </cub-cell>
</template>
```

:::

### Do not make up 0

:::demo

```vue
<template>
  <cub-cell>
    <cub-indicator :fill-zero="false" :size="6" :current="5">step1</cub-indicator>
  </cub-cell>
</template>
```

:::

## API

### Props

| Attribute | Description                                                                                         | Type    | Default |
| --------- | --------------------------------------------------------------------------------------------------- | ------- | ------- |
| current   | Current step                                                                                        | number  | `1`     |
| size      | Step length                                                                                         | number  | `3`     |
| block     | Enable block level layout                                                                           | boolean | `false` |
| align     | Alignment, which takes effect only when `block` is `true`. optional value `left`, `right`, `center` | string  | `left`  |
| fill-zero | Whether to add 0 before singular number                                                             | boolean | `true`  |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                             | Default Value                         |
| -------------------------------- | ------------------------------------- |
| --cub-indicator-bg-color         | _var(--cub-primary-color)_            |
| --cub-indicator-dot-color        | _var(--cub-disable-color)_            |
| --cub-indicator-color            | _var(--cub-white)_                    |
| --cub-indicator-size             | _18px_                                |
| --cub-indicator-dot-size         | _calc(var(--cub-indicator-size) / 3)_ |
| --cub-indicator-border-size      | _calc(var(--cub-indicator-size)+ 2)_  |
| --cub-indicator-number-font-size | _10px_                                |

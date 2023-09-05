# Divider

### Intro

Separate content into multiple areas.

### Install

```javascript
import { createApp } from 'vue';
import { Divider } from '@cubui/cubui';

const app = createApp();
app.use(Divider);
```

### Basic Usage

Default render one horizontal divider line.

:::demo

```html
<template>
  <cub-divider />
</template>
```

:::

### With Text

Insert text into divider with default slot.

:::demo

```html
<template>
  <cub-divider>text</cub-divider>
</template>
```

:::

### Content Position

Set Content Position with content-position attribute.

:::demo

```html
<template>
  <cub-divider content-position="left">text</cub-divider>
  <cub-divider content-position="right">text</cub-divider>
</template>
```

:::

### Dashed

Render dashed divider line with dashed attribute.

:::demo

```html
<template>
  <cub-divider dashed>text</cub-divider>
</template>
```

:::

### Custom Style

User can custom divider style with style attribute.

:::demo

```html
<template>
  <cub-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">text</cub-divider>
</template>
```

:::

### Vertical Divider

:::demo

```html
<template>
  <div :style="{ fontSize: '14px', marginLeft: '27px', color: '#909ca4' }">
    Text
    <cub-divider direction="vertical" />
    <a href="#" :style="{ color: '#1989fa' }">Link</a>
    <cub-divider direction="vertical" />
    <a href="#" :style="{ color: '#1989fa' }">Link</a>
  </div>
</template>
```

:::

## API

### Props

| Attribute        | Description                                        | Type    | Default      |
| ---------------- | -------------------------------------------------- | ------- | ------------ |
| dashed           | Whether to use dashed border                       | boolean | `false`      |
| hairline         | Whether to use hairline                            | boolean | `true`       |
| content-position | Content position, can be set to `left` or `right`  | string  | `center`     |
| direction        | The direction of divider, can to set to `vertical` | string  | `horizontal` |

### Slots

| Name    | Description                                   |
| ------- | --------------------------------------------- |
| default | Default slot, when `direction` = `horizontal` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                               | Default Value            |
| ---------------------------------- | ------------------------ |
| --cub-divider-margin               | _16px 0_                 |
| --cub-divider-text-font-size       | _var(--cub-font-size-2)_ |
| --cub-divider-text-color           | _#909ca4_                |
| --cub-divider-line-height          | _2px_                    |
| --cub-divider-before-margin-right  | _16px_                   |
| --cub-divider-after-margin-left    | _16px_                   |
| --cub-divider-vertical-height      | _12px_                   |
| --cub-divider-vertical-top         | _2px_                    |
| --cub-divider-vertical-border-left | _rgba(0, 0, 0, 0.06)_    |
| --cub-divider-vertical-margin      | _0 8px_                  |

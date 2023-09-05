# ellipsis

### Intro

Display space is insufficient, hidden part of the content and "..." Alternative.

### Install

```javascript
import { createApp } from 'vue';
import { Ellipsis } from '@cubui/cubui';

const app = createApp();
app.use(Ellipsis);
```

### Leading

:::demo

```html
<template>
  <cub-ellipsis
    content="cubui3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 cubui 能够为更多的开发者带来便利，我们决定在 cubui 中增加小程序多端适配的能力。"
    direction="start"
  ></cub-ellipsis>
</template>
```

:::

### Tailing

:::demo

```html
<template>
  <cub-ellipsis
    content="cubui3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 cubui 能够为更多的开发者带来便利，我们决定在 cubui 中增加小程序多端适配的能力。"
    direction="end"
  ></cub-ellipsis>
</template>
```

:::

### Middle

:::demo

```html
<template>
  <cub-ellipsis
    content="cubui3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 cubui 能够为更多的开发者带来便利，我们决定在 cubui 中增加小程序多端适配的能力。"
    direction="middle"
  ></cub-ellipsis>
</template>
```

:::

### Multi-line

:::demo

```html
<template>
  <cub-ellipsis
    content="cubui3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 cubui 能够为更多的开发者带来便利，我们决定在 cubui 中增加小程序多端适配的能力。"
    direction="start"
    rows="3"
  ></cub-ellipsis>
</template>
```

:::

### Expand & Collapse

:::demo

```html
<template>
  <cub-ellipsis
    direction="start"
    expandText="Expand"
    collapseText="Collapse"
    content="cubui3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 cubui 能够为更多的开发者带来便利，我们决定在 cubui 中增加小程序多端适配的能力。"
  ></cub-ellipsis>
</template>
```

:::

## API

### Props

| Attribute     | Description                             | Type             | Default |
| ------------- | --------------------------------------- | ---------------- | ------- |
| content       | Content                                 | string           | -       |
| direction     | Direction, `start` \| `end` \| `middle` | string           | `end`   |
| rows          | Rows                                    | number           | `1`     |
| expand-text   | Expand text                             | string           | `''`    |
| collapse-text | Collapse text                           | string           | `''`    |
| symbol        | Symbol                                  | string           | `...`   |
| line-height   | the row height of the container         | string \| number | `20`    |

### Events

| Event  | Description                                | Arguments              |
| ------ | ------------------------------------------ | ---------------------- |
| click  | Emitted when the content is clicked        | -                      |
| change | Emitted when expand or collapse is clicked | `expand` or `collapse` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                 | Default Value |
| ------------------------------------ | ------------- |
| --cub-ellipsis-expand-collapse-color | _#3460fa_     |

# Divider 分割线

### 介绍

用于将内容分隔为多个区域。

### 安装

```javascript
import { createApp } from 'vue';
import { Divider } from '@cubui/cubui';

const app = createApp();
app.use(Divider);
```

### 基础用法

默认渲染一条水平分割线。

:::demo

```html
<template>
  <cub-divider />
</template>
```

:::

### 展示文本

通过插槽可以在分割线中间插入内容。

:::demo

```html
<template>
  <cub-divider>文本</cub-divider>
</template>
```

:::

### 内容位置

通过 content-position 指定内容所在位置。

:::demo

```html
<template>
  <cub-divider content-position="left">文本</cub-divider>
  <cub-divider content-position="right">文本</cub-divider>
</template>
```

:::

### 虚线

添加 dashed 属性使分割线渲染为虚线。

:::demo

```html
<template>
  <cub-divider dashed>文本</cub-divider>
</template>
```

:::

### 自定义样式

可以直接通过 style 属性设置分割线的样式。

:::demo

```html
<template>
  <cub-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">文本</cub-divider>
</template>
```

:::

### 垂直分割线

:::demo

```html
<template>
  <div :style="{ fontSize: '14px', marginLeft: '27px', color: '#909ca4' }">
    文本
    <cub-divider direction="vertical" />
    <a href="#" :style="{ color: '#1989fa' }">链接</a>
    <cub-divider direction="vertical" />
    <a href="#" :style="{ color: '#1989fa' }">链接</a>
  </div>
</template>
```

:::

## API

### Props

| 参数             | 说明                                | 类型    | 默认值       |
| ---------------- | ----------------------------------- | ------- | ------------ |
| dashed           | 是否使用虚线                        | boolean | `false`      |
| hairline         | 是否使用 `0.5px` 线                 | boolean | `true`       |
| content-position | 内容位置，可选值为 `left`、`right`  | string  | `center`     |
| direction        | 水平还是垂直类型，可选值 `vertical` | string  | `horizontal` |

### Slots

| 名称    | 说明                                          |
| ------- | --------------------------------------------- |
| default | 内容，仅在 `direction` 为 `horizontal` 时生效 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                               | 默认值                   |
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

# Indicator 指示器

### 介绍

显示一个任务或流程的进度，常用于开通流程。

### 安装

```js
import { createApp } from 'vue';
import { Indicator } from '@cubui/cubui';

const app = createApp();
app.use(Indicator);
```

### 基础用法

:::demo

```vue
<template>
  <cub-cell>
    <cub-indicator :size="3" :current="3">step1</cub-indicator>
  </cub-cell>
  <cub-cell>
    <cub-row>
      <cub-col :span="12">
        <cub-button size="small" type="primary">主要按钮</cub-button>
      </cub-col>
      <cub-col :span="12">
        <cub-indicator block align="right" :size="6" :current="5">step1</cub-indicator>
      </cub-col>
    </cub-row>
  </cub-cell>
</template>
```

:::

### block 用法

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

### 不补 0

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

| 参数      | 说明                                                                      | 类型    | 默认值  |
| --------- | ------------------------------------------------------------------------- | ------- | ------- |
| current   | 当前步骤                                                                  | number  | `1`     |
| size      | 步骤长度                                                                  | number  | `3`     |
| block     | 是否启用块级布局                                                          | boolean | `false` |
| align     | 对齐方式，仅在 `block` 为 `true` 时生效, 可选值 `left`, `right`, `center` | string  | `left`  |
| fill-zero | 单数前面是否补 0                                                          | boolean | `true`  |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                             | 默认值                                |
| -------------------------------- | ------------------------------------- |
| --cub-indicator-bg-color         | _var(--cub-primary-color)_            |
| --cub-indicator-dot-color        | _var(--cub-disable-color)_            |
| --cub-indicator-color            | _var(--cub-white)_                    |
| --cub-indicator-size             | _18px_                                |
| --cub-indicator-dot-size         | _calc(var(--cub-indicator-size) / 3)_ |
| --cub-indicator-border-size      | _calc(var(--cub-indicator-size)+ 2)_  |
| --cub-indicator-number-font-size | _10px_                                |

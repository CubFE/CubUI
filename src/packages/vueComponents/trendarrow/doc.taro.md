# trendarrow

### 介绍

带有箭头指示的百分比数字，用以展示指标趋势。

### 安装

```javascript
import { createApp } from 'vue';
import { TrendArrow } from '@cubui/cubui-taro';

const app = createApp();
app.use(TrendArrow);
```

### 基础用法

:::demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow :sync-text-color="false" :rate="1" />
    <cub-trend-arrow :sync-text-color="false" :rate="-0.2535" />
  </cub-cell>
</template>
```

:::

### 改变文字颜色

:::demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow :rate="10.2365" />
    <cub-trend-arrow :rate="-0.2535" />
  </cub-cell>
</template>
```

:::

### 指定小数位

:::demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow :digits="0" :rate="10.2365" />
    <cub-trend-arrow :digits="0" :rate="-0.2535" />
  </cub-cell>
</template>
```

:::

### 箭头在前面

:::demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow arrowLeft :rate="0.2535" />
    <cub-trend-arrow arrowLeft :rate="-0.2535" />
  </cub-cell>
</template>
```

:::

### 显示正负号

:::demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow showSign :rate="1" />
    <cub-trend-arrow showSign :rate="-0.2535" />
  </cub-cell>
</template>
```

:::

### 是否展示 0

:::demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow showSign :rate="0" />
    <cub-trend-arrow showSign showZero :rate="0" />
  </cub-cell>
</template>
```

:::

### 自定义颜色

:::demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow :rate="10.2365" rise-color="rgb(73,143,242)" />
    <cub-trend-arrow :rate="-0.2535" showSign drop-color="rgb(255, 190, 13)" />
    <cub-trend-arrow
      :show-text-color="false"
      showSign
      :rate="-0.2535"
      text-color="rgb(39,197,48)"
      drop-color="rgb(255, 190, 13)"
    />
  </cub-cell>
</template>
```

:::

### 自定义图标

::: demo

```html
<template>
  <cub-cell>
    <cub-trend-arrow :rate="10.2365">
      <template #up-icon><Success color="blue" size="18px" /></template>
    </cub-trend-arrow>
    <cub-trend-arrow :rate="-10.2365">
      <template #down-icon><Failure color="red" /></template>
    </cub-trend-arrow>
  </cub-cell>
</template>
<script lang="ts">
  import { Success, Failure } from '@cubfe/icons-vue-taro';
  export default {
    components: { Success, Failure }
  };
</script>
```

:::

## API

### Props

| 参数            | 说明                                       | 类型    | 默认值    |
| --------------- | ------------------------------------------ | ------- | --------- |
| rate            | 数值，大于 0 时箭头向上，小于 0 时箭头向下 | number  | -         |
| digits          | 小数位精度                                 | number  | `2`       |
| show-sign       | 是否显示加减号                             | boolean | `false`   |
| show-zero       | 是否显示 0                                 | boolean | `false`   |
| arrow-left      | 是否在数字左侧显示箭头                     | boolean | `false`   |
| sync-text-color | 文字颜色是否与箭头同步                     | boolean | `true`    |
| text-color      | 文字颜色                                   | string  | `#333333` |
| rise-color      | 向上箭头颜色                               | string  | `#fa2c19` |
| drop-color      | 向下箭头颜色                               | string  | `#64b578` |

### Slots

| 名称      | 说明                                        |
| --------- | ------------------------------------------- |
| up-icon   | 自定义向上箭头图标，默认使用 `Up`   |
| down-icon | 自定义向下箭头图标，默认使用 `Under` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                | 默认值 |
| ----------------------------------- | ------ |
| --cub-trendarrow-font-size          | _14px_ |
| --cub-trendarrow-before-icon-margin | _4px_  |

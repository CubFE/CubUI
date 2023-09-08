# Price 商品价格

### 介绍

用来对商品价格数值的小数点前后部分应用不同样式，还支持人民币符号、千位分隔符、设置小数点位数等功能。

### 安装

```js
import { createApp } from 'vue';
import { Price } from '@cubui/cubui';

const app = createApp();
app.use(Price);
```

### 价格大小

支持 small、normal、large 三种尺寸，默认为 normal。

:::demo

```vue
<template>
  <cub-price :price="0" size="small" :need-symbol="false" />
  <cub-price :price="0" size="normal" :need-symbol="false" />
  <cub-price :price="0" size="large" :need-symbol="false" />
</template>
```

:::

### 小数点位数

`decimal-digits` 可设置小数点位数，默认展示 2 位小数。

:::demo

```vue
<template>
  <cub-price :price="8888" :decimal-digits="0" />
</template>
```

:::

### 划线价

:::demo

```vue
<template>
  <cub-price :price="8888" :decimal-digits="0" size="normal" need-symbol thousands strike-through />
</template>
```

:::

### 货币符号

`symbol` 可设置货币符号，默认为 `¥`。

:::demo

```vue
<template>
  <cub-price :price="10010.01" symbol="¥" />
</template>
```

:::

### 货币符号位置

`position` 可以调整货币符号位置。

:::demo

```vue
<template>
  <cub-price :price="8888.01" position="after" symbol="元" />
</template>
```

:::

### 千位分隔

`thousands` 可以按照千分号形式显示。

:::demo

```vue
<template>
  <cub-price :price="15213.1221" :decimal-digits="3" thousands />
</template>
```

:::

## API

### Props

| 参数                   | 说明                                      | 类型             | 默认值   |
| ---------------------- | ----------------------------------------- | ---------------- | -------- |
| price                  | 价格数量                                  | number \| string | `0`      |
| need-symbol            | 是否需要加上 `symbol` 符号                | boolean          | `true`   |
| symbol                 | 符号类型                                  | string           | `&yen;`  |
| decimal-digits         | 小数位位数                                | number           | `2`      |
| thousands              | 是否按照千分号形式显示                    | boolean          | `false`  |
| position               | 符号显示在价格前或者后，`before`、`after` | string           | `before` |
| size                   | 价格尺寸，`small`、`normal`、`large`      | string           | `normal` |
| strike-through`v4.0.3` | 是否展示划线价                            | Boolean          | false    |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                            | 默认值 |
| ------------------------------- | ------ |
| --cub-price-symbol-big-size     | _18px_ |
| --cub-price-big-size            | _24px_ |
| --cub-price-decimal-big-size    | _18px_ |
| --cub-price-symbol-medium-size  | _14px_ |
| --cub-price-medium-size         | _16px_ |
| --cub-price-decimal-medium-size | _14px_ |
| --cub-price-symbol-small-size   | _10px_ |
| --cub-price-small-size          | _12px_ |
| --cub-price-decimal-small-size  | _10px_ |

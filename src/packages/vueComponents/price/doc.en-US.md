# Price

### Intro

It is used to apply different styles to the parts before and after the decimal point of the commodity price value, and also supports functions such as the RMB symbol, thousands separator, and setting the number of decimal points.

### Install

```js
import { createApp } from 'vue';
import { Price } from '@cubui/cubui';

const app = createApp();
app.use(Price);
```

### Price size

Three sizes are supported: small, normal, and large, and the default is normal.

:::demo

```vue
<template>
  <cub-price :price="0" size="small" :need-symbol="false" />
  <cub-price :price="0" size="normal" :need-symbol="false" />
  <cub-price :price="0" size="large" :need-symbol="false" />
</template>
```

:::

### Decimals places

`decimal-digits` can set the number of decimal places, and 2 decimal places are displayed by default.

:::demo

```vue
<template>
  <cub-price :price="8888" :decimal-digits="0" />
</template>
```

:::

### Strike Through

:::demo

```vue
<template>
  <cub-price :price="8888" decimal-digits="0" size="normal" :need-symbol="true" :thousands="true" strike-through />
</template>
```

:::

### Currency symbol

`symbol` can set the currency symbol, the default is `¥`.

:::demo

```vue
<template>
  <cub-price :price="10010.01" symbol="¥" />
</template>
```

:::

### Currency symbol position

`position` can adjust the currency symbol position.

:::demo

```vue
<template>
  <cub-price :price="8888.01" position="after" symbol="RMB" />
</template>
```

:::

### Thousands separator

`thousands` can be displayed as thousands.

:::demo

```vue
<template>
  <cub-price :price="15213.1221" :decimal-digits="3" thousands />
</template>
```

:::

## API

### Props

| Attribute              | Description                                                    | Type             | Default  |
| ---------------------- | -------------------------------------------------------------- | ---------------- | -------- |
| price                  | Price                                                          | number \| string | `0`      |
| need-symbol            | Add symbol                                                     | boolean          | `true`   |
| symbol                 | Symbol type                                                    | string           | `&yen;`  |
| decimal-digits         | Decimal digits                                                 | number           | `2`      |
| thousands              | Thousands separation                                           | boolean          | `false`  |
| position               | The symbol appear before or after the price，`before`、`after` | string           | `before` |
| size                   | Size，`small`、`normal`、`large`                               | string           | `normal` |
| strike-through`v4.0.3` | strike-through                                                 | Boolean          | false    |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                            | Default Value |
| ------------------------------- | ------------- |
| --cub-price-symbol-big-size     | _18px_        |
| --cub-price-big-size            | _24px_        |
| --cub-price-decimal-big-size    | _18px_        |
| --cub-price-symbol-medium-size  | _14px_        |
| --cub-price-medium-size         | _16px_        |
| --cub-price-decimal-medium-size | _14px_        |
| --cub-price-symbol-small-size   | _10px_        |
| --cub-price-small-size          | _12px_        |
| --cub-price-decimal-small-size  | _10px_        |

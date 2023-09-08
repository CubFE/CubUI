# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 安装

```javascript
import { createApp } from 'vue';
import { Button } from '@cubui/cubui-taro';

const app = createApp();
app.use(Button);
```

### 按钮类型

按钮支持 `default`、`primary`、`info`、`warning`、`danger`、`success` 六种类型，默认为 `default`。

:::demo

```html
<template>
  <cub-button type="primary">主要按钮</cub-button>
  <cub-button type="info">信息按钮</cub-button>
  <cub-button type="default">默认按钮</cub-button>
  <cub-button type="danger">危险按钮</cub-button>
  <cub-button type="warning">警告按钮</cub-button>
  <cub-button type="success">成功按钮</cub-button>
</template>
```

:::

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

:::demo

```html
<template>
  <cub-button plain type="primary">朴素按钮</cub-button>
  <cub-button plain type="info">朴素按钮</cub-button>
</template>
```

:::

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

:::demo

```html
<template>
  <cub-button disabled type="primary">禁用状态</cub-button>
  <cub-button plain disabled type="info">禁用状态</cub-button>
  <cub-button plain disabled type="primary">禁用状态</cub-button>
</template>
```

:::

### 按钮形状

通过 `shape` 属性设置按钮形状，支持圆形、方形按钮，默认为圆形。

:::demo

```html
<template>
  <cub-button shape="square" type="primary">方形按钮</cub-button>
  <cub-button type="info">圆形按钮</cub-button>
</template>
```

:::

### 加载状态

:::demo

```html
<template>
  <cub-button loading type="info"></cub-button>
  <cub-button loading type="warning">加载中...</cub-button>
  <cub-button :loading="isLoading" type="success" @click="changeLoading">Click me!</cub-button>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      let isLoading = ref(false);
      const changeLoading = () => {
        isLoading.value = true;
        setTimeout(() => {
          isLoading.value = false;
        }, 3000);
      };
      return {
        isLoading,
        changeLoading
      };
    }
  };
</script>
```

:::

### 图标按钮

:::demo

```html
<template>
  <cub-button shape="square" plain type="primary">
    <template #icon>
      <StarFill />
    </template>
  </cub-button>
  <cub-button shape="square" type="primary">
    <template #icon>
      <Star />
    </template>
    收藏
  </cub-button>
</template>
<script lang="ts">
  import { StarFill, Star } from '@cubfe/icons-vue-taro';
  export default {
    components: { StarFill, Star }
  };
</script>
```

### 按钮尺寸

支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal`。

:::demo

```html
<template>
  <cub-button size="large" type="primary">大号按钮</cub-button>
  <cub-button type="primary">普通按钮</cub-button>
  <cub-button size="small" type="primary">小型按钮</cub-button>
  <cub-button size="mini" type="primary">迷你按钮</cub-button>
</template>
```

:::

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素，常用来实现通栏按钮。

:::demo

```html
<template>
  <cub-button block type="primary">块级元素</cub-button>
</template>
```

:::

### 自定义颜色

通过 color 属性可以自定义按钮的颜色。
:::demo

```html
<template>
  <cub-button color="#7232dd">单色按钮</cub-button>
  <cub-button color="#7232dd" plain>单色按钮</cub-button>
  <cub-button color="linear-gradient(to right, #ff6034, #ee0a24)"> 渐变色按钮 </cub-button>
</template>
```

:::

## API

### Props

| 参数             | 说明                                                                   | 类型    | 默认值    |
| ---------------- | ---------------------------------------------------------------------- | ------- | --------- |
| type             | 类型，可选值为 `primary` `info` `warning` `danger` `success` `default` | string  | `default` |
| form-type`4.0.7` | 表单类型，可选值 `button` `submit` `reset`                             | string  | `button`  |
| size             | 尺寸，可选值为 `large` `small` `mini` `normal`                         | string  | `normal`  |
| shape            | 形状，可选值为 `square` `round`                                        | string  | `round`   |
| color            | 按钮颜色，支持传入 `linear-gradient` 渐变色                            | string  | -         |
| plain            | 是否为朴素按钮                                                         | boolean | `false`   |
| disabled         | 是否禁用按钮                                                           | boolean | `false`   |
| block            | 是否为块级元素                                                         | boolean | `false`   |
| loading          | 按钮 `loading` 状态                                                    | boolean | `false`   |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 按钮内容 |
| icon    | 按钮图标 |

### Events

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| click  | 点击按钮时触发 | `event: MouseEvent` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                   | 默认值                                                                                                                            |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| --cub-button-border-radius             | _25px_                                                                                                                            |
| --cub-button-border-width              | _1px_                                                                                                                             |
| --cub-button-icon-width                | _16px_                                                                                                                            |
| --cub-button-default-bg-color          | _var(--cub-white)_                                                                                                                |
| --cub-button-default-border-color      | _rgba(204, 204, 204, 1)_                                                                                                          |
| --cub-button-default-color             | _rgba(102, 102, 102, 1)_                                                                                                          |
| --cub-button-default-padding           | _0 18px_                                                                                                                          |
| --cub-button-mini-padding              | _0 12px_                                                                                                                          |
| --cub-button-small-padding             | _0 12px_                                                                                                                          |
| --cub-button-small-height              | _28px_                                                                                                                            |
| --cub-button-mini-height               | _24px_                                                                                                                            |
| --cub-button-default-height            | _38px_                                                                                                                            |
| --cub-button-large-height              | _48px_                                                                                                                            |
| --cub-button-large-line-height         | _46px_                                                                                                                            |
| --cub-button-small-line-height         | _26px_                                                                                                                            |
| --cub-button-block-height              | _48px_                                                                                                                            |
| --cub-button-default-line-height       | _36px_                                                                                                                            |
| --cub-button-block-line-height         | _46px_                                                                                                                            |
| --cub-button-default-font-size         | _var(--cub-font-size-2)_                                                                                                          |
| --cub-button-large-font-size           | _var(--cub-button-default-font-size)_                                                                                             |
| --cub-button-small-font-size           | _var(--cub-font-size-1)_                                                                                                          |
| --cub-button-mini-font-size            | _var(--cub-font-size-1)_                                                                                                          |
| --cub-button-mini-line-height          | _1.2_                                                                                                                             |
| --cub-button-disabled-opacity          | _0.68_                                                                                                                            |
| --cub-button-primary-color             | _var(--cub-white)_                                                                                                                |
| --cub-button-primary-border-color      | _var(--cub-primary-color)_                                                                                                        |
| --cub-button-primary-background-color  | _linear-gradient(135deg,var(--cub-primary-color) 0%,var(--cub-primary-color-end) 100%)_                                           |
| --cub-button-info-color                | _var(--cub-white)_                                                                                                                |
| --cub-button-info-border-color         | _rgba(73, 106, 242, 1)_                                                                                                           |
| --cub-button-info-background-color     | _linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%)_                                                   |
| --cub-button-success-color             | _var(--cub-white)_                                                                                                                |
| --cub-button-success-border-color      | _rgba(38, 191, 38, 1)_                                                                                                            |
| --cub-button-success-background-color  | _linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)_     |
| --cub-button-danger-color              | _var(--cub-white)_                                                                                                                |
| --cub-button-danger-border-color       | _rgba(250, 44, 25, 1)_                                                                                                            |
| --cub-button-danger-background-color   | _rgba(250, 44, 25, 1)_                                                                                                            |
| --cub-button-warning-color             | _var(--cub-white)_                                                                                                                |
| --cub-button-warning-border-color      | _rgba(255, 158, 13, 1)_                                                                                                           |
| --cub-button-warning-background-color  | _linear-gradient(135deg,rgba(255, 158, 13, 1) 0%,rgba(255, 167, 13, 1) 45%,rgba(255, 182, 13, 1) 83%,rgba(255, 190, 13, 1) 100%)_ |
| --cub-button-plain-background-color    | _var(--cub-white)_                                                                                                                |
| --cub-button-small-round-border-radius | _var(--cub-button-border-radius)_                                                                                                 |

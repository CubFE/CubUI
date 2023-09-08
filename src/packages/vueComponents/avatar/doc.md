# Avatar 头像

### 介绍

用来代表用户或事物，支持图片、图标或字符展示。

### 安装

```js
import { createApp } from 'vue';
import { Avatar } from '@cubui/cubui';

const app = createApp();
app.use(Avatar);
```

### 基础用法

支持三种尺寸：small、normal、large

:::demo

```vue
<template>
  <cub-avatar size="large">
    <img
      src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    />
  </cub-avatar>
  <cub-avatar size="normal">
    <img
      src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    />
  </cub-avatar>
  <cub-avatar size="small">
    <img
      src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    />
  </cub-avatar>
</template>
```

:::

### 头像形状

支持两种形状：square、round

:::demo

```vue
<template>
  <cub-avatar shape="square"><Me /></cub-avatar>
  <cub-avatar shape="round"><Me /></cub-avatar>
</template>
<script setup>
import { Me } from '@cubfe/icons-vue';
</script>
```

:::

### 头像类型

支持三种类型：图片、Icon 以及字符

:::demo

```vue
<template>
  <cub-avatar>
    <img
      src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    />
  </cub-avatar>
  <cub-avatar><Me /></cub-avatar>
  <cub-avatar>王</cub-avatar>
</template>
<script setup>
import { Me } from '@cubfe/icons-vue';
</script>
```

:::

### 自定义颜色及背景色

Icon 和字符型可以自定义颜色及背景色

:::demo

```vue
<template>
  <cub-avatar class="demo-avatar" bg-color="#FA2C19"><Me color="#fff" /></cub-avatar>
  <cub-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</cub-avatar>
</template>
<script setup>
import { Me } from '@cubfe/icons-vue';
</script>
```

:::

### 带徽标的头像

:::demo

```vue
<template>
  <cub-badge value="8">
    <cub-avatar shape="square"><Me /></cub-avatar>
  </cub-badge>
  <cub-badge dot>
    <cub-avatar shape="square"><Me /></cub-avatar>
  </cub-badge>
</template>
<script setup>
import { Me } from '@cubfe/icons-vue';
</script>
```

:::

### 头像组合展现

:::demo

```vue
<template>
  <cub-avatar-group span="-4">
    <cub-avatar>
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
      />
    </cub-avatar>
    <cub-avatar><Me /></cub-avatar>
    <cub-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</cub-avatar>
  </cub-avatar-group>
  <cub-avatar-group max-count="3" max-color="#fff" max-bgColor="#498ff2">
    <cub-avatar>
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
      />
    </cub-avatar>
    <cub-avatar><Me /></cub-avatar>
    <cub-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</cub-avatar>
    <cub-avatar><Me /></cub-avatar>
  </cub-avatar-group>
</template>
<script setup>
import { Me } from '@cubfe/icons-vue';
</script>
```

:::

### 组合头像可控制层级方向

:::demo

```vue
<template>
  <cub-avatar-group max-count="3" zIndex="right" max-content="...">
    <cub-avatar>
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
      />
    </cub-avatar>
    <cub-avatar><Me /></cub-avatar>
    <cub-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</cub-avatar>
    <cub-avatar><Me /></cub-avatar>
  </cub-avatar-group>
</template>
<script setup>
import { Me } from '@cubfe/icons-vue';
</script>
```

:::

### 点击头像触发事件

:::demo

```vue
<template>
  <cub-cell>
    <cub-avatar @click="handleClick"><Me /></cub-avatar>
  </cub-cell>
</template>
<script setup>
import { Me } from '@cubfe/icons-vue';
const handleClick = () => {
  console.log('触发点击头像');
};
</script>
```

:::

## API

### Avatar Props

| 参数     | 说明                                                           | 类型             | 默认值   |
| -------- | -------------------------------------------------------------- | ---------------- | -------- |
| size     | 头像的大小，可选值为：`large`、`normal`、`small`，支持输入数字 | string \| number | `normal` |
| shape    | 头像的形状，可选值为：`square`、`round `                       | string           | `round`  |
| color    | 字体颜色                                                       | string           | `#666`   |
| bg-color | 背景色                                                         | string           | `#eee`   |

### AvatarGroup Props

| 参数         | 说明                                                                      | 类型             | 默认值   |
| ------------ | ------------------------------------------------------------------------- | ---------------- | -------- |
| max-count    | 显示的最大头像个数                                                        | string \| number | -        |
| max-content  | 头像数量超出时，会出现一个头像折叠元素，该元素内容可为`...`、`more`、`+N` | string           | `+N`     |
| size         | 头像的大小，可选值为：`large`、`normal`、`small`，支持直接输入数字        | string \| number | `normal` |
| shape        | 头像的形状，可选值为：`square`、`round`                                   | string           | `round`  |
| max-color    | 头像折叠元素的字体颜色                                                    | string           | `#666`   |
| max-bg-color | 头像折叠元素的背景色                                                      | string           | `#eee`   |
| span         | 头像之间的间距                                                            | string           | `-8`     |
| zIndex       | 组合头像之间的层级方向，可选值为：`left`、`right`                         | string           | `left`   |

### Avatar Slots

| 名称    | 描述                                   |
| ------- | -------------------------------------- |
| default | 默认插槽，可放置图片、图标、文本等元素 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件]()。

| 名称                          | 默认值    |
| ----------------------------- | --------- |
| --cub-actionsheet-light-color | _#f6f6f6_ |
| --cub-avatar-square           | _5px_     |
| --cub-avatar-large-width      | _60px_    |
| --cub-avatar-large-height     | _60px_    |
| --cub-avatar-small-width      | _32px_    |
| --cub-avatar-small-height     | _32px_    |
| --cub-avatar-normal-width     | _40px_    |
| --cub-avatar-normal-height    | _40px_    |

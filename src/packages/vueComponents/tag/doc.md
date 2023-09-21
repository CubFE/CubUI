# Tag 标签

### 介绍

用于标记和分类的标签。

### 安装

```js
import { createApp } from 'vue';
import { Tag } from '@cubui/cubui';

const app = createApp();
app.use(Tag);
```

### 基础用法

:::demo

```vue
<template>
  <cub-tag>标签</cub-tag>
  <cub-tag type="primary">标签</cub-tag>
  <cub-tag type="success">标签</cub-tag>
  <cub-tag type="danger">标签</cub-tag>
  <cub-tag type="warning">标签</cub-tag>
</template>
```

:::

### 样式风格

:::demo

```vue
<template>
  <cub-tag plain>空心</cub-tag>
  <cub-tag round type="primary">圆角</cub-tag>
  <cub-tag mark type="primary">标记</cub-tag>
  <cub-tag v-if="show" closeable @close="close" type="primary">可关闭</cub-tag>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(true);
const close = () => {
  show.value = false;
};
</script>
```

:::

### 颜色自定义

:::demo

```vue
<template>
  <cub-tag color="#FA685D">背景颜色</cub-tag>
  <cub-tag color="#E9E9E9" textColor="#999999">文字颜色</cub-tag>
  <cub-tag color="#FA2400" plain>空心颜色</cub-tag>
</template>
```

:::

## API

### Props

| 参数       | 说明                                                         | 类型    | 默认值    |
| ---------- | ------------------------------------------------------------ | ------- | --------- |
| type       | 标签类型，可选值为 `primary`、`success`、`danger`、`warning` | string  | `default` |
| color      | 标签颜色                                                     | string  | -         |
| text-color | 文本颜色，优先级高于 `color` 属性                            | string  | `white`   |
| plain      | 是否为空心样式                                               | boolean | `false`   |
| round      | 是否为圆角样式                                               | boolean | `false`   |
| mark       | 是否为标记样式                                               | boolean | `false`   |
| closeable  | 是否为可关闭标签                                             | boolean | `false`   |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 标签显示内容 |

### Events

| 事件名 | 说明     | 回调参数 |
| ------ | -------- | -------- |
| click  | 点击事件 | `event`  |
| close  | 关闭事件 | `event`  |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                    | 默认值                                                                                               |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| --cub-tag-font-size                     | _12px_                                                                                               |
| --cub-tag-default-border-radius         | _4px_                                                                                                |
| --cub-tag-round-border-radius           | _8px_                                                                                                |
| --cub-tag-default-background-color      | _#000000_                                                                                            |
| --cub-tag-primary-background-color      | _#3460fa_                                                                                            |
| --cub-tag-success-background-color      | _#4fc08d_                                                                                            |
| --cub-tag-danger-background-color       | _linear-gradient(135deg,rgba(242, 20, 12, 1) 0%,rgba(232, 34, 14, 1) 70%,rgba(242, 77, 12, 1) 100%)_ |
| --cub-tag-danger-background-color-plain | _#df3526_                                                                                            |
| --cub-tag-warning-background-color      | _#f3812e_                                                                                            |
| --cub-tag-default-color                 | _#ffffff_                                                                                            |
| --cub-tag-border-width                  | _1px_                                                                                                |
| --cub-tag-plain-background-color        | _#fff_                                                                                               |
| --cub-tag-height                        | _auto_                                                                                               |

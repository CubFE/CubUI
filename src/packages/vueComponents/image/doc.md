# image

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片加载中提示、加载失败提示。

### 安装

```javascript
import { createApp } from 'vue';
import { Image } from '@cubui/cubui';

const app = createApp();
app.use();
```

### 基础用法

基础用法与原生 `img` 标签一致，可以设置 `src`、`width`、`height`、`alt` 等原生属性。

:::demo

```html
<template>
  <cub-image
    src="https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg"
    width="100"
    height="100"
  ></cub-image>
</template>
```

:::

### 填充模式

通过 `fit` 属性可以设置图片填充模式，等同于原生的 `object-fit` 属性，可选值见下方表格。

:::demo

```html
<template>
  <cub-image
    src="https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg"
    width="100"
    height="100"
    fit="contain"
  />
</template>
```

:::

### 图片位置

通过 `position` 属性可以设置图片位置，结合 `fit` 属性使用，等同于原生的 `object-position` 属性。

:::demo

```html
<template>
  <cub-image
    src="https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg"
    width="100"
    height="100"
    fit="contain"
    postion="left"
  />
</template>
```

:::

### 圆形图片

通过 `round` 属性可以设置图片变圆，注意当图片宽高不相等且 `fit` 为 `contain` 或 `scale-down` 时，将无法填充一个完整的圆形。

:::demo

```html
<template>
  <cub-image
    src="https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg"
    width="100"
    height="100"
    round
  />
</template>
```

:::

### 加载中图片

Image 组件提供了默认的加载中提示，支持通过 `loading` 插槽自定义内容。

:::demo

```html
<template>
  <cub-image width="100" height="100" show-loading>
    <template #loading>
      <Loading width="16px" height="16px" name="loading" />
    </template>
  </cub-image>
</template>
<script lang="ts">
  import { Loading } from '@cubfe/icons-vue';
  export default {
    components: { Loading }
  };
</script>
```

:::

### 加载失败

Image 组件提供了默认的加载失败提示，支持通过 `error` 插槽自定义内容。

:::demo

```html
<template>
  <cub-image src="https://x" width="100" height="100" show-error>
    <template #error>
      <CloseCircle width="16px" height="16px" name="circleClose" />
    </template>
  </cub-image>
</template>
<script lang="ts">
  import { CloseCircle } from '@cubfe/icons-vue';
  export default {
    components: { CloseCircle }
  };
</script>
```

:::

### 懒加载

刷新后滚动 Demo 页面，在控制台中查看图片请求时间。

:::demo

```html
<template>
  <cub-cell>
    <cub-image :src="src + '?t=1'" lazy-load height="200" width="100%"></cub-image>
  </cub-cell>
  <cub-cell>
    <cub-image :src="src + '?t=2'" lazy-load height="200" width="100%"></cub-image>
  </cub-cell>
  <cub-cell>
    <cub-image :src="src + '?t=3'" lazy-load height="200" width="100%"></cub-image>
  </cub-cell>
  <cub-cell>
    <cub-image :src="src + '?t=4'" lazy-load height="200" width="100%"></cub-image>
  </cub-cell>
  <cub-cell>
    <cub-image :src="src + '?t=5'" lazy-load height="200" width="100%"></cub-image>
  </cub-cell>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const src = ref(
        'https:https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'
      );
      return { src };
    }
  };
</script>
```

:::

## API

### Props

| 参数             | 说明                                          | 类型             | 默认值   |
| ---------------- | --------------------------------------------- | ---------------- | -------- |
| src              | 图片链接                                      | string           | -        |
| fit              | 图片填充模式，等同于原生的 `object-fit` 属性  | ImageFit         | `fill`   |
| position         | 图片位置，等同于原生的 `object-position` 属性 | ImagePosition    | `center` |
| alt              | 替代文本                                      | string           | -        |
| width            | 宽度，默认单位 `px`                           | string           | -        |
| height           | 高度，默认单位 `px`                           | string           | -        |
| round            | 是否显示为圆角                                | boolean          | `false`  |
| radius           | 圆角大小                                      | string \| number | -        |
| show-error       | 是否展示图片加载失败                          | boolean          | `false`  |
| show-loading     | 是否展示加载中图片                            | boolean          | `true`   |
| lazy-load`4.0.8` | 懒加载                                        | boolean          | `false`  |

### ImageFit 图片填充模式

| 参数       | 说明                                                   |
| ---------- | ------------------------------------------------------ |
| contain    | 保持宽高缩放图片，使图片的长边能完全显示出来           |
| cover      | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill       | 拉伸图片，使图片填满元素                               |
| none       | 保持图片原有尺寸                                       |
| scale-down | 取 `none` 或 `contain` 中较小的一个                    |

### ImagePosition 图片位置

| 参数   | 说明     |
| ------ | -------- |
| center | 居中对齐 |
| top    | 顶部对齐 |
| right  | 右侧对齐 |
| bottom | 底部对齐 |
| left   | 左侧对齐 |

### Slots

| 名称    | 说明                     |
| ------- | ------------------------ |
| loading | 自定义加载中的提示内容   |
| error   | 自定义记载失败的提示内容 |

### Events

| 事件名 | 说明               | 回调参数     |
| ------ | ------------------ | ------------ |
| click  | 点击图片时触发     | event: Event |
| load   | 图片加载完后触发   | --           |
| error  | 图片加载失败后触发 | --           |

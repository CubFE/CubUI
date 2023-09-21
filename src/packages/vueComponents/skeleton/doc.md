# Skeleton 骨架屏

### 介绍

在页面上待加载区域填充灰色的占位图，本质上是界面加载过程中的过渡效果。

### 安装

```javascript
import { createApp } from 'vue';
import { Skeleton } from '@cubui/cubui';

const app = createApp();
app.use(Skeleton);
```

### 基础用法

:::demo

```html
<template>
  <cub-skeleton width="250px" height="15px" animated> </cub-skeleton>
</template>
```

:::

### 传入多行

:::demo

```html
<template>
  <cub-skeleton width="250px" height="15px" title animated row="3"> </cub-skeleton>
</template>
```

:::

### 显示头像

:::demo

```html
<template>
  <cub-skeleton width="250px" height="15px" title animated avatar avatarSize="60px" row="3"> </cub-skeleton>
</template>
```

:::

### 标题段落圆角风格

:::demo

```html
<template>
  <cub-skeleton width="250px" height="15px" animated round></cub-skeleton>
</template>
```

:::

### 图片组合

:::demo

```html
<template>
  <div class="pic-compose">
    <cub-skeleton width="250px" height="15px" title animated row="3" class="item"> </cub-skeleton>
    <cub-skeleton width="250px" height="15px" title animated row="3" class="item"> </cub-skeleton>
  </div>
</template>
<style>
  .pic-compose {
    display: flex;
    justify-content: space-between;
    .item {
      width: 47%;
    }
  }
</style>
```

:::

### 显示子组件

:::demo

```html
<template>
  <div class="content">
    <cub-switch v-model="checked" />
    <cub-skeleton width="250px" height="15px" title animated avatar row="3" :loading="!checked">
      <div class="container">
        <cub-avatar size="50">
          <img
            src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
          />
        </cub-avatar>
        <div class="right-content">
          <div class="title">cubui</div>
          <div class="desc"
            >一套轻量级移动端Vue组库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。</div
          >
        </div>
      </div>
    </cub-skeleton>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const checked = ref(false);
      return {
        checked
      };
    }
  };
</script>

<style>
  .cub-switch {
    display: flex;
    margin: 0 16px 8px 0;
  }
  .container {
    display: flex;
  }
  .right-content {
    margin-left: 19px;
    font-family: PingFangSC;
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 14px;
    color: rgba(51, 51, 51, 1);
  }
  .desc {
    margin-top: 10px;
    font-size: 13px;
    color: rgba(154, 155, 157, 1);
  }
</style>
```

:::

## API

### Props

| 参数         | 说明                           | 类型    | 默认值    |
| ------------ | ------------------------------ | ------- | --------- |
| loading      | 是否显示骨架屏                 | boolean | `true`    |
| width        | 每行宽度                       | string  | `default` |
| height       | 每行高度                       | string  | `15px`    |
| animated     | 是否开启骨架屏动画             | boolean | `false`   |
| avatar       | 是否显示头像                   | boolean | `false`   |
| avatar-shape | 头像形状：正方形/圆形          | string  | `round`   |
| avatar-size  | 头像大小                       | string  | `50px`    |
| round        | 标题/段落是否采用圆角风格      | boolean | `false`   |
| title        | 是否显示段落标题（第一行显示） | boolean | `true`    |
| row          | 设置段落行数（title 下方展示） | string  | `1`       |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 骨架屏显示内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                           | 默认值                                                                                             |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| --cub-skeleton-content-avatar-background-color | _#efefef_                                                                                          |
| --cub-skeleton-content-line-background-color   | _#efefef_                                                                                          |
| --cub-skeleton-animation-background-color      | _linear-gradient(90deg,hsla(0, 0%, 100%, 0),hsla(0, 0%, 100%, 0.5) 50%, hsla(0, 0%, 100%, 0) 80%)_ |

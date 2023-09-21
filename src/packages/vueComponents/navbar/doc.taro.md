# Navbar 头部导航

### 介绍

提供导航功能，常用于页面顶部。

### 安装

```js
import { createApp } from 'vue';
import { Navbar } from '@cubui/cubui-taro';

const app = createApp();
app.use(Navbar);
```

### 基础用法

:::demo

```vue
<template>
  <cub-navbar @on-click-back="back" @on-click-title="title" title="订单详情">
    <template #left>
      <view>返回</view>
    </template>
    <template #right>
      <ShareN width="16px" />
    </template>
  </cub-navbar>

  <cub-navbar
    @on-click-back="back"
    @on-click-title="title"
    @on-click-right="rightClick"
    title="浏览记录"
    desc="清空"
  ></cub-navbar>

  <cub-navbar
    :left-show="false"
    @on-click-back="back"
    @on-click-title="title"
    @on-click-icon="icon"
    @on-click-right="rightClick"
    title="购物车"
    :titleIcon="true"
    desc="编辑"
  >
    <template #title-icon>
      <Cart2 width="16px" />
    </template>
    <template #right>
      <MoreX class="right" width="16px" />
    </template>
  </cub-navbar>
</template>

<script setup>
import { ShareN, Cart2, MoreX } from '@cubfe/icons-vue-taro';
const back = () => {
  console.log('Click Back');
};
const title = () => {
  console.log('Click Title');
};
const rightClick = () => {
  console.log('Click Right');
};
const icon = () => {
  console.log('Click Icon');
};
</script>
```

:::

### 自定义导航栏中间内容

:::demo

```vue
<template>
  <cub-navbar @on-click-back="back" @on-click-title="title" @on-click-right="rightClick" desc="编辑">
    <template #content>
      <cub-tabs v-model="tab1value" @click="changeTab">
        <cub-tab-pane title="标题1"> </cub-tab-pane>
        <cub-tab-pane title="标题2"> </cub-tab-pane>
      </cub-tabs>
    </template>

    <template #right>
      <MoreX class="right" width="16px"></MoreX>
    </template>
  </cub-navbar>
</template>

<script setup>
import { ref } from 'vue';
import { MoreX } from '@cubfe/icons-vue-taro';
const tab1value = ref(0);
const back = () => {
  console.log('Click Back');
};
const title = () => {
  console.log('Click Title');
};
const rightClick = () => {
  console.log('Click Right');
};
const changeTab = (tab) => {
  tab1value.value = tab.paneKey;
};
</script>
```

:::

### 多 tab 切换导航

:::demo

```vue
<template>
  <cub-navbar @on-click-back="back">
    <template #content>
      <cub-tabs v-model="tab2value" @click="changeTabList">
        <cub-tab-pane title="标题1"> </cub-tab-pane>
        <cub-tab-pane title="标题2"> </cub-tab-pane>
        <cub-tab-pane title="标题3"> </cub-tab-pane>
      </cub-tabs>
    </template>

    <template #right>
      <HorizontalN class="right" width="16px"></HorizontalN>
    </template>
  </cub-navbar>
</template>

<script setup>
import { ref } from 'vue';
import { HorizontalN } from '@cubfe/icons-vue-taro';
const tab2value = ref(0);
const back = () => {
  console.log('Click Back');
};
const changeTabList = (tab) => {
  tab2value.value = tab.paneKey;
};
</script>
```

:::

## API

### Props

| 参数                | 说明                                               | 类型             | 默认值  |
| ------------------- | -------------------------------------------------- | ---------------- | ------- |
| title               | 标题名称                                           | string           | -       |
| left-text           | 左侧文案                                           | string           | -       |
| desc                | 右侧描述                                           | string           | -       |
| left-show           | 是否展示左侧箭头                                   | boolean          | `false` |
| title-icon          | 标题中是否展示 `icon`                              | boolean          | `false` |
| border              | 是否显示下边框                                     | boolean          | `false` |
| fixed               | 是否固定到顶部                                     | boolean          | `false` |
| placeholder         | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | boolean          | `false` |
| safe-area-inset-top | 是否开启顶部安全区适配                             | boolean          | `false` |
| z-index             | 导航栏 `z-index`                                   | number ｜ string | -       |

### Events

| 事件名         | 说明                     | 回调参数    |
| -------------- | ------------------------ | ----------- |
| on-click-title | 点击页面标题事件         | event:Event |
| on-click-icon  | 点击页面标题 `icon` 事件 | event:Event |
| on-click-right | 点击右侧按钮事件         | event:Event |
| on-click-back  | 点击左侧图标事件         | event:Event |

### Slots

| 名称       | 说明                 |
| ---------- | -------------------- |
| left       | 自定义左侧内容       |
| right      | 自定义右侧内容       |
| content    | 自定义导航栏中间内容 |
| left-show  | 左侧箭头自定义图标   |
| title-icon | 标题中自定义图标     |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                           | 默认值                                   |
| ------------------------------ | ---------------------------------------- |
| --cub-navbar-height            | _44px_                                   |
| --cub-navbar-margin-bottom     | _20px_                                   |
| --cub-navbar-padding           | _0 16px_                                 |
| --cub-navbar-background        | _var(--cub-white)_                       |
| --cub-navbar-box-shadow        | _0px 1px 7px 0px rgba(237, 238, 241, 1)_ |
| --cub-navbar-color             | _var(--cub-title-color2)_                |
| --cub-navbar-title-base-font   | _var(--cub-font-size-2)_                 |
| --cub-navbar-title-font        | _var(--cub-font-size-2)_                 |
| --cub-navbar-title-font-weight | _0_                                      |
| --cub-navbar-title-font-color  | _var(--cub-navbar-color)_                |
| --cub-navbar-title-width       | _100px_                                  |
| --cub-navbar-title-icon-margin | _0 0 0 13px_                             |

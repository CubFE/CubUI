# Progress 进度条

### 介绍

展示操作或任务的当前进度。

### 安装

```js
import { createApp } from 'vue';
import { Progress } from '@cubui/cubui-taro';

const app = createApp();
app.use(Progress);
```

### 基础用法

:::demo

```vue
<template>
  <cub-progress percentage="30" />
</template>
```

:::

### 设置颜色高度

:::demo

```vue
<template>
  <cub-progress percentage="30" stroke-color="rgba(250,44,25,0.47)" stroke-width="20" text-color="red" />
</template>
```

:::

### 设置百分比不显示

:::demo

```vue
<template>
  <cub-progress percentage="50" :show-text="false" stroke-height="24" />
</template>
```

:::

### 设置百分比内显

:::demo

```vue
<template>
  <cub-progress percentage="60" :text-inside="true" />
</template>
```

:::

### 设置百分比内显自定义内容

:::demo

```vue
<template>
  <cub-progress percentage="60" :text-inside="true">
    <img
      src="https://oss.netconcepts.cn/website/wap/job-wap-icon-1.png"
      width="30"
      height="30"
    />
  </cub-progress>
</template>
```

:::

### 自定义尺寸

内置 **small**，**base**，**large** 三种规格供使用。
:::demo

```vue
<template>
  <cub-progress percentage="30" :text-inside="true" size="small"> </cub-progress>
  <cub-progress percentage="50" :text-inside="true" size="base"> </cub-progress>
  <cub-progress percentage="70" :text-inside="true" size="large"> </cub-progress>
</template>
```

:::

### 设置状态显示

:::demo

```vue
<template>
  <cub-progress
    percentage="30"
    stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
    status="active"
  />
  <cub-progress percentage="50" status="icon" />
  <cub-progress
    percentage="100"
    stroke-color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
    stroke-width="15"
    status="icon"
  >
    <template #icon-name>
      <Issue color="red" width="15px" height="15px"></Issue>
    </template>
  </cub-progress>
</template>
<script setup>
import { Issue } from '@cubfe/icons-vue-taro';
</script>
```

:::

### 动态改变

:::demo

```vue
<template>
  <cub-progress :percentage="val" />
  <cub-button type="default" @click="setReduceVal">减少</cub-button>
  <cub-button type="primary" @click="setAddVal">增加</cub-button>
</template>
<script setup>
import { ref } from 'vue';
const val = ref(0);
const setAddVal = () => {
  if (val.value >= 100) {
    return false;
  }
  val.value += 10;
};
const setReduceVal = () => {
  if (val.value <= 0) {
    return false;
  }
  val.value -= 10;
};
</script>
```

:::

## API

### Props

| 参数               | 说明                                                              | 类型    | 默认值  |
| ------------------ | ----------------------------------------------------------------- | ------- | ------- |
| percentage         | 百分比                                                            | number  | `0`     |
| is-show-percentage | 是否需要展示百分号                                                | boolean | `true`  |
| stroke-color       | 进度条背景色                                                      | string  | `#f30`  |
| stroke-width       | 进度条宽度                                                        | string  | -       |
| size               | 进度条及文字尺寸，可选值 `small` `base` `large`                   | string  | `base`  |
| show-text          | 是否显示进度条文字内容                                            | boolean | `true`  |
| text-inside        | 进度条文字显示位置(false:外显，true:内显)                         | boolean | `false` |
| text-color         | 进度条文字颜色设置                                                | string  | `#333`  |
| text-background    | 进度条文字背景颜色设置                                            | string  | -       |
| status             | 进度条当前状态，可选值`active(展示动画效果)` `icon(展示icon标签)` | string  | `text`  |

### Slots

| 名称      | 说明             | 作用域参数 |
| --------- | ---------------- | ---------- |
| icon-name | 右侧 `icon` 内容 | -          |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                    | 默认值                                                                                  |
| --------------------------------------- | --------------------------------------------------------------------------------------- |
| --cub-progress-inner-background-color   | _linear-gradient(135deg,var(--cub-primary-color) 0%,var(--cub-primary-color-end) 100%)_ |
| --cub-progress-insidetext-background    | _var(--cub-progress-inner-background-color)_                                            |
| --cub-progress-outer-background-color   | _#f3f3f3_                                                                               |
| --cub-progress-outer-border-radius      | _12px_                                                                                  |
| --cub-progress-insidetext-border-radius | _5px_                                                                                   |
| --cub-progress-insidetext-padding       | _3px 5px 3px 6px_                                                                       |
| --cub-progress-small-height             | _5px_                                                                                   |
| --cub-progress-small-text-font-size     | _7px_                                                                                   |
| --cub-progress-small-text-line-height   | _10px_                                                                                  |
| --cub-progress-small-text-padding       | _2px 4px_                                                                               |
| --cub-progress-base-height              | _10px_                                                                                  |
| --cub-progress-base-text-font-size      | _9px_                                                                                   |
| --cub-progress-base-text-line-height    | _13px_                                                                                  |
| --cub-progress-base-text-padding        | _var(--cub-progress-insidetext-padding)_                                                |
| --cub-progress-large-height             | _15px_                                                                                  |
| --cub-progress-large-text-font-size     | _13px_                                                                                  |
| --cub-progress-large-text-line-height   | _18px_                                                                                  |
| --cub-progress-large-text-padding       | _var(--cub-progress-insidetext-padding)_                                                |

# Notify 消息通知

### 介绍

在页面顶部展示消息提示

### 安装

```javascript
import { createApp } from 'vue';
import { Notify } from '@cubui/cubui';

const app = createApp();
app.use(Notify);
```

### 基础用法

:::demo

```html
<template>
  <cub-cell is-Link @click="baseNotify('基础用法')">基础用法</cub-cell>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showNotify } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/notify/style';
  export default {
    setup() {
      const baseNotify = (msg: string) => {
        showNotify.text(msg, {
          onClose: () => {
            console.log('close');
          },
          onClick: () => {
            console.log('click');
          }
        });
      };
      return {
        baseNotify
      };
    }
  };
</script>
```

:::

### 通知类型

:::demo

```html
<template>
  <cub-cell-group title="通知类型">
    <cub-cell is-Link @click="primaryNotify('主要通知')">主要通知</cub-cell>
    <cub-cell is-Link @click="successNotify('成功通知')">成功通知</cub-cell>
    <cub-cell is-Link @click="errorNotify('危险通知')">危险通知</cub-cell>
    <cub-cell is-Link @click="warningNotify('警告通知')">警告通知</cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showNotify } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/notify/style';
  export default {
    setup() {
      const primaryNotify = (msg: string) => {
        showNotify.primary(msg);
      };
      const successNotify = (msg: string) => {
        showNotify.success(msg);
      };
      const errorNotify = (msg: string) => {
        showNotify.danger(msg);
      };
      const warningNotify = (msg: string) => {
        showNotify.warn(msg);
      };
      return {
        primaryNotify,
        successNotify,
        errorNotify,
        warningNotify
      };
    }
  };
</script>
```

:::

### 自定义

:::demo

```html
<template>
  <cub-cell-group title="自定义背景色和字体颜色">
    <cub-cell is-Link @click="cusBgNotify('自定义背景色和字体颜色')">自定义背景色和字体颜色</cub-cell>
  </cub-cell-group>
  <cub-cell-group title="自定义时长">
    <cub-cell is-Link @click="timeNotify('自定义时长')">自定义时长</cub-cell>
  </cub-cell-group>
  <cub-cell-group title="自定义位置">
    <cub-cell is-Link @click="positionNotify('自定义位置')">自定义位置</cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showNotify } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/notify/style';
  export default {
    setup() {
      const cusBgNotify = (msg: string) => {
        showNotify.text(msg, { color: '#ad0000', background: '#ffe1e1' });
      };
      const timeNotify = (msg: string) => {
        showNotify.text(msg, { duration: 10000 });
      };
      const positionNotify = (msg: string) => {
        showNotify.text(msg, { position: 'bottom' });
      };
      return {
        cusBgNotify,
        timeNotify,
        positionNotify
      };
    }
  };
</script>
```

:::

### 组件调用

:::demo

```html
<template>
  <cub-cell-group title="组件调用">
    <cub-cell is-Link @click="onClick">组件调用</cub-cell>
    <cub-notify v-model:visible="show" :duration="2000">
      <span>Content</span>
    </cub-notify>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { showNotify } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/notify/style';
  export default {
    setup() {
      const show = ref(false);
      const onClick = () => {
        show.value = true;
      };
      return {
        show,
        onClick
      };
    }
  };
</script>
```

:::

### API

### Props

| 参数       | 说明                                                              | 类型             | 默认值   |
| ---------- | ----------------------------------------------------------------- | ---------------- | -------- |
| type       | 提示的信息类型，可选值为`primary`、`success`、`danger`、`warning` | string           | `danger` |
| visible    | 显示与否                                                          | boolean          | `false`  |
| msg        | 展示文案，支持通过`\n`换行                                        | string           | `''`     |
| duration   | 展示时长(ms)，值为 0 时，`notify` 不会消失                        | number           | `3000`   |
| color      | 字体颜色                                                          | string           | `''`     |
| background | 背景样式                                                          | string           | `''`     |
| class-name | 自定义类名                                                        | string \| number | `1`      |
| position   | 自定义位置，可选值为 `top` `bottom` `left` `right` `center`       | string           | `top`    |

### Events

| 事件名 | 说明         | 回调参数 |
| ------ | ------------ | -------- |
| click  | 点击事件回调 | `-`      |
| closed | 关闭事件回调 | `-`      |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                  | 默认值                                                                                                                        |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| --cub-notify-text-color               | _var(--cub-white)_                                                                                                            |
| --cub-notify-padding                  | _12px 0_                                                                                                                      |
| --cub-notify-font-size                | _14px_                                                                                                                        |
| --cub-notify-height                   | _44px_                                                                                                                        |
| --cub-notify-line-height              | _auto_                                                                                                                        |
| --cub-notify-base-background-color    | _linear-gradient(135deg,var(--cub-primary-color) 0%,var(--cub-primary-color-end) 100%)_                                       |
| --cub-notify-primary-background-color | _linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%)_                                               |
| --cub-notify-success-background-color | _linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)_ |
| --cub-notify-danger-background-color  | _rgba(250, 50, 25, 1)_                                                                                                        |
| --cub-notify-warning-background-color | _linear-gradient(135deg, rgba(255, 93, 13, 1) 0%, rgba(255, 154, 13, 1) 100%)_                                                |

# Badge 徽标

### 介绍

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

### 安装

```javascript
import { createApp } from 'vue';
import { Badge } from '@cubui/cubui-taro';

const app = createApp();
app.use(Badge);
```

### 基础用法

:::demo

```html
<template>
  <view class="demo">
    <cub-badge :value="8">
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
    <cub-badge :value="76">
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
    <cub-badge value="NEW">
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
    <cub-badge dot>
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
  </view>
</template>

<style>
  .demo {
    padding: 30px 17px 0 17px;
  }
  .cub-badge {
    margin-right: 40px;
  }
</style>
```

:::

### 最大值

:::demo

```html
<template>
  <view class="demo">
    <cub-badge :value="200" :max="9">
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
    <cub-badge :value="200" :max="20">
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
    <cub-badge :value="200" :max="99">
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
  </view>
</template>

<style>
  .demo {
    padding: 30px 17px 0 17px;
  }
  .cub-badge {
    margin-right: 40px;
  }
</style>
```

:::

### 自定义颜色

:::demo

```html
<template>
  <view class="demo">
    <cub-badge :value="8" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
    <cub-badge :value="76" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
    <cub-badge value="NEW" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
    <cub-badge dot color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
  </view>
</template>

<style>
  .demo {
    padding: 30px 17px 0 17px;
  }
  .cub-badge {
    margin-right: 40px;
  }
</style>
```

:::

### 自定义徽标内容

:::demo

```html
<template>
  <view class="demo">
    <cub-badge>
      <template #icon>
        <Check color="#ffffff" size="12px"></Check>
      </template>
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
    <cub-badge>
      <template #icon>
        <Link color="#ffffff" size="12px"></Link>
      </template>
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
    <cub-badge>
      <template #icon>
       <Download color="#ffffff" size="12px"></Download>
      </template>
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
  </view>
</template>

<script setup>
import { Check, Link, Download } from '@cubfe/icons-vue-taro';
</script>

<style>
.demo{
  padding: 30px 17px 0 17px;
}
.cub-badge {
  margin-right: 40px;
}
</style>

```

:::

### 自定义位置

:::demo

```html
<template>
  <view class="demo">
    <cub-badge :value="8" top="5" right="5">
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
    <cub-badge :value="76" top="10" right="10">
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
    <cub-badge value="NEW">
      <cub-avatar shape="square"></cub-avatar>
    </cub-badge>
  </view>
</template>

<style>
  .demo {
    padding: 30px 17px 0 17px;
  }
  .cub-badge {
    margin-right: 40px;
  }
</style>
```

:::

### 独立展示

:::demo

```html
<template>
  <view class="demo">
    <cub-badge :value="8"> </cub-badge>
    <cub-badge :value="76"> </cub-badge>
    <cub-badge value="NEW"> </cub-badge>
  </view>
</template>

<style>
  .demo {
    padding: 30px 17px 0 17px;
  }
  .cub-badge {
    margin-right: 40px;
  }
</style>
```

:::

## API

### Props

| 参数              | 说明                                         | 类型    | 默认值    |
| ----------------- | -------------------------------------------- | ------- | --------- |
| value             | 显示的内容                                   | string  | `-`       |
| max               | `value` 为数值时，最大值                     | number  | `10000`   |
| z-index           | 徽标的 `z-index` 值                          | number  | `10`      |
| dot               | 是否为小点                                   | boolean | `false`   |
| bubble(`>v4.0.0`) | 是否为气泡形状                               | Boolean | `false`   |
| hidden            | 是否隐藏                                     | boolean | `false`   |
| top               | 上下偏移量，支持单位设置，可设置为：`5px` 等 | number  | `0`       |
| right             | 左右偏移量，支持单位设置，可设置为：`5px` 等 | number  | `0`       |
| color             | 徽标背景颜色                                 | string  | `#fa2c19` |

### Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 徽标包裹的子元素 |
| icon    | 徽标自定义       |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                          | 默认值                                                                                    |
| ----------------------------- | ----------------------------------------------------------------------------------------- |
| --cub-badge-background-color  | _linear-gradient(135deg, var(--cub-primary-color) 0%, var(--cub-primary-color-end) 100%)_ |
| --cub-badge-color             | _#fff_                                                                                    |
| --cub-badge-font-size         | _var(--cub-font-size-1)_                                                                  |
| --cub-badge-border-radius     | _14px_                                                                                    |
| --cub-badge-icon-padding      | _4px_                                                                                     |
| --cub-badge-padding           | _0 5px_                                                                                   |
| --cub-badge-content-transform | _translate(50%, -50%)_                                                                    |
| --cub-badge-z-index           | _1_                                                                                       |
| --cub-badge-dot-width         | _7px_                                                                                     |
| --cub-badge-dot-height        | _7px_                                                                                     |
| --cub-badge-dot-border-radius | _7px_                                                                                     |
| --cub-badge-dot-padding       | _0px_                                                                                     |

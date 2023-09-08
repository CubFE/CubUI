# Cell 单元格

### 介绍

列表项，可组成列表。

### 安装

```javascript
import { createApp } from 'vue';
import { Cell, CellGroup } from '@cubui/cubui';

const app = createApp();
app.use(Cell);
app.use(CellGroup);
```

### 基础用法

:::demo

```html
<template>
  <cub-cell title="我是标题" desc="描述文字"></cub-cell>
  <cub-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></cub-cell>
  <cub-cell title="点击测试" @click="testClick"></cub-cell>
  <cub-cell title="圆角设置 0" round-radius="0"></cub-cell>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const switchChecked = ref(true);
      const testClick = (event) => {
        console.log('Click Test');
      };
      return { testClick, switchChecked };
    }
  };
</script>
```

:::

### 尺寸设置 large

:::demo

```html
<template>
  <cub-cell size="large" title="我是标题" desc="描述文字"></cub-cell>
  <cub-cell size="large" title="我是标题" sub-title="副标题描述" desc="描述文字"></cub-cell>
</template>
```

:::

### 直接使用插槽（slot）

:::demo

```html
<template>
  <cub-cell>
    <div>自定义内容</div>
  </cub-cell>
</template>
```

:::

### 直接使用插槽（slot title）

:::demo

```html
<template>
  <cub-cell desc="描述文字">
    <template v-slot:title>
      <span>Title <b style="color: red">1</b></span>
    </template>
  </cub-cell>
</template>
```

:::

### 链接 | 分组用法

:::demo

```html
<template>
  <cub-cell-group title="链接 | 分组用法" desc="使用 cub-cell-group 支持 title desc slots">
    <cub-cell title="链接" is-link></cub-cell>
    <cub-cell title="URL 跳转" desc="https://m.kakusoft.com" is-link url="https://m.kakusoft.com"></cub-cell>
    <cub-cell title="路由跳转 ’/‘ " to="/"></cub-cell>
  </cub-cell-group>
</template>
```

:::

### 自定义右侧箭头区域

:::demo

```html
<template>
  <cub-cell-group title="自定义右侧箭头区域">
    <cub-cell title="Switch">
      <template v-slot:link>
        <cub-switch v-model="switchChecked" />
      </template>
    </cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const testClick = (event: Event) => {
        console.log('点击事件');
      };
      const switchChecked = ref(true);
      return { testClick, switchChecked };
    }
  };
</script>
```

:::

### 自定义左侧 Icon 区域

:::demo

```html
<template>
  <cub-cell-group title="自定义左侧 Icon 区域">
    <cub-cell title="图片">
      <template v-slot:icon>
        <img
          style="width:20px;height: 20px;"
          src="https://oss.netconcepts.cn/website/assets/media/modules/brand/jiangpai.png"
        />
      </template>
    </cub-cell>
  </cub-cell-group>
</template>
```

:::

### 单元格展示图标

:::demo

```html
<template>
  <cub-cell title="姓名" desc="张三">
    <template v-slot:icon>
      <Me />
    </template>
  </cub-cell>
</template>
<script lang="ts">
  import { Me } from '@cubfe/icons-vue';
  export default {
    components: { Me },
    setup() {
      return { Me };
    }
  };
</script>
```

:::

### 只展示 desc ，可通过 desc-text-align 调整内容位置

:::demo

```html
<template>
  <cub-cell desc-text-align="left" desc="张三"></cub-cell>
</template>
```

:::

### 垂直居中

通过 `center` 属性可以让 Cell 的左右内容都垂直居中。

:::demo

```html
<template>
  <cub-cell center title="我是标题" sub-title="副标题描述" desc="描述文字"></cub-cell>
</template>
```

:::

## API

### CellGroup Props

| 参数  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| title | 分组标题 | string | -      |
| desc  | 分组描述 | string | -      |

### Cell Props

| 参数            | 说明                                                                                             | 类型             | 默认值  |
| --------------- | ------------------------------------------------------------------------------------------------ | ---------------- | ------- |
| title           | 标题名称                                                                                         | string           | -       |
| sub-title       | 左侧副标题                                                                                       | string           | -       |
| desc            | 右侧描述                                                                                         | string           | -       |
| desc-text-align | 右侧描述文本对齐方式 [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp)     | string           | `right` |
| is-link         | 是否展示右侧箭头并开启点击反馈                                                                   | boolean          | `false` |
| round-radius    | 圆角半径                                                                                         | number           | `6px`   |
| url             | 点击后跳转的链接地址                                                                             | string           | -       |
| to              | 点击后跳转的目标路由对象，同 `vue-router` 的 [to 属性](https://router.vuejs.org/zh/api/#to) 属性 | string \| object | -       |
| replace         | 是否在跳转时替换当前页面历史                                                                     | boolean          | `false` |
| center          | 是否使内容垂直居中                                                                               | boolean          | `false` |
| size            | 单元格大小，可选值为 `large`                                                                     | string           | -       |

### Cell Events

| 事件名 | 说明     | 回调参数      |
| ------ | -------- | ------------- |
| click  | 点击事件 | `event:Event` |

### Cell Slots

| 名称    | 说明                    |
| ------- | ----------------------- |
| icon    | 自定义左侧 `icon` 区域  |
| default | 自定义内容              |
| link    | 自定义右侧 `link` 区域  |
| title   | 自定义 `title` 标题区域 |

### CellGroup Slots

| 名称  | 说明                    |
| ----- | ----------------------- |
| title | 自定义 `title` 标题区域 |
| desc  | 自定义 `desc` 描述区域  |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                               | 默认值                                   |
| ---------------------------------- | ---------------------------------------- |
| --cub-cell-color                   | _var(--cub-title-color2)_                |
| --cub-cell-title-font              | _var(--cub-font-size-2)_                 |
| --cub-cell-title-desc-font         | _var(--cub-font-size-1)_                 |
| --cub-cell-desc-font               | _var(--cub-font-size-2)_                 |
| --cub-cell-desc-color              | _var(--cub-disable-color)_               |
| --cub-cell-border-radius           | _6px_                                    |
| --cub-cell-padding                 | _13px 16px_                              |
| --cub-cell-line-height             | _20px_                                   |
| --cub-cell-after-right             | _16px_                                   |
| --cub-cell-after-border-bottom     | _1px solid #f5f6f7_                      |
| --cub-cell-default-icon-margin     | _0 4px 0 0px_                            |
| --cub-cell-large-title-font        | _var(--cub-font-size-large)_             |
| --cub-cell-large-title-desc-font   | _var(--cub-font-size-base)_              |
| --cub-cell-large-padding           | _15px 16px_                              |
| --cub-cell-background              | _var(--cub-white)_                       |
| --cub-cell-box-shadow              | _0px 1px 7px 0px rgba(237, 238, 241, 1)_ |
| --cub-cell-group-title-padding     | _0 10px_                                 |
| --cub-cell-group-title-color       | _#909ca4_                                |
| --cub-cell-group-title-font-size   | _var(--cub-font-size-2)_                 |
| --cub-cell-group-title-line-height | _20px_                                   |
| --cub-cell-group-desc-padding      | _0 10px_                                 |
| --cub-cell-group-desc-color        | _#909ca4_                                |
| --cub-cell-group-desc-font-size    | _var(--cub-font-size-1)_                 |
| --cub-cell-group-desc-line-height  | _16px_                                   |
| --cub-cell-group-background-color  | _var(--cub-white)_                       |

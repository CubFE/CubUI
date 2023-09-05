# InputNumber 数字输入框

### 介绍

通过点击按钮控制数字增减。

### 安装

```javascript
import { createApp } from 'vue';
import { InputNumber } from '@cubui/cubui';

const app = createApp();
app.use(InputNumber);
```

### 基础用法

初始化一个默认值

:::demo

```html
<template>
  <cub-input-number v-model="value" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const value = ref(1);
      return { value };
    }
  };
</script>
```

:::

### 步长设置

设置步长 `step` 5

:::demo

```html
<template>
  <cub-input-number v-model="value" step="5" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const value = ref(1);
      return { value };
    }
  };
</script>
```

:::

### 限制输入范围

`min` 和 `max` 属性分别表示最小值和最大值

:::demo

```html
<template>
  <cub-input-number v-model="value" min="10" max="20" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const value = ref(10);
      return { value };
    }
  };
</script>
```

:::

### 禁用状态

`disabled` 禁用状态下无法点击按钮或修改输入框。

:::demo

```html
<template>
  <cub-input-number v-model="value" disabled />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const value = ref(1);
      return { value };
    }
  };
</script>
```

:::

### 只读禁用输入框

`readonly` 设置只读禁用输入框输入行为

:::demo

```html
<template>
  <cub-input-number v-model="value" readonly />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const value = ref(1);
      return { value };
    }
  };
</script>
```

:::

### 支持小数点

设置步长 `step` 0.1 `decimal-places` 小数保留 1 位

:::demo

```html
<template>
  <cub-input-number v-model="value" step="0.1" decimal-places="1" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const value = ref(1);
      return { value };
    }
  };
</script>
```

:::

### 支持异步修改

通过 `change` 事件和 `model-value` 进行异步修改

:::demo

```html
<template>
  <cub-input-number :model-value="value" @change="onChange" />
</template>
<script lang="ts">
  import { reactive, getCurrentInstance, toRefs } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const state = reactive({
        value: 1
      });
      const onChange = (value: number) => {
        showToast.loading('异步演示 2 秒后更改');
        setTimeout(() => {
          state.value = value;
          showToast.hide();
        }, 2000);
      };
      return { ...toRefs(state), onChange };
    }
  };
</script>
```

:::

### 自定义按钮大小

:::demo

```html
<template>
  <cub-input-number v-model="value" button-size="30" input-width="50" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const value = ref(1);
      return { value };
    }
  };
</script>
```

:::

### 自定义按钮图标

:::demo

```html
<template>
  <cub-input-number v-model="value">
    <template #left-icon>
      <Left />
    </template>
    <template #right-icon>
      <Right />
    </template>
  </cub-input-number>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { Left, Right } from '@cubfe/icons-vue';
  export default {
    components: { Left, Right },
    setup() {
      const value = ref(1);
      return { value };
    }
  };
</script>
```

:::

## API

### Props

| 参数           | 说明                       | 类型             | 默认值  |
| -------------- | -------------------------- | ---------------- | ------- |
| v-model        | 初始值                     | string \| number | -       |
| input-width    | 输入框宽度                 | string           | ``      |
| button-size    | 操作符+、-尺寸             | string           | ``      |
| min            | 最小值限制                 | string \| number | `1`     |
| max            | 最大值限制                 | string \| number | `9999`  |
| step           | 步长                       | string \| number | `1`     |
| decimal-places | 设置保留的小数位           | string \| number | `0`     |
| disabled       | 禁用所有功能               | boolean          | `false` |
| readonly       | 只读状态禁用输入框操作行为 | boolean          | `false` |

### Slots

| 名称       | 说明           |
| ---------- | -------------- |
| left-icon  | 自定义左侧按钮 |
| right-icon | 自定义右侧按钮 |

### Events

| 事件名    | 说明                   | 回调参数                                      |
| --------- | ---------------------- | --------------------------------------------- |
| add       | 点击增加按钮时触发     | `(event: Event)`                              |
| reduce    | 点击减少按钮时触发     | `(event: Event) `                             |
| overlimit | 点击不可用的按钮时触发 | `(event: Event,type:string (reduce or add) )` |
| change    | 值改变时触发           | `(value: number , event : Event) `            |
| blur      | 输入框失去焦点时触发   | `(event: Event)  `                            |
| focus     | 输入框获得焦点时触发   | `(event: Event ) `                            |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                     | 默认值                     |
| ---------------------------------------- | -------------------------- |
| --cub-inputnumber-icon-color             | _var(--cub-title-color)_   |
| --cub-inputnumber-icon-void-color        | _var(--cub-disable-color)_ |
| --cub-inputnumber-icon-size              | _20px_                     |
| --cub-inputnumber-input-width            | _40px_                     |
| --cub-inputnumber-input-font-size        | _12px_                     |
| --cub-inputnumber-input-font-color       | _var(--cub-title-color)_   |
| --cub-inputnumber-input-background-color | _var(--cub-help-color)_    |
| --cub-inputnumber-input-border-radius    | _4px_                      |
| --cub-inputnumber-input-margin           | _0 6px_                    |
| --cub-inputnumber-input-border           | _0_                        |
| --cub-inputnumber-border                 | _0_                        |
| --cub-inputnumber-border-radius          | _0_                        |
| --cub-inputnumber-height                 | _auto_                     |
| --cub-inputnumber-line-height            | _normal_                   |
| --cub-inputnumber-border-box             | _content-box_              |
| --cub-inputnumber-display                | _flex_                     |

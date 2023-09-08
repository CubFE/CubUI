# Radio 单选按钮

### 介绍

用于在一组备选项中进行单选

### 安装

```ts
import { createApp } from 'vue';
import { Radio, RadioGroup } from '@cubui/cubui-taro';

const app = createApp();
app.use(Radio);
app.use(RadioGroup);
```

### 基础用法

通过 **v-model** 绑定值当前选项的 **label** 。并且必须 **cub-radio-group** 和 **cub-radio** 相结合进行使用

:::demo

```html
<template>
  <cub-cell-group title="基础用法">
    <cub-cell>
      <cub-radio-group v-model="radioVal">
        <cub-radio label="1">选项1</cub-radio>
        <cub-radio disabled label="2">选项2</cub-radio>
        <cub-radio label="3">选项3</cub-radio>
      </cub-radio-group>
    </cub-cell>
    <cub-cell>
      <cub-radio-group v-model="radioVal" text-position="left">
        <cub-radio label="1">选项1</cub-radio>
        <cub-radio disabled label="2">选项2</cub-radio>
        <cub-radio label="3">选项3</cub-radio>
      </cub-radio-group>
    </cub-cell>
    <cub-cell>
      <cub-radio-group v-model="radioVal">
        <cub-radio shape="button" label="1">选项1</cub-radio>
        <cub-radio disabled shape="button" label="2">选项2</cub-radio>
        <cub-radio shape="button" label="3">选项3</cub-radio>
      </cub-radio-group>
    </cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    }
  };
</script>
```

:::

### 水平使用

:::demo

```html
<template>
  <cub-cell-group title="水平使用">
    <cub-cell>
      <cub-radio-group v-model="radioVal" direction="horizontal">
        <cub-radio label="1">选项1</cub-radio>
        <cub-radio label="2">选项2</cub-radio>
        <cub-radio label="3">选项3</cub-radio>
      </cub-radio-group>
    </cub-cell>
    <cub-cell>
      <cub-radio-group v-model="radioVal" text-position="left" direction="horizontal">
        <cub-radio label="1">选项1</cub-radio>
        <cub-radio label="2">选项2</cub-radio>
        <cub-radio label="3">选项3</cub-radio>
      </cub-radio-group>
    </cub-cell>
    <cub-cell>
      <cub-radio-group v-model="radioVal" direction="horizontal">
        <cub-radio shape="button" label="1">选项1</cub-radio>
        <cub-radio shape="button" label="2">选项2</cub-radio>
        <cub-radio shape="button" label="3">选项3</cub-radio>
      </cub-radio-group>
    </cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    }
  };
</script>
```

:::

### 自定义尺寸

:::demo

```html
<template>
  <cub-cell-group title="自定义尺寸">
    <cub-cell>
      <cub-radio-group v-model="radioVal">
        <cub-radio label="1" icon-size="12">自定义尺寸12</cub-radio>
        <cub-radio label="2" icon-size="12">自定义尺寸12</cub-radio>
      </cub-radio-group>
    </cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    }
  };
</script>
```

:::

### 自定义图标

通过 `slot` 自定义图标，建议同时设置`icon`和`checkedIcon`两个插槽

:::demo

```html
<template>
  <cub-cell-group title="Radio自定义图标">
    <cub-cell>
      <cub-radio-group v-model="radioVal">
        <cub-radio label="1">
          自定义图标
          <template #icon> <Check /> </template>
          <template #checkedIcon> <Check color="red" /> </template>
        </cub-radio>
        <cub-radio label="2">
          自定义图标
          <template #icon> <Check /> </template>
          <template #checkedIcon> <Check color="red" /> </template>
        </cub-radio>
      </cub-radio-group>
    </cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { Check } from '@cubfe/icons-vue-taro';
  export default {
    components: {
      Check
    },
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    }
  };
</script>
```

:::

### 触发 change 事件

:::demo

```html
<template>
  <cub-cell-group title="触发事件">
    <cub-cell>
      <cub-radio-group v-model="radioVal" @change="handleChange">
        <cub-radio label="1">触发事件</cub-radio>
        <cub-radio label="2">触发事件</cub-radio>
      </cub-radio-group>
    </cub-cell>
    <cub-cell title="当前选中值" :desc="radioVal"></cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      const handleChange = (value: any) => {
        console.log(value);
      };
      return { radioVal, handleChange };
    }
  };
</script>
```

:::

## API

### Radio Props

| 参数      | 说明                               | 类型                        | 默认值  |
| --------- | ---------------------------------- | --------------------------- | ------- |
| disabled  | 是否禁用选择                       | boolean                     | `false` |
| icon-size | [图标尺寸](#/zh-CN/component/icon) | string \| number            | `18`    |
| label     | 单选框标识                         | string \| number \| boolean | -       |
| shape     | 形状，可选值为 button、round       | string                      | `round` |

### Radio Slots

| 名称        | 说明           |
| ----------- | -------------- |
| icon        | 未选中时的图标 |
| checkedIcon | 选中时的图标   |

### RadioGroup Props

| 参数          | 说明                                              | 类型                        | 默认值     |
| ------------- | ------------------------------------------------- | --------------------------- | ---------- |
| v-model       | 当前选中项的标识符，与 `label` 值一致时呈选中状态 | string \| number \| boolean | -          |
| text-position | 文本所在的位置，可选值：`left`,`right`            | string                      | `right`    |
| direction     | 使用横纵方向 可选值 `horizontal、vertical  `      | string                      | `vertical` |

### RadioGroup Events

| 事件名 | 说明         | 回调参数                                             |
| ------ | ------------ | ---------------------------------------------------- |
| change | 值变化时触发 | 当前选中项值（label）【设置 label 后有值、默认为空】 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                  | 默认值                     |
| ------------------------------------- | -------------------------- |
| --cub-radio-label-font-color          | _#1d1e1e_                  |
| --cub-radio-label-font-active-color   | _var(--cub-primary-color)_ |
| --cub-radio-label-disable-color       | _#999_                     |
| --cub-radio-icon-disable-color        | _#d6d6d6_                  |
| --cub-radio-label-button-border-color | _var(--cub-primary-color)_ |
| --cub-radio-label-button-background   | _var(--cub-primary-color)_ |
| --cub-radio-label-margin-left         | _15px_                     |
| --cub-radio-button-border-radius      | _15px_                     |
| --cub-radio-label-font-size           | _14px_                     |
| --cub-radio-button-font-size          | _12px_                     |
| --cub-radio-button-padding            | _5px 18px_                 |
| --cub-radio-icon-disable-color2       | _var(--cub-help-color)_    |

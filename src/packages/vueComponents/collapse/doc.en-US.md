# Collapse

### Intro

Place the content in multiple folded panels, and click the panel title to expand or shrink the content.

### Install

```javascript
import { createApp } from 'vue';
import { Collapse, CollapseItem } from '@cubui/cubui';

const app = createApp();
app.use(Collapse);
app.use(CollapseItem);
```

### Basic Usage

Control the expanded panel list through 'V-model', and 'activenames' is in array format

:::demo

```html
<template>
  <cub-collapse v-model="activeNames" @change="onChange">
    <cub-collapse-item :name="1">
      <template v-slot:title> {{title1}} </template>
      cubui is a lightweight Vue component library with CubFE style
    </cub-collapse-item>
    <cub-collapse-item :title="title2" :name="2">
      The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
    </cub-collapse-item>
    <cub-collapse-item :title="title3" :name="3" disabled> </cub-collapse-item>
  </cub-collapse>
</template>
<script>
  import { reactive, ref, toRefs } from 'vue';
  export default {
    setup() {
      const activeNames = ref([1, 2]);
      const title = reactive({
        title1: 'title1',
        title2: 'title2',
        title3: 'title3'
      });
      const onChange = (modelValue, currName, status) => {
        // currName: collapse-item name
        // status: true open, false close
        console.log(modelValue, currName, status);
      };
      return {
        onChange,
        activeNames,
        ...toRefs(title)
      };
    }
  };
</script>
```

:::

### accordion

You can set accordion mode through 'accordion', and expand up to one panel. At this time, 'activename' is in string format`value` you can set the content of a subtitle

:::demo

```html
<template>
  <cub-collapse v-model="activeName" :accordion="true">
    <cub-collapse-item :title="title1" :name="1" :value="subTitle">
      Build scenes based on CubFE design language system
    </cub-collapse-item>
    <cub-collapse-item :title="title2" :name="2">
      Improve the modularity and generality of the boundary
    </cub-collapse-item>
    <cub-collapse-item :title="title3" :name="3">
      It adopts combinatorial API composition syntax to reconstruct, with clear structure and modular function
    </cub-collapse-item>
  </cub-collapse>
</template>
<script>
import { reactive, ref, toRefs } from 'vue';
export default {
  setup() {
    const activeName = ref(1);
    const subTitle = 'subtitle';
    const title = reactive({
      title1: 'title1',
      title2: 'title2',
      title3: 'title3',
    })
    return {
      activeName,
      subTitle,
      ...toRefs(title)
    };
  }
}
</>
```

:::

### Custom collapse Icon

Set custom icons through icon and rotate to set the rotation angle of icons

:::demo

```html
<template>
  <cub-collapse v-model="activeName" :accordion="true">
    <cub-collapse-item :title="title1" :name="1" :icon="Notice">
      <template v-slot:value> text test </template>
      cubui3. 0 rethink its internal consistency and composability
    </cub-collapse-item>
    <cub-collapse-item :title="title2" :name="2" :icon="Follow">
      Improve the efficiency of production research output docking and reduce the output workload
    </cub-collapse-item>
  </cub-collapse>
</template>
<script>
  import { reactive, ref, toRefs } from 'vue';
  import { Notice, Follow } from '@cubfe/icons-vue';
  export default {
    setup() {
      const activeName = ref(1);
      const title = reactive({
        title1: 'title1',
        title2: 'title2'
      });
      return {
        activeName,
        ...toRefs(title),
        Notice,
        Follow
      };
    }
  };
</script>
```

:::

### Set fixed content (do not collapse)

Set content through slot: extra

:::demo

```html
<template>
  <cub-collapse v-model="activeName" :accordion="true">
    <cub-collapse-item :title="title1" :name="1">
      <template v-slot:extra>fixed content</template>
      cubui is a lightweight Vue component library with CubFE style
    </cub-collapse-item>
    <cub-collapse-item :title="title2" :name="2">
      The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
    </cub-collapse-item>
  </cub-collapse>
</template>
<script>
  import { reactive, ref, toRefs } from 'vue';
  export default {
    setup() {
      const activeName = ref(1);
      const title = reactive({
        title1: 'title1',
        title2: 'title2'
      });
      return {
        activeName,
        ...toRefs(title)
      };
    }
  };
</script>
```

:::

## API

### Collapse Props

| Attribute | Description                            | Type                                                                         | Default |
| --------- | -------------------------------------- | ---------------------------------------------------------------------------- | ------- |
| v-model   | `name` of the currently expanded panel | accordion-mode: string \| number<br>non-accordion-mode: (string \| number)[] | `-`     |
| accordion | Whether to enable accordion mode       | boolean                                                                      | `false` |

### CollapseItem Props

| Attribute | Description                                                                                              | Type             | Default |
| --------- | -------------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| name      | unique identifier, required                                                                              | string \| number | `-1`    |
| title     | The content on the left side of the title bar, supports slot input (`props` input has a higher priority) | string           | `-`     |
| value     | The content on the right side of the title bar, support slot input (`props` input has a higher priority) | string           | `-`     |
| icon      | The icon component on the left side of the title bar, equivalent to the `cubui-icon` component           | -                | `-`     |
| label     | title bar description                                                                                    | number \| string | `-`     |
| rotate    | Click the rotation angle of folding and unfolding, effective in the custom icon mode                     | string \| number | `180`   |
| disabled  | whether the title bar is disabled                                                                        | boolean          | `false` |
| border    | Whether to display borders                                                                               | boolean          | `true`  |

### CollapseItem Slots

| Name  | Description                                    |
| ----- | ---------------------------------------------- |
| title | Content slot on the left side of the title bar |
| alue  | Right content slot of the title bar            |
| extra | Set fixed content under the title (no folding) |

### Events

| Event  | Description                     | Callback parameter               |
| ------ | ------------------------------- | -------------------------------- |
| change | Triggered when switching panels | `(modelValue, currName, status)` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                            | 默认值                   |
| ----------------------------------------------- | ------------------------ |
| --cub-collapse-item-padding                     | _13px 36px 13px 26px_    |
| --cub-collapse-item-color                       | _#666666_                |
| --cub-collapse-item-disabled-color              | _#c8c9cc_                |
| --cub-collapse-item-icon-color                  | _#666666_                |
| --cub-collapse-item-font-size                   | _var(--cub-font-size-2)_ |
| --cub-collapse-item-line-height                 | _24px_                   |
| --cub-collapse-item-sub-title-color             | _#666666_                |
| --cub-collapse-wrapper-content-padding          | _12px 26px_              |
| --cub-collapse-wrapper-empty-content-padding    | _0 26px_                 |
| --cub-collapse-wrapper-content-color            | _#666666_                |
| --cub-collapse-wrapper-content-font-size        | _var(--cub-font-size-2)_ |
| --cub-collapse-wrapper-content-line-height      | _1.5_                    |
| --cub-collapse-wrapper-content-background-color | _var(--cub-white)_       |

# Cell

### Intro

The cell is a single display item in the list.

### Install

```javascript
import { createApp } from 'vue';
import { Cell, CellGroup } from '@cubui/cubui';

const app = createApp();
app.use(Cell);
app.use(CellGroup);
```

### Basic Usage

:::demo

```html
<template>
  <cub-cell title="Title" desc="Description"></cub-cell>
  <cub-cell title="Title" sub-title="Subtitle Description" desc="Desc"></cub-cell>
  <cub-cell title="Click Test" @click="testClick"></cub-cell>
  <cub-cell title="Round Radius 0" round-radius="0"></cub-cell>
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

### Size setting large

:::demo

```html
<template>
  <cub-cell size="large" title="Title" desc="Description"></cub-cell>
  <cub-cell size="large" title="Title" sub-title="Subtitle Description" desc="Desc"></cub-cell>
</template>
```

:::

### Use Slots

:::demo

```html
<template>
  <cub-cell>
    <div>Content</div>
  </cub-cell>
</template>
```

:::

### Use Slots title

:::demo

```html
<template>
  <cub-cell desc="Description">
    <template v-slot:title>
      <span>Title <b style="color: red">1</b></span>
    </template>
  </cub-cell>
</template>
```

:::

### Link | CellGroup Usage

:::demo

```html
<template>
  <cub-cell-group title="Link | CellGroup Usage" desc="Usage cub-cell-group support title desc slots">
    <cub-cell title="Link Usage" is-link></cub-cell>
    <cub-cell title="URL Jump" desc="https://m.kakusoft.com" is-link url="https://m.kakusoft.com"></cub-cell>
    <cub-cell title="Router Jump ’/‘ " to="/"></cub-cell>
  </cub-cell-group>
</template>
```

:::

### Customize the right arrow area

:::demo

```html
<template>
  <cub-cell-group title="Customize the right arrow area">
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
        console.log('Click Test');
      };
      const switchChecked = ref(true);
      return { testClick, switchChecked };
    }
  };
</script>
```

:::

### Customize the left Icon area

:::demo

```html
<template>
  <cub-cell-group title="Customize the left Icon area">
    <cub-cell title="Image">
      <template v-slot:icon>
        <img
          style="width:20px;height: 20px;"
          src="https://oss.netconcepts.cn/website/wap/job-wap-icon-1.png"
        />
      </template>
    </cub-cell>
  </cub-cell-group>
</template>
```

:::

### Cell Display Icon

:::demo

```html
<template>
  <cub-cell title="Name" desc="Description">
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

### Only display desc , you can adjust the content position through desc-text-align

:::demo

```html
<template>
  <cub-cell desc-text-align="left" desc="Description"></cub-cell>
</template>
```

:::

### Vertical Center

You can center the left and right contents of the cell vertically through the 'center' attribute.

:::demo

```html
<template>
  <cub-cell center title="Title" sub-title="Subtitle Description" desc="Desc"></cub-cell>
</template>
```

:::

## API

### CellGroup Props

| Attribute | Description | Type   | Default |
| --------- | ----------- | ------ | ------- |
| title     | Title       | string | -       |
| desc      | Description | string | -       |

### Cell Props

| Attribute       | Description                                                                                              | Type             | Default |
| --------------- | -------------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| title           | Title                                                                                                    | string           | -       |
| sub-title       | Subtitle                                                                                                 | string           | -       |
| desc            | Description                                                                                              | string           | -       |
| desc-text-align | Right description text alignment [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp) | string           | `right` |
| is-link         | Whether to show the right arrow and turn on click feedback                                               | boolean          | `false` |
| round-radius    | Corner radius                                                                                            | number           | `6px`   |
| url             | Link URL                                                                                                 | string           | -       |
| to              | Target route of the link, same as to of vue-router                                                       | string \| object | -       |
| replace         | If true, the navigation will not leave a history record                                                  | boolean          | `false` |
| center          | Whether to center content vertically                                                                     | boolean          | `false` |
| size            | Size, can be set to `large`                                                                              | string           | `''`    |

### Cell Events

| Event | Description                  | Arguments     |
| ----- | ---------------------------- | ------------- |
| click | Emitted when cell is clicked | `event:Event` |

### Cell Slots

| Name    | Description         |
| ------- | ------------------- |
| icon    | Custom Left `icon`  |
| default | Default slot        |
| link    | Custom Right `link` |
| title   | Custom `title` slot |

### CellGroup Slots

| Name  | Description         |
| ----- | ------------------- |
| title | Custom `title` slot |
| desc  | Custom `desc` slot  |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                               | Default Value                            |
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

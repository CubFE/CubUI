# Grid

### Intro

Used to separate into equal-width blocks for page navigation.

### Install

```javascript
import { createApp } from 'vue';
import { Grid, GridItem } from '@cubui/cubui';

const app = createApp();
app.use(Grid);
app.use(GridItem);
```

### Basic Usage

:::demo

```html
<template>
  <cub-grid>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
  </cub-grid>
</template>
<script lang="ts">
  import { Dongdong } from '@cubfe/icons-vue';
  export default {
    components: { Dongdong }
  };
</script>
```

:::

### Column Num

:::demo

```html
<template>
  <cub-grid :column-num="3">
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
  </cub-grid>
</template>
<script lang="ts">
  import { Dongdong } from '@cubfe/icons-vue';
  export default {
    components: { Dongdong }
  };
</script>
```

:::

### Square

:::demo

```html
<template>
  <cub-grid :column-num="3" square>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
  </cub-grid>
</template>
<script lang="ts">
  import { Dongdong } from '@cubfe/icons-vue';
  export default {
    components: { Dongdong }
  };
</script>
```

:::

### Gutter

:::demo

```html
<template>
  <cub-grid :gutter="10">
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
  </cub-grid>
</template>
<script lang="ts">
  import { Dongdong } from '@cubfe/icons-vue';
  export default {
    components: { Dongdong }
  };
</script>
```

:::

### Reverse

:::demo

```html
<template>
  <cub-grid reverse>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
  </cub-grid>
</template>
<script lang="ts">
  import { Dongdong } from '@cubfe/icons-vue';
  export default {
    components: { Dongdong }
  };
</script>
```

:::

### Horizontal

:::demo

```html
<template>
  <cub-grid direction="horizontal">
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
  </cub-grid>
</template>
<script lang="ts">
  import { Dongdong } from '@cubfe/icons-vue';
  export default {
    components: { Dongdong }
  };
</script>
```

:::

### Icon Style

:::demo

```html
<template>
  <cub-grid :column-num="3">
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
    <cub-grid-item text="text">
      <Dongdong height="40px" width="40px" color="#478EF2" />
    </cub-grid-item>
    <cub-grid-item text="text"><Dongdong /></cub-grid-item>
  </cub-grid>
</template>
<script lang="ts">
  import { Dongdong } from '@cubfe/icons-vue';
  export default {
    components: { Dongdong }
  };
</script>
```

:::

### Route

:::demo

```html
<template>
  <cub-grid :column-num="2">
    <cub-grid-item text="Vue Router" to="/">
      <Home />
    </cub-grid-item>
    <cub-grid-item text="URL" url="https://jd.com">
      <Search />
    </cub-grid-item>
  </cub-grid>
</template>
<script lang="ts">
  import { Home, Search } from '@cubfe/icons-vue';
  export default {
    components: { Home, Search }
  };
</script>
```

:::

### Custom Content

:::demo

```html
<template>
  <cub-grid :border="false">
    <cub-grid-item v-for="i in 4" :key="i">
      <cub-avatar size="large">
        <img
          src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        />
      </cub-avatar>
    </cub-grid-item>
  </cub-grid>
</template>
```

:::

## API

### Grid Props

| Attribute  | Description                                               | Type             | 默认值     |
| ---------- | --------------------------------------------------------- | ---------------- | ---------- |
| column-num | Column Num                                                | number \| string | `4`        |
| border     | Whether to show border                                    | boolean          | `true`     |
| gutter     | Gutter,The default unit is `px`                           | number \| string | `0`        |
| center     | Whether to center content                                 | boolean          | `true`     |
| square     | Whether to be square shape                                | boolean          | `false`    |
| reverse    | Whether to reverse the position of icon and text          | boolean          | `false`    |
| direction  | Content arrangement direction, can be set to `horizontal` | string           | `vertical` |
| clickable  | Whether to show click feedback when clicked               | boolean          | `false`    |

### GridItem Props

| Attribute | Description                                                                               | Type             | Default |
| --------- | ----------------------------------------------------------------------------------------- | ---------------- | ------- |
| text      | text                                                                                      | string           | -       |
| url       | Link URL                                                                                  | string           | `''`    |
| to        | Target route of the link, same as [to](https://router.vuejs.org/zh/api/#to) of vue-router | string \| object | -       |
| replace   | If true, the navigation will not leave a history record                                   | boolean          | `false` |

### GridItem Slots

| Name    | Description    |
| ------- | -------------- |
| default | Custom content |
| text    | Custom text    |

### GridItem Events

| Event | Description                       | Arguments    |
| ----- | --------------------------------- | ------------ |
| click | Emitted when component is clicked | event: Event |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                             | Default Value             |
| -------------------------------- | ------------------------- |
| --cub-grid-border-color          | _#f5f6f7_                 |
| --cub-grid-item-content-padding  | _16px 8px_                |
| --cub-grid-item-content-bg-color | _var(--cub-white)_        |
| --cub-grid-item-text-margin      | _8px_                     |
| --cub-grid-item-text-color       | _var(--cub-title-color2)_ |
| --cub-grid-item-text-font-size   | _var(--cub-font-size-1)_  |

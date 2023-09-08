# Avatar

### Intro

Avatars can be used to represent people or objects. It supports images, Icons, or letters.

### Install

```js
import { createApp } from 'vue';
import { Avatar } from '@cubui/cubui';

const app = createApp();
app.use(Avatar);
```

### Size

Support three sizes：small、normal、large

:::demo

```vue
<template>
  <cub-avatar size="large">
    <img
      src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    />
  </cub-avatar>
  <cub-avatar size="normal">
    <img
      src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    />
  </cub-avatar>
  <cub-avatar size="small">
    <img
      src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    />
  </cub-avatar>
</template>
```

:::

### Shape

Support two shapes：square、round

:::demo

```vue
<template>
  <cub-avatar shape="square"><Me /></cub-avatar>
  <cub-avatar shape="round"><Me /></cub-avatar>
</template>
<script setup>
import { Me } from '@cubfe/icons-vue';
</script>
```

:::

### Type

Support three types：picture、icon、letter

:::demo

```vue
<template>
  <cub-avatar>
    <img
      src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    />
  </cub-avatar>
  <cub-avatar><Me /></cub-avatar>
  <cub-avatar>王</cub-avatar>
</template>
<script setup>
import { Me } from '@cubfe/icons-vue';
</script>
```

:::

### Custom colors and background colors

Icon and letter types can have custom colors and background colors

:::demo

```vue
<template>
  <cub-avatar class="demo-avatar" bg-color="#FA2C19"><Me color="#fff" /></cub-avatar>
  <cub-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</cub-avatar>
</template>
<script setup>
import { Me } from '@cubfe/icons-vue';
</script>
```

:::

### Avatar with badge

:::demo

```vue
<template>
  <cub-badge value="8">
    <cub-avatar shape="square"><Me /></cub-avatar>
  </cub-badge>
  <cub-badge dot>
    <cub-avatar shape="square"><Me /></cub-avatar>
  </cub-badge>
</template>
<script setup>
import { Me } from '@cubfe/icons-vue';
</script>
```

:::

### Avatar group display

:::demo

```vue
<template>
  <cub-avatar-group span="-4">
    <cub-avatar>
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
      />
    </cub-avatar>
    <cub-avatar><Me /></cub-avatar>
    <cub-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</cub-avatar>
  </cub-avatar-group>
  <cub-avatar-group max-count="3" max-color="#fff" max-bgColor="#498ff2">
    <cub-avatar>
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
      />
    </cub-avatar>
    <cub-avatar><Me /></cub-avatar>
    <cub-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</cub-avatar>
    <cub-avatar><Me /></cub-avatar>
  </cub-avatar-group>
</template>
<script setup>
import { Me } from '@cubfe/icons-vue';
</script>
```

:::

### Avatar group to control hierarchy direction

:::demo

```vue
<template>
  <cub-avatar-group max-count="3" zIndex="right" max-content="...">
    <cub-avatar>
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
      />
    </cub-avatar>
    <cub-avatar><Me /></cub-avatar>
    <cub-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</cub-avatar>
    <cub-avatar><Me /></cub-avatar>
  </cub-avatar-group>
</template>
<script setup>
import { Me } from '@cubfe/icons-vue';
</script>
```

:::

### Click on the avatar to trigger the event

:::demo

```vue
<template>
  <cub-cell>
    <cub-avatar @click="handleClick"><Me /></cub-avatar>
  </cub-cell>
</template>
<script setup>
import { Me } from '@cubfe/icons-vue';
const handleClick = () => {
  console.log('触发点击头像');
};
</script>
```

:::

## API

### Avatar Props

| Attribute | Description                                                        | Type             | Default  |
| --------- | ------------------------------------------------------------------ | ---------------- | -------- |
| size      | The size of the avatar，eg `large`、`normal`、`small`，and numbers | string \| number | `normal` |
| shape     | shape of avatar，eg `square`、`round `                             | string           | `round`  |
| color     | color of text                                                      | string           | `#666`   |
| bg-color  | background color                                                   | string           | `#eee`   |

### AvatarGroup Props

| Attribute    | Description                                                                                                                            | Type             | Default  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------- |
| max-count    | Max avatars to show                                                                                                                    | string \| number | -        |
| max-content  | When the number of avatars exceeds, a avatar folding element will appear，<br />The content of this element can be `...`、`more`、`+N` | string           | `+N`     |
| size         | The size of the avatar，eg `large`、`normal`、`small`，支持直接输入数字                                                                | string \| number | `normal` |
| shape        | The shape of avatar，eg `square`、`round`                                                                                              | string           | `round`  |
| max-color    | color of text                                                                                                                          | string           | `#666`   |
| max-bg-color | background color                                                                                                                       | string           | `#eee`   |
| span         | Distance between avatars                                                                                                               | string           | `-8`     |
| zIndex       | Hierarchy direction between avatar group，eg `left`、`right`                                                                           | string           | `left`   |

### Avatar Slots

| Name    | Description                        |
| ------- | ---------------------------------- |
| default | default slot for img, icon or text |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                          | Default Value |
| ----------------------------- | ------------- |
| --cub-actionsheet-light-color | _#f6f6f6_     |
| --cub-avatar-square           | _5px_         |
| --cub-avatar-large-width      | _60px_        |
| --cub-avatar-large-height     | _60px_        |
| --cub-avatar-small-width      | _32px_        |
| --cub-avatar-small-height     | _32px_        |
| --cub-avatar-normal-width     | _40px_        |
| --cub-avatar-normal-height    | _40px_        |

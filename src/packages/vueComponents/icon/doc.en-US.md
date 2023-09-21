# Icon

### Intro

Install the [@cubfe/icons-vue](https://github.com/cubfe/cubui-icons) package independently. Two usage modes are provided (SVG on-demand usage and IconFont full usage).

### Install

```bash
npm i --save @cubfe/icons-vue
```

## Use: SVG import on demand

Use mode of on-demand loading components, see @cubfe/icons-vue/dist/types/index.d.ts

```js
import { Add } from '@cubfe/icons-vue';
// template
<Add color="red" />;
```

<icon-demo />

```
The SVG used internally in the component library is
Loading,Location,Location,Selected,Close,Left,Service,Top,Right,CheckNormal,Checked,CheckDisabled,DownArrow,JoySmile,Image,ImageError,CloseCircle,MaskClose,Minus,Plus,Up,Under,Notice,CheckChecked,StarN,Tips,Loading1,TriangleUp,TriangleDown,Photograph,Failure,Trash,Link,Download
```

### Props

| Attribute | Description                        | Type             | Default |
| --------- | ---------------------------------- | ---------------- | ------- |
| name      | Icon name or URL                   | string           | -       |
| color     | Icon color                         | string           | -       |
| width     | Icon size , eg `20px` `2em` `2rem` | string \| object | -       |
| height    | Icon size , eg `20px` `2em` `2rem` | string \| object | -       |

### Events

| Event | Description                  | Arguments    |
| ----- | ---------------------------- | ------------ |
| click | Emitted when icon is clicked | event: Event |

## Use: Full use of IconFont

```ks
import { createApp } from 'vue';
import { IconFont } from '@cubfe/icons-vue';
import '@cubfe/icons-vue/dist/style_iconfont.css';
const app = createApp();
app.use(IconFont);
```

Use `name` prop to set icon name or icon URL.

:::demo

```html
<template>
  <IconFont name="shop"></IconFont>
  <IconFont name="gift"></IconFont>
  <IconFont
    size="40"
    name="https://oss.netconcepts.cn/website/wap/job-wap-icon-1.png"
  ></IconFont>
</template>
```

:::

### Icon Color

Use `color` prop to set icon color.

:::demo

```html
<template>
  <IconFont name="shop" color="#fa2c19"></IconFont>
  <IconFont name="shop" color="#64b578"></IconFont>
  <IconFont name="gift" color="#fa2c19"></IconFont>
</template>
```

:::

### Icon Size

Use `size` prop to set icon size default unit is `px` .

:::demo

```html
<template>
  <IconFont name="shop"></IconFont>
  <IconFont name="shop" size="24"></IconFont>
  <IconFont name="shop" size="16"></IconFont>
</template>
```

:::

### Universal motion icons

Adding the specified class class can realize the dynamic effect of the picture. The default is to play once, and adding the `cub-icon-am-infinite` class can realize the loop playback. By setting css, the delay interval before the animation starts, and how long the animation will be completed

:::demo

```html
<template>
  <IconFont name="dou-arrow-up" class="cub-icon-am-jump cub-icon-am-infinite"></IconFont>
  <IconFont name="star-fill-n" class="cub-icon-am-blink cub-icon-am-infinite"></IconFont>
  <IconFont name="refresh2" class="cub-icon-am-rotate cub-icon-am-infinite"></IconFont>
  <IconFont name="heart-fill" class="cub-icon-am-breathe cub-icon-am-infinite"></IconFont>
  <IconFont name="microphone" class="cub-icon-am-flash cub-icon-am-infinite"></IconFont>
  <IconFont name="download" class="cub-icon-am-bounce cub-icon-am-infinite"></IconFont>
  <IconFont name="message" class="cub-icon-am-shake cub-icon-am-infinite"></IconFont>
</template>

<style>
  .cub-icon {
    --animate-duration: 1s;
    --animate-delay: 0s;
  }
</style>
```

:::

### Props

| Attribute       | Description                                          | Type             | Default          |
| --------------- | ---------------------------------------------------- | ---------------- | ---------------- |
| name            | Icon name or URL                                     | string           | -                |
| color           | Icon color                                           | string           | -                |
| size            | Icon size , eg `20px` `2em` `2rem`                   | string \| object | -                |
| font-class-name | Custom icon font base class name                     | string           | `cubui-iconfont` |
| class-prefix    | Custom icon class name prefix for using custom icons | string           | `cub-icon`       |
| tag             | HTML Tag of root element                             | string           | `i`              |

### Events

| Event | Description                  | Arguments    |
| ----- | ---------------------------- | ------------ |
| click | Emitted when icon is clicked | event: Event |

## Use: other icons

The number of icons provided by `@cubfe/icons-vue` itself is limited. If it cannot meet the needs, you can consider using a more versatile and larger number of icon libraries.

- Recommended icon format: SVG

- Recommended icon library: [iconify](https://iconify.design/), which provides more than 150,000 open source icons.

- Recommended icon scheme: [unplugin-icons](https://github.com/antfu/unplugin-icons), which provides a way to introduce `iconify` on demand.

# Popup

### Intro

The pop-up layer container is used to display pop-up windows, information prompts and other contents, and supports the superposition display of multiple pop-up layers

### Install

```javascript
import { createApp } from 'vue';
import { Popup } from '@cubui/cubui';

const app = createApp();
app.use(Popup);
```

### Basic Usage

Control display/hide by setting `visible`

:::demo

```html
<template>
  <cub-cell title="Display pop-up layer" is-link @click="showBasic = true"></cub-cell>
  <cub-popup :style="{ padding: '30px 50px' }" v-model:visible="showBasic">text</cub-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showBasic: false
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Eject position

Control the pop-up position by setting the value of `position`

:::demo

```html
<template>
  <cub-cell title="Top Eject" is-link @click="showTop = true"></cub-cell>
  <cub-popup position="top" :style="{ height: '20%' }" v-model:visible="showTop"></cub-popup>
  <cub-cell title="Bottom Eject" is-link @click="showBottom = true"></cub-cell>
  <cub-popup position="bottom" :style="{ height: '20%' }" v-model:visible="showBottom"></cub-popup>
  <cub-cell title="Left Eject" is-link @click="showLeft = true"></cub-cell>
  <cub-popup position="left" :style="{ width: '20%', height: '100%' }" v-model:visible="showLeft"></cub-popup>
  <cub-cell title="Right Eject" is-link @click="showRight = true"></cub-cell>
  <cub-popup position="right" :style="{ width: '20%', height: '100%' }" v-model:visible="showRight"></cub-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showTop: false,
        showBottom: false,
        showLeft: false,
        showRight: false
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Icon

The `closeable` controls whether the icon can be closed. The `close-icon-position` sets the position of the icon. The `close-icon` defines the display icon.

:::demo

```html
<template>
  <cub-cell title="close icon" is-link @click="showIcon = true"></cub-cell>
  <cub-popup position="bottom" closeable :style="{ height: '20%' }" v-model:visible="showIcon"></cub-popup>
  <cub-cell title="icon position" is-link @click="showIconPosition = true"></cub-cell>
  <cub-popup
    position="bottom"
    closeable
    close-icon-position="top-left"
    :style="{ height: '20%' }"
    v-model:visible="showIconPosition"
  ></cub-popup>
  <cub-cell title="custom icon" is-link @click="showCloseIcon = true"></cub-cell>
  <cub-popup
    position="bottom"
    closeable
    close-icon-position="top-left"
    close-icon="heart"
    :style="{ height: '20%' }"
    v-model:visible="showCloseIcon"
  >
    <template #close-icon>
      <Heart></Heart>
    </template>
  </cub-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  import { Heart } from '@cubfe/icons-vue';
  export default {
    components: { Heart },
    props: {},
    setup() {
      const state = reactive({
        showIcon: false,
        showIconPosition: false,
        showCloseIcon: false
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Rounded bullet frame

Set `round` to control whether rounded corners are displayed

:::demo

```html
<template>
  <cub-cell title="rounded pop-up" is-link @click="showRound = true"></cub-cell>
  <cub-popup position="bottom" closeable round :style="{ height: '30%' }" v-model:visible="showRound"></cub-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showRound: false
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Specify mount node

Specify the mount node through `teleport`

:::demo

```html
<template>
  <cub-cell title="Specify mount node" is-link @click="showTeleport = true"></cub-cell>
  <cub-popup :style="{ padding: '30px 50px' }" teleport="#app" teleport-disable v-model:visible="showTeleport"
    >app</cub-popup
  >
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showTeleport: false
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Multi stack

:::demo

```html
<template>
  <cub-cell title="Multi stack" is-link @click="showPop1 = true"></cub-cell>
  <cub-popup :style="{ padding: '30px 50px' }" v-model:visible="showPop1">
    <div @click="showPop2 = true">Click it</div>
  </cub-popup>
  <cub-popup :style="{ padding: '30px 50px' }" v-model:visible="showPop2">Text</cub-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showPop1: false,
        showPop2: false
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

## API

### Props

| Attribute              | Description                                                                                                                | Type             | Default       |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------- |
| v-model:visible        | Control the display/hide of the current component                                                                          | boolean          | `false`       |
| z-index                | Mask level                                                                                                                 | string \| number | `2000`        |
| duration               | Animation duration of component display/hide, in seconds                                                                   | string \| number | `0.3`         |
| overlay-class          | Custom mask classname                                                                                                      | string           | -             |
| overlay-style          | Custom mask style                                                                                                          | CSSProperties    | -             |
| lock-scroll            | Whether the background is locked                                                                                           | boolean          | `true`        |
| overlay                | Show mask                                                                                                                  | boolean          | `true`        |
| close-on-click-overlay | Click to close the mask                                                                                                    | boolean          | `true`        |
| position               | Eject position（top,bottom,left,right,center）                                                                             | string           | `"center"`    |
| transition             | Animation name                                                                                                             | string           | -             |
| style                  | Custom pop-up style                                                                                                        | CSSProperties    | -             |
| pop-class              | Custom bullet box classname                                                                                                | string           | -             |
| closeable              | Show close button                                                                                                          | boolean          | `false`       |
| close-icon-position    | Close button position（top-left,top-right,bottom-left,bottom-right）                                                       | string           | `"top-right"` |
| destroy-on-close       | Will the contents of `slot` be cleared after the bullet layer is closed                                                    | boolean          | `true`        |
| round                  | Show fillet                                                                                                                | boolean          | `false`       |
| teleport               | Specify the mount node                                                                                                     | string           | `"body"`      |
| teleport-disable       | Whether the node is allowed to be mounted, true means mount                                                                | boolean          | `false`       |
| overlay-class          | Custom mask class name                                                                                                     | string           | -             |
| overlay-style          | Custom Mask Style                                                                                                          | CSSProperties    | -             |
| safe-area-inset-bottom | Whether to enable iPhone series full screen bottom safety zone adaptation, which is only valid when `position` is `bottom` | Boolean          | `false`       |

### Events

| Event            | Description                                           | Arguments      |
| ---------------- | ----------------------------------------------------- | -------------- |
| click            | Triggered when clicking the pop-up layer              | `event: Event` |
| click-close-icon | Triggered when the close icon is clicked              | `event: Event` |
| open             | Triggered when the pop-up box is opened               | -              |
| close            | Triggered when the pop-up box is closed               | -              |
| opened           | Triggered at the end of the mask open animation       | `el: Element`  |
| closed           | Triggered when the mask closes and the animation ends | `el: Element`  |
| click-overlay    | Click mask trigger                                    | `event: Event` |

### Slots

| Name       | Description                  |
| ---------- | ---------------------------- |
| default    | Customize Embedded Content   |
| close-icon | Custom icon for close button |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                          | Default Value |
| ----------------------------- | ------------- |
| --cub-popup-close-icon-margin | _16px_        |
| --cub-popup-border-radius     | _20px_        |

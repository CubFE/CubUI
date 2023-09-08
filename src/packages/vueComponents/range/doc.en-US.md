# Range

### Intro

Slide the input bar to select a value within a given range.

### Install

```javascript
import { createApp } from 'vue';
import { Range } from '@cubui/cubui';

const app = createApp();
app.use(Range);
```

### Basic Usage

:::demo

```html
<template>
  <cub-cell :style="{padding: '40px 18px'}">
    <cub-range v-model="value" @change="onChange"></cub-range>
  </cub-cell>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const value = ref(40);
      const onChange = (value) => showToast.text('value：' + value);
      return {
        value,
        onChange
      };
    }
  };
</script>
```

:::

### Dual thumb

:::demo

```html
<template>
  <cub-cell :style="{padding: '40px 18px'}">
    <cub-range range v-model="value" @change="onChange"></cub-range>
  </cub-cell>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const value = ref([20, 80]);
      const onChange = (value) => showToast.text('value：' + value);
      return {
        value,
        onChange
      };
    }
  };
</script>
```

:::

### Range

:::demo

```html
<template>
  <cub-cell :style="{padding: '40px 18px'}">
    <cub-range v-model="value" :max="10" :min="-10" @change="onChange" />
  </cub-cell>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const value = ref(0);
      const onChange = (value) => showToast.text('value：' + value);
      return {
        value,
        onChange
      };
    }
  };
</script>
```

:::

### Step Size

:::demo

```html
<template>
  <cub-cell :style="{padding: '40px 18px'}">
    <cub-range v-model="value" :step="5" @change="onChange"></cub-range>
  </cub-cell>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const value = ref(20);
      const onChange = (value) => showToast.text('value：' + value);
      return {
        value,
        onChange
      };
    }
  };
</script>
```

:::

### Hidden Range

:::demo

```html
<template>
  <cub-cell :style="{padding: '40px 18px'}">
    <cub-range v-model="value" hidden-range @change="onChange"></cub-range>
  </cub-cell>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const value = ref(30);
      const onChange = (value) => showToast.text('value：' + value);
      return {
        value,
        onChange
      };
    }
  };
</script>
```

:::

### Hidden Tag

:::demo

```html
<template>
  <cub-cell :style="{padding: '40px 18px'}">
    <cub-range v-model="value" :hidden-tag="true" @change="onChange"></cub-range>
  </cub-cell>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const value = ref(40);
      const onChange = (value) => showToast.text('value：' + value);
      return {
        value,
        onChange
      };
    }
  };
</script>
```

:::

### Disabled

:::demo

```html
<template>
  <cub-cell :style="{padding: '40px 18px'}">
    <cub-range v-model="value" disabled @change="onChange"></cub-range>
  </cub-cell>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const value = ref(50);
      const onChange = (value) => showToast.text('value：' + value);
      return {
        value,
        onChange
      };
    }
  };
</script>
```

:::

### Custom Style

:::demo

```html
<template>
  <cub-cell :style="{padding: '40px 18px'}">
    <cub-range
      v-model="value"
      inactive-color="rgba(163,184,255,1)"
      button-color="rgba(52,96,250,1)"
      active-color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%"
      @change="onChange"
    >
    </cub-range>
  </cub-cell>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const value = ref(40);
      const onChange = (value) => showToast.text('value：' + value);
      return {
        value,
        onChange
      };
    }
  };
</script>
```

:::

### Custom Button

:::demo

```html
<style>
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
</style>
<template>
  <cub-cell :style="{padding: '40px 18px'}">
    <cub-range v-model="value" @change="onChange">
      <template #button>
        <div class="custom-button">{{ value }}</div>
      </template>
    </cub-range>
  </cub-cell>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const value = ref(60);
      const onChange = (value) => showToast.text('value：' + value);
      return {
        value,
        onChange
      };
    }
  };
</script>
```

:::

### Vertical

:::demo

```html
<style>
  .vertical_div {
    height: 180px;
    padding: 10px;
  }
  .div {
    width: 150px;
  }
  .cell {
    padding: 40px 18px;
  }
</style>
<template>
  <cub-cell class="vertical_div">
    <div class="div">
      <cub-range v-model="value10" @change="onChange" :vertical="true"></cub-range>
    </div>
    <div class="div">
      <cub-range range v-model="value11" @change="onChange" :vertical="true"></cub-range>
    </div>
  </cub-cell>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const value10 = ref(20);
      const value11 = ref([20, 80]);
      const onChange = (value) => showToast.text('value：' + value);
      return {
        value10,
        value11,
        onChange
      };
    }
  };
</script>
```

:::

### Marks

:::demo

```html
<style>
  .vertical_div {
    height: 180px;
    padding: 10px;
  }
  .div {
    width: 150px;
  }
  .cell {
    padding: 40px 18px;
  }
</style>
<template>
  <div>
    <cub-cell class="cell">
      <cub-range v-model="value12" @change="onChange" :marks="marks" :hiddenRange="true"></cub-range>
    </cub-cell>
    <cub-cell class="cell">
      <cub-range range v-model="value13" @change="onChange" :marks="marks" :hiddenRange="true"></cub-range>
    </cub-cell>
    <cub-cell class="vertical_div">
      <div class="div">
        <cub-range v-model="value14" @change="onChange" :vertical="true" :marks="marks" :hiddenRange="true"></cub-range>
      </div>
      <div class="div">
        <cub-range
          range
          v-model="value15"
          @change="onChange"
          :vertical="true"
          :marks="marks"
          :hiddenRange="true"
        ></cub-range>
      </div>
    </cub-cell>
  </div>
</template>

<script lang="ts">
  import { ref, reactive, toRefs } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const state = reactive({
        value12: 60,
        value13: [20, 80],
        value14: 60,
        value15: [20, 80]
      });
      const marks = ref({
        0: 0,
        20: 20,
        40: 40,
        60: 60,
        80: 80,
        100: 100
      });
      const onChange = (value) => showToast.text('当前值：' + value);
      return {
        ...toRefs(state),
        marks,
        onChange
      };
    }
  };
</script>
```

:::

## API

### Props

| Attribute      | Description                        | Type               | Default                  |
| -------------- | ---------------------------------- | ------------------ | ------------------------ |
| v-model        | current progress percentage        | number \| number[] | `0`                      |
| range          | Whether to enable dual slider mode | boolean            | `false`                  |
| max            | maximum                            | number \| string   | `100`                    |
| min            | minimum                            | number \| string   | `0`                      |
| step           | step size                          | number \| string   | `1`                      |
| disabled       | Whether to disable the slider      | boolean            | `false`                  |
| vertical       | Whether to display vertically      | boolean            | `false`                  |
| hidden-range   | whether to hide range values       | boolean            | `false`                  |
| hidden-tag     | whether to hide the label          | boolean            | `false`                  |
| active-color   | progress bar active color          | string             | `rgba(250, 44, 25, 1)`   |
| inactive-color | Progress bar inactive color        | string             | `rgba(255, 163, 154, 1)` |
| button-color   | button color                       | string             | `rgba(250, 44, 25, 1)`   |
| marks          | scale mark                         | object{key:number} | `{}`                     |

### Events

| Event      | Description                                              | Arguments                   |
| ---------- | -------------------------------------------------------- | --------------------------- |
| change     | Triggered when the progress changes and the drag is over | `value: number \| number[]` |
| drag-start | Triggered when dragging starts                           | -                           |
| drag-end   | Triggered when the drag is over                          | -                           |

### Slots

| Name   | Description         |
| ------ | ------------------- |
| button | custom slide button |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                         | Default Value                                                                             |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| --cub-range-tip-font-color   | _#333333_                                                                                 |
| --cub-range-bg-color         | _var(--cub-primary-color)_                                                                |
| --cub-range-bg-color-tick    | _#fa958c_                                                                                 |
| --cub-range-bar-bg-color     | _linear-gradient(135deg, var(--cub-primary-color) 0%, var(--cub-primary-color-end) 100%)_ |
| --cub-range-bar-btn-bg-color | _var(--cub-white)_                                                                        |
| --cub-range-bar-btn-width    | _24px_                                                                                    |
| --cub-range-bar-btn-height   | _24px_                                                                                    |
| --cub-range-bar-btn-border   | _1px solid var(--cub-primary-color)_                                                      |

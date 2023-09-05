# NumberKeyboard

### Intro

Virtual numeric keypad, used for scenarios where payment passwords are entered.

### Install

```javascript
import { createApp } from 'vue';
import { NumberKeyboard } from '@cubui/cubui';

const app = createApp();
app.use(NumberKeyboard);
```

### Default Keyboard

For online debugging, please change the browser to mobile mode
:::demo

```html
<template>
  <cub-cell :isLink="true" @click="showKeyBoard" title="Default Keyboard"></cub-cell>
  <cub-number-keyboard v-model:visible="visible" @input="input" @delete="onDelete" @close="close">
  </cub-number-keyboard>
</template>
<script>
  import { ref } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const visible = ref(false);
      function showKeyBoard() {
        visible.value = true;
      }
      function input(number) {
        showToast.text(`enter：${number}`);
      }
      function onDelete() {
        showToast.text('delete');
      }
      function close() {
        visible.value = false;
      }
      return {
        visible,
        input,
        showKeyBoard,
        close,
        onDelete
      };
    }
  };
</script>
```

:::

### Keyboard With Sidebar

:::demo

```html
<template>
  <cub-cell :isLink="true" @click="showKeyBoard" title="Keyboard With Sidebar"></cub-cell>
  <cub-number-keyboard
    type="rightColumn"
    v-model:visible="visible"
    :custom-key="customKey"
    confirm-text="pay"
    @input="input"
    @close="close"
  >
  </cub-number-keyboard>
</template>
<script>
  import { ref, reactive } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const visible = ref(false);
      const customKey = reactive(['.']);
      function showKeyBoard() {
        visible.value = true;
      }
      function input(number) {
        showToast.text(`enter${number}`);
      }
      function close() {
        visible.value = false;
      }
      return {
        visible,
        customKey,
        input,
        showKeyBoard,
        close
      };
    }
  };
</script>
```

:::

### Random Key Order

:::demo

```html
<template>
  <cub-cell :isLink="true" @click="showKeyBoard" title="Random Key Order"></cub-cell>
  <cub-number-keyboard
    type="rightColumn"
    v-model:visible="visible"
    :randomKeys="true"
    :custom-key="customKey"
    @input="input"
    @close="close"
  >
  </cub-number-keyboard>
</template>
<script>
  import { ref, reactive } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const visible = ref(false);
      const customKey = reactive(['.']);
      function showKeyBoard() {
        visible.value = true;
      }
      function input(number) {
        showToast.text(`enter：${number}`);
      }
      function close() {
        visible.value = false;
      }
      return {
        visible,
        customKey,
        input,
        showKeyBoard,
        close
      };
    }
  };
</script>
```

:::

### Show Keyboard With Title

:::demo

```html
<template>
  <cub-cell :isLink="true" @click="showKeyBoard(4)" title="Show Keyboard With Title"></cub-cell>
  <cub-number-keyboard title="title" v-model:visible="visible" :custom-key="customKey" @input="input" @close="close">
  </cub-number-keyboard>
</template>
<script>
  import { ref, reactive } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const visible = ref(false);
      const customKey = reactive(['.']);
      function showKeyBoard() {
        visible.value = true;
      }
      function input(number) {
        showToast.text(`enter：${number}`);
      }
      function close() {
        visible.value = false;
      }
      return {
        visible,
        customKey,
        input,
        showKeyBoard,
        close
      };
    }
  };
</script>
```

:::

### Show IdNumber Keyboard

:::demo

```html
<template>
  <cub-cell :isLink="true" @click="showKeyBoard(4)" title="IdNumber Keyboard"></cub-cell>
  <cub-number-keyboard v-model:visible="visible" :custom-key="customKey" @input="input" @close="close">
  </cub-number-keyboard>
</template>
<script>
  import { ref, reactive } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const visible = ref(false);
      const customKey = reactive(['X']);
      function showKeyBoard() {
        visible.value = true;
      }
      function input(number) {
        showToast.text(`enter：${number}`);
      }
      function close() {
        visible.value = false;
      }
      return {
        visible,
        customKey,
        input,
        showKeyBoard,
        close
      };
    }
  };
</script>
```

:::

### Bind Value

:::demo

```html
<template>
  <cub-cell :isLink="true" desc-text-align="left" @click="showKeyBoard" :desc="value" title="Bind Value"></cub-cell>
  <cub-number-keyboard v-model:visible="visible" v-model:value="value" maxlength="6" @close="close">
  </cub-number-keyboard>
</template>
<script>
  import { ref, reactive } from 'vue';
  export default {
    setup() {
      const visible = ref(false);
      const value = ref('');
      const customKey = reactive(['.']);
      function showKeyBoard() {
        visible.value = true;
      }
      function close() {
        visible.value = false;
      }
      return {
        visible,
        customKey,
        value,
        showKeyBoard,
        close
      };
    }
  };
</script>
```

:::

## API

### Props

| Attribute       | Description                                             | Type             | Default                                |
| --------------- | ------------------------------------------------------- | ---------------- | -------------------------------------- |
| v-model:visible | Whether to show keyboard                                | boolean          | `false`                                |
| v-model         | Current value                                           | string           | -                                      |
| title           | Keyboard title                                          | string           | -                                      |
| type            | Keyboard type can be set to `rightColumn`               | string           | `default`                              |
| random-keys     | Whether to shuffle the order of keys                    | boolean          | `false`                                |
| custom-key      | Content of bottom left key                              | string []        | `Array form supports adding up to two` |
| maxlength       | Value maxlength，Use with v-model                       | number \| string | `6`                                    |
| confirm-text    | Custom done button text,Such as "pay", "next", "submit" | string           | `done`                                 |
| teleport        | Specify the mount node                                  | string           | `"body"`                               |
| pop-class       | Custom bullet box classname                             | string           | -                                      |

### Events

| Event  | Description                                                              | Arguments   |
| ------ | ------------------------------------------------------------------------ | ----------- |
| input  | Emitted when a key is pressed                                            | key: string |
| delete | Emitted when the delete key is pressed                                   | -           |
| close  | Emitted when the close button or non-keyboard area is clicked is clicked | -           |
| blur   | Emitted when the close button is clicked or the keyboard is blurred      | -           |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                                  | Default Value |
| ----------------------------------------------------- | ------------- |
| --cub-numberkeyboard-width                            | _100%_        |
| --cub-numberkeyboard-padding                          | _0_           |
| --cub-numberkeyboard-background-color                 | _#f2f3f5_     |
| --cub-numberkeyboard-header-height                    | _34px_        |
| --cub-numberkeyboard-header-padding                   | _6px 0 0 0_   |
| --cub-numberkeyboard-header-color                     | _#646566_     |
| --cub-numberkeyboard-header-font-size                 | _16px_        |
| --cub-numberkeyboard-header-close-padding             | _0 16px_      |
| --cub-numberkeyboard-header-close-color               | _#576b95_     |
| --cub-numberkeyboard-header-close-font-size           | _14px_        |
| --cub-numberkeyboard-header-close-background-color    | _transparent_ |
| --cub-numberkeyboard-key-background-color             | _#fff_        |
| --cub-numberkeyboard-key-active-background-color      | _#ebedf0_     |
| --cub-numberkeyboard-key-height                       | _48px_        |
| --cub-numberkeyboard-key-line-height                  | _1.5_         |
| --cub-numberkeyboard-key-border-radius                | _8px_         |
| --cub-numberkeyboard-key-font-size                    | _28px_        |
| --cub-numberkeyboard-key-font-size-color              | _#333_        |
| --cub-numberkeyboard-key-finish-font-size             | _16px_        |
| --cub-numberkeyboard-key-finish-font-size-color       | _#fff_        |
| --cub-numberkeyboard-key-finish-background-color      | _#1989fa_     |
| --cub-numberkeyboard-key-activeFinsh-background-color | _#0570db_     |

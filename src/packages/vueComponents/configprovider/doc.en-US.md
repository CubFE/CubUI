# ConfigProvider

### Intro

Used to configure cubui components globally, provide dark mode and dynamic theme.

### Install

```javascript
import { createApp } from 'vue';
import { ConfigProvider } from '@cubui/cubui';

const app = createApp();
app.use(ConfigProvider);
```

### dark mode

Dark mode can be enabled by setting the `theme` property of the ConfigProvider component to `dark`.

Dark mode takes effect globally, making all cubui components on the page dark.

:::demo

```html
<template>
  <cub-config-provider :theme="theme">
    <cub-cell title="Switch Dark Mode">
      <template v-slot:link>
        <cub-switch v-model="switchChecked" @change="switchChange" />
      </template>
    </cub-cell>
    <cub-cell title="Title" sub-title="Subtitle Description" desc="Description"></cub-cell>
  </cub-config-provider>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const switchChecked = ref(false);
      const theme = ref('');
      const switchChange = (v: boolean) => {
        theme.value = v ? 'dark' : '';
      };

      return { switchChecked, switchChange, theme };
    }
  };
</script>
```

:::

### Dynamic Theme

cubui components can organize styles through [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) , and cover these CSS variables through the shell to determine themes in real time, dynamically switch themes and other effects.

#### Intro

Default values ​​for these variables are defined on the `:root` node, and all child nodes in the HTML can access these variables:

```css
:root {
  --cub-primary-color: #fa2c19;
  --cub-primary-color-end: #fa6419;
  --cub-help-color: #f5f5f5;
}
```

#### Override by CSS

You can directly override these CSS variables in the code, and the style of the Button component will change accordingly:

```css
/* the Primary Button will turn red */
:root {
  --cub-button-primary-background-color: green;
}
```

#### Override by ConfigProvider

The ConfigProvider component provides the ability to override CSS variables. You need to wrap a ConfigProvider component at the root node and configure some CSS variables through the theme-vars property.
:::demo

```html
<template>
  <cub-config-provider :theme-vars="themeVars">
    <cub-form>
      <cub-form-item :label="Range">
        <cub-range hidden-tag v-model="range"></cub-range>
      </cub-form-item>
    </cub-form>
  </cub-config-provider>
</template>
<script lang="ts">
  import { ref, reactive } from 'vue';
  export default {
    setup() {
      const range = ref(30);
      const themeVars = reactive({
        primaryColor: 'green',
        primaryColorEnd: 'green',
        activeColor: 'rgba(0,128,0,0.15)'
      });
      // Of course, you can also choose to use component variables to replace. If both basic variables and component variables are set, the component variables will overwrite the basic variables
      //  const themeVars = {
      //   rangeBgColor: 'rgba(25,137,250,0.15)',
      //   rangeBarBgColor: '#0289fa',
      //   rangeBarBtnBorder: '1px solid #0289fa'
      // };

      return { range, themeVars };
    }
  };
</script>
```

:::

## Style Variables

### basic variable

CSS variables in cubui are divided into **basic variable** and **component variable**. Component variables inherit the base variable, so after modifying the base variable, it will affect all related components.

### variable list

Here are all the base variables:

```scss
--cub-primary-color: #fa2c19;
--cub-primary-color-end: #fa6419;
--cub-help-color: #f5f5f5;
--cub-title-color: #1a1a1a;
--cub-title-color2: #666666;
--cub-text-color: #808080;
--cub-disable-color: #cccccc;
--cub-white: #fff;
--cub-black: #000;
--cub-required-color: #fa2c19;
--cub-dark-background: #131313;
--cub-dark-background2: #1b1b1b;
--cub-cub-dark-background3: #141414;
--cub-cub-dark-background4: #323233;
--cub-dark-background5: #646566;
--cub-dark-background6: #380e08;
--cub-dark-background7: #707070;
--cub-dark-color: var(--cub-white);
--cub-dark-color2: #f2270c;
--cub-dark-color3: rgba(232, 230, 227, 0.8);
--cub-dark-color-gray: var(--cub-text-color);
--cub-dark-calendar-choose-color: rgba(227, 227, 227, 0.2);
--cub-font-family: PingFang SC, Microsoft YaHei, Helvetica, Hiragino Sans GB, SimSun, sans-serif;

// Font
--cub-font-size-0: 10px;
--cub-font-size-1: 12px;
--cub-font-size-2: 14px;
--cub-font-size-3: 16px;
--cub-font-size-4: 18px;
--cub-font-weight-bold: 400;
--cub-font-size-small: var(--cub-font-size-1);
--cub-font-size-base: var(--cub-font-size-2);
--cub-font-size-large: var(--cub-font-size-3);
--cub-line-height-base: 1.5;
```

## API

### Props

| Attribute  | Description                                                          | Type   | Default |
| ---------- | -------------------------------------------------------------------- | ------ | ------- |
| theme      | Theme style, set to `dark` to enable dark mode, take effect globally | string | -       |
| theme-vars | Customized theme variable                                            | object | -       |
| tag        | HTML Tag of root element                                             | string | `div`   |

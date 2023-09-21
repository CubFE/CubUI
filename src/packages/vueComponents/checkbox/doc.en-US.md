# Checkbox

### Intro

The multiple selection button is used to select.

### Install

```ts
import { createApp } from 'vue';
import { Checkbox, CheckboxGroup } from '@cubui/cubui';

const app = createApp();
app.use(Checkbox);
app.use(CheckboxGroup);
```

### Basic Usage

:::demo

```html
<template>
  <cub-checkbox v-model="checkbox1" label="check box">check box</cub-checkbox>
  <cub-checkbox v-model="checkbox2" text-position="left">check box</cub-checkbox>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkbox1: false,
        checkbox2: false
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style>
  .cub-checkbox {
    display: flex;
    margin-right: 20px;
    .cub-checkbox__label {
      margin-left: 10px;
    }
  }
</style>
```

:::

### Semi selective

:::demo

```html
<template>
  <cub-cell>
    <cub-checkbox v-model="checkbox9" :indeterminate="true" label="check box">check box</cub-checkbox>
  </cub-cell>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkbox9: true
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Disabled state

:::demo

```html
<template>
  <cub-checkbox v-model="checkbox3" disabled>Disabled when not selected</cub-checkbox>
  <cub-checkbox v-model="checkbox4" disabled>Disabled when selected</cub-checkbox>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkbox3: false,
        checkbox4: true
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Custom size

:::demo

```html
<template>
  <cub-checkbox v-model="checkbox5" icon-size="25">Custom size 25</cub-checkbox>
  <cub-checkbox v-model="checkbox6" icon-size="10">Custom size 10</cub-checkbox>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkbox5: true,
        checkbox6: true
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Custom icon

Customize the icon through the slot, it is recommended to set the `icon` and `checkedIcon` two slots at the same time

:::demo

```html
<template>
  <cub-checkbox v-model="checkbox7">
    Custom icon
    <template #icon> <Check /> </template>
    <template #checkedIcon> <Check color="red" /> </template>
  </cub-checkbox>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  import { Check } from '@cubfe/icons-vue';
  export default {
    components: { Check },
    setup() {
      const state = reactive({
        checkbox7: true
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### change Event

When the value changes, the `change` event will be triggered

:::demo

```html
<template>
  <cub-checkbox v-model="checkbox" @change="changeBox3">change check box</cub-checkbox>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkbox: false
      });
      const changeBox3 = (state: boolean, label: string) => {
        showToast.text(`${state ? 'selected' : 'cancel'} ${label}`);
      };
      return { ...toRefs(state), changeBox3 };
    }
  };
</script>
```

:::

### use checkboxGroup

:::demo

```html
<template>
  <cub-checkbox-group v-model="checkboxgroup1">
    <cub-checkbox label="1">Combined check box</cub-checkbox>
    <cub-checkbox label="2">Combined check box</cub-checkbox>
    <cub-checkbox label="3">Combined check box</cub-checkbox>
    <cub-checkbox label="4">Combined check box</cub-checkbox>
  </cub-checkbox-group>
  <cub-cell>
    <div class="demo-check">Currently selected value</div>
    <div>{{ checkboxgroup1 }}</div>
  </cub-cell>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkboxgroup1: ['2', '3']
      });

      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### checkboxGroup disabled

:::demo

```html
<template>
  <cub-checkbox-group v-model="checkboxgroup1" disabled>
    <cub-checkbox label="1">Combined check box</cub-checkbox>
    <cub-checkbox label="2">Combined check box</cub-checkbox>
    <cub-checkbox label="3">Combined check box</cub-checkbox>
    <cub-checkbox label="4">Combined check box</cub-checkbox>
  </cub-checkbox-group>
  <cub-cell>
    <div class="demo-check">Currently selected value</div>
    <div>{{ checkboxgroup1 }}</div>
  </cub-cell>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkboxgroup1: ['2', '3']
      });

      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Checkboxgroup select all / cancel

:::demo

```html
<template>
  <cub-checkbox-group v-model="checkboxgroup3" ref="group" @change="changeBox4">
    <cub-checkbox v-for="item in checkboxsource" :key="item.label" :label="item.label">{{item.value}}</cub-checkbox>
  </cub-checkbox-group>
  <span class="btn">
    <cub-button type="primary" @click="toggleAll(true)" style="margin: 0 20px 0 0">Select all</cub-button>
    <cub-button type="primary" @click="toggleAll(false)" style="margin: 0 20px 0 0">cancel</cub-button>
    <cub-button type="warning" @click="toggleReverse()">reverse selection</cub-button>
  </span>
</template>
<script lang="ts">
  import { reactive, toRefs, ref } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkboxgroup3: ['2'],
        checkboxsource: [
          { label: '1', value: 'Combined check box' },
          { label: '2', value: 'Combined check box' },
          { label: '3', value: 'Combined check box' },
          { label: '4', value: 'Combined check box' },
          { label: '5', value: 'Combined check box' },
          { label: '6', value: 'Combined check box' }
        ]
      });

      const group = ref(null);
      const changeBox4 = (label: any[]) => {
        showToast.text(`${label.length === state.checkboxsource.length ? 'Select all' : 'Cancel select all'}`);
      };

      const toggleAll = (f: boolean) => {
        (group.value as any).toggleAll(f);
      };

      const toggleReverse = () => {
        showToast.text(`reverse selection`);
        group.value.toggleReverse();
      };

      return { ...toRefs(state), group, changeBox4, toggleAll };
    }
  };
</script>
```

:::

### use checkboxGroup, Limit the maximum number of options (2)

:::demo

```html
<template>
  <cub-cell-group title="use checkboxGroup, Limit the maximum number of options (2)">
    <cub-cell>
      <cub-checkbox-group v-model="checkboxgroup4" :max="2">
        <cub-checkbox label="1" style="margin: 2px 20px 0 0">Combined check box</cub-checkbox>
        <cub-checkbox label="2">Combined check box</cub-checkbox>
        <cub-checkbox label="3" style="margin: 2px 20px 0 0">Combined check box</cub-checkbox>
        <cub-checkbox label="4">Combined check box</cub-checkbox>
      </cub-checkbox-group>
    </cub-cell>
    <cub-cell>
      <div class="demo-check">selected</div>
      <div>{{ checkboxgroup4 }}</div>
    </cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        checkboxgroup4: ['2']
      });

      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Select all / half / cancel

:::demo

```html
<template>
  <cub-cell-group title="Select all / half / cancel">
    <cub-cell>
      <cub-checkbox :indeterminate="indeterminate" v-model="checkbox10" @change="changeBox5">selectAll</cub-checkbox>
    </cub-cell>
    <cub-checkbox-group v-model="checkboxgroup5" ref="group2" @change="changeBox6">
      <cub-cell><cub-checkbox label="1" style="margin: 2px 20px 0 0">Combined check box</cub-checkbox></cub-cell>
      <cub-cell><cub-checkbox label="2">Combined check box</cub-checkbox></cub-cell>
      <cub-cell><cub-checkbox label="3">Combined check box</cub-checkbox></cub-cell>
      <cub-cell><cub-checkbox label="4">Combined check box</cub-checkbox></cub-cell>
    </cub-checkbox-group>
  </cub-cell-group>
</template>
<script lang="ts">
  import { reactive, toRefs, ref, Ref } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    props: {},
    setup() {
      const group2 = ref(null) as Ref;
      const state = reactive({
        indeterminate: false,
        checkbox10: false,
        checkboxgroup5: []
      });

      const changeBox5 = (value: boolean) => {
        group2.value.toggleAll(value);
      };

      const changeBox6 = (label: string[]) => {
        if (label.length === 4) {
          state.indeterminate = false;
          state.checkbox10 = true;
        } else if (label.length && label.length < 4) {
          state.indeterminate = true;
        } else {
          data.indeterminate = false;
          state.checkbox10 = false;
        }
      };

      return { ...toRefs(state), group2, changeBox5, changeBox6 };
    }
  };
</script>
```

:::

## API

### Checkbox Props

| Attribute     | Description                                                                                        | Type             | Default |
| ------------- | -------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| v-model       | If selected                                                                                        | boolean          | `false` |
| disabled      | Disable selection                                                                                  | boolean          | `false` |
| text-position | The position of the text, optional value：`left`,`right`                                           | string           | `right` |
| icon-size     | [Icon Size](#/en-US/icon)                                                                          | string \| number | `18`    |
| label         | Text content of the check box                                                                      | string           | -       |
| indeterminate | Whether half selection status is currently supported. It is generally used in select all operation | boolean          | `false` |
| shape         | Shape, optional values：`button`、`round`                                                          | String           | `round` |

### Checkbox Slots

| Name          | Description             |
| ------------- | ----------------------- |
| icon          | Icon when not selected  |
| checkedIcon   | Icon when selected      |
| indeterminate | Icon when half selected |

### CheckboxGroup Props

| Attribute | Description                                                                                                             | Type    | Default |
| --------- | ----------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| v-model   | Identifier of the currently selected item, corresponding to `label`                                                     | Array   | -       |
| disabled  | Whether to disable the selection, which will be used for all check boxes under it                                       | boolean | `false` |
| max       | Limit the number of choices. It cannot be used with select all / cancel / invert selection. `0 'means there is no limit | number  | `0`     |

### Checkbox Events

| Event  | Description                      | Arguments                                                                                           |
| ------ | -------------------------------- | --------------------------------------------------------------------------------------------------- |
| change | Triggered when the value changes | (state, label),`state` represents the current state，`label` indicates the currently selected value |

### CheckboxGroup Events

| Event  | Description                      | Arguments                                                                              |
| ------ | -------------------------------- | -------------------------------------------------------------------------------------- |
| change | Triggered when the value changes | label,`label` returns an array representing the collection of currently selected items |

### CheckboxGroup Methods

| methodName    | Description         | Arguments                                          |
| ------------- | ------------------- | -------------------------------------------------- |
| toggleAll     | Select all / cancel | `true`,to select all，`false`,cancel the selection |
| toggleReverse | Reverse selection   | -                                                  |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                      | Default Value              |
| ----------------------------------------- | -------------------------- |
| --cub-checkbox-label-color                | _#1d1e1e_                  |
| --cub-checkbox-label-disable-color        | _#999_                     |
| --cub-checkbox-icon-disable-color         | _#d6d6d6_                  |
| --cub-checkbox-label-margin-left          | _15px_                     |
| --cub-checkbox-label-font-size            | _14px_                     |
| --cub-checkbox-icon-font-size             | _18px_                     |
| --cub-checkbox-icon-disable-color2        | _var(--cub-help-color)_    |
| --cub-checkbox-button-padding             | _5px 18px_                 |
| --cub-checkbox-button-font-size           | _12px_                     |
| --cub-checkbox-button-border-radius       | _15px_                     |
| --cub-checkbox-button-border-color        | _#f6f7f9_                  |
| --cub-checkbox-button-background          | _#f6f7f9_                  |
| --cub-checkbox-button-font-color-active   | _var(--cub-primary-color)_ |
| --cub-checkbox-button-border-color-active | _var(--cub-primary-color)_ |
| --cub-checkbox-button-background-active   | _var(--cub-primary-color)_ |

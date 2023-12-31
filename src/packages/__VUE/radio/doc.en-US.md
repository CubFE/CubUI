# Radio

### Intro

Used to make a single selection in a set of alternatives

### Install

```ts
import { createApp } from 'vue';
import { Radio, RadioGroup } from '@cubui/cubui';

const app = createApp();
app.use(Radio);
app.use(RadioGroup);
```

### Basic Usage

Bind the **label** of the current option through **v-model**. And it must be used in combination with **cub-radio-group** and **cub-radio**

:::demo

```html
<template>
  <cub-cell-group title="Basic">
    <cub-cell>
      <cub-radio-group v-model="radioVal">
        <cub-radio label="1">Option 1</cub-radio>
        <cub-radio disabled label="2">Option 2</cub-radio>
        <cub-radio label="3">Option 3</cub-radio>
      </cub-radio-group>
    </cub-cell>
    <cub-cell>
      <cub-radio-group v-model="radioVal" text-position="left">
        <cub-radio label="1">Option 1</cub-radio>
        <cub-radio disabled label="2">Option 2</cub-radio>
        <cub-radio label="3">Option 3</cub-radio>
      </cub-radio-group>
    </cub-cell>
    <cub-cell>
      <cub-radio-group v-model="radioVal">
        <cub-radio shape="button" label="1">Option 1</cub-radio>
        <cub-radio disabled shape="button" label="2">Option 2</cub-radio>
        <cub-radio shape="button" label="3">Option 3</cub-radio>
      </cub-radio-group>
    </cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    }
  };
</script>
```

:::

### Horizontal use

:::demo

```html
<template>
  <cub-cell-group title="Horizontal use">
    <cub-cell>
      <cub-radio-group v-model="radioVal" direction="horizontal">
        <cub-radio label="1">Option 1</cub-radio>
        <cub-radio label="2">Option 2</cub-radio>
        <cub-radio label="3">Option 3</cub-radio>
      </cub-radio-group>
    </cub-cell>
    <cub-cell>
      <cub-radio-group v-model="radioVal" text-position="left" direction="horizontal">
        <cub-radio label="1">Option 1</cub-radio>
        <cub-radio label="2">Option 2</cub-radio>
        <cub-radio label="3">Option 3</cub-radio>
      </cub-radio-group>
    </cub-cell>
    <cub-cell>
      <cub-radio-group v-model="radioVal" direction="horizontal">
        <cub-radio shape="button" label="1">Option 1</cub-radio>
        <cub-radio shape="button" label="2">Option 2</cub-radio>
        <cub-radio shape="button" label="3">Option 3</cub-radio>
      </cub-radio-group>
    </cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    }
  };
</script>
```

:::

### Custom size

:::demo

```html
<template>
  <cub-cell-group title="Custom size">
    <cub-cell>
      <cub-radio-group v-model="radioVal">
        <cub-radio label="1" icon-size="12">Custom size 12</cub-radio>
        <cub-radio label="2" icon-size="12">Custom size 12</cub-radio>
      </cub-radio-group>
    </cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
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
  <cub-cell-group title="Radio Custom icon">
    <cub-cell>
      <cub-radio-group v-model="radioVal">
        <cub-radio label="1">
          Custom icon
          <template #icon> <Checklist /> </template>
          <template #checkedIcon> <Checklist color="red" /> </template>
        </cub-radio>
        <cub-radio label="2">
          Custom icon
          <template #icon> <Checklist /> </template>
          <template #checkedIcon> <Checklist color="red" /> </template>
        </cub-radio>
      </cub-radio-group>
    </cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { Checklist } from '@cubfe/icons-vue';
  export default {
    components: {
      Checklist
    },
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    }
  };
</script>
```

:::

### Trigger change event

:::demo

```html
<template>
  <cub-cell-group title="Trigger event">
    <cub-cell>
      <cub-radio-group v-model="radioVal" @change="handleChange">
        <cub-radio label="1">Trigger event</cub-radio>
        <cub-radio label="2">Trigger event</cub-radio>
      </cub-radio-group>
    </cub-cell>
    <cub-cell title="Currently selected value" :desc="radioVal"></cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      const handleChange = (value: any) => {
        console.log(value);
      };
      return { radioVal, handleChange };
    }
  };
</script>
```

:::

## API

### Radio Props

| Attribute | Description                                  | Type                        | Default |
| --------- | -------------------------------------------- | --------------------------- | ------- |
| disabled  | Disable selection                            | boolean                     | `false` |
| icon-size | [Icon Size](#/en-US/icon)                    | string \| number            | `18`    |
| label     | Radio box ID                                 | string \| number \| boolean | -       |
| shape     | Shape, optional values are `button`、`round` | string                      | `round` |

### Radio Slots

| Name        | Description            |
| ----------- | ---------------------- |
| icon        | Icon when not selected |
| checkedIcon | Icon when selected     |

### RadioGroup Props

| Attribute     | Description                                                                                            | Type                        | Default    |
| ------------- | ------------------------------------------------------------------------------------------------------ | --------------------------- | ---------- |
| v-model       | The identifier of the currently selected item is selected when it is consistent with the `label` value | string \| number \| boolean | -          |
| text-position | The position of the text, optional value：`left`,`right`                                               | string                      | `right`    |
| direction     | Use horizontal and vertical optional values `horizontal`、`vertical`                                   | string                      | `vertical` |

### RadioGroup Events

| Event  | Description                      | Arguments                                                                                                   |
| ------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| change | Triggered when the value changes | Currently selected item value（label）【There is a value after setting `label`, which is empty by default】 |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                  | Default Value              |
| ------------------------------------- | -------------------------- |
| --cub-radio-label-font-color          | _#1d1e1e_                  |
| --cub-radio-label-font-active-color   | _var(--cub-primary-color)_ |
| --cub-radio-label-disable-color       | _#999_                     |
| --cub-radio-icon-disable-color        | _#d6d6d6_                  |
| --cub-radio-label-button-border-color | _var(--cub-primary-color)_ |
| --cub-radio-label-button-background   | _var(--cub-primary-color)_ |
| --cub-radio-label-margin-left         | _15px_                     |
| --cub-radio-button-border-radius      | _15px_                     |
| --cub-radio-label-font-size           | _14px_                     |
| --cub-radio-button-font-size          | _12px_                     |
| --cub-radio-button-padding            | _5px 18px_                 |
| --cub-radio-icon-disable-color2       | _var(--cub-help-color)_    |

# Steps

### Intro

Split and display the steps of a process, guide users to complete tasks according to the process, or show users the current status.

### Install

```js
import { createApp } from 'vue';
import { Steps, Step } from '@cubui/cubui';

const app = createApp();
app.use(Steps);
app.use(Step);
```

### Basic Usage

:::demo

```vue
<template>
  <cub-steps :current="current1" @click-step="handleClickStep">
    <cub-step title="Step One">
      1
      <template #title>Step One</template>
    </cub-step>
    <cub-step title="Not started">2</cub-step>
    <cub-step title="Not started">3</cub-step>
  </cub-steps>
</template>
<script setup>
import { ref } from 'vue';
const current1 = ref(1);
const handleClickStep = (index) => {
  console.log(index);
};
</script>
```

:::

### Basic Usage(Dot)

:::demo

```vue
<template>
  <cub-steps :current="current2" progress-dot>
    <cub-step></cub-step>
    <cub-step></cub-step>
    <cub-step></cub-step>
  </cub-steps>
  <div class="steps-button">
    <cub-button size="mini" type="primary" @click="handleStep('current2')">{{ translate('next') }}</cub-button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const curren2 = ref(1);
const handleClickStep = (index) => {
  console.log(index);
};
</script>
```

:::

### Title and description information

:::demo

```vue
<template>
  <cub-steps :current="current2">
    <cub-step title="Completed" content="Step description">1</cub-step>
    <cub-step title="In progress" content="Step description">2</cub-step>
    <cub-step title="Not started" content="Step description">3</cub-step>
  </cub-steps>
</template>
<script setup>
import { ref } from 'vue';
const curren2 = ref(1);
</script>
```

:::

### Custom icon

:::demo

```vue
<template>
  <cub-steps current="1">
    <cub-step title="Completed">
      <template #icon><Service /></template>
    </cub-step>
    <cub-step title="In progress">
      <template #icon><People /></template>
    </cub-step>
    <cub-step title="Not started">
      <template #icon><Location /></template>
    </cub-step>
  </cub-steps>
</template>
<script setup>
import { Service, People, Location } from '@cubfe/icons-vue';
</script>
```

:::

### Vertical step bar

:::demo

```vue
<template>
  <cub-steps direction="vertical" current="2">
    <cub-step title="Completed" content="Your order has been packaged and the goods have been delivered">1</cub-step>
    <cub-step title="In progress" content="Your order is in transit">2</cub-step>
    <cub-step
      title="Not started"
      content="The receiving address is Jingdong building, yard 18, Kechuang 11th Street, Beijing Economic and Technological Development Zone"
      >3</cub-step
    >
  </cub-steps>
</template>
```

:::

### Point step and vertical direction

:::demo

```vue
<template>
  <cub-steps direction="vertical" progress-dot current="2">
    <cub-step title="Completed" content="Your order has been packaged and the goods have been delivered">1</cub-step>
    <cub-step title="In progress" content="Your order is in transit">2</cub-step>
    <cub-step title="Not started">
      3
      <template #content>
        <p>The receiving address is：</p>
        <p>Jingdong building, yard 18, Kechuang 11th Street, Beijing Economic and Technological Development Zone</p>
      </template>
    </cub-step>
  </cub-steps>
</template>
```

:::

## API

### Steps Props

| Attribute    | Description                             | Type             | Default      |
| ------------ | --------------------------------------- | ---------------- | ------------ |
| direction    | Show direction，`horizontal`,`vertical` | string           | `horizontal` |
| current      | Current step                            | number \| string | `0`          |
| progress-dot | Dot step bar                            | boolean          | `false`      |

### Steps Events

| Event      | Description                                             | Arguments     |
| ---------- | ------------------------------------------------------- | ------------- |
| click-step | Triggered when the title or icon of the step is clicked | index: number |

### Step Props

| Attribute | Description                                                   | Type   | Default            |
| --------- | ------------------------------------------------------------- | ------ | ------------------ |
| title     | Title of the process step                                     | string | `Step`             |
| content   | Descriptive text of process steps (supporting HTML structure) | String | `Step description` |

### Step Slots

| Name    | Description  |
| ------- | ------------ |
| title   | Step title   |
| content | Step content |
| icon    | Step icon    |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                  | Default Value              |
| ------------------------------------- | -------------------------- |
| --cub-steps-base-icon-width           | _25px_                     |
| --cub-steps-base-icon-height          | _25px_                     |
| --cub-steps-base-icon-line-height     | _25px_                     |
| --cub-steps-base-icon-font-size       | _13px_                     |
| --cub-steps-base-title-font-size      | _14px_                     |
| --cub-steps-base-line-color           | _#909ca4_                  |
| --cub-steps-base-title-color          | _#909ca4_                  |
| --cub-steps-base-title-margin-bottom  | _10px_                     |
| --cub-steps-base-content-font-size    | _14px_                     |
| --cub-steps-base-content-color        | _#666_                     |
| --cub-steps-wait-icon-bg-color        | _#959fb1_                  |
| --cub-steps-wait-icon-text-color      | _var(--cub-white)_         |
| --cub-steps-wait-icon-color           | _var(--cub-white)_         |
| --cub-steps-wait-head-color           | _#909ca4_                  |
| --cub-steps-wait-head-border-color    | _#909ca4_                  |
| --cub-steps-wait-content-color        | _#909ca4_                  |
| --cub-steps-finish-head-color         | _var(--cub-primary-color)_ |
| --cub-steps-finish-head-border-color  | _var(--cub-primary-color)_ |
| --cub-steps-finish-title-color        | _var(--cub-primary-color)_ |
| --cub-steps-finish-line-background    | _var(--cub-primary-color)_ |
| --cub-steps-finish-icon-text-color    | _var(--cub-white)_         |
| --cub-steps-process-head-color        | _var(--cub-white)_         |
| --cub-steps-process-head-border-color | _var(--cub-primary-color)_ |
| --cub-steps-process-title-color       | _var(--cub-primary-color)_ |
| --cub-steps-process-icon-text-color   | _var(--cub-primary-color)_ |

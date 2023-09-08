# Pagination

### Intro

When the amount of data is too much, use pagination to separate the data.

### Install

```javascript
import { createApp } from 'vue';
import { Pagination } from '@cubui/cubui';

const app = createApp();
app.use(Pagination);
```

### Basic Usage

Bind current page with v-model.
:::demo

```html
<template>
  <cub-pagination v-model="currentPage" :total-items="25" :items-per-page="5" @change="pageChange" />
</template>
<script lang="ts">
  import { ref, reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        currentPage: 1
      });
      const pageChange = (value: number) => {
        console.log(value);
      };

      return {
        ...toRefs(state),
        pageChange
      };
    }
  };
</script>
<style>
  .cub-pagination {
    margin-left: 20px;
  }
</style>
```

:::

### Simple mode

Pagination can be switched to simple mode with simple mode attribute, and pagination cann't display specific page buttons.
:::demo

```html
<template>
  <cub-pagination v-model="currentPage1" :page-count="12" mode="simple" @change="pageChange" />
</template>
<script lang="ts">
  import { ref, reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        currentPage1: 1
      });
      const pageChange = (value: number) => {
        console.log(value);
      };

      return {
        ...toRefs(state),
        pageChange
      };
    }
  };
</script>
<style>
  .cub-pagination {
    margin-left: 20px;
  }
</style>
```

:::

### Show ellipses

The ellipses button will display after with force-ellipses attribute, click it can jump quickly.
:::demo

```html
<template>
  <cub-pagination v-model="currentPage2" :total-items="125" :show-page-size="3" @change="pageChange" force-ellipses />
</template>
<script lang="ts">
  import { ref, reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        currentPage2: 1
      });
      const pageChange = (value: number) => {
        console.log(value);
      };

      return {
        ...toRefs(state),
        pageChange
      };
    }
  };
</script>
<style>
  .cub-pagination {
    margin-left: 20px;
  }
</style>
```

:::

### Custom Button

Custom pagination button content with pre-text slot、next-text slot and so on.
:::demo

```html
<template>
  <cub-pagination v-model="currentPage3" :total-items="500" @change="pageChange" :show-page-size="5">
    <template #prev-text>
      <Left width="10px" height="10px" />
    </template>
    <template #next-text>
      <Right width="10px" height="10px" />
    </template>
    <template #page="{ item }"> {{ item.number == 3 ? 'hot' : item.text }} </template>
  </cub-pagination>
</template>
<script lang="ts">
  import { Left, Right } from '@cubfe/icons-vue-taro';
  import { ref, reactive, toRefs } from 'vue';
  export default {
    components: { Left, Right },
    setup() {
      const state = reactive({
        currentPage3: 1
      });
      const pageChange = (value: number) => {
        console.log(value);
      };

      return {
        ...toRefs(state),
        pageChange
      };
    }
  };
</script>
<style>
  .cub-pagination {
    margin-left: 20px;
  }
</style>
```

:::

## API

### Props

| Attribute      | Description                         | Type             | Default    |
| -------------- | ----------------------------------- | ---------------- | ---------- |
| v-model        | Current page number                 | number           | `1`        |
| mode           | Mode, can be set to simple or multi | string           | `multi`    |
| prev-text      | Previous text                       | string           | `Previous` |
| next-text      | Next text                           | string           | `Next`     |
| page-count     | The total number of pages           | string \| number | `''`       |
| total-items    | Total items                         | string \| number | `0`        |
| items-per-page | Item number per page                | string \| number | `10`       |
| show-page-size | Count of page size to show          | string \| number | `5`        |
| force-ellipses | Whether to show ellipses            | boolean          | `false`    |

### Events

| Event  | Description                       | Arguments |
| ------ | --------------------------------- | --------- |
| change | Emitted when current page changed | value     |

### Slots

| Name      | Description            | Arguments |
| --------- | ---------------------- | --------- |
| prev-text | Custom prev text       | -         |
| next-text | Custom next text       | -         |
| page      | Custom pagination item | -         |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                      | Default Value                                                                           |
| ----------------------------------------- | --------------------------------------------------------------------------------------- |
| --cub-pagination-color                    | _var(--cub-primary-color)_                                                              |
| --cub-pagination-font-size                | _var(--cub-font-size-2)_                                                                |
| --cub-pagination-item-border-color        | _#e4e7eb_                                                                               |
| --cub-pagination-active-background-color  | _linear-gradient(135deg,var(--cub-primary-color) 0%,var(--cub-primary-color-end) 100%)_ |
| --cub-pagination-disable-color            | _rgba(116, 116, 116, 0.31)_                                                             |
| --cub-pagination-disable-background-color | _#f7f8fa_                                                                               |
| --cub-pagination-item-border-width        | _1px_                                                                                   |
| --cub-pagination-item-border-radius       | _2px_                                                                                   |
| --cub-pagination-prev-next-padding        | _0 11px_                                                                                |

# Category

### Intro

Component for displaying product categories.

### Install

```javascript
import { createApp } from 'vue';
import { Category, CategoryPane } from '@cubui/cubui';

const app = createApp();
app.use(Category);
app.use(CategoryPane);
```

### Classic Classification Mod

data defination
[categoryData.js](https://storage.360buyimg.com/cubui/3x/categoryData.js)。

:::demo

```html
<template>
  <cub-category :category="category" @change="change">
    <cub-category-pane :categoryChild="categoryChild" @onChange="onChange"> </cub-category-pane>
  </cub-category>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';

  export default {
    setup() {
      const data = reactive({
        categoryInfo: {},
        category: [{}],
        categoryChild: [{}]
      });

      onMounted(() => {
        setTimeout(() => {
          getData();
        }, 500);
      });

      const getData = () => {
        fetch('//storage.360buyimg.com/cubui/3x/categoryData.js')
          .then((response) => response.json())
          .then((res) => {
            const { categoryInfo, categoryChild } = res;
            data.categoryInfo = categoryInfo;
            data.category = categoryInfo.category;
            data.categoryChild = categoryChild;
          })
          .catch((err) => console.log('Oh, error', err));
      };

      const change = (index: any) => {
        data.categoryChild = [].concat(data.categoryInfo.category[index + 1].children as any);
      };
      const onChange = () => {
        console.log('Click on current category data');
      };
      return {
        onChange,
        change,
        ...toRefs(data)
      };
    }
  };
</script>
```

:::

### Show Text Only

:::demo

```html
<template>
  <cub-category :category="category" @change="changeText">
    <cub-category-pane type="text" :categoryChild="categoryChild" @onChange="onChange"> </cub-category-pane
  ></cub-category>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';

  export default {
    setup() {
      const data = reactive({
        categoryInfo: {},
        category: [{}],
        categoryChild: [{}]
      });

      onMounted(() => {
        setTimeout(() => {
          getData();
        }, 500);
      });

      const getData = () => {
        fetch('//storage.360buyimg.com/cubui/3x/categoryData.js')
          .then((response) => response.json())
          .then((res) => {
            console.log('res', res);
            const { categoryInfo, categoryChild } = res;
            data.categoryInfo = categoryInfo;
            data.category = categoryInfo.category;
            data.categoryChild = categoryChild;
          })
          .catch((err) => console.log('Oh, error', err));
      };

      const changeText = (index: any) => {
        data.categoryChild = [].concat(data.categoryInfo.category[index + 1].children as any);
      };

      const onChange = () => {
        console.log('Click on current category data');
      };
      return {
        changeText,
        onChange,
        ...toRefs(data)
      };
    }
  };
</script>
```

:::

### Custom taxonomy

:::demo

```html
<template>
  <cub-category @change="changeCustom"
    ><cub-category-pane type="custom" :customCategory="customCategory" @onChange="changeCustom"> </cub-category-pane
  ></cub-category>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';

  export default {
    setup() {
      const data = reactive({
        customCategory: [{}]
      });
      onMounted(() => {
        setTimeout(() => {
          getData();
        }, 500);
      });
      const getData = () => {
        fetch('//storage.360buyimg.com/cubui/3x/categoryData.js')
          .then((response) => response.json())
          .then((res) => {
            const { customCategory } = res;
            data.customCategory = customCategory;
          })
          .catch((err) => console.log('Oh, error', err));
      };
      const changeCustom = () => {
        console.log('Click to categorize data');
      };
      return {
        changeCustom,
        ...toRefs(data)
      };
    }
  };
</script>
```

:::

## API

### Category Props

| Attribute | Description                                       | Type   | Default    |
| --------- | ------------------------------------------------- | ------ | ---------- |
| type      | Classification mode: `classify`, `text`, `custom` | string | `classify` |
| category  | Left navigation bar data list                     | Array  | `[]`       |

### Category Events

| Event         | Description                                                                                     | Arguments        |
| ------------- | ----------------------------------------------------------------------------------------------- | ---------------- |
| change        | Classic classification, click on the left navigation bar to get the data list on the right      | Clicked data     |
| change-text   | In text classification mode, click on the left navigation bar to get the data list on the right | Input data       |
| change-custom | Customize, click the left navigation bar to get the data list on the right                      | Current quantity |

### CategoryPane Props

| Attribute       | Description                                               | Type  | Default |
| --------------- | --------------------------------------------------------- | ----- | ------- |
| category-child  | The current classification data is displayed on the right | Array | `[]`    |
| custom-category | Custom categorical data                                   | Array | `[]`    |

### CategoryPane Events

| Event     | Description                                | Arguments    |
| --------- | ------------------------------------------ | ------------ |
| on-change | Click on the right classified data trigger | Clicked data |

### CategoryPane Slots

| Name    | Description    |
| ------- | -------------- |
| default | Custom content |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                          | Default Value              |
| --------------------------------------------- | -------------------------- |
| --cub-category-bg-color                       | _rgba(255, 255, 255, 1)_   |
| --cub-category-list-left-bg-color             | _rgba(246, 247, 249, 1)_   |
| --cub-category-list-item-color                | _var(--cub-title-color)_   |
| --cub-category-list-item-checked-color        | _rgba(255, 255, 255, 1)_   |
| --cub-category-list-item-checked-img-bg-color | _var(--cub-primary-color)_ |
| --cub-category-pane-gray-color                | _#666_                     |
| --cub-category-pane-border-color              | _rgb(153, 153, 153)_       |
| --cub-category-pane-title-color               | _rgba(51, 51, 51, 1)_      |

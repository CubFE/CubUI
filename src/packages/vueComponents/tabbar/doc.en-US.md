# TabBar

### Intro

Bottom navigation bar

### Install

```javascript
import { createApp } from 'vue';
import { Tabbar, TabbarItem } from '@cubui/cubui';

const app = createApp();
app.use(Tabbar);
app.use(TabbarItem);
```

### Basic Usage

If you need to use more icons based on the existing Icon, please refer to the Icon component custom icon introduction

:::demo

```html
<template>
  <cub-tabbar @tab-switch="tabSwitch">
    <cub-tabbar-item tab-title="tab">
      <template #icon>
        <Home></Home>
      </template>
    </cub-tabbar-item>
    <cub-tabbar-item tab-title="tab">
      <template #icon>
        <Category></Category>
      </template>
    </cub-tabbar-item>
    <cub-tabbar-item tab-title="tab">
      <template #icon>
        <Find></Find>
      </template>
    </cub-tabbar-item>
    <cub-tabbar-item tab-title="tab">
      <template #icon>
        <Cart></Cart>
      </template>
    </cub-tabbar-item>
    <cub-tabbar-item tab-title="tab">
      <template #icon>
        <Me></Me>
      </template>
    </cub-tabbar-item>
  </cub-tabbar>
</template>
<script>
  import { Home, Category, Find, Cart, Me } from '@cubfe/icons-vue';
  export default {
    components: { Home, Category, Find, Cart, Me },
    setup() {
      function tabSwitch(item, index) {
        console.log(item, index);
      }
      return {
        tabSwitch
      };
    }
  };
</script>
```

:::

### Custom Icon

Use icon slot to custom icon.

:::demo

```html
<template>
  <cub-tabbar @tab-switch="tabSwitch">
    <cub-tabbar-item tab-title="tab">
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.unactive" alt="" />
      </template>
    </cub-tabbar-item>
    <cub-tabbar-item tab-title="tab">
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.unactive" alt="" />
      </template>
    </cub-tabbar-item>
    <cub-tabbar-item tab-title="tab">
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.unactive" alt="" />
      </template>
    </cub-tabbar-item>
  </cub-tabbar>
</template>
<script>
  export default {
    setup() {
      function tabSwitch(item, index) {
        console.log(item, index);
      }
      const icon = {
        active:
          'https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png',
        unactive:
          'https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png'
      };
      return {
        icon,
        tabSwitch
      };
    }
  };
</script>
```

:::

### Custom Selected

:::demo

```html
<template>
  <cub-tabbar v-model="active">
    <cub-tabbar-item v-for="(item,index) in List" :tab-title="item.title" :icon="item.icon"> </cub-tabbar-item>
  </cub-tabbar>
</template>
<script>
  import { h, ref } from 'vue';
  import { Home, Category, Find, Cart, Me } from '@cubfe/icons-vue';
  export default {
    components: { Home, Category, Find, Cart, Me },
    setup() {
      const active = ref(2);
      const List = [
        {
          title: 'tab',
          icon: h(Home),
          name: 'home'
        },
        {
          title: 'tab',
          icon: h(Category),
          name: 'category'
        },
        {
          title: 'tab',
          icon: h(Find),
          name: 'find'
        },
        {
          title: 'tab',
          icon: h(Cart),
          name: 'cart'
        },
        {
          title: 'tab',
          icon: h(Me),
          name: 'my'
        }
      ];
      function tabSwitch(item, index) {
        console.log(item, index);
      }
      return {
        tabSwitch,
        List,
        active
      };
    }
  };
</script>
```

:::

### Show Badge

:::demo

```html
<template>
  <cub-tabbar>
    <cub-tabbar-item tab-title="tab" :value="11">
      <template #icon>
        <Home></Home>
      </template>
    </cub-tabbar-item>
    <cub-tabbar-item tab-title="tab" :dot="true">
      <template #icon>
        <Home></Home>
      </template>
    </cub-tabbar-item>
    <cub-tabbar-item tab-title="tab" :value="110">
      <template #icon>
        <Home></Home>
      </template>
    </cub-tabbar-item>
    <cub-tabbar-item tab-title="tab">
      <template #icon>
        <Home></Home>
      </template>
    </cub-tabbar-item>
  </cub-tabbar>
</template>
<script>
  import { Home, Category, Find, Cart, Me } from '@cubfe/icons-vue';
  export default {
    components: { Home, Category, Find, Cart, Me }
  };
</script>
```

:::

### Custom Color

:::demo

```html
<template>
  <cub-tabbar unactive-color="#7d7e80" active-color="#1989fa">
    <cub-tabbar-item v-for="(item,index) in List" :tab-title="item.title" :icon="item.icon"> </cub-tabbar-item>
  </cub-tabbar>
</template>
<script>
  import { h } from 'vue';
  import { Home, Category, Find, Cart, Me } from '@cubfe/icons-vue';
  export default {
    components: { Home, Category, Find, Cart, Me },
    setup() {
      const List = [
        {
          title: 'tab',
          icon: h(Home),
          name: 'home'
        },
        {
          title: 'tab',
          icon: h(Category),
          name: 'category'
        },
        {
          title: 'tab',
          icon: h(Find),
          name: 'find'
        },
        {
          title: 'tab',
          icon: h(Cart),
          name: 'cart'
        },
        {
          title: 'tab',
          icon: h(Me),
          name: 'my'
        }
      ];
      return {
        List
      };
    }
  };
</script>
```

:::

### Custom Quantity

:::demo

```html
<template>
  <cub-tabbar unactive-color="#7d7e80" active-color="#1989fa">
    <cub-tabbar-item tab-title="tab" :value="11">
      <template #icon>
        <Home></Home>
      </template>
    </cub-tabbar-item>
    <cub-tabbar-item tab-title="tab" :dot="true">
      <template #icon>
        <Home></Home>
      </template>
    </cub-tabbar-item>
    <cub-tabbar-item tab-title="tab" :value="110">
      <template #icon>
        <Home></Home>
      </template>
    </cub-tabbar-item>
  </cub-tabbar>
</template>
<script>
  import { Home } from '@cubfe/icons-vue';
  export default {
    components: { Home }
  };
</script>
```

:::

### Fixed Bottom

:::demo

```html
<template>
  <cub-tabbar bottom safe-area-inset-bottom placeholder>
    <cub-tabbar-item v-for="(item,index) in List" :tab-title="item.title" :icon="item.icon"> </cub-tabbar-item>
  </cub-tabbar>
</template>
<script>
  import { h } from 'vue';
  import { Home, Category, Find, Cart, Me } from '@cubfe/icons-vue';
  export default {
    components: { Home, Category, Find, Cart, Me },
    setup() {
      const List = [
        {
          title: 'tab',
          icon: h(Home)
        },
        {
          title: 'tab',
          icon: h(Category)
        },
        {
          title: 'tab',
          icon: h(Find)
        },
        {
          title: 'tab',
          icon: h(Cart)
        },
        {
          title: 'tab',
          icon: h(Me)
        }
      ];
      return {
        List
      };
    }
  };
</script>
```

:::

## API

### Tabbar Props

| Attribute              | Description                                          | Type    | Default   |
| ---------------------- | ---------------------------------------------------- | ------- | --------- |
| v-model:visible        | The index value of the selected label                | number  | `0`       |
| bottom                 | Whether to fix the bottom                            | boolean | `false`   |
| unactive-color         | Color of unactive tab item                           | string  | `#7d7e80` |
| active-color           | Color of active tab item                             | string  | `#1989fa` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation        | boolean | `false`   |
| placeholder            | Whether to generate a placeholder element when fixed | boolean | `false`   |

### TabbarItem Props

| Attribute | Description                                        | Type             | Default      |
| --------- | -------------------------------------------------- | ---------------- | ------------ |
| tab-title | title                                              | string           | --           |
| name      | Identifier                                         | string           | `Item index` |
| icon      | icon name                                          | string           | --           |
| href      | Jump links for tabs                                | string           | --           |
| to        | Target route of the link, same as to of vue-router | string \| object | --           |

### TabbarItem Slots

| Name | Description | SlotProps       |
| ---- | ----------- | --------------- |
| icon | Custom Icon | active: boolean |

### Tabbar Events

| Event      | Description                      | Arguments  |
| ---------- | -------------------------------- | ---------- |
| tab-switch | Emitted when changing active tab | item,index |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                               | Default Value              |
| ---------------------------------- | -------------------------- |
| --cub-tabbar-active-color          | _var(--cub-primary-color)_ |
| --cub-tabbar-unactive-color        | _var(--cub-primary-color)_ |
| --cub-tabbar-border-top            | _1px solid #eee_           |
| --cub-tabbar-border-bottom         | _1px solid #eee_           |
| --cub-tabbar-box-shadow            | _none_                     |
| --cub-tabbar-item-text-font-size   | _var(--cub-font-size-0)_   |
| --cub-tabbar-item-text-line-height | _initial_                  |
| --cub-tabbar-height                | _50px_                     |
| --cub-tabbar-word-margin-top       | _auto_                     |

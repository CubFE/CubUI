# Dialog

### Intro

Modal dialog box is displayed in the floating layer to guide users to carry out relevant operations. It is often used for message prompt, message confirmation, or completing specific interactive operations in the current page.

The popup box component supports function call and component call.

### Install

```javascript
import { createApp, createVNode } from 'vue';
import { Dialog } from '@cubui/cubui';

const app = createApp();
app.use(Dialog);
```

### Function use

:::demo

```html
<template>
  <cub-cell-group title="Function Use">
    <cub-cell title="Basic Usage" @click="baseClick"></cub-cell>
    <cub-cell title="Transparent Dialog" @click="transparentClick"></cub-cell>
    <cub-cell title="Use html" @click="htmlClick"></cub-cell>
    <cub-cell title="Before Close" @click="beforeCloseClick"></cub-cell>
    <cub-cell title="No Title" @click="noTitleClick"></cub-cell>
    <cub-cell title="Tips Dialog" @click="tipsClick"></cub-cell>
    <cub-cell title="Bottom button vertical use" @click="verticalClick"></cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref, createVNode } from 'vue';
  import { showDialog } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/dialog/style';
  export default {
    setup() {
      const onCancel = () => {
        console.log('event cancel');
      };
      const onOk = () => {
        console.log('event ok');
      };
      const baseClick = (): void => {
        showDialog({
          title: 'Basic spring frame',
          content: createVNode('span', { style: { color: 'red' } }, 'I can be a custom component'),
          onCancel,
          onOk
        });
      };
      const transparentClick = (): void => {
        showDialog({
          overlayStyle: { background: 'rgba(0,0,0,0)' },
          title: 'Transparent Dialog',
          content: 'Content',
          onCancel,
          onOk
        });
      };
      const htmlClick = (): void => {
        showDialog({
          title: 'Use html',
          content:
            "<p style='color:red'>html</p><img src='https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg' />",
          onCancel,
          onOk
        });
      };
      const beforeCloseClick = (): void => {
        showDialog({
          title: 'Before Close',
          content: 'Click confirm to close it in 1 second',
          onCancel,
          onOk,
          beforeClose: (action: string) => {
            return new Promise((r) => {
              setTimeout(() => {
                r(action == 'ok');
              }, 1000);
            });
          }
        });
      };
      const noTitleClick = () => {
        showDialog({
          content: 'Content',
          onCancel,
          onOk
        });
      };
      const tipsClick = () => {
        showDialog({
          title: 'Title',
          content: 'Function call and component call are supported.',
          noCancelBtn: true,
          onCancel,
          onOk
        });
      };
      const verticalClick = () => {
        showDialog({
          title: 'Title',
          content: 'Support vertical arrangement of bottom buttons.',
          footerDirection: 'vertical',
          onCancel,
          onOk
        });
      };
      return {
        baseClick,
        transparentClick,
        htmlClick,
        beforeCloseClick,
        noTitleClick,
        tipsClick,
        verticalClick
      };
    }
  };
</script>
```

:::

### Template use

:::demo

```html
<template>
  <cub-cell-group title="Template use">
    <cub-cell title="Template use" @click="componentClick"></cub-cell>
    <cub-dialog
      teleport="#app"
      title="Template use"
      content="Function call and template call are supported."
      v-model:visible="visible"
    >
    </cub-dialog>
    <cub-cell title="Bottom button vertical use" @click="componentvVrticalClick"></cub-cell>
    <cub-dialog
      footer-direction="vertical"
      teleport="#app"
      title="Template use"
      content="Function call and template call are supported."
      v-model:visible="visible1"
    >
    </cub-dialog>
  </cub-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const visible = ref(false);
      const visible1 = ref(false);
      const componentClick = () => {
        visible.value = true;
      };
      const componentvVrticalClick = () => {
        visible1.value = true;
      };
      return { visible, visible1, componentClick, componentvVrticalClick };
    }
  };
</script>
```

:::

### Teleport use, mount to the specified element node

:::demo

```html
<template>
  <cub-cell-group title="Teleport use, mount to the specified element node">
    <cub-cell title="body element node" @click="teleportClick('body')"></cub-cell>
    <cub-cell title="#app element node" @click="teleportClick('#app')"></cub-cell>
    <cub-cell title="demo class element node" @click="teleportClick('.demo')"></cub-cell>
  </cub-cell-group>
</template>
<script lang="ts">
  import { showDialog } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/dialog/style';
  export default {
    setup() {
      const onCancel = () => {
        console.log('event cancel');
      };
      const teleportClick = (teleport: string) => {
        showDialog({
          teleport,
          title: 'teleport to ' + teleport,
          content: 'Open the developer tool and take a look at the Elements tab',
          noCancelBtn: true,
          onCancel
        });
      };
      return {
        teleportClick
      };
    }
  };
</script>
```

:::

## API

### DialogOptions

| Attribute           | Description                                                                    | Type                     | Default                |
| ------------------- | ------------------------------------------------------------------------------ | ------------------------ | ---------------------- |
| title               | Title                                                                          | string                   | -                      |
| id                  | Identifier, share one instance at the same time, default to multiple instances | string \| object         | `new Date().getTime()` |
| content             | Content, support HTML                                                          | string                   | -                      |
| teleport            | Specifies a target element where Dialog will be mounted                        | string                   | `"body"`               |
| closeOnClickOverlay | Whether to close when overlay is clicked                                       | boolean                  | `false`                |
| noFooter            | Hide bottom button bar                                                         | boolean                  | `false`                |
| noOkBtn             | Hide OK button                                                                 | boolean                  | `false`                |
| noCancelBtn         | Hide cancel button                                                             | boolean                  | `false`                |
| cancelText          | Cancel button text                                                             | string                   | `"Cancel"`             |
| okText              | OK button text                                                                 | string                   | `"Confirm"`            |
| cancelAutoClose     | Click Cancel to close the popup                                                | boolean                  | `true`                 |
| textAlign           | Text alignment direction, the optional value is the same as css text-align     | string                   | `"center"`             |
| closeOnPopstate     | Whether to close when popstate                                                 | boolean                  | `false`                |
| customClass         | Custom dialog class                                                            | string                   |                        |
| overlayClass        | Custom mask classname                                                          | string                   | -                      |
| overlayStyle        | Custom mask styles                                                             | CSSProperties            | -                      |
| popClass            | Custom popup classname                                                         | string                   | -                      |
| popStyle            | Custom popup styles                                                            | CSSProperties            | -                      |
| onUpdate            | Update                                                                         | boolean                  | `false`                |
| onOk                | Emitted when the confirm button is clicked                                     | Function                 | -                      |
| onCancel            | Emitted when the cancel button is clicked                                      | Function                 | -                      |
| onOpened            | Emitted when Dialog is opened                                                  | Function                 | -                      |
| onClosed            | Emitted when Dialog is closed                                                  | Function                 | -                      |
| beforeClose         | Callback function before close support return `promise`                        | Function(action: string) | -                      |

### Props

| Attribute              | Description                                                                | Type                     | Default      |
| ---------------------- | -------------------------------------------------------------------------- | ------------------------ | ------------ |
| title                  | Title                                                                      | string                   | -            |
| content                | Content, support HTML                                                      | string                   | -            |
| teleport               | Specifies a target element where Dialog will be mounted                    | string                   | `"body"`     |
| close-on-click-overlay | Whether to close when overlay is clicked                                   | boolean                  | `true`       |
| no-footer              | Hide bottom button bar                                                     | boolean                  | `false`      |
| no-ok-btn              | Hide OK button                                                             | boolean                  | `false`      |
| no-cancel-btn          | Hide cancel button                                                         | boolean                  | `false`      |
| cancel-text            | Cancel button text                                                         | string                   | `"Cancel"`   |
| ok-text                | OK button text                                                             | string                   | `"Confirm"`  |
| cancel-auto-close      | Click Cancel to close the popup                                            | boolean                  | `true`       |
| text-align             | Text alignment direction, the optional value is the same as css text-align | string                   | `"center"`   |
| close-on-popstate      | Whether to close when popstate                                             | boolean                  | `false`      |
| lock-scroll            | Whether to lock background scroll                                          | boolean                  | `false`      |
| footer-direction       | Use `horizontal` and `vertical` optional values                            | string                   | `horizontal` |
| overlay-class          | Custom mask classname                                                      | string                   | -            |
| overlay-style          | Custom mask styles                                                         | CSSProperties            | -            |
| pop-class              | Custom popup classname                                                     | string                   | -            |
| pop-style              | Custom popup styles                                                        | CSSProperties            | -            |
| custom-class           | Custom dialog class                                                        | string                   | -            |
| before-close           | Callback function before close support return `promise`                    | Function(action: string) | -            |

### Events

| Event  | Description                                | Type     | Default |
| ------ | ------------------------------------------ | -------- | ------- |
| ok     | Emitted when the confirm button is clicked | Function | -       |
| cancel | Emitted when the cancel button is clicked  | Function | -       |
| closed | Emitted when Dialog is closed              | Function | -       |
| opened | Emitted when Dialog is Opened              | Function | -       |

### Slots

| Name    | Description    |
| ------- | -------------- |
| header  | Custom title   |
| default | Custom default |
| footer  | Custom footer  |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                | Default Value         |
| ----------------------------------- | --------------------- |
| --cub-dialog-width                  | _296px_               |
| --cub-dialog-header-font-weight     | _normal_              |
| --cub-dialog-header-color           | _rgba(38, 38, 38, 1)_ |
| --cub-dialog-footer-justify-content | _space-around_        |

# Form

### Intro

It is used for data entry and verification. It supports input box, radio box, check box, file upload and other types.

### Install

```javascript
import { createApp } from 'vue';
import { Form, FormItem } from '@cubui/cubui';

const app = createApp();
app.use(Form);
app.use(FormItem);
```

### Basic Usage

:::demo

```html
<template>
  <cub-form>
    <cub-form-item label="Name">
      <cub-input v-model="basicData.name" class="cub-input-text" placeholder="Please enter your name" type="text" />
    </cub-form-item>
    <cub-form-item label="Age">
      <cub-input v-model="basicData.age" class="cub-input-text" placeholder="Please enter age" type="text" />
    </cub-form-item>
    <cub-form-item label="Tel">
      <cub-input v-model="basicData.tel" class="cub-input-text" placeholder="请输入联系电话" type="text" />
    </cub-form-item>
    <cub-form-item label="Address">
      <cub-input v-model="basicData.address" class="cub-input-text" placeholder="Please enter address" type="text" />
    </cub-form-item>
    <cub-form-item label="备注">
      <cub-textarea placeholder="请输入备注" type="text" />
    </cub-form-item>
  </cub-form>
</template>
<script lang="ts">
  import { ref, reactive } from 'vue';
  export default {
    setup() {
      const basicData = reactive({
        name: '',
        age: '',
        tel: '',
        address: ''
      });
      return { basicData };
    }
  };
</script>
```

:::

### Dynamic Form

:::demo

```html
<template>
  <cub-form :model-value="dynamicForm.state" ref="dynamicRefForm">
    <cub-form-item label="Name" prop="name" required :rules="[{ required: true, message: 'Please enter your name' }]">
      <cub-input
        class="cub-input-text"
        v-model="dynamicForm.state.name"
        placeholder="Please enter your name"
        type="text"
      />
    </cub-form-item>
    <cub-form-item
      :label="'Tel'+index"
      :prop="'tels.' + index + '.value'"
      required
      :rules="[{ required: true, message: 'Please enter tel'+index }]"
      :key="item.key"
      v-for="(item,index) in dynamicForm.state.tels"
    >
      <cub-input class="cub-input-text" v-model="item.value" :placeholder="'Please enter tel'+index" type="text" />
    </cub-form-item>
    <cub-cell>
      <cub-button size="small" style="margin-right: 10px" @click="dynamicForm.methods.add">Add</cub-button>
      <cub-button size="small" style="margin-right: 10px" @click="dynamicForm.methods.remove">Remove</cub-button>
      <cub-button type="primary" style="margin-right: 10px" size="small" @click="dynamicForm.methods.submit"
        >Submit</cub-button
      >
      <cub-button size="small" @click="dynamicForm.methods.reset">Reset prompt status</cub-button>
    </cub-cell>
  </cub-form>
</template>
<script lang="ts">
  import { ref, reactive } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const dynamicRefForm = ref<any>(null);
      const dynamicForm = {
        state: reactive({
          name: '',
          tels: new Array({
            key: 1,
            value: ''
          })
        }),

        methods: {
          submit() {
            dynamicRefForm.value.validate().then(({ valid, errors }: any) => {
              if (valid) {
                console.log('success', dynamicForm);
              } else {
                showToast.warn(errors[0].message);
                console.log('error submit!!', errors);
              }
            });
          },
          reset() {
            dynamicRefForm.value.reset();
          },
          remove() {
            dynamicForm.state.tels.splice(dynamicForm.state.tels.length - 1, 1);
          },
          add() {
            let newIndex = dynamicForm.state.tels.length;
            dynamicForm.state.tels.push({
              key: Date.now(),
              value: ''
            });
          }
        }
      };
      return {
        dynamicForm,
        dynamicRefForm
      };
    }
  };
</script>
```

:::

### Validate Form

`4.1.0` adds Promise-based custom error message function:

`validator` is a function, and the return value type is `boolean | Promise`. If `false` is returned or the Promise of `resolve(false)` is triggered, it means that the verification fails, and the prompt message set by `message` will be displayed. Returns the Promise that if `reject(error)` is triggered, the `error` is reserved as the prompt text, with a higher priority than `message`.

:::demo

```html
<template>
  <cub-form
    :model-value="formData"
    :rules="{name: [{
            message: 'Name should be at least two characters',
            validator: nameLengthValidator
          }]}"
    ref="ruleForm"
  >
    <cub-form-item label="Name" prop="name" required :rules="[{ required: true, message: 'Please enter your name' }]">
      <cub-input
        class="cub-input-text"
        @blur="customBlurValidate('name')"
        v-model="formData.name"
        placeholder="Please enter , blur event validate"
        type="text"
      />
    </cub-form-item>
    <cub-form-item
      label="Age"
      prop="age"
      required
      :rules="[
      { required: true, message: 'Please enter age' },
      { validator: customValidator, message: 'You must enter a number' },
      { validator: customRulePropValidator, message: 'You must enter a number', reg: /^\d+$/ },
      { regex: /^(\d{1,2}|1\d{2}|200)$/, message: 'The range 0-200 must be entered' }
    ]"
    >
      <cub-input
        class="cub-input-text"
        v-model="formData.age"
        placeholder="Please enter the age, which must be numeric and in the range of 0-200"
        type="text"
      />
    </cub-form-item>
    <cub-form-item
      label="Tel"
      prop="tel"
      required
      :rules="[
      { required: true, message: 'Please enter tel' },
      { validator: asyncValidator, message: 'Tel format is incorrect' }
    ]"
    >
      <cub-input class="cub-input-text" v-model="formData.tel" placeholder="Async check tel format" type="text" />
    </cub-form-item>
    <cub-form-item
      label="Address"
      prop="address"
      required
      :rules="[{ required: true, message: 'Please enter address' }]"
    >
      <cub-input class="cub-input-text" v-model="formData.address" placeholder="Please enter address" type="text" />
    </cub-form-item>
    <cub-cell>
      <cub-button type="primary" size="small" style="margin-right: 10px" @click="submit">Submit</cub-button>
      <cub-button size="small" @click="reset">Reset prompt status</cub-button>
    </cub-cell>
  </cub-form>
</template>
<script lang="ts">
  import { ref, reactive } from 'vue';
  import { showToast } from '@cubui/cubui';
  import '@cubui/cubui/dist/packages/toast/style';
  export default {
    setup() {
      const formData = reactive({
        name: '',
        age: '',
        tel: '',
        address: ''
      });
      const validate = (item: any) => {
        console.log(item);
      };
      const ruleForm = ref<any>(null);

      const submit = () => {
        ruleForm.value.validate().then(({ valid, errors }: any) => {
          if (valid) {
            console.log('success', formData);
          } else {
            console.log('error submit!!', errors);
          }
        });
      };
      const reset = () => {
        ruleForm.value.reset();
      };

      const customBlurValidate = (prop: string) => {
        ruleForm.value.validate(prop).then(({ valid, errors }: any) => {
          if (valid) {
            console.log('success', formData);
          } else {
            console.log('error submit!!', errors);
          }
        });
      };

      const customValidator = (val: string) => /^\d+$/.test(val);
      const customRulePropValidator = (val: string, rule: FormItemRuleWithoutValidator) => {
        return (rule?.reg as RegExp).test(val);
      };
      const nameLengthValidator = (val: string) => val?.length >= 2;
      // Promise async validator
      const asyncValidator = (val: string) => {
        return new Promise((resolve) => {
          showToast.loading('Simulating asynchronous verification');
          setTimeout(() => {
            showToast.hide();
            resolve(/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(val));
          }, 1000);
        });
      };
      return {
        ruleForm,
        formData,
        validate,
        customValidator,
        customRulePropValidator,
        nameLengthValidator,
        asyncValidator,
        customBlurValidate,
        submit,
        reset
      };
    }
  };
</script>
```

:::

### Form Type

:::demo

```html
<template>
  <cub-form>
    <cub-form-item label="switch">
      <cub-switch v-model="formData2.switch"></cub-switch>
    </cub-form-item>
    <cub-form-item label="checkbox">
      <cub-checkbox v-model="formData2.checkbox">checkbox</cub-checkbox>
    </cub-form-item>
    <cub-form-item label="radio">
      <cub-radio-group direction="horizontal" v-model="formData2.radio">
        <cub-radio label="1">Option 1</cub-radio>
        <cub-radio disabled label="2">Option 2</cub-radio>
        <cub-radio label="3">Option 3</cub-radio>
      </cub-radio-group>
    </cub-form-item>
    <cub-form-item label="Rate">
      <cub-rate v-model="formData2.rate" />
    </cub-form-item>
    <cub-form-item label="Inputnumber">
      <cub-input-number v-model="formData2.number" />
    </cub-form-item>
    <cub-form-item label="Range">
      <cub-range hidden-tag v-model="formData2.range"></cub-range>
    </cub-form-item>
    <cub-form-item label="Upload file">
      <cub-uploader
        url="http://apiurl"
        accept="image/*"
        v-model:file-list="formData2.defaultFileList"
        maximum="3"
        multiple
      >
      </cub-uploader>
    </cub-form-item>
    <cub-form-item label="Address">
      <cub-input
        class="cub-input-text"
        v-model="formData2.address"
        @click="addressModule.methods.show"
        readonly
        placeholder="Please select an address"
        type="text"
      />
      <!-- cub-address -->
      <cub-address
        v-model:visible="addressModule.state.show"
        :province="addressModule.state.province"
        :city="addressModule.state.city"
        :country="addressModule.state.country"
        :town="addressModule.state.town"
        @change="addressModule.methods.onChange"
        custom-address-title="Please select your region"
      ></cub-address>
    </cub-form-item>
  </cub-form>
</template>
<script lang="ts">
  import { ref, reactive } from 'vue';
  export default {
    setup() {
      const formData2 = reactive({
        switch: false,
        checkbox: false,
        radio: 0,
        number: 0,
        rate: 3,
        range: 30,
        address: '',
        defaultFileList: [
          {
            name: 'file 1.png',
            url: 'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg',
            status: 'success',
            message: 'Upload successful',
            type: 'image'
          },
          {
            name: 'file 2.png',
            url: 'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg',
            status: 'uploading',
            message: 'Uploading...',
            type: 'image'
          }
        ]
      });

      const addressModule = reactive({
        state: {
          show: false,
          province: [
            { id: 1, name: 'Beijing' },
            { id: 2, name: 'Guangxi' },
            { id: 3, name: 'Jiangxi' },
            { id: 4, name: 'Sichuan' }
          ],
          city: [
            { id: 7, name: 'C1' },
            { id: 8, name: 'C2' },
            { id: 9, name: 'C3' },
            { id: 6, name: 'C4' }
          ],
          country: [
            { id: 3, name: 'D5' },
            { id: 9, name: 'D6' },
            { id: 4, name: 'D7' }
          ],
          town: []
        },
        methods: {
          show() {
            addressModule.state.show = !addressModule.state.show;
            if (addressModule.state.show) {
              formData2.address = '';
            }
          },
          onChange({ custom, next, value }: any) {
            formData2.address += value.name;
            const name = addressModule.state[next];
            if (name.length < 1) {
              addressModule.state.show = false;
            }
          }
        }
      });
      return { formData2, addressModule };
    }
  };
</script>
```

:::

## API

### Form Props

| Attribute   | Description                                              | Type                     | Default |
| ----------- | -------------------------------------------------------- | ------------------------ | ------- |
| model-value | Form data object (required when using form verification) | object                   |         |
| rules       | Unified configuration FormItem attr rules                | { prop: FormItemRule[] } | `{}`    |

### Form Events

| Event    | Description                                                | Arguments                                                                                                            |
| -------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| validate | Triggered after any single table item fails to be verified | The `prop` value of the form item to be verified, whether the verification is passed, and the error message (if any) |

### FormItem Props

| Attribute           | Description                                                                                 | Type             | Default |
| ------------------- | ------------------------------------------------------------------------------------------- | ---------------- | ------- |
| required            | Whether to display the red asterisk next to the label of the required field                 | boolean          | `false` |
| prop                | The v-model field of the form field is required when the form verification function is used | string           | -       |
| rules               | Define validation rules                                                                     | FormItemRule []  | []      |
| label-width         | The width of the form item label. The default unit is `px`                                  | number \| string | `90`    |
| label-align         | Form item label alignment. The optional values are `center` `right`                         | string           | `left`  |
| body-align          | Default Solt box alignment. The optional values are `center` `right`                        | string           | `left`  |
| error-message-align | Error prompt text alignment. The optional values are `center` and `right`                   | string           | `left`  |
| show-error-line     | Whether to mark the input box in red when the verification fails                            | boolean          | `true`  |
| show-error-message  | Whether to display the error prompt under the input box when the verification fails         | boolean          | `true`  |

### FormItemRule data structure

Use the `rules` attribute of FormItem to define verification rules. The optional attributes are as follows:

| Attribute | Default                            | Type                                                    |
| --------- | ---------------------------------- | ------------------------------------------------------- |
| required  | Is it a required field             | boolean                                                 |
| message   | Error prompt copy                  | string                                                  |
| validator | Verification by function           | (value:string,rule?:FormItemRule) => boolean \| Promise |
| regex     | Verification by regular expression | RegExp                                                  |

### FormItem Slots

| Name    | Description         |
| ------- | ------------------- |
| default | Default slot        |
| label   | Custom `label` slot |

```html
use slot
<cub-form-item>
  <template v-slot:label>slot label</template>
</cub-form-item>
```

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs) to get Form instance and call instance methods.

| Name     | Description                                                                                                       | Arguments                   | Return value |
| -------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------ |
| submit   | Method of submitting form for verification                                                                        | -                           | -            |
| reset    | Clear verification results                                                                                        | -                           | -            |
| validate | Active trigger verification is used to trigger when the user customizes the scene, such as blur and change events | Same as FormItem prop value | -            |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                  | Default Value               |
| ------------------------------------- | --------------------------- |
| --cub-form-item-error-line-color      | _var(--cub-required-color)_ |
| --cub-form-item-required-color        | _var(--cub-required-color)_ |
| --cub-form-item-error-message-color   | _var(--cub-required-color)_ |
| --cub-form-item-label-font-size       | _14px_                      |
| --cub-form-item-label-width           | _90px_                      |
| --cub-form-item-label-margin-right    | _10px_                      |
| --cub-form-item-label-text-align      | _left_                      |
| --cub-form-item-required-margin-right | _4px_                       |
| --cub-form-item-body-font-size        | _14px_                      |
| --cub-form-item-body-slots-text-align | _left_                      |
| --cub-form-item-body-input-text-align | _left_                      |
| --cub-form-item-tip-font-size         | _10px_                      |
| --cub-form-item-tip-text-align        | _left_                      |

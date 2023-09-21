<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <cub-form>
      <cub-form-item :label="translate('name')">
        <cub-input v-model="basicData.name" class="cub-input-text" :placeholder="translate('nameTip')" type="text" />
      </cub-form-item>
      <cub-form-item :label="translate('age')">
        <cub-input v-model="basicData.age" class="cub-input-text" :placeholder="translate('ageTip')" type="text" />
      </cub-form-item>
      <cub-form-item :label="translate('tel')">
        <cub-input v-model="basicData.tel" class="cub-input-text" :placeholder="translate('telTip')" type="text" />
      </cub-form-item>
      <cub-form-item :label="translate('address')">
        <cub-input
          v-model="basicData.address"
          class="cub-input-text"
          :placeholder="translate('addressTip')"
          type="text"
        />
      </cub-form-item>
      <cub-form-item :label="translate('remarks')">
        <cub-textarea :placeholder="translate('remarksTip')" type="text" />
      </cub-form-item>
    </cub-form>
    <h2>{{ translate('title1') }}</h2>
    <cub-form :model-value="dynamicForm.state" ref="dynamicRefForm">
      <cub-form-item
        :label="translate('name')"
        prop="name"
        required
        :rules="[{ required: true, message: translate('nameTip') }]"
      >
        <cub-input
          class="cub-input-text"
          v-model="dynamicForm.state.name"
          :placeholder="translate('nameTip')"
          type="text"
        />
      </cub-form-item>
      <cub-form-item
        :label="translate('tel') + index"
        :prop="'tels.' + index + '.value'"
        required
        :rules="[{ required: true, message: translate('telTip') + index }]"
        :key="item.key"
        v-for="(item, index) in dynamicForm.state.tels"
      >
        <cub-input class="cub-input-text" v-model="item.value" :placeholder="translate('telTip') + index" type="text" />
      </cub-form-item>
      <cub-cell>
        <cub-button size="small" style="margin-right: 10px" @click="dynamicForm.methods.add"
          >{{ translate('add') }}
        </cub-button>
        <cub-button size="small" style="margin-right: 10px" @click="dynamicForm.methods.remove"
          >{{ translate('remove') }}
        </cub-button>
        <cub-button type="primary" style="margin-right: 10px" size="small" @click="dynamicForm.methods.submit">
          {{ translate('submit') }}
        </cub-button>
        <cub-button size="small" @click="dynamicForm.methods.reset">{{ translate('reset') }}</cub-button>
      </cub-cell>
    </cub-form>
    <h2>{{ translate('title2') }}</h2>
    <cub-form
      :model-value="formData"
      :rules="{
        name: [
          {
            message: '名称两个字以上',
            validator: nameLengthValidator
          }
        ]
      }"
      ref="ruleForm"
    >
      <cub-form-item
        :label="translate('name')"
        prop="name"
        required
        :rules="[{ required: true, message: translate('nameTip') }]"
      >
        <cub-input
          class="cub-input-text"
          @blur="customBlurValidate('name')"
          v-model="formData.name"
          :placeholder="translate('nameTip1')"
          type="text"
        />
      </cub-form-item>
      <cub-form-item
        :label="translate('age')"
        prop="age"
        required
        :rules="[
          { required: true, message: translate('ageTip') },
          { validator: customValidator, message: translate('ageTip2') },
          { validator: customRulePropValidator, message: translate('ageTip2'), reg: /^\d+$/ },
          { regex: /^(\d{1,2}|1\d{2}|200)$/, message: translate('ageTip3') }
        ]"
      >
        <cub-input class="cub-input-text" v-model="formData.age" :placeholder="translate('ageTip1')" type="text" />
      </cub-form-item>
      <cub-form-item
        :label="translate('tel')"
        prop="tel"
        required
        :rules="[
          { required: true, message: translate('telTip') },
          { validator: asyncValidator, message: translate('telTip2') }
        ]"
      >
        <cub-input class="cub-input-text" v-model="formData.tel" :placeholder="translate('telTip1')" type="text" />
      </cub-form-item>
      <cub-form-item
        :label="translate('address')"
        prop="address"
        required
        :rules="[{ required: true, message: translate('addressTip') }]"
      >
        <cub-input
          class="cub-input-text"
          v-model="formData.address"
          :placeholder="translate('addressTip')"
          type="text"
        />
      </cub-form-item>
      <cub-cell>
        <cub-button type="primary" size="small" style="margin-right: 10px" @click="submit">
          {{ translate('submit') }}
        </cub-button>
        <cub-button size="small" @click="reset"> {{ translate('reset') }}</cub-button>
      </cub-cell>
    </cub-form>
    <h2>{{ translate('title3') }}</h2>
    <cub-form>
      <cub-form-item :label="translate('switch')">
        <cub-switch v-model="formData2.switch"></cub-switch>
      </cub-form-item>
      <cub-form-item :label="translate('checkbox')">
        <cub-checkbox v-model="formData2.checkbox">{{ translate('checkbox') }}</cub-checkbox>
      </cub-form-item>
      <cub-form-item :label="translate('radiogroup')">
        <cub-radio-group direction="horizontal" v-model="formData2.radio">
          <cub-radio label="1">{{ translate('option', 1) }}</cub-radio>
          <cub-radio disabled label="2">{{ translate('option', 2) }}</cub-radio>
          <cub-radio label="3">{{ translate('option', 3) }}</cub-radio>
        </cub-radio-group>
      </cub-form-item>
      <cub-form-item :label="translate('rate')">
        <cub-rate v-model="formData2.rate" />
      </cub-form-item>
      <cub-form-item :label="translate('inputnumber')">
        <cub-input-number v-model="formData2.number" />
      </cub-form-item>
      <cub-form-item :label="translate('range')">
        <cub-range hidden-tag v-model="formData2.range"></cub-range>
      </cub-form-item>
      <cub-form-item :label="translate('uploader')">
        <cub-uploader
          url="http://apiurl"
          accept="image/*"
          v-model:file-list="formData2.defaultFileList"
          maximum="3"
          multiple
        >
        </cub-uploader>
      </cub-form-item>
      <cub-form-item :label="translate('address')">
        <cub-input
          class="cub-input-text"
          v-model="formData2.address"
          @click="addressModule.methods.show"
          readonly
          :placeholder="translate('addressTip1')"
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
          :custom-address-title="translate('addressTip2')"
        ></cub-address>
      </cub-form-item>
    </cub-form>
  </div>
</template>

<script lang="ts">
import { showToast } from '@/packages/cubui.vue';
import { reactive, ref, defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('form');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { FormItemRuleWithoutValidator } from '../formitem/types';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title1: '动态表单',
      title2: '表单校验',
      title3: '表单类型',
      name: '姓名',
      nameTip: '请输入姓名',
      nameTip1: '请输入姓名，blur 事件校验',
      age: '年龄',
      ageTip: '请输入年龄',
      ageTip1: '请输入年龄，必须数字且0-200区间',
      ageTip2: '必须输入数字',
      ageTip3: '必须输入0-200区间',
      tel: '联系电话',
      telTip: '请输入联系电话',
      telTip1: '异步校验电话格式',
      telTip2: '电话格式不正确',
      address: '地址',
      addressTip: '请输入地址',
      addressTip1: '请选择地址',
      addressTip2: '请选择所在地区',
      remarks: '备注',
      remarksTip: '请输入备注',
      add: '添加',
      remove: '删除',
      submit: '提交',
      reset: '重置提示状态',
      switch: '开关',
      checkbox: '复选框',
      radiogroup: '单选按钮',
      option: (v: string) => '选项' + v,
      rate: '评分',
      inputnumber: '步进器',
      range: '滑块',
      uploader: '文件上传',
      success: '上传成功',
      uploading: '上传中...',
      asyncValidator: '模拟异步验证中'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Dynamic Form',
      title2: 'Validate Form',
      title3: 'Form Type',
      name: 'Name',
      nameTip: 'Please enter your name',
      nameTip1: 'Please enter , blur event validate',
      age: 'Age',
      ageTip: 'Please enter age',
      ageTip1: 'Please enter the age, which must be numeric and in the range of 0-200',
      ageTip2: 'You must enter a number',
      ageTip3: 'The range 0-200 must be entered',
      tel: 'Tel',
      telTip: 'Please enter tel',
      telTip1: 'Async check tel format',
      telTip2: 'Tel format is incorrect',
      address: 'Address',
      addressTip: 'Please enter address',
      addressTip1: 'Please select an address',
      addressTip2: 'Please select your region',
      remarks: 'Remarks',
      remarksTip: 'Please enter remarks',
      add: 'Add',
      remove: 'Remove',
      submit: 'Submit',
      reset: 'Reset prompt status',
      switch: 'Switch',
      checkbox: 'Checkbox',
      radiogroup: 'Radiogroup',
      option: (v: string) => 'Option' + v,
      rate: 'Rate',
      inputnumber: 'Inputnumber',
      range: 'Range',
      uploader: 'Upload file',
      success: 'Upload successful',
      uploading: 'Uploading',
      asyncValidator: 'Simulating asynchronous verification'
    }
  });
export default defineComponent({
  props: {},
  setup() {
    initTranslate();
    const formData = reactive({
      name: '',
      age: '',
      tel: '',
      address: ''
    });
    const basicData = reactive({
      name: '',
      age: '',
      tel: '',
      address: ''
    });

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
          dynamicForm.state.tels.push({
            key: Date.now(),
            value: ''
          });
        }
      }
    };

    const validate = (item: any) => {
      console.log(item);
    };

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
          message: translate('success'),
          type: 'image'
        },
        {
          name: 'file 2.png',
          url: 'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg',
          status: 'uploading',
          message: translate('uploading'),
          type: 'image'
        }
      ]
    });

    const addressModule = reactive({
      state: {
        show: false,
        province: [
          { id: 1, name: '北京' },
          { id: 2, name: '广西' },
          { id: 3, name: '江西' },
          { id: 4, name: '四川' }
        ],
        city: [
          { id: 7, name: '朝阳区' },
          { id: 8, name: '崇文区' },
          { id: 9, name: '昌平区' },
          { id: 6, name: '石景山区' }
        ],
        country: [
          { id: 3, name: '八里庄街道' },
          { id: 9, name: '北苑' },
          { id: 4, name: '常营乡' }
        ],
        town: []
      } as any,
      methods: {
        show() {
          addressModule.state.show = !addressModule.state.show;
          if (addressModule.state.show) {
            formData2.address = '';
          }
        },
        onChange({ next, value }: any) {
          formData2.address += value.name;
          const name = addressModule.state[next];
          if (name.length < 1) {
            addressModule.state.show = false;
          }
        }
      }
    });

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
    // 失去焦点校验
    const customBlurValidate = (prop: string) => {
      ruleForm.value.validate(prop).then(({ valid, errors }: any) => {
        if (valid) {
          console.log('success', formData);
        } else {
          console.log('error submit!!', errors);
        }
      });
    };
    // 函数校验
    const customValidator = (val: string) => {
      if (/^\d+$/.test(val)) {
        return Promise.resolve();
      } else {
        return Promise.reject('必须输入数字');
      }
    };
    const customRulePropValidator = (val: string, rule: FormItemRuleWithoutValidator) => {
      if ((rule?.reg as RegExp).test(val)) {
        return Promise.resolve();
      } else {
        return Promise.reject('必须输入数字');
      }
    };
    const nameLengthValidator = (val: string) => {
      if (val.length > 2) {
        return Promise.resolve();
      } else {
        return Promise.reject('名称两个字以上');
      }
    };
    // Promise 异步校验
    const asyncValidator = (val: string) => {
      const telReg = /^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/;
      return new Promise((resolve, reject) => {
        showToast.loading('模拟异步验证中...');
        setTimeout(() => {
          showToast.hide();
          if (!val) {
            reject('请输入联系电话');
          } else if (!telReg.test(val)) {
            reject('联系电话格式不正确');
          } else {
            resolve('');
          }
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
      reset,
      formData2,
      addressModule,
      dynamicForm,
      dynamicRefForm,
      basicData,
      translate
    };
  }
});
</script>

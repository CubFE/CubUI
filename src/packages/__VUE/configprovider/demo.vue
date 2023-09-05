<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <cub-config-provider :theme="theme">
      <cub-cell :title="translate('title1')">
        <template #link>
          <cub-switch v-model="switchChecked" @change="switchChange" />
        </template>
      </cub-cell>
      <cub-cell :title="translate('title2')" :sub-title="translate('title3')" :desc="translate('desc')"></cub-cell>

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
          <cub-uploader url="http://apiurl" v-model:file-list="formData2.defaultFileList" maximum="3" multiple>
          </cub-uploader>
        </cub-form-item>
        <cub-form-item :label="translate('address')">
          <input
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
            @close="addressModule.methods.onClose"
            :custom-address-title="translate('addressTip2')"
          ></cub-address>
        </cub-form-item>
      </cub-form>
    </cub-config-provider>
    <h2>{{ translate('custom') }}</h2>
    <cub-config-provider :theme-vars="themeVars">
      <cub-form>
        <cub-form-item :label="translate('range')">
          <cub-range hidden-tag v-model="formData2.range"></cub-range>
        </cub-form-item>
      </cub-form>
    </cub-config-provider>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('configprovider');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { reactive, ref, defineComponent } from 'vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      custom: '定制主题',
      title1: '切换暗黑',
      title2: '我是标题',
      title3: '副标题描述',
      desc: '描述文字',
      address: '地址',
      addressTip: '请输入地址',
      addressTip1: '请选择地址',
      addressTip2: '请选择所在地区',
      remarks: '备注',
      remarksTip: '请输入备注',
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
      custom: 'Custom Theme',
      title1: 'Switch Dark Mode',
      title2: 'Title',
      title3: 'Subtitle Description',
      desc: 'Description',
      nameTip: 'Please enter your name',
      address: 'Address',
      addressTip: 'Please enter address',
      addressTip1: 'Please select an address',
      addressTip2: 'Please select your region',
      remarks: 'Remarks',
      remarksTip: 'Please enter remarks',
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
    const switchChecked = ref(false);
    const theme = ref('');
    const switchChange = (v: boolean) => {
      theme.value = v ? 'dark' : '';
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
          url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
          status: 'success',
          message: translate('success'),
          type: 'image'
        },
        {
          name: 'file 2.png',
          url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
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
        onClose({ data }: any) {
          formData2.address = data.addressStr;
          addressModule.state.show = false;
        }
      }
    });
    let color = reactive({
      primaryColor: '#008000',
      primaryColorEnd: '#008000'
      // rangeBgColor: 'rgba(25,137,250,0.15)',
      // rangeBarBgColor: '#0289fa',
      // rangeBarBtnBorder: '1px solid #0289fa'
    });
    const themeVars = color;
    return {
      formData2,
      addressModule,
      switchChecked,
      switchChange,
      theme,
      themeVars,
      translate
    };
  }
});
</script>
<style lang="scss" scoped>
.demo {
}
</style>

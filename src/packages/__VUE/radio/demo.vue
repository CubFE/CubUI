<template>
  <div class="demo full">
    <cub-cell-group :title="translate('basic')">
      <cub-cell>
        <cub-radio-group v-model="radioVal">
          <cub-radio label="1">{{ translate('option1') }}</cub-radio>
          <cub-radio disabled label="2">{{ translate('option2') }}</cub-radio>
          <cub-radio label="3">{{ translate('option3') }}</cub-radio>
        </cub-radio-group>
      </cub-cell>
      <cub-cell>
        <cub-radio-group v-model="radioVal" text-position="left">
          <cub-radio label="1">{{ translate('option1') }}</cub-radio>
          <cub-radio disabled label="2">{{ translate('option2') }}</cub-radio>
          <cub-radio label="3">{{ translate('option3') }}</cub-radio>
        </cub-radio-group>
      </cub-cell>
      <cub-cell>
        <cub-radio-group v-model="radioVal">
          <cub-radio shape="button" label="1">{{ translate('option1') }}</cub-radio>
          <cub-radio disabled shape="button" label="2">{{ translate('option2') }}</cub-radio>
          <cub-radio shape="button" label="3">{{ translate('option3') }}</cub-radio>
        </cub-radio-group>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group :title="translate('vertical')">
      <cub-cell>
        <cub-radio-group v-model="radioVal" direction="horizontal">
          <cub-radio label="1">{{ translate('option1') }}</cub-radio>
          <cub-radio label="2">{{ translate('option2') }}</cub-radio>
          <cub-radio label="3">{{ translate('option3') }}</cub-radio>
        </cub-radio-group>
      </cub-cell>
      <cub-cell>
        <cub-radio-group v-model="radioVal" text-position="left" direction="horizontal">
          <cub-radio label="1">{{ translate('option1') }}</cub-radio>
          <cub-radio label="2">{{ translate('option2') }}</cub-radio>
          <cub-radio label="3">{{ translate('option3') }}</cub-radio>
        </cub-radio-group>
      </cub-cell>
      <cub-cell>
        <cub-radio-group v-model="radioVal" direction="horizontal">
          <cub-radio shape="button" label="1">{{ translate('option1') }}</cub-radio>
          <cub-radio shape="button" label="2">{{ translate('option2') }}</cub-radio>
          <cub-radio shape="button" label="3">{{ translate('option3') }}</cub-radio>
        </cub-radio-group>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group :title="translate('size')">
      <cub-cell>
        <cub-radio-group v-model="radioVal4">
          <cub-radio label="1" icon-size="12">{{ translate('size') }} 12</cub-radio>
          <cub-radio label="2" icon-size="12">{{ translate('size') }} 12</cub-radio>
        </cub-radio-group>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group :title="translate('icon')">
      <cub-cell>
        <cub-radio-group v-model="radioVal5">
          <cub-radio label="1">
            {{ translate('icon') }}
            <template #icon>
              <Checklist />
            </template>
            <template #checkedIcon>
              <Checklist color="red" />
            </template>
          </cub-radio>
          <cub-radio label="2">
            {{ translate('icon') }}
            <template #icon>
              <Checklist />
            </template>
            <template #checkedIcon>
              <Checklist color="red" />
            </template>
          </cub-radio>
        </cub-radio-group>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group :title="translate('trigger')">
      <cub-cell>
        <cub-radio-group v-model="radioVal6" @change="handleChange">
          <cub-radio label="1">{{ translate('trigger') }}</cub-radio>
          <cub-radio label="2">{{ translate('trigger') }}</cub-radio>
        </cub-radio-group>
      </cub-cell>
      <cub-cell :title="translate('current')" :desc="radioVal6"></cub-cell>
    </cub-cell-group>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { reactive, toRefs, defineComponent } from 'vue';
const { translate } = createComponent('radio');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { Checklist } from '@cubfe/icons-vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      option1: '选项1',
      option2: '选项2',
      option3: '选项3',
      vertical: '水平使用',
      size: '自定义尺寸',
      icon: '自定义图标',
      trigger: '触发事件',
      current: '当前选中值'
    },
    'en-US': {
      basic: 'Basic Usage',
      option1: 'Option 1',
      option2: 'Option 2',
      option3: 'Option 3',
      vertical: 'Horizontal use',
      size: 'Custom size',
      icon: 'Custom icon',
      trigger: 'Trigger event',
      current: 'Currently selected value'
    }
  });
export default defineComponent({
  components: {
    Checklist
  },
  props: {},
  setup() {
    initTranslate();
    const data = reactive({
      radioVal: '1',
      radioVal2: '2',
      radioVal3: '1',
      radioVal4: '1',
      radioVal5: '1',
      radioVal6: '1'
    });
    const handleChange = (value: any) => {
      console.log(value);
    };
    return {
      ...toRefs(data),
      handleChange,
      translate
    };
  }
});
</script>

<style lang="scss" scoped></style>

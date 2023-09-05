<template>
  <div class="demo">
    <cub-cell-group :title="translate('basic')">
      <cub-cell>
        <cub-checkbox v-model="checkbox1" :label="translate('checkbox')" @change="changeBox1">
          {{ translate('checkbox') }}
        </cub-checkbox>
      </cub-cell>
      <cub-cell>
        <cub-checkbox v-model="checkbox2" text-position="left" @change="checkbox2">
          {{ translate('checkbox') }}
        </cub-checkbox>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group :title="translate('semi')">
      <cub-cell>
        <cub-checkbox v-model="checkbox9" :indeterminate="true" :label="translate('checkbox')">
          {{ translate('checkbox') }}
        </cub-checkbox>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group :title="translate('disable')">
      <cub-cell>
        <cub-checkbox v-model="checkbox3" disabled>{{ translate('unselectDisable') }}</cub-checkbox>
      </cub-cell>
      <cub-cell>
        <cub-checkbox v-model="checkbox4" disabled>{{ translate('selectedDisable') }}</cub-checkbox>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group :title="translate('size')">
      <cub-cell>
        <cub-checkbox v-model="checkbox5" icon-size="25">{{ translate('size') }}25</cub-checkbox>
      </cub-cell>
      <cub-cell>
        <cub-checkbox v-model="checkbox6" icon-size="10">{{ translate('size') }} 10</cub-checkbox>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group :title="translate('icon')">
      <cub-cell>
        <cub-checkbox v-model="checkbox7">
          {{ translate('icon') }}
          <template #icon>
            <Checklist />
          </template>
          <template #checkedIcon>
            <Checklist color="red" />
          </template>
        </cub-checkbox>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group :title="translate('change')">
      <cub-cell>
        <cub-checkbox v-model="checkbox8" @change="changeBox3">change {{ translate('checkbox') }}</cub-checkbox>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group :title="translate('useGroup')">
      <cub-cell>
        <cub-checkbox-group v-model="checkboxgroup1">
          <cub-checkbox label="1" style="margin: 2px 20px 0 0">{{ translate('combine') }}</cub-checkbox>
          <cub-checkbox label="2">{{ translate('combine') }}</cub-checkbox>
          <cub-checkbox label="3" style="margin: 2px 20px 0 0">{{ translate('combine') }}</cub-checkbox>
          <cub-checkbox label="4">{{ translate('combine') }}</cub-checkbox>
        </cub-checkbox-group>
      </cub-cell>
      <cub-cell>
        <div class="demo-check">{{ translate('selected') }}</div>
        <div>{{ checkboxgroup1 }}</div>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group :title="translate('disableGroup')">
      <cub-cell>
        <cub-checkbox-group v-model="checkboxgroup2" disabled>
          <cub-checkbox label="1" style="margin: 2px 20px 0 0">{{ translate('combine') }}</cub-checkbox>
          <cub-checkbox label="2">{{ translate('combine') }}</cub-checkbox>
          <cub-checkbox label="3" style="margin: 2px 20px 0 0">{{ translate('combine') }}</cub-checkbox>
          <cub-checkbox label="4">{{ translate('combine') }}</cub-checkbox>
        </cub-checkbox-group>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group :title="translate('selectGroup')">
      <cub-cell>
        <cub-checkbox-group v-model="checkboxgroup3" ref="group" @change="changeBox4">
          <cub-checkbox v-for="item in checkboxsource" :key="item.label" :label="item.label">
            {{ item.value }}
          </cub-checkbox>
        </cub-checkbox-group>
      </cub-cell>
      <cub-cell>
        <cub-button type="primary" @click="toggleAll(true)" style="margin: 0 20px 0 0">
          {{ translate('selectAll') }}
        </cub-button>
        <cub-button type="info" @click="toggleAll(false)" style="margin: 0 20px 0 0">
          {{ translate('cancel') }}
        </cub-button>
        <cub-button type="warning" @click="toggleReverse()">{{ translate('selectReverse') }}</cub-button>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group :title="translate('useGroupLimit')">
      <cub-cell>
        <cub-checkbox-group v-model="checkboxgroup4" :max="2">
          <cub-checkbox label="1" style="margin: 2px 20px 0 0">{{ translate('combine') }}</cub-checkbox>
          <cub-checkbox label="2">{{ translate('combine') }}</cub-checkbox>
          <cub-checkbox label="3" style="margin: 2px 20px 0 0">{{ translate('combine') }}</cub-checkbox>
          <cub-checkbox label="4">{{ translate('combine') }}</cub-checkbox>
        </cub-checkbox-group>
      </cub-cell>
      <cub-cell>
        <div class="demo-check">{{ translate('selected') }}</div>
        <div>{{ checkboxgroup4 }}</div>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group :title="translate('useGroupInte')">
      <cub-cell>
        <cub-checkbox :indeterminate="indeterminate" v-model="checkbox10" @change="changeBox5">{{
          translate('selectAll')
        }}</cub-checkbox>
      </cub-cell>
      <cub-checkbox-group v-model="checkboxgroup5" ref="group2" @change="changeBox6">
        <cub-cell>
          <cub-checkbox label="1" style="margin: 2px 20px 0 0">{{ translate('combine') }}</cub-checkbox>
        </cub-cell>
        <cub-cell
          ><cub-checkbox label="2">{{ translate('combine') }}</cub-checkbox>
        </cub-cell>
        <cub-cell
          ><cub-checkbox label="3">{{ translate('combine') }}</cub-checkbox>
        </cub-cell>
        <cub-cell
          ><cub-checkbox label="4">{{ translate('combine') }}</cub-checkbox>
        </cub-cell>
      </cub-checkbox-group>
    </cub-cell-group>
    <cub-cell-group :title="translate('useShape')">
      <cub-cell>
        <cub-checkbox-group v-model="checkboxgroup6">
          <cub-checkbox label="1" shape="button">{{ translate('useShape') }}</cub-checkbox>
          <cub-checkbox label="2" shape="button">{{ translate('useShape') }}</cub-checkbox>
        </cub-checkbox-group>
      </cub-cell>
    </cub-cell-group>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs, Ref, defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { showToast } from '@/packages/cubui.vue';
const { translate } = createComponent('checkbox');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { Checklist } from '@cubfe/icons-vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法-左右',
      semi: '半选状态',
      disable: '禁用状态',
      size: '自定义尺寸',
      icon: '自定义图标',
      change: '点击触发change事件',
      useGroup: 'checkboxGroup使用',
      useGroupLimit: 'checkboxGroup使用，限制最大可选数（2个）',
      disableGroup: 'checkboxGroup禁用',
      selectGroup: 'checkboxGroup 全选/取消',
      selectAll: '全选',
      cancel: '取消',
      selectReverse: '反选',
      combine: '组合复选框',
      selected: '当前选中值',
      select: '选中',
      checkbox: '复选框',
      selectedDisable: '选中时禁用状态',
      unselectDisable: '未选时禁用状态',
      useGroupInte: '全选/半选/取消',
      useShape: '按钮形状'
    },
    'en-US': {
      basic: 'Basic usage - left and right',
      semi: 'Semi selective',
      disable: 'Disabled state',
      size: 'Custom size',
      icon: 'Custom icon',
      change: 'Click to trigger the change event',
      useGroup: 'use checkboxGroup',
      useGroupLimit: 'use checkboxGroup, Limit the maximum number of options (2)',
      disableGroup: 'disable checkboxGroup',
      selectGroup: 'Checkboxgroup select all / cancel',
      selectAll: 'selectAll',
      cancel: 'cancel',
      selectReverse: 'reverse',
      combine: 'Combined check box',
      selected: 'Currently selected value',
      select: 'selected value',
      checkbox: 'check box',
      selectedDisable: 'Disabled when selected',
      unselectDisable: 'Disabled when not selected',
      useGroupInte: 'Select all / half / cancel',
      useShape: 'Button shape'
    }
  });
export default defineComponent({
  components: {
    Checklist
  },
  setup() {
    initTranslate();
    const group = ref(null) as Ref;
    const group2 = ref(null) as Ref;
    const data = reactive({
      checkbox1: true,
      checkbox2: false,
      checkbox3: false,
      checkbox4: true,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkbox9: true,
      checkbox10: false,
      checkboxgroup1: ['2', '3'],
      checkboxgroup2: ['2'],
      checkboxgroup3: ['2'],
      checkboxgroup4: ['2'],
      checkboxgroup5: [],
      checkboxgroup6: [],
      checkboxsource: [
        { label: '1', value: translate('combine') },
        { label: '2', value: translate('combine') },
        { label: '3', value: translate('combine') },
        { label: '4', value: translate('combine') },
        { label: '5', value: translate('combine') },
        { label: '6', value: translate('combine') }
      ],
      indeterminate: false
    });
    const changeBox1 = (state: boolean, label: string) => {
      console.log(state, label);
    };

    const changeBox2 = (state: boolean, label: string) => {
      console.log(state, label);
    };

    const changeBox3 = (state: boolean, label: string) => {
      showToast.text(`${state ? translate('select') : translate('cancel')} ${label}`);
    };

    const changeBox4 = (label: any[]) => {
      console.log(label);
    };

    const changeBox5 = (value: boolean) => {
      group2.value.toggleAll(value);
    };

    const changeBox6 = (label: string[]) => {
      if (label.length === 4) {
        data.indeterminate = false;
        data.checkbox10 = true;
      } else if (label.length && label.length < 4) {
        data.indeterminate = true;
      } else {
        data.indeterminate = false;
        data.checkbox10 = false;
      }
    };

    const toggleAll = (f: boolean) => {
      showToast.text(`${f ? translate('selectAll') : translate('cancel')}`);
      group.value.toggleAll(f);
    };

    const toggleReverse = () => {
      showToast.text(`反选`);
      group.value.toggleReverse();
    };

    return {
      changeBox1,
      changeBox2,
      changeBox3,
      changeBox4,
      changeBox5,
      changeBox6,
      toggleAll,
      toggleReverse,
      group,
      group2,
      translate,
      ...toRefs(data)
    };
  }
});
</script>
<style lang="scss" scoped>
.demo-check {
  margin-right: 10px;
}

.cub-checkbox-group {
  display: flex;
  flex-wrap: wrap;
}

.cub-checkbox {
  display: flex;
  margin-right: 20px;

  .cub-checkbox__label {
    margin-left: 10px;
  }
}
</style>

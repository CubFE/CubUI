<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <cub-cell>
      <cub-progress percentage="30" />
    </cub-cell>

    <h2>{{ translate('customStyle') }}</h2>
    <cub-cell>
      <cub-progress percentage="30" stroke-color="rgba(250,44,25,0.47)" stroke-width="20" text-color="red" />
    </cub-cell>

    <h2>{{ translate('noShowPercentage') }}</h2>
    <cub-cell>
      <cub-progress percentage="50" :show-text="false" stroke-height="24" />
    </cub-cell>

    <h2>{{ translate('showInsidePercentage') }}</h2>
    <cub-cell>
      <cub-progress percentage="60" :text-inside="true" />
    </cub-cell>

    <h2>{{ translate('customContent') }}</h2>
    <cub-cell>
      <cub-progress percentage="60" :text-inside="true">
        <img
          src="https://oss.netconcepts.cn/website/wap/job-wap-icon-1.png"
          width="30"
          height="30"
        />
      </cub-progress>
    </cub-cell>

    <h2>{{ translate('customSize') }}</h2>
    <cub-cell>
      <cub-progress percentage="30" :text-inside="true" size="small"> </cub-progress>
    </cub-cell>
    <cub-cell>
      <cub-progress percentage="50" :text-inside="true" size="base"> </cub-progress>
    </cub-cell>
    <cub-cell>
      <cub-progress percentage="70" :text-inside="true" size="large"> </cub-progress>
    </cub-cell>

    <h2>{{ translate('statusDisplay') }}</h2>
    <cub-cell>
      <cub-progress
        percentage="30"
        stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
        status="active"
      />
    </cub-cell>
    <cub-cell>
      <cub-progress percentage="50" status="icon" />
    </cub-cell>
    <cub-cell>
      <cub-progress
        percentage="100"
        stroke-color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
        stroke-width="15"
        status="icon"
      >
        <template #icon-name>
          <Issue color="red" width="15px" height="15px"></Issue>
        </template>
      </cub-progress>
    </cub-cell>

    <h2>{{ translate('dynamicChange') }}</h2>
    <cub-cell>
      <cub-progress :percentage="val" />
    </cub-cell>
    <cub-cell>
      <cub-button type="default" @click="setReduceVal">{{ translate('reduce') }}</cub-button>
      <cub-button type="primary" @click="setAddVal">{{ translate('add') }}</cub-button>
    </cub-cell>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('progress');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { Issue } from '@cubfe/icons-vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      customStyle: '设置颜色高度',
      noShowPercentage: '设置百分比不显示',
      showPercentage: '设置百分比外显',
      showInsidePercentage: '设置百分比内显',
      customContent: '设置百分比内显自定义内容',
      customSize: '自定义尺寸',
      statusDisplay: '设置状态显示',
      dynamicChange: '动态改变',
      reduce: '减少',
      add: '增加'
    },
    'en-US': {
      basic: 'Basic Usage',
      customStyle: 'Custom Style',
      noShowPercentage: 'Don’t Show Percentage',
      showPercentage: 'Percentage displayed outside',
      showInsidePercentage: 'Percentage displayed inside',
      customContent: 'Custom Content',
      customSize: 'Custom Size',
      statusDisplay: 'Status Display',
      dynamicChange: 'Dynamic Change',
      reduce: 'reduce',
      add: 'add'
    }
  });
initTranslate();
const val = ref(0);
const setAddVal = () => {
  if (val.value >= 100) {
    return false;
  }
  val.value += 10;
};
const setReduceVal = () => {
  if (val.value <= 0) {
    return false;
  }
  val.value -= 10;
};
</script>

<style lang="scss" scoped>
.cub-button {
  margin-right: 10px;
}
</style>

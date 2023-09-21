<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <cub-cell>
      <cub-trend-arrow :sync-text-color="false" :rate="1" />
      <cub-trend-arrow :sync-text-color="false" :rate="-0.2535" />
    </cub-cell>
    <view class="title">{{ translate('title1') }}</view>
    <cub-cell>
      <cub-trend-arrow :rate="10.2365" />
      <cub-trend-arrow :rate="-0.2535" />
    </cub-cell>
    <view class="title">{{ translate('title2') }}</view>
    <cub-cell>
      <cub-trend-arrow :digits="1" :rate="10.2365" />
      <cub-trend-arrow :digits="3" :rate="-0.2535" />
    </cub-cell>
    <view class="title">{{ translate('title3') }}</view>
    <cub-cell>
      <cub-trend-arrow arrowLeft :rate="0.2535" />
      <cub-trend-arrow arrowLeft :rate="-0.2535" />
    </cub-cell>
    <view class="title">{{ translate('title4') }}</view>
    <cub-cell>
      <cub-trend-arrow showSign :rate="1" />
      <cub-trend-arrow showSign :rate="-0.2535" />
    </cub-cell>
    <view class="title">{{ translate('title5') }}</view>
    <cub-cell>
      <cub-trend-arrow showSign :rate="0" />
      <cub-trend-arrow showSign showZero :rate="0" />
    </cub-cell>
    <view class="title">{{ translate('title6') }}</view>
    <cub-cell>
      <cub-trend-arrow :rate="10.2365" rise-color="rgb(73,143,242)" />
      <cub-trend-arrow :rate="-0.2535" showSign drop-color="rgb(255, 190, 13)" />
      <cub-trend-arrow
        :sync-text-color="false"
        showSign
        :rate="-0.2535"
        text-color="rgb(39,197,48)"
        drop-color="rgb(255, 190, 13)"
      />
    </cub-cell>
    <view class="title">{{ translate('title7') }}</view>
    <cub-cell>
      <cub-trend-arrow :rate="10.2365">
        <template #up-icon>
          <Success color="blue" width="18" height="18" />
        </template>
      </cub-trend-arrow>
      <cub-trend-arrow :rate="-10.2365">
        <template #down-icon>
          <Failure color="red" />
        </template>
      </cub-trend-arrow>
    </cub-cell>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('trend-arrow');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { Success, Failure } from '@cubfe/icons-vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title1: '改变文字颜色',
      title2: '指定小数位',
      title3: '箭头在前面',
      title4: '显示正负号',
      title5: '是否展示0',
      title6: '自定义颜色',
      title7: '自定义图标'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Change text color',
      title2: 'Specify decimal places',
      title3: 'Arrow ahead',
      title4: 'show sign',
      title5: 'Whether to show 0',
      title6: 'Custom color',
      title7: 'Custom icon'
    }
  });
export default defineComponent({
  components: { Success, Failure },
  props: {},
  setup() {
    initTranslate();
    return { translate };
  }
});
</script>
<style lang="scss" scoped>
.demo {
  .title {
    font-size: 14px;
    color: rgb(144, 156, 164);
    padding: 0 10px;
    font-weight: normal;
  }

  .cub-trend-arrow {
    margin-right: 10px;
  }
}
</style>

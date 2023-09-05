<template>
  <div class="demo">
    <h2>{{ translate('title10') }}</h2>
    <div class="demo-button-row">
      <cub-button-group shape="square">
        <cub-button type="primary">{{ translate('primary') }}</cub-button>
        <cub-button type="info">{{ translate('info') }}</cub-button>
        <cub-button type="warning">{{ translate('warning') }}</cub-button>
      </cub-button-group>
      <cub-button-group shape="round">
        <cub-button type="primary">{{ translate('primary') }}</cub-button>
        <cub-button type="info">{{ translate('info') }}</cub-button>
        <cub-button type="warning">{{ translate('warning') }}</cub-button>
      </cub-button-group>
    </div>
    <h2>{{ translate('title') }}</h2>
    <div class="demo-button-row">
      <cub-button type="primary">{{ translate('primary') }}</cub-button>
      <cub-button type="info">{{ translate('info') }}</cub-button>
      <cub-button type="default">{{ translate('default') }}</cub-button>
    </div>
    <div class="demo-button-row2">
      <cub-button type="danger">{{ translate('danger') }}</cub-button>
      <cub-button type="warning">{{ translate('warning') }}</cub-button>
      <cub-button type="success">{{ translate('success') }}</cub-button>
    </div>
    <h2>{{ translate('title1') }}</h2>
    <div class="demo-button-row2">
      <cub-button plain type="primary">{{ translate('plain') }}</cub-button>
      <cub-button plain type="info">{{ translate('plain') }}</cub-button>
    </div>

    <h2>{{ translate('title2') }}</h2>
    <div class="demo-button-row2">
      <cub-button disabled type="primary">{{ translate('disabled') }}</cub-button>
      <cub-button plain disabled type="info">{{ translate('disabled') }}</cub-button>
      <cub-button plain disabled type="primary">{{ translate('disabled') }}</cub-button>
    </div>
    <h2>{{ translate('title3') }}</h2>
    <div class="demo-button-row2">
      <cub-button shape="square" type="primary"> {{ translate('square') }}</cub-button>
      <cub-button type="info"> {{ translate('round') }}</cub-button>
    </div>
    <h2>{{ translate('title4') }}</h2>
    <div class="demo-button-row2">
      <cub-button loading type="info"></cub-button>
      <cub-button loading type="warning">{{ translate('loading') }}</cub-button>
      <cub-button :loading="isLoading" type="success" @click="changeLoading">{{
        translate('changeLoading')
      }}</cub-button>
    </div>
    <h2>{{ translate('title5') }}</h2>
    <div class="demo-button-row2">
      <cub-button shape="square" plain type="primary">
        <template #icon>
          <StarFill />
        </template>
      </cub-button>
      <cub-button shape="square" type="primary">
        <template #icon>
          <Star />
        </template>
        {{ translate('star') }}
      </cub-button>
    </div>
    <h2>{{ translate('title7') }}</h2>
    <div class="demo-button-row2">
      <cub-button size="large" type="primary" style="margin-bottom: 10px">{{ translate('large') }}</cub-button>
      <cub-button type="primary">{{ translate('normal') }}</cub-button>
      <cub-button size="small" type="primary">{{ translate('small') }}</cub-button>
      <cub-button size="mini" type="primary">{{ translate('mini') }}</cub-button>
    </div>
    <h2>{{ translate('title8') }}</h2>
    <div class="demo-button-row2">
      <cub-button block type="primary">{{ translate('block') }}</cub-button>
    </div>
    <h2>{{ translate('title9') }}</h2>
    <div class="demo-button-row2">
      <cub-button color="#7232dd">{{ translate('pure') }}</cub-button>
      <cub-button color="#7232dd" plain>{{ translate('pure') }}</cub-button>
      <cub-button color="linear-gradient(to right, #ff6034, #ee0a24)"> {{ translate('gradient') }} </cub-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('button');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { StarFill, Star } from '@cubfe/icons-vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      title: '按钮类型',
      title1: '朴素按钮',
      title2: '禁用状态',
      title3: '按钮形状',
      title4: '加载状态',
      title5: '图标按钮',
      title6: '自定义图标',
      title7: '按钮尺寸',
      title8: '块级元素',
      title9: '自定义颜色',
      title10: '分组按钮',
      primary: '主要按钮',
      info: '信息按钮',
      default: '默认按钮',
      danger: '危险按钮',
      warning: '警告按钮',
      success: '成功按钮',
      plain: '朴素按钮',
      disabled: '禁用状态',
      square: '方形按钮',
      round: '圆形按钮',
      loading: '加载中...',
      changeLoading: 'Click me!',
      star: '收藏',
      large: '大号按钮',
      normal: '普通按钮',
      small: '小型按钮',
      mini: '迷你按钮',
      block: '块级元素',
      pure: '单色按钮',
      gradient: '渐变色按钮'
    },
    'en-US': {
      title: 'Type',
      title1: 'Plain',
      title2: 'Disabled',
      title3: 'Shape',
      title4: 'Loading',
      title5: 'Icon',
      title6: 'Custom Icon',
      title7: 'Size',
      title8: 'Block',
      title9: 'Custom Color',
      title10: 'Group',
      primary: 'Primary',
      info: 'Info',
      default: 'Default',
      danger: 'Danger',
      warning: 'Warning',
      success: 'Success',
      plain: 'Plain',
      disabled: 'Disabled',
      square: 'Square',
      round: 'Round',
      loading: 'Loading...',
      changeLoading: 'Click me!',
      star: 'Star',
      large: 'Large',
      normal: 'Normal',
      small: 'Small',
      mini: 'Mini',
      block: 'Block Element',
      pure: 'Pure',
      gradient: 'Gradient'
    }
  });

export default defineComponent({
  components: { StarFill, Star },
  props: {},
  setup() {
    initTranslate();
    let isLoading = ref(false);
    const changeLoading = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 3000);
    };

    return {
      isLoading,
      changeLoading,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-button-row {
  margin-bottom: 20px;
}

.demo-button-row2 {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.cub-button {
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
}
</style>

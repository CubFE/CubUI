<template>
  <view class="cub-sku-header">
    <image class="cub-sku-header-img" :src="goods.imagePath" v-if="ENV != ENV_TYPE.WEB" />
    <img class="cub-sku-header-img" :src="goods.imagePath" v-else />
    <view class="cub-sku-header-right">
      <template v-if="getSlots('sku-header-price')">
        <slot name="sku-header-price"></slot>
      </template>
      <cub-price v-else :price="goods.price" :needSymbol="true" :thousands="false"> </cub-price>

      <template v-if="getSlots('sku-header-extra')">
        <slot name="sku-header-extra"></slot>
      </template>
      <view class="cub-sku-header-right-extra" v-if="goods.skuId && !getSlots('sku-header-extra')"
        >{{ translate('skuId') }}&nbsp;:&nbsp;{{ goods.skuId }}</view
      >
    </view>
  </view>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
import Price from '../../price/index.taro.vue';
import { createComponent } from '@/packages/utils/create';
import Taro from '@tarojs/taro';
const { create, translate } = createComponent('sku-header');

export default create({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  emits: [],
  components: {
    [Price.name]: Price
  },
  setup(props, { slots }) {
    const getSlots = (name: string) => slots[name];

    const state = reactive({
      ENV: Taro.getEnv(),
      ENV_TYPE: Taro.ENV_TYPE
    });

    return {
      getSlots,
      translate,
      ...toRefs(state)
    };
  }
});
</script>

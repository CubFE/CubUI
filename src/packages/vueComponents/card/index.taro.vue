<template>
  <view>
    <!--横向-->
    <view class="cub-card" v-if="direction==='horizontal'">
      <view class="cub-card__left">
        <img :src="imgUrl" alt="" />
      </view>
      <view class="cub-card__right">
        <view class="cub-card__right__title">{{ title }}</view>
        <slot name="prolist"></slot>
        <view class="cub-card__right__price" v-if="isNeedPrice">
          <slot name="price">
            <cub-price :price="price"></cub-price>
          </slot>
          <slot name="origin">
            <cub-price class="cub-card__right__price__origin" :price="vipPrice"></cub-price>
          </slot>
        </view>
        <view class="cub-card__right__other">
          <slot name="shop-tag">
            <cub-tag type="danger">{{ shopDesc }}</cub-tag>
            <cub-tag plain>{{ delivery }}</cub-tag>
          </slot>
        </view>
        <view class="cub-card__right__shop">
          <view class="cub-card__right__shop__name">{{ shopName }}</view>
          <slot name="footer"></slot>
        </view>
      </view>
    </view>
    <!--纵向-->
    <view class="cub-card vertical" v-if="direction==='vertical'">
      <view class="cub-card__thumb">
        <img :src="imgUrl" alt="" />
      </view>
      <view class="cub-card__title">
        {{ title }}
      </view>
      <view class="cub-card__body">
        <slot name="prolist"></slot>
        <view class="cub-card__price" v-if="isNeedPrice">
          <slot name="price">
            <cub-price :price="price"></cub-price>
          </slot>
          <slot name="origin">
            <cub-price class="cub-card__price__origin" :price="vipPrice"></cub-price>
          </slot>
        </view>
        <view class="cub-card__other">
          <slot name="shop-tag">
            <cub-tag type="danger">{{ shopDesc }}</cub-tag>
            <cub-tag plain>{{ delivery }}</cub-tag>
          </slot>
        </view>
        <view class="cub-card__shop">
          <view class="cub-card__shop__name">{{ shopName }}</view>
          <slot name="footer"></slot>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Price from '../price/index.taro.vue';
import Tag from '../tag/index.taro.vue';
import { DirectionType } from './type';
const { create } = createComponent('card');
export default create({
  components: {
    [Price.name]: Price,
    [Tag.name]: Tag
  },
  props: {
    direction: {
      type: String as PropType<DirectionType>,
      defult: 'horizontal'
    },
    imgUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    vipPrice: {
      type: String,
      default: ''
    },
    shopDesc: {
      type: String,
      default: ''
    },
    delivery: {
      type: String,
      default: ''
    },
    shopName: {
      type: String,
      default: ''
    },
    isNeedPrice: {
      type: Boolean,
      default: true
    }
  }
});
</script>

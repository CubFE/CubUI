<template>
  <div>
    <div class="cub-card horizontal" v-if="direction==='horizontal'">
      <div class="cub-card__left">
        <img :src="imgUrl" alt="" />
      </div>
      <div class="cub-card__right">
        <div class="cub-card__right__title">{{ title }}</div>
        <slot name="prolist"></slot>
        <div class="cub-card__right__price" v-if="isNeedPrice">
          <slot name="price">
            <cub-price :price="price"></cub-price>
          </slot>
          <slot name="origin">
            <cub-price class="cub-card__right__price__origin" :price="vipPrice"></cub-price>
          </slot>
        </div>
        <div class="cub-card__right__other">
          <slot name="shop-tag">
            <cub-tag type="danger">{{ shopDesc }}</cub-tag>
            <cub-tag plain>{{ delivery }}</cub-tag>
          </slot>
        </div>
        <div class="cub-card__right__shop">
          <div class="cub-card__right__shop__name">{{ shopName }}</div>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
    <div class="cub-card vertical" v-if="direction==='vertical'">
      <!-- :style="`background-image: url(${imgUrl});`" -->
      <div class="cub-card__thumb">
        <img :src="imgUrl" alt="" />
      </div>
      <div class="cub-card__title">
        {{ title }}
      </div>
      <div class="cub-card__body">
        <slot name="prolist"></slot>
        <div class="cub-card__price" v-if="isNeedPrice">
          <slot name="price">
            <cub-price :price="price"></cub-price>
          </slot>
          <slot name="origin">
            <cub-price class="cub-card__price__origin" :price="vipPrice"></cub-price>
          </slot>
        </div>
        <div class="cub-card__other">
          <slot name="shop-tag">
            <cub-tag type="danger">{{ shopDesc }}</cub-tag>
            <cub-tag plain>{{ delivery }}</cub-tag>
          </slot>
        </div>
        <div class="cub-card__shop">
          <div class="cub-card__shop__name">{{ shopName }}</div>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Price from '../price/index.vue';
import Tag from '../tag/index.vue';
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
      default: 'horizontal'
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

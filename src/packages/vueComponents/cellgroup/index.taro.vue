<template>
  <view class="cub-cell-group">
    <slot v-if="$slots.title" name="title"></slot>
    <view v-else-if="title" class="cub-cell-group__title">{{ title }}</view>
    <slot v-if="$slots.desc" name="desc"></slot>
    <view v-else-if="desc" class="cub-cell-group__desc">{{ desc }}</view>
    <view class="cub-cell-group__wrap">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('cell-group');
export default create({
  props: {
    title: { type: String, default: '' },
    desc: { type: String, default: '' }
  }
});
</script>

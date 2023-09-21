<template>
  <view class="cub-button-group">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { provide, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('button-group');
export default create({
props: {
  shape: {
    type: String,
    default: "square"
  }
},
setup(props: { shape: String; }) {
  const name = ref('');
  const update = (n: string) => {
    name.value = n;
  };
  provide('buttonGroup', {
    update,
    shape: props.shape,
    name
  });
}
});
</script>
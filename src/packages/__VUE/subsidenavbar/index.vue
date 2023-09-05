<template>
  <view :class="classes" :ikey="ikey">
    <view class="cub-sub-side-navbar__title" @click.stop="handleClick">
      <span class="cub-sub-side-navbar__title__text">{{ title }}</span>
      <span class="cub-sub-side-navbar__title__icon">
        <ArrowDown2 v-if="!direction"></ArrowDown2>
        <ArrowUp2 v-else></ArrowUp2>
      </span>
    </view>
    <view
      class="cub-sub-side-navbar__list"
      :class="!direction ? 'nutFadeIn' : 'nutFadeOut'"
      :style="style"
      v-show="!direction"
    >
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { computed, onMounted, reactive, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { ArrowDown2, ArrowUp2 } from '@cubfe/icons-vue';
const { componentName, create } = createComponent('sub-side-navbar');
export default create({
  props: {
    title: {
      type: String,
      default: ''
    },
    ikey: {
      type: [String, Number],
      default: ''
    },
    open: {
      type: Boolean,
      default: true
    }
  },
  components: { ArrowDown2, ArrowUp2 },
  emits: ['title-click'],
  setup: (props: any, context: any) => {
    const state = reactive({
      direction: ''
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    const style = computed(() => {
      return {
        height: !state.direction ? 'auto' : '0px'
      };
    });
    const handleClick = () => {
      context.emit('title-click');
      state.direction = !state.direction ? 'up' : '';
    };
    onMounted(() => {
      state.direction = props.open ? '' : 'up';
    });
    return {
      ...toRefs(state),
      classes,
      style,
      handleClick
    };
  }
});
</script>

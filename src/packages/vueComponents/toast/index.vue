<template>
  <Transition name="toast-fade" @after-leave="onAfterLeave">
    <view
      :class="toastBodyClass"
      v-show="state.mounted"
      :style="{
        bottom: center ? 'auto' : bottom,
        'background-color': coverColor
      }"
      @click="clickCover"
    >
      <view
        class="cub-toast-inner"
        :style="{
          'text-align': textAlignCenter ? 'center' : 'left',
          'background-color': bgColor
        }"
      >
        <view v-if="hasIcon" :class="toastIconWrapperClass">
          <component :is="renderIcon(icon)" color="#ffffff"></component>
        </view>
        <div v-if="title" class="cub-toast-title">
          {{ title }}
        </div>
        <view class="cub-toast-text" v-html="msg"></view>
      </view>
    </view>
  </Transition>
</template>
<script lang="ts">
import { reactive, computed, watch, onMounted, PropType, Component } from 'vue';
import { createComponent, renderIcon } from '@/packages/utils/create';
const { create } = createComponent('toast');
export default create({
  components: {},
  props: {
    id: String,
    msg: String,
    duration: {
      type: Number,
      default: 2000
    },
    center: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'text'
    },
    customClass: String,
    bottom: {
      type: String,
      default: '30px'
    },
    size: {
      type: [String, Number],
      default: 'base'
    },
    icon: {
      type: Object as PropType<Component>,
      default: null
    },
    textAlignCenter: {
      type: Boolean,
      default: true
    },
    loadingRotate: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: ''
    },
    onClose: Function,
    unmount: Function,
    cover: {
      type: Boolean,
      default: false
    },
    coverColor: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  setup(props: any, { emit }) {
    let timer: NodeJS.Timeout | null | undefined;
    const state = reactive({
      mounted: false
    });
    onMounted(() => {
      state.mounted = true;
    });
    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    const hide = () => {
      state.mounted = false;
    };
    const show = () => {
      clearTimer();
      if (props.duration) {
        timer = setTimeout(() => {
          hide();
        }, props.duration);
      }
    };
    const clickCover = () => {
      if (props.closeOnClickOverlay) {
        hide();
        emit('close');
      }
    };

    if (props.duration) {
      show();
    }

    watch(
      () => props.duration,
      (val) => {
        if (val) {
          show();
        }
      }
    );

    const hasIcon = computed(() => {
      if (props.type !== 'text') {
        return true;
      } else {
        return props.icon !== null;
      }
    });
    const toastBodyClass = computed(() => {
      return [
        'cub-toast',
        { 'cub-toast-center': props.center },
        { 'cub-toast-has-icon': hasIcon.value },
        { 'cub-toast-cover': props.cover },
        { 'cub-toast-loading': props.type === 'loading' },
        props.customClass,
        'cub-toast-' + props.size
      ];
    });
    const toastIconWrapperClass = computed(() => {
      return ['cub-toast-icon-wrapper', { 'cub-toast-icon-no-animation': !props.loadingRotate }];
    });
    const onAfterLeave = () => {
      clearTimer();
      props.unmount(props.id);
      props.onClose && props.onClose();
    };

    return {
      state,
      hide,
      clickCover,
      hasIcon,
      toastBodyClass,
      toastIconWrapperClass,
      onAfterLeave,
      renderIcon
    };
  }
});
</script>

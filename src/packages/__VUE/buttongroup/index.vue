<template>
    <div :class="classes">
      <slot></slot>
    </div>
</template>
<script lang="ts">
import { provide, ref, toRefs, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('button-group');
export default create({
  props: {
    shape: {
      type: String,
      default: "square"
    }
  },
  setup(props) {
    const { shape } = toRefs(props);
    const name = ref('');
    const update = (n: string) => {
      name.value = n;
    };
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--${shape.value}`]: shape.value,
      };
    });
    provide('buttonGroup', {
      update,
      shape: props.shape,
      name
    });
    return {
        classes
    }
  }
});
</script>
<template>
  <div class="demo">
    <h2>基础用法</h2>
    <cub-cell @click="handleClick1">
      <span><label>时间配送</label></span>
      <div> {{ val1 }} </div>
    </cub-cell>
    <div class="timeselect-wrapper">
      <cub-time-select :visible="visible1"></cub-time-select>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const state = reactive({
      visible1: false,
      val1: ''
    });

    const handleClick1 = () => {
      state.visible1 = true;
    };

    return {
      ...toRefs(state),
      handleClick1
    };
  }
});
</script>

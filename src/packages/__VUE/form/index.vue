<template>
  <form class="cub-form" action="#" @submit.prevent="() => false">
    <cub-cell-group>
      <slot></slot>
    </cub-cell-group>
  </form>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { component } from './common';
import CellGroup from '../cellgroup/index.vue';
const { create } = createComponent('form');
export default create(
  component({
    [CellGroup.name]: CellGroup
  })
);
</script>

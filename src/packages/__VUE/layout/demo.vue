<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <div class="box-item">
      <cub-row>
        <cub-col :span="24">
          <div class="flex-content">span:24</div>
        </cub-col>
      </cub-row>
      <cub-row>
        <cub-col :span="12">
          <div class="flex-content">span:12</div>
        </cub-col>
        <cub-col :span="12">
          <div class="flex-content flex-content-light">span:12</div>
        </cub-col>
      </cub-row>
      <cub-row>
        <cub-col :span="8">
          <div class="flex-content">span:8</div>
        </cub-col>
        <cub-col :span="8">
          <div class="flex-content flex-content-light">span:8</div>
        </cub-col>
        <cub-col :span="8">
          <div class="flex-content">span:8</div>
        </cub-col>
      </cub-row>
      <cub-row>
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
      </cub-row>
    </div>
    <h2>{{ translate('desc') }}</h2>
    <div class="box-item">
      <cub-row :gutter="10">
        <cub-col :span="8">
          <div class="flex-content">span:8</div>
        </cub-col>
        <cub-col :span="8">
          <div class="flex-content flex-content-light">span:8</div>
        </cub-col>
        <cub-col :span="8">
          <div class="flex-content">span:8</div>
        </cub-col>
      </cub-row>
    </div>
    <h2>{{ translate('flex') }}</h2>
    <div class="box-item">
      <cub-row type="flex" wrap="nowrap">
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
      </cub-row>
      <cub-row type="flex" justify="center">
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
      </cub-row>
      <cub-row type="flex" justify="end">
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
      </cub-row>
      <cub-row type="flex" justify="space-between">
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
      </cub-row>
      <cub-row type="flex" justify="space-around">
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
      </cub-row>
      <cub-row type="flex" justify="space-evenly">
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </cub-col>
        <cub-col :span="6">
          <div class="flex-content">span:6</div>
        </cub-col>
      </cub-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('layout');
import Row from '../row/index.vue';
import Col from '../col/index.vue';
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      desc: '分栏间隔',
      flex: 'Flex布局'
    },
    'en-US': {
      basic: 'Basic Usage',
      desc: 'Column spacing',
      flex: 'Flex layout'
    }
  });
export default defineComponent({
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  },
  setup() {
    initTranslate();
    return { translate };
  }
});
</script>

<style lang="scss" scoped>
.box-item {
  margin-bottom: 20px;
  padding: 20px 0;
}

.demo .cub-row {
  overflow: hidden;

  &:not(:last-child) .cub-col {
    margin-bottom: 15px;
  }
}

.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  font-size: 12px;

  &.flex-content-light {
    background: #ffc7c4;
  }

  &.flex-content-height {
    height: 50px;
  }
}
</style>

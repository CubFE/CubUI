<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <cub-swipe>
      <cub-cell round-radius="0" :title="translate('leftDel')" />
      <template #right>
        <cub-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</cub-button>
      </template>
    </cub-swipe>
    <h2>{{ translate('disable') }}</h2>
    <cub-swipe disabled>
      <cub-cell round-radius="0" :title="translate('disable')" />
      <template #right>
        <cub-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</cub-button>
      </template>
    </cub-swipe>
    <h2>{{ translate('swipeLR') }}</h2>
    <cub-swipe>
      <template #left>
        <cub-button shape="square" style="height: 100%" type="success">{{ translate('select') }}</cub-button>
      </template>
      <cub-cell round-radius="0" :title="translate('swipeLRDesc')" />
      <template #right>
        <cub-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</cub-button>
        <cub-button shape="square" style="height: 100%" type="info">{{ translate('collect') }}</cub-button>
      </template>
    </cub-swipe>
    <h2>
      {{ translate('async') }}
      <cub-switch v-model="checked" @change="changSwitch" />
    </h2>
    <cub-swipe ref="refSwipe">
      <cub-cell :title="translate('asyncDesc')"> </cub-cell>
      <template #right>
        <cub-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</cub-button>
      </template>
    </cub-swipe>
    <h2>{{ translate('custom') }}</h2>
    <cub-swipe>
      <template #left>
        <cub-button shape="square" style="height: 100%" type="success">{{ translate('select') }}</cub-button>
      </template>
      <cub-cell :title="translate('desc')">
        <template #link>
          <cub-input-number v-model="number" />
        </template>
      </cub-cell>
      <template #right>
        <cub-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</cub-button>
        <cub-button shape="square" style="height: 100%" type="info">{{ translate('collect') }}</cub-button>
      </template>
    </cub-swipe>
    <h2>使用 SwipeGroup 控制 Swipe 之间互斥</h2>
    <cub-swipe-group lock>
      <cub-swipe name="11">
        <cub-cell round-radius="0" :title="translate('leftDel')" />
        <template #right>
          <cub-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</cub-button>
        </template>
      </cub-swipe>
      <cub-swipe name="22">
        <cub-cell round-radius="0" :title="translate('leftDel')" />
        <template #right>
          <cub-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</cub-button>
        </template>
      </cub-swipe>
      <div>
        <cub-swipe name="33">
          <cub-cell round-radius="0" :title="translate('leftDel')" />
          <template #right>
            <cub-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</cub-button>
          </template>
        </cub-swipe>
      </div>
    </cub-swipe-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('swipe');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      leftDel: '左滑删除',
      disable: '禁用滑动',
      swipeLR: '左右滑动',
      swipeLRDesc: '左滑右滑都可以哦',
      async: '异步控制',
      asyncDesc: '异步打开关闭',
      open: '开',
      close: '关',
      custom: '自定义',
      desc: '商品描述',
      delete: '删除',
      select: '选择',
      collect: '收藏',
      group: '使用 SwipeGroup 控制 Swipe 之间互斥'
    },
    'en-US': {
      basic: 'Basic Usage',
      leftDel: 'Swipe left to delete',
      disable: 'Disable swipe',
      swipeLR: 'Swipe left and right',
      swipeLRDesc: 'You can swipe left and right',
      async: 'Async control swipe',
      asyncDesc: 'Async on and off',
      open: 'on',
      close: 'off',
      custom: 'Custom',
      desc: 'product description',
      delete: 'Delelte',
      select: 'Select',
      collect: 'Collect',
      group: 'Use SwipeGroup to make swipe exclusive'
    }
  });
initTranslate();
const refSwipe = ref<HTMLElement>();
const checked = ref(false);
const number = ref(0);
const changSwitch = (value: boolean) => {
  if (value) {
    refSwipe.value?.open('left');
  } else {
    refSwipe.value?.close();
  }
};
</script>

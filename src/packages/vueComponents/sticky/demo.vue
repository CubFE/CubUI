<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <cub-sticky top="57">
      <cub-button type="primary">{{ translate('content') }}</cub-button>
    </cub-sticky>
    <h2>{{ translate('title1') }}</h2>
    <cub-sticky top="120">
      <cub-button type="primary" style="margin-left: 50px">{{ translate('title1') }} 120px</cub-button>
    </cub-sticky>
    <h2>{{ translate('title2') }}</h2>
    <div style="width: 100%; height: 150px; background-color: #fff" ref="container">
      <cub-sticky top="57" :container="container">
        <cub-button type="info" style="margin-left: 100px">{{ translate('title2') }}</cub-button>
      </cub-sticky>
    </div>
    <h2>{{ translate('title3') }}</h2>
    <div style="height: 100vh"></div>
    <cub-sticky bottom="50" position="bottom">
      <cub-button type="primary">{{ translate('title3') }} 50px</cub-button>
    </cub-sticky>
    <div style="height: 100vh"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('sticky');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title1: '吸顶距离',
      title2: '指定容器',
      title3: '吸底距离',
      content: '吸顶按钮'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Ceiling distance',
      title2: 'Specify container',
      title3: 'Suction distance',
      content: 'Ceiling button'
    }
  });
initTranslate();
const container = ref(null);
</script>

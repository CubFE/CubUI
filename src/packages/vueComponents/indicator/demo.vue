<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <cub-cell>
      <cub-indicator :size="3" :current="3">step1</cub-indicator>
    </cub-cell>
    <cub-cell>
      <cub-row>
        <cub-col :span="12">
          <cub-button size="small" type="primary">{{ translate('button') }}</cub-button>
        </cub-col>
        <cub-col :span="12">
          <cub-indicator block align="right" :size="6" :current="5">step1</cub-indicator>
        </cub-col>
      </cub-row>
    </cub-cell>
    <h2>{{ translate('title') }}</h2>
    <cub-cell>
      <cub-indicator block algin="center" :size="6" :current="5">step1</cub-indicator>
    </cub-cell>
    <cub-cell>
      <cub-indicator block align="left" :size="6" :current="1">step1</cub-indicator>
    </cub-cell>
    <cub-cell>
      <cub-indicator block align="right" :size="6" :current="5">step1</cub-indicator>
    </cub-cell>
    <h2>{{ translate('title2') }}</h2>
    <cub-cell>
      <cub-indicator :fill-zero="false" :size="6" :current="5">step1</cub-indicator>
    </cub-cell>
  </div>
</template>

<script setup lang="ts">
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('Indicator');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      button: '主要按钮',
      title: 'block用法',
      title2: '不补0'
    },
    'en-US': {
      basic: 'Basic Usage',
      button: 'Main Button',
      title: 'Block usage',
      title2: 'Do not make up 0'
    }
  });
initTranslate();
</script>

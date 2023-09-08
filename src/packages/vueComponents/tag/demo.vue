<template>
  <div class="demo">
    <cub-cell-group :title="translate('title')">
      <cub-cell :title="translate('type0')">
        <template #link>
          <cub-tag>{{ translate('tag') }}</cub-tag>
        </template>
      </cub-cell>
      <cub-cell :title="translate('type1')">
        <template #link>
          <cub-tag type="primary">{{ translate('tag') }}</cub-tag>
        </template>
      </cub-cell>
      <cub-cell :title="translate('type2')">
        <template #link>
          <cub-tag type="success">{{ translate('tag') }}</cub-tag>
        </template>
      </cub-cell>
      <cub-cell :title="translate('type3')">
        <template #link>
          <cub-tag type="danger">{{ translate('tag') }}</cub-tag>
        </template>
      </cub-cell>
      <cub-cell :title="translate('type4')">
        <template #link>
          <cub-tag type="warning">{{ translate('tag') }}</cub-tag>
        </template>
      </cub-cell>
    </cub-cell-group>

    <cub-cell-group :title="translate('title1')">
      <cub-cell :title="translate('plain')">
        <template #link>
          <cub-tag plain>{{ translate('tag') }}</cub-tag>
        </template>
      </cub-cell>
      <cub-cell :title="translate('round')">
        <template #link>
          <cub-tag round type="primary">{{ translate('tag') }}</cub-tag>
        </template>
      </cub-cell>
      <cub-cell :title="translate('mark')">
        <template #link>
          <cub-tag mark type="primary">{{ translate('tag') }}</cub-tag>
        </template>
      </cub-cell>
      <cub-cell :title="translate('closeable')">
        <template #link>
          <cub-tag v-if="show" closeable @close="close" type="primary">{{ translate('tag') }}</cub-tag>
        </template>
      </cub-cell>
    </cub-cell-group>

    <cub-cell-group :title="translate('title2')">
      <cub-cell :title="translate('bgColor')">
        <template #link>
          <cub-tag color="#FA685D">{{ translate('tag') }}</cub-tag>
        </template>
      </cub-cell>
      <cub-cell :title="translate('textColor')">
        <template #link>
          <cub-tag color="#E9E9E9" textColor="#999999">{{ translate('tag') }}</cub-tag>
        </template>
      </cub-cell>
      <cub-cell :title="translate('plaincolor')">
        <template #link>
          <cub-tag color="#FA2400" plain>{{ translate('tag') }}</cub-tag>
        </template>
      </cub-cell>
    </cub-cell-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('tag');
import { useTranslate } from '@/sites/assets/util/useTranslate';

const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      title: '基础用法',
      title1: '样式风格',
      title2: '颜色自定义',
      type0: 'defualt 类型',
      type1: 'primary 类型',
      type2: 'success 类型',
      type3: 'danger 类型',
      type4: 'warning 类型',
      plain: '空心样式',
      round: '圆角样式',
      mark: '标记样式',
      closeable: '可关闭标签',
      tag: '标签',
      bgColor: '背景颜色',
      textColor: '文字颜色',
      plaincolor: '空心颜色'
    },
    'en-US': {
      title: 'Basic Usage',
      title1: 'Style',
      title2: 'Custom Color',
      type0: 'default',
      type1: 'primary',
      type2: 'success',
      type3: 'danger',
      type4: 'warning',
      plain: 'plain',
      round: 'round',
      mark: 'mark',
      closeable: 'closeable',
      tag: 'Tag',
      bgColor: 'background color',
      textColor: 'text color',
      plaincolor: 'plain color'
    }
  });
initTranslate();
const show = ref(true);
const close = () => {
  show.value = false;
};
</script>

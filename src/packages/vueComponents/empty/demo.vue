<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <div class="show">
      <cub-empty :description="translate('noData')"></cub-empty>
    </div>

    <h2>{{ translate('imageType') }}</h2>
    <div class="show">
      <cub-tabs v-model="tabValue">
        <cub-tab-pane :title="translate('noContent')">
          <cub-empty image="empty" :description="translate('noContent')"></cub-empty>
        </cub-tab-pane>
        <cub-tab-pane :title="translate('error')">
          <cub-empty image="error" :description="translate('error')"></cub-empty>
        </cub-tab-pane>
        <cub-tab-pane :title="translate('noNetWork')">
          <cub-empty image="network" :description="translate('noNetWork')"></cub-empty>
        </cub-tab-pane>
      </cub-tabs>
    </div>

    <h2>{{ translate('customImg') }}</h2>
    <div class="show">
      <cub-empty
        image="https://static-ftcms.kakusoft.com/p/files/61a9e3313985005b3958672e.png"
        :description="translate('description')"
      >
      </cub-empty>
    </div>

    <h2>{{ translate('bottomContent') }}</h2>
    <div class="show">
      <cub-empty image="error" :description="translate('fail')">
        <div style="margin-top: 10px">
          <cub-button icon="refresh" type="primary">{{ translate('retry') }}</cub-button>
        </div>
      </cub-empty>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('empty');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      noData: '无数据',
      noContent: '无内容',
      noNetWork: '无网络',
      error: '加载失败/错误',
      imageType: '图片类型',
      description: '描述文字',
      customImg: '自定义图片',
      bottomContent: '底部内容',
      fail: '加载失败',
      retry: '重试'
    },
    'en-US': {
      basic: 'Basic Usage',
      noData: 'no data',
      noContent: 'no content',
      noNetWork: 'no network',
      error: 'error',
      imageType: 'Image Type',
      description: 'description',
      customImg: 'Custom Image',
      bottomContent: 'Bottom Content',
      fail: 'Failed to load',
      retry: 'Retry'
    }
  });
initTranslate();
const tabValue = ref(0);
</script>

<style lang="scss" scoped>
.demo {
  .show {
    background: #ffffff;
  }
}
</style>

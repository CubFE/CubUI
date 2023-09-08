<template>
  <view class="demo">
    <h2>{{ translate('title') }}</h2>
    <cub-row>
      <cub-badge :value="8">
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
      <cub-badge :value="76">
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
      <cub-badge value="NEW">
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
      <cub-badge value="NEW" bubble>
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
      <cub-badge dot>
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
    </cub-row>
    <h2>{{ translate('title1') }}</h2>
    <cub-row>
      <cub-badge :value="200" :max="9">
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
      <cub-badge :value="200" :max="20">
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
      <cub-badge :value="200" :max="99">
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
    </cub-row>

    <h2>{{ translate('title2') }}</h2>
    <cub-row>
      <cub-badge :value="8" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
      <cub-badge :value="76" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
      <cub-badge value="NEW" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
      <cub-badge dot color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
    </cub-row>

    <h2>{{ translate('title3') }}</h2>
    <cub-row>
      <cub-badge>
        <template #icon>
          <Check color="#ffffff" width="12px" height="12px"></Check>
        </template>
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
      <cub-badge>
        <template #icon>
          <IconLink color="#ffffff" width="12px" height="12px"> </IconLink>
        </template>
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
      <cub-badge>
        <template #icon>
          <Download color="#ffffff" width="12px" height="12px"></Download>
        </template>
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
    </cub-row>

    <h2>{{ translate('title4') }}</h2>
    <cub-row>
      <cub-badge :value="8" top="5" right="5">
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
      <cub-badge :value="76" top="10" right="10">
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
      <cub-badge value="NEW">
        <cub-avatar shape="square"></cub-avatar>
      </cub-badge>
    </cub-row>

    <h2>{{ translate('title5') }}</h2>
    <cub-row>
      <cub-badge :value="8"> </cub-badge>
      <cub-badge :value="76"> </cub-badge>
      <cub-badge value="NEW"> </cub-badge>
    </cub-row>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('badge');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { Check, Link, Download } from '@cubfe/icons-vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      title: '基础用法',
      title1: '最大值',
      title2: '自定义颜色',
      title3: '自定义徽标内容',
      title4: '自定义位置',
      title5: '独立展示'
    },
    'en-US': {
      title: 'Basic Usage',
      title1: 'Max',
      title2: 'Custom Color',
      title3: 'Custom Content',
      title4: 'Custom Position ',
      title5: 'Standalone'
    }
  });
export default defineComponent({
  components: { Check, Download, IconLink: Link },
  setup() {
    initTranslate();
    return {
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.cub-badge {
  margin-right: 40px;
}
</style>

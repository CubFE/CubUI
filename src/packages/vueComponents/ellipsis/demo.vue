<template>
  <div class="demo">
    <h2>{{ translate('header') }}</h2>
    <cub-cell>
      <cub-ellipsis :content="content" direction="start" class="elli"></cub-ellipsis>
    </cub-cell>

    <h2>{{ translate('end') }}</h2>
    <cub-cell>
      <cub-ellipsis :content="content" direction="end"></cub-ellipsis>
    </cub-cell>

    <h2>{{ translate('middle') }}</h2>
    <cub-cell>
      <cub-ellipsis :content="content" direction="middle"></cub-ellipsis>
    </cub-cell>

    <h2>{{ translate('rows') }}</h2>
    <cub-cell>
      <cub-ellipsis :content="content" direction="start" rows="3"></cub-ellipsis>
    </cub-cell>

    <h2>{{ translate('expand') }}</h2>
    <cub-cell>
      <cub-ellipsis :content="content" direction="start" expandText="展开" collapseText="收起"></cub-ellipsis>
    </cub-cell>
    <cub-cell>
      <cub-ellipsis :content="content" direction="middle" expandText="展开" collapseText="收起"></cub-ellipsis>
    </cub-cell>
    <cub-cell>
      <cub-ellipsis :content="content" direction="end" rows="3" expandText="展开" collapseText="收起"></cub-ellipsis>
    </cub-cell>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('ellipsis');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      header: '头部省略',
      end: '尾部省略',
      middle: '中间省略',
      rows: '多行省略',
      expand: '展开收起'
    },
    'en-US': {
      basic: 'Basic Usage',
      header: 'Leading',
      end: 'Tailing',
      middle: 'Middle',
      rows: 'Multi-line',
      expand: 'Expand & Collapse'
    }
  });
export default defineComponent({
  props: {},
  setup() {
    initTranslate();
    const content = ref(
      'cubui3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 cubui 能够为更多的开发者带来便利，我们决定在 cubui 中增加小程序多端适配的能力。'
    );
    return { content, translate };
  }
});
</script>
<style lang="scss" scoped>
.demo {
}
</style>

<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <cub-grid>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
    </cub-grid>

    <h2>{{ translate('columnNum') }}</h2>
    <cub-grid :column-num="3">
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
    </cub-grid>

    <h2>{{ translate('square') }}</h2>
    <cub-grid :column-num="3" square>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
    </cub-grid>

    <h2>{{ translate('gutter') }}</h2>
    <cub-grid :gutter="10">
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
    </cub-grid>

    <h2>{{ translate('reverse') }}</h2>
    <cub-grid reverse>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
    </cub-grid>

    <h2>{{ translate('Horizontal') }}</h2>
    <cub-grid direction="horizontal">
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
    </cub-grid>

    <h2>{{ translate('iconStyle') }}</h2>
    <cub-grid :column-num="3">
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong height="40px" width="40px" color="#478EF2" />
      </cub-grid-item>
      <cub-grid-item :text="translate('text')">
        <Dongdong />
      </cub-grid-item>
    </cub-grid>

    <h2>{{ translate('route') }}</h2>
    <cub-grid :column-num="2">
      <cub-grid-item :text="translate('vueRouter')" to="/">
        <Home />
      </cub-grid-item>
      <cub-grid-item :text="translate('url')" url="https://jd.com">
        <Search />
      </cub-grid-item>
    </cub-grid>

    <h2>{{ translate('customContent') }}</h2>
    <cub-grid :border="false">
      <cub-grid-item v-for="i in 4" :key="i">
        <cub-avatar size="large">
          <img
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
        </cub-avatar>
      </cub-grid-item>
    </cub-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('grid');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { Dongdong, Home, Search } from '@cubfe/icons-vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      text: '文字',
      columnNum: '自定义列数',
      square: '正方形格子',
      gutter: '格子间距',
      reverse: '内容翻转',
      Horizontal: '内容横向',
      iconStyle: '图标颜色/大小',
      route: '页面导航',
      customContent: '自定义内容',
      vueRouter: '路由跳转',
      url: '链接跳转'
    },
    'en-US': {
      basic: 'Basic Usage',
      text: 'text',
      columnNum: 'Column Num',
      square: 'Square',
      gutter: 'Gutter',
      reverse: 'Reverse',
      horizontal: 'Horizontal',
      iconStyle: 'Icon Style',
      route: 'Route',
      customContent: 'Custom Content',
      vueRouter: 'Vue Router',
      url: 'URL'
    }
  });
export default defineComponent({
  components: { Dongdong, Home, Search },
  props: {},
  setup() {
    initTranslate();
    let a = new Map([
      ['Michael', 95],
      ['Bob', 75],
      ['Tracy', 85]
    ]);
    a.set('Adam', 67);
    console.log(a);

    return {
      translate
    };
  }
});
</script>

<template>
  <div class="demo full">
    <h2>{{ translate('title1') }}</h2>
    <cub-navbar @on-click-back="back" @on-click-title="title" :title="translate('navTitle1')">
      <template #left>
        <div>{{ translate('back') }}</div>
      </template>
      <template #right>
        <Share width="16px"></Share>
      </template>
    </cub-navbar>

    <cub-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-right="rightClick"
      :title="translate('navTitle2')"
      :desc="translate('desc1')"
    ></cub-navbar>

    <cub-navbar
      :left-show="false"
      @on-click-back="back"
      @on-click-title="title"
      @on-click-icon="icon"
      @on-click-right="rightClick"
      :title="translate('navTitle3')"
      :titleIcon="true"
      :desc="translate('desc2')"
    >
      <template #title-icon>
        <Cart width="16px"></Cart>
      </template>
      <template #right>
        <MoreX class="right" width="16px"></MoreX>
      </template>
    </cub-navbar>

    <h2>{{ translate('title2') }}</h2>
    <cub-navbar @on-click-back="back" @on-click-title="title" @on-click-right="rightClick" :desc="translate('desc2')">
      <template #content>
        <cub-tabs v-model="tab1value" @click="changeTab">
          <cub-tab-pane :title="translate('tab1')"> </cub-tab-pane>
          <cub-tab-pane :title="translate('tab2')"> </cub-tab-pane>
        </cub-tabs>
      </template>

      <template #right>
        <MoreX class="right" width="16px"></MoreX>
      </template>
    </cub-navbar>

    <h2>{{ translate('title3') }}</h2>
    <cub-navbar @on-click-back="back">
      <template #content>
        <cub-tabs v-model="tab2value" @click="changeTabList">
          <cub-tab-pane :title="translate('tab1')"> </cub-tab-pane>
          <cub-tab-pane :title="translate('tab2')"> </cub-tab-pane>
          <cub-tab-pane :title="translate('tab3')"> </cub-tab-pane>
        </cub-tabs>
      </template>
      <template #right>
        <Horizontal class="right" width="16px"></Horizontal>
      </template>
    </cub-navbar>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('navbar');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { Share, Cart, MoreX, Horizontal } from '@cubfe/icons-vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      title1: '基础用法',
      back: '返回',
      navTitle1: '订单详情',
      navTitle2: '浏览记录',
      desc1: '清空',
      navTitle3: '购物车',
      desc2: '编辑',
      title2: '自定义导航栏中间内容',
      tab1: '标题1',
      tab2: '标题2',
      tab3: '标题3',
      title3: '多 tab 切换导航'
    },
    'en-US': {
      title1: 'Basic Usage',
      back: 'Back',
      navTitle1: 'Order details',
      navTitle2: 'Browsing history',
      desc1: 'Clear',
      navTitle3: 'Cart',
      desc2: 'Edit',
      title2: 'Customize the middle content of the navigation bar',
      tab1: 'Title1',
      tab2: 'Title2',
      tab3: 'Title3',
      title3: 'Multi-tab switching navigation'
    }
  });
export default defineComponent({
  components: { Share, Cart, MoreX, Horizontal },
  setup() {
    initTranslate();
    const tab1value = ref(0);
    const tab2value = ref(0);
    const methods = {
      back() {
        console.log('header头部， 点击返回');
      },
      title() {
        console.log('header头部， 点击title');
      },
      icon() {
        console.log('icon');
      },

      rightClick() {
        console.log('右侧点击事件');
      },
      changeTab(tab: any) {
        tab1value.value = tab.paneKey as number;
      },
      changeTabList(tab: any) {
        tab2value.value = tab.paneKey as number;
      }
    };

    return {
      translate,
      tab1value,
      tab2value,
      ...methods
    };
  }
});
</script>

<style lang="scss" scoped>
.right {
  margin-left: 10px;
}
</style>

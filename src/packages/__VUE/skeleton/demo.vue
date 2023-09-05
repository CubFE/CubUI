<template>
  <view class="demo">
    <h2>{{ translate('basic') }}</h2>

    <cub-skeleton width="250px" height="15px" animated> </cub-skeleton>

    <h2>{{ translate('title') }}</h2>

    <cub-skeleton width="250px" height="15px" title animated row="3"> </cub-skeleton>

    <h2>{{ translate('title1') }}</h2>
    <cub-skeleton width="250px" height="15px" title animated avatar avatarSize="60px" row="3"> </cub-skeleton>

    <h2>{{ translate('title2') }}</h2>
    <cub-skeleton width="250px" height="15px" animated round></cub-skeleton>

    <h2>{{ translate('title3') }}</h2>

    <div class="pic-compose">
      <cub-skeleton width="250px" height="15px" title animated row="3" class="item"> </cub-skeleton>
      <cub-skeleton width="250px" height="15px" title animated row="3" class="item"> </cub-skeleton>
    </div>

    <h2>{{ translate('title4') }}</h2>

    <view class="content">
      <cub-switch v-model="checked" />

      <cub-skeleton width="250px" height="15px" title animated avatar row="3" :loading="!checked">
        <view class="container">
          <cub-avatar size="50">
            <img
              src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
            />
          </cub-avatar>
          <view class="right-content">
            <view class="title">cubui</view>
            <view class="desc">{{ translate('desc') }}</view>
          </view>
        </view>
      </cub-skeleton>
    </view>
  </view>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('skeleton');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title: '传入多行',
      title1: '显示头像',
      title2: '标题段落圆角风格',
      title3: '图片组合',
      title4: '显示子组件',
      desc: '一套轻量级移动端Vue组库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。'
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'Incoming multiline',
      title1: 'Show Faces',
      title2: 'Title paragraph fillet style',
      title3: 'Picture combination',
      title4: 'Display subcomponents',
      desc: 'A set of JD style lightweight mobile terminal Vue group library provides rich basic components and business components to help developers quickly build mobile applications.'
    }
  });

export default defineComponent({
  setup() {
    initTranslate();
    const checked = ref(false);

    return {
      checked,
      translate
    };
  }
});
</script>

<style lang="scss">
.content {
  margin-bottom: 20px;

  .cub-switch {
    margin: 0 16px 8px 0;
  }

  .container {
    display: flex;

    .right-content {
      margin-left: 19px;
      font-family: PingFangSC;
      display: flex;
      flex-direction: column;

      .title {
        font-size: 14px;
        color: rgba(51, 51, 51, 1);
      }

      .desc {
        margin-top: 10px;
        font-size: 13px;
        color: rgba(154, 155, 157, 1);
      }
    }
  }
}

.pic-compose {
  display: flex;
  justify-content: space-between;

  .item {
    width: 47%;
  }
}
</style>

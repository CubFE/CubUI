<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <cub-image :src="src" width="100" height="100"></cub-image>

    <h2>{{ translate('fill') }}</h2>
    <cub-row :gutter="10" flex-wrap="wrap">
      <cub-col :span="8" v-for="fit in fits" :key="fit">
        <cub-image :src="src" width="100" height="100" :fit="fit"></cub-image>
        <div class="text">{{ fit }}</div>
      </cub-col>
    </cub-row>

    <h2>{{ translate('position') }}</h2>
    <cub-row :gutter="10" flex-wrap="wrap">
      <cub-col :span="8" v-for="pos in position2" :key="pos">
        <cub-image :src="src" width="100" height="100" fit="contain" :position="pos"></cub-image>
        <div class="text">contain</div>
        <div class="text">{{ pos }}</div>
      </cub-col>

      <cub-col :span="8" v-for="pos in position1" :key="pos">
        <cub-image :src="src" width="100" height="100" fit="cover" :position="pos"></cub-image>
        <div class="text">cover</div>
        <div class="text">{{ pos }}</div>
      </cub-col>
    </cub-row>

    <h2>{{ translate('circle') }}</h2>
    <cub-row :gutter="10">
      <cub-col :span="8">
        <cub-image :src="src" width="100" height="100" fit="contain" round></cub-image>
        <div class="text">contain</div>
      </cub-col>
      <cub-col :span="8">
        <cub-image :src="src" width="100" height="100" fit="cover" round></cub-image>
        <div class="text">cover</div>
      </cub-col>
      <cub-col :span="8">
        <cub-image :src="src" width="100" height="100" fit="cover" radius="10" round></cub-image>
        <div class="text">cover</div>
      </cub-col>
    </cub-row>

    <h2>{{ translate('loading') }}</h2>
    <cub-cell>
      <cub-row :gutter="10">
        <cub-col :span="8">
          <cub-image width="100" height="100" show-loading></cub-image>
          <div class="text">默认</div>
        </cub-col>
        <cub-col :span="8">
          <cub-image width="100" height="100" show-loading>
            <template #loading>
              <Loading width="16px" height="16px" name="loading"></Loading>
            </template>
          </cub-image>
          <div class="text">自定义</div>
        </cub-col>
      </cub-row>
    </cub-cell>

    <h2>{{ translate('error') }}</h2>
    <cub-cell>
      <cub-row :gutter="10">
        <cub-col :span="8">
          <cub-image src="https://x" width="100" height="100" show-error></cub-image>
          <div class="text">默认</div>
        </cub-col>
        <cub-col :span="8">
          <cub-image src="https://x" width="100" height="100" show-loading>
            <template #error>
              <CircleClose width="16px" height="16px" name="circleClose"></CircleClose>
            </template>
          </cub-image>
          <div class="text">自定义</div>
        </cub-col>
      </cub-row>
    </cub-cell>

    <h2>{{ translate('lazy') }}</h2>
    <cub-cell>
      <cub-image :src="src + '?t=1'" lazy-load height="200" width="100%"></cub-image>
    </cub-cell>
    <cub-cell>
      <cub-image :src="src + '?t=2'" lazy-load height="200" width="100%"></cub-image>
    </cub-cell>
    <cub-cell>
      <cub-image :src="src + '?t=3'" lazy-load height="200" width="100%"></cub-image>
    </cub-cell>
    <cub-cell>
      <cub-image :src="src + '?t=4'" lazy-load height="200" width="100%"></cub-image>
    </cub-cell>
    <cub-cell>
      <cub-image :src="src + '?t=5'" lazy-load height="200" width="100%"></cub-image>
    </cub-cell>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { Loading, CircleClose } from '@cubfe/icons-vue';
const { translate } = createComponent('image');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      fill: '填充模式',
      position: '图片位置',
      circle: '圆形图片',
      loading: '加载中提示',
      error: '加载失败',
      lay: '懒加载'
    },
    'en-US': {
      basic: 'Basic Usage',
      fill: 'Object Fill',
      position: 'Object Position',
      circle: 'Round',
      loading: 'Loading',
      error: 'Error',
      lazy: 'Lazy Load'
    }
  });
export default defineComponent({
  components: {
    Loading,
    CircleClose
  },
  props: {},
  setup() {
    initTranslate();
    const src = ref('//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg');
    const fits = ref(['contain', 'cover', 'fill', 'none', 'scale-down']);
    const position1 = ref(['left', 'center', 'right']);
    const position2 = ref(['top', 'center', 'bottom']);
    return { translate, fits, position1, position2, src };
  }
});
</script>
<style lang="scss" scoped>
.demo {
  // background: #fff !important;
  .text {
    margin-top: 5px;
    text-align: center;
    color: #999;
  }

  .cub-row-flex-wrap {
    .cub-col {
      margin-bottom: 20px;
    }
  }
}
</style>

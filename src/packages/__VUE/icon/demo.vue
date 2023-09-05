<template>
  <div class="demo">
    <h2>{{ translate('svg') }}</h2>
    <cub-cell>
      <Add color="red" />
    </cub-cell>
    <h2>{{ translate('basic') }}</h2>
    <cub-cell>
      <IconFont name="dongdong" />
      <IconFont name="JD" />
    </cub-cell>
    <h2>{{ translate('imageLink') }}</h2>
    <cub-cell>
      <IconFont
        size="40"
        name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      >
      </IconFont>
    </cub-cell>
    <h2>{{ translate('iconColor') }}</h2>
    <cub-cell>
      <IconFont name="dongdong" color="#fa2c19" />
      <IconFont name="dongdong" color="#64b578" />
      <IconFont name="JD" color="#fa2c19" />
    </cub-cell>

    <h2>{{ translate('iconSize') }}</h2>
    <cub-cell>
      <IconFont name="dongdong" />
      <IconFont name="dongdong" size="24" />
      <IconFont name="dongdong" size="26" />
    </cub-cell>

    <cub-cell-group v-for="item in icons.data" :title="currentLang == 'zh-CN' ? item.name : item.nameEn" :key="item">
      <cub-cell>
        <ul>
          <li v-for="_item in item.icons" :key="_item">
            <IconFont :name="_item" @click="copyTag(_item)" />
            <span>{{ _item }}</span>
          </li>
        </ul>
      </cub-cell>
    </cub-cell-group>
    <cub-cell-group v-for="item in icons.style" :title="currentLang == 'zh-CN' ? item.name : item.nameEn" :key="item">
      <cub-cell>
        <ul>
          <li v-for="it in item.icons" :key="it">
            <IconFont
              :name="it.name"
              :class="`cub-icon-${it['animation-name']} cub-icon-${it['animation-time']}`"
              @click="copyTag(it['animation-name'])"
            >
            </IconFont>
            <span>{{ it['animation-name'] }}</span>
          </li>
        </ul>
      </cub-cell>
    </cub-cell-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTranslate, currentLang } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: 'IconFont 基础用法',
      svg: 'SVG 按需使用',
      imageLink: '图片链接',
      iconColor: '图标颜色',
      iconSize: '图标大小',
      copyToast: '复制成功'
    },
    'en-US': {
      basic: 'IconFont Basic Usage',
      svg: 'SVG import on demand',
      imageLink: 'Image Link',
      iconColor: 'Icon Color',
      iconSize: 'Icon Size',
      copyToast: 'Copied successfully'
    }
  });
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('icon');
import { showToast } from '@/packages/cubui.vue';
import { Add, IconFontConfig, IconFont } from '@cubfe/icons-vue';
export default defineComponent({
  components: { IconFont, Add },
  props: {},
  setup() {
    initTranslate();
    const copyTag = (name: string) => {
      const text = `<IconFont name="${name}"></IconFont>`;
      const displayText = `&lt;Icon name="${name}"&gt;&lt;/Icon&gt;`;
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.setAttribute('value', text);
      input.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
        showToast.text(`${translate('copyToast')}: <br/>${displayText}`);
      }
      document.body.removeChild(input);
    };
    return { icons: IconFontConfig, translate, currentLang, copyTag };
  }
});
</script>

<style lang="scss" scoped>
.cub-cell {
  > .cubui-iconfont {
    margin-right: 10px;
  }
}

ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;

  li {
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      height: 40px;
      font-size: 12px;
      text-align: center;
    }

    .cubui-iconfont {
      margin: 16px 0 16px;
    }
  }
}
</style>

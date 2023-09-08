<template>
  <view :class="classes">
    <cub-form :model-value="formValue" ref="formRef">
      <cub-form-item
        v-for="(item, index) of list"
        :key="index"
        :label="item.label"
        :required="item.required"
        :rules="item.rules"
        :prop="item.formItemProp"
      >
        <template v-if="item.type === 'radio'">
          <cub-radio-group v-model="formValue[item.formItemProp]">
            <cub-radio
              v-for="(radioItem, radioIndex) of item.radioLabel"
              :key="radioIndex"
              shape="button"
              :label="radioItem.label"
            >
              {{ radioItem.label }}
            </cub-radio>
          </cub-radio-group>
        </template>
        <template v-else>
          <input
            class="cub-input-text"
            :placeholder="item.placeholder"
            v-model="formValue[item.formItemProp]"
            type="text"
          />
        </template>
      </cub-form-item>
    </cub-form>
    <div v-if="submit" class="cub-invoice__submit">
      <cub-button type="primary" block @click="submitFun">提交审批</cub-button>
    </div>
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, computed, ref, onMounted, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Form from '../form/index.vue';
import FormItem from '../formitem/index.vue';
import Radio from '../radio/index.vue';
import RadioGroup from '../radiogroup/index.vue';
import Button from '../button/index.vue';
const { componentName, create } = createComponent('invoice');
export default create({
  components: {
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Button.name]: Button
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    formValue: {
      type: Object,
      default: {}
    },
    submit: {
      type: Boolean,
      default: true
    }
  },
  emits: ['onSubmit', 'scroll-bottom'],

  setup(props, { emit }) {
    const formRef = ref();

    const list: any = ref([]);

    const state = reactive({
      // list: []
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    onMounted(() => {
      init();
    });

    const init = () => {
      list.value = props.data;
    };

    const submitFun = () => {
      formRef.value.validate().then(({ valid, errors }: any) => {
        emit('onSubmit', valid, errors);
      });
    };

    watch(
      () => props.data,
      () => init(),
      { deep: true }
    );

    return {
      ...toRefs(state),
      classes,
      formRef,
      list,
      submitFun
    };
  }
});
</script>

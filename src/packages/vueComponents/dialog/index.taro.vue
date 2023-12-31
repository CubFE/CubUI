<template>
  <cub-popup
    :teleport="teleport"
    v-model:visible="showPopup"
    :close-on-click-overlay="false"
    :lock-scroll="lockScroll"
    :pop-class="popClass"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    :style="popStyle"
    round
    @click-overlay="onClickOverlay"
    @click-close-icon="closed"
  >
    <view :class="classes">
      <view v-if="$slots.header || title" class="cub-dialog__header">
        <slot v-if="$slots.header" name="header"></slot>
        <template v-else>{{ title }}</template>
      </view>

      <view class="cub-dialog__content" :style="contentStyle">
        <slot v-if="$slots.default" name="default"></slot>
        <view v-else-if="typeof content === 'string'" v-html="content"></view>
        <component v-else :is="content" />
      </view>

      <view class="cub-dialog__footer" :class="{ [footerDirection]: footerDirection }" v-if="!noFooter">
        <slot v-if="$slots.footer" name="footer"></slot>
        <template v-else>
          <cub-button
            size="small"
            plain
            type="primary"
            class="cub-dialog__footer-cancel"
            v-if="!noCancelBtn"
            @click="onCancel"
          >
            {{ cancelText || translate('cancel') }}
          </cub-button>
          <cub-button v-if="!noOkBtn" size="small" type="primary" class="cub-dialog__footer-ok" @click="onOk">
            {{ okText || translate('confirm') }}
          </cub-button>
        </template>
      </view>
    </view>
  </cub-popup>
</template>
<script lang="ts">
import { onMounted, computed, watch, ref, PropType, VNode, CSSProperties } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('dialog');
import Popup from '../popup/index.taro.vue';
import { popupProps } from '../popup/props';
import Button from '../button/index.taro.vue';
import { isPromise } from '@/packages/utils/util';
export default create({
  inheritAttrs: false,
  components: {
    [Popup.name]: Popup,
    [Button.name]: Button
  },
  props: {
    ...popupProps,
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: [String, Object] as PropType<string | VNode>,
      default: ''
    },
    noFooter: {
      type: Boolean,
      default: false
    },
    noOkBtn: {
      type: Boolean,
      default: false
    },
    noCancelBtn: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: ''
    },
    cancelAutoClose: {
      type: Boolean,
      default: true
    },
    textAlign: {
      type: String,
      default: 'center'
    },
    closeOnPopstate: {
      type: Boolean,
      default: false
    },
    footerDirection: {
      type: String,
      default: 'horizontal' //vertical
    },
    customClass: {
      type: String,
      default: ''
    },
    popStyle: {
      type: Object as PropType<CSSProperties>
    },
    beforeClose: {
      type: Function
    }
  },
  emits: ['update', 'update:visible', 'ok', 'cancel', 'opened', 'closed'],
  setup(props, { emit }) {
    const showPopup = ref(props.visible);
    onMounted(() => {
      if (props.closeOnPopstate) {
        window.addEventListener('popstate', function () {
          closed('page');
        });
      }
    });

    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
        if (value) {
          emit('opened');
        }
      }
    );

    const classes = computed(() => {
      return {
        [componentName]: true,
        [props.customClass]: true
      };
    });

    const update = (val: boolean) => {
      emit('update', val);
      emit('update:visible', val);
    };

    const closed = (action: string) => {
      if (props.beforeClose) {
        const result = props.beforeClose(action);
        if (isPromise(result)) {
          result.then((bool) => {
            if (bool) {
              update(false);
              emit('closed');
            } else {
              // 用户阻止删除
            }
          });
        }
      } else {
        update(false);
        emit('closed');
      }
    };

    const onCancel = () => {
      emit('cancel');
      if (props.cancelAutoClose) {
        closed('cancel');
      }
    };

    const onOk = () => {
      emit('ok');
      closed('ok');
    };

    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        closed('');
      }
    };

    const contentStyle = computed(() => {
      return {
        textAlign: props.textAlign
      } as CSSProperties;
    });

    return {
      closed,
      classes,
      onCancel,
      onOk,
      showPopup,
      onClickOverlay,
      contentStyle,
      translate
    };
  }
});
</script>

<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <cub-cell>
      <cub-countdown :endTime="end" @on-end="onend"></cub-countdown>
    </cub-cell>
    <h2>{{ translate('format') }}</h2>
    <cub-cell>
      <cub-countdown
        :endTime="end"
        :format="`DD ${translate('day')} HH ${translate('hour')} mm ${translate('minute')} ss ${translate('second')}`"
      />
    </cub-cell>

    <h2>{{ translate('millisecond') }}</h2>

    <cub-cell>
      <cub-countdown :endTime="end" millisecond format="HH:mm:ss:SS" />
    </cub-cell>

    <h2>{{ translate('serverTime') }}</h2>

    <cub-cell>
      <cub-countdown :startTime="serverTime" :endTime="end" />
    </cub-cell>

    <h2>{{ translate('async') }}</h2>

    <cub-cell>
      <cub-countdown :endTime="asyncEnd" />
    </cub-cell>

    <h2>{{ translate('controlTime') }}</h2>

    <cub-cell>
      <cub-countdown :endTime="end" :paused="paused" @on-paused="onpaused" @on-restart="onrestart" />
      <div style="position: absolute; right: 10px; top: 9px">
        <cub-button type="primary" size="small" @click="toggle">{{ paused ? 'start' : 'stop' }}</cub-button>
      </div>
    </cub-cell>

    <h2>{{ translate('customStyle') }}</h2>

    <cub-cell>
      <span>
        <cub-countdown v-model="resetTime" :endTime="end">
          <div class="countdown-part-box">
            <div class="part-item-symbol">{{ resetTime.d }}{{ translate('day') }}</div>
            <div class="part-item h">{{ resetTime.h }}</div>
            <span class="part-item-symbol">:</span>
            <div class="part-item m">{{ resetTime.m }}</div>
            <span class="part-item-symbol">:</span>
            <div class="part-item s">{{ resetTime.s }}</div>
          </div>
        </cub-countdown>
      </span>
    </cub-cell>

    <h2>{{ translate('handleControl') }}</h2>
    <cub-cell>
      <cub-countdown time="20000" ref="Countdown" :autoStart="false" format="ss:SS" />
    </cub-cell>

    <cub-grid :column-num="3">
      <cub-grid-item
        ><cub-button type="primary" @click="start">{{ translate('start') }}</cub-button></cub-grid-item
      >
      <cub-grid-item
        ><cub-button type="primary" @click="pause">{{ translate('pause') }}</cub-button></cub-grid-item
      >
      <cub-grid-item
        ><cub-button type="primary" @click="reset">{{ translate('reset') }}</cub-button></cub-grid-item
      >
    </cub-grid>
  </div>
</template>

<script lang="ts">
import { toRefs, onMounted, ref, reactive, defineComponent } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('countdown');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      format: '自定义格式',
      millisecond: '毫秒级渲染',
      serverTime: '以服务端的时间为准',
      async: '异步更新结束时间',
      controlTime: '控制开始和暂停的倒计时',
      customStyle: '自定义展示样式',
      handleControl: '手动控制',
      start: '开始',
      pause: '暂停',
      reset: '重置',
      day: '天',
      hour: '时',
      minute: '分',
      second: '秒'
    },
    'en-US': {
      basic: 'Basic Usage',
      format: 'Custom Format',
      millisecond: 'Millisecond',
      serverTime: 'Server Time Prevails',
      async: 'End-Time of Asyn Update',
      controlTime: 'Manual Control',
      customStyle: 'Custom Style',
      handleControl: 'Handle Control',
      start: 'Start',
      pause: 'Pause',
      reset: 'Reset',
      day: 'Day',
      hour: ':',
      minute: ':',
      second: ''
    }
  });
export default defineComponent({
  props: {},
  setup() {
    initTranslate();
    const Countdown = ref(null);
    const state = reactive({
      serverTime: Date.now() - 20 * 1000,
      end: Date.now() + 60 * 1000,
      starttime: Date.now(),
      asyncEnd: 0,
      paused: false,
      resetTime: {
        d: '1',
        h: '00',
        m: '00',
        s: '00'
      }
    });

    const toggle = () => {
      state.paused = !state.paused;
    };
    const onend = () => {
      console.log('countdown: ended.');
    };
    const onpaused = (v) => {
      console.log('paused: ', v);
    };
    const onrestart = (v) => {
      console.log('restart: ', v);
    };
    const start = () => {
      Countdown.value.start();
    };

    const pause = () => {
      Countdown.value.pause();
    };

    const reset = () => {
      Countdown.value.reset();
    };
    onMounted(() => {
      console.log(Countdown.value);
    });

    setTimeout(() => {
      state.asyncEnd = Date.now() + 30 * 1000;
    }, 3000);

    return {
      ...toRefs(state),
      toggle,
      onend,
      onpaused,
      onrestart,
      Countdown,
      start,
      pause,
      reset,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.countdown-part-box {
  display: flex;
  align-items: center;

  .part-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 25px;
    background: #e8220e;
    color: #fff;
    font-size: 14px;
    border-radius: 6px;
  }

  .part-item-symbol {
    margin: 0 5px;
  }
}
</style>

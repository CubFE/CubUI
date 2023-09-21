import { mount } from '@vue/test-utils';
import { nextTick, toRefs, reactive } from 'vue';
import Countdown from '../index.vue';
import Button from '../../button/index.vue';
import { sleep } from '@/packages/utils/unit';

test('endTime props', async () => {
  const wrapper = mount(Countdown, {
    props: {
      endTime: Date.now() + 1 * 50
    }
  });
  expect(wrapper.emitted('on-end')).toBeFalsy();
  await sleep(51);
  expect(wrapper.emitted('on-end')).toBeTruthy();
});

test('format props', async () => {
  const wrapper = mount(Countdown, {
    props: {
      endTime: Date.now() + 1 * 50,
      format: 'DD天HH时mm分ss秒'
    }
  });
  await nextTick();
  expect(wrapper.find('.cub-countdown__content').exists()).toBeTruthy();
  const prevSnapShot = wrapper.find('.cub-countdown__content');
  expect(prevSnapShot.text() == '00天00时00分00秒').toBe(true);
});

test('paused props', async () => {
  const wrapper = mount({
    components: {
      'cub-countdown': Countdown,
      'cub-button': Button
    },
    template: `
      <cub-countdown  :endTime="endTime" :paused="paused" />
      <cub-button  @click="toggle">{{ paused ? 'start' : 'stop' }}</cub-button>
    `,
    setup() {
      const state = reactive({
        endTime: Date.now() + 1 * 50,
        paused: false
      });

      const toggle = () => {
        state.paused = !state.paused;
      };

      return { ...toRefs(state), toggle };
    }
  });

  const button = wrapper.find('.cub-button');
  const prevSnapShot = wrapper.find('.cub-countdown').html();
  await button.trigger('click');
  await nextTick();
  const laterShapShot = wrapper.find('.cub-countdown').html();
  expect(button.text() == 'start').toBe(true);
  expect(prevSnapShot === laterShapShot).toBeTruthy();
});

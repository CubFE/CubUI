import { config, mount } from '@vue/test-utils';
import { nextTick, toRefs, reactive } from 'vue';
import Audio from '../index.vue';
import AudioOperate from '../../audiooperate/index.vue';

beforeAll(() => {
  config.global.components = {
    AudioOperate
  };
});

afterAll(() => {
  config.global.components = {};
});

test('audio init render', async () => {
  const wrapper = mount(Audio, {
    props: {
      type: 'icon',
      url: '//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav'
    }
  });
  await nextTick();
  expect(wrapper.find('.cub-audio__icon').exists()).toBeTruthy();
});

test('audio init render', async () => {
  const wrapper = mount({
    components: {
      'cub-audio': Audio,
      'cub-audio-operate': AudioOperate
    },
    template: `
    <cub-audio
        url="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
        :muted="muted"
        :autoplay="autoplay"
        :loop="false"
        type="progress"
        @forward="forward"
      >
      <div class="cub-audio-operate-group">
        <cub-audio-operate type="forward"></cub-audio-operate>
        <cub-audio-operate type="back"></cub-audio-operate>
        <cub-audio-operate type="play"></cub-audio-operate>
        
        <cub-audio-operate type="mute"></cub-audio-operate>
      </div>
      </cub-audio>

      <div>{{time}}</div>
    `,
    setup() {
      const data = reactive({
        muted: false,
        autoplay: false,
        time: 0
      });
      const forward = (p: any) => {
        data.time = p;
      };

      return { ...toRefs(data), forward };
    }
  });
  await nextTick();
  expect(wrapper.find('.cub-audio-operate-item').exists()).toBeTruthy();
  wrapper.find('.cub-audio-operate-item').trigger('click');
  await nextTick();
  expect(wrapper.vm.time).toBe(1);
});

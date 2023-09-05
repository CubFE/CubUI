import { mount } from '@vue/test-utils';
import Checkbox from '../index.vue';
import { reactive, toRefs } from 'vue';

test('basic usage', () => {
  const wrapper = mount(Checkbox, {
    props: {
      modelValue: '',
      label: '复选框'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('checkbox disabled test', async () => {
  const wrapper = mount({
    components: {
      'cub-checkbox': Checkbox
    },
    template: `
      <template>
        <cub-checkbox v-model="checkbox1" disabled>未选时禁用状态</cub-checkbox>
      </template>
    `,
    setup() {
      const state = reactive({
        checkbox1: true
      });
      return { ...toRefs(state) };
    }
  });

  const items = wrapper.findAll('.cub-checkbox');

  await items[0].trigger('click');
  expect(wrapper.vm.checkbox1).toEqual(true);
  expect(wrapper.find('.cub-checkbox__icon--disable')).toBeTruthy();
});

test('checkbox text-position test', () => {
  const wrapper = mount({
    components: {
      'cub-checkbox': Checkbox
    },
    template: `
      <template>
        <cub-checkbox v-model="checkbox1">right</cub-checkbox>
        <cub-checkbox v-model="checkbox2" text-position="left">left</cub-checkbox>
      </template>
    `,
    setup() {
      const state = reactive({
        checkbox1: true,
        checkbox2: true
      });
      return { ...toRefs(state) };
    }
  });

  const items = wrapper.findAll('.cub-checkbox');
  expect((items[1] as any).find('.cub-checkbox--reverse')).toBeTruthy();
});

test('checkbox icon-size test', () => {
  const wrapper = mount({
    components: {
      'cub-checkbox': Checkbox
    },
    template: `
      <template>
        <cub-checkbox v-model="checkbox5" icon-size="25">自定义尺寸25</cub-checkbox>
        <cub-checkbox v-model="checkbox6" icon-size="10">自定义尺寸10</cub-checkbox>
      </template>
    `,
    setup() {
      const state = reactive({
        checkbox5: true,
        checkbox6: true
      });
      return { ...toRefs(state) };
    }
  });

  const items = wrapper.findAll('.cub-checkbox');
  expect((items[0].findAll('svg') as any)[0].element.style.width).toEqual('25px');
  expect((items[1].findAll('svg') as any)[0].element.style.height).toEqual('10px');
});

test('should emit "update:modelValue" event when checkbox is clicked', async () => {
  const wrapper = mount(Checkbox);

  wrapper.trigger('click');
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);

  await wrapper.setProps({ modelValue: true });
  wrapper.trigger('click');
  expect(wrapper.emitted('update:modelValue')![1]).toEqual([false]);
});

test('checkbox shape test', async () => {
  const wrapper = mount({
    components: {
      'cub-checkbox': Checkbox
    },
    template: `
      <template>
        <cub-checkbox shape="button"></cub-checkbox>
        <cub-checkbox></cub-checkbox>
      </template>
    `
  });

  const items = wrapper.findAll('.cub-checkbox');

  expect((items[0] as any).find('.cub-checkbox__button').exists()).toBeTruthy();
  expect((items[1] as any).find('.cub-checkbox__button').exists()).toBeFalsy();
});

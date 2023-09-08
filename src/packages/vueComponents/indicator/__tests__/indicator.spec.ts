import { mount } from '@vue/test-utils';
import Indicator from '../index.vue';

test('Indicator: should be shown when passing size and current', async () => {
  const wrapper = mount(Indicator, {
    props: {
      size: 5,
      current: 3
    }
  });

  expect(wrapper.findAll('.cub-indicator--dot').length).toBe(4);
  expect(wrapper.findAll('.cub-indicator--number').length).toBe(1);
  const number = wrapper.find(':nth-of-type(3)');
  expect(number.classes()).toContain('cub-indicator--number');
});

test('Indicator: should be shown when passing block and align and fillZero', () => {
  const wrapper = mount(Indicator, {
    props: {
      size: 5,
      current: 3,
      block: true,
      align: 'right',
      fillZero: false
    }
  });

  const indicator = wrapper.find('.cub-indicator');
  expect(indicator.classes()).toContain('cub-indicator--block');
  expect(indicator.classes()).toContain('cub-indicator--align__right');
  const firstChild = wrapper.findAll('.cub-indicator--number')[0];
  expect(firstChild.text()).toBe('3');
});

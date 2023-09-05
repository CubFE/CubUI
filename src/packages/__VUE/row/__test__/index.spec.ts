import Row from '../index.vue';
import { mount } from '@vue/test-utils';

test('should add "cub-row-flex-nowrap" class when wrap prop is false', () => {
  const wrapper = mount(Row, {
    props: {
      wrap: 'nowrap'
    }
  });
  expect(wrapper.classes()).toContain('cub-row-flex-nowrap');
});

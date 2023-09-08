import { mount } from '@vue/test-utils';
import Skeleton from '../index.vue';

test('should render with row‘s father content width correctly', () => {
  const wrapper = mount(Skeleton, {
    props: {
      width: '100px'
    }
  });
  const skeleton: any = wrapper.find('.cub-skeleton-content__line');
  expect(skeleton.element.style.width).toBe('100px');
});

test('should allow to disable animation', async () => {
  const wrapper = mount(Skeleton, {
    props: {
      row: '1'
    }
  });

  expect(wrapper.find('.cub-skeleton').exists()).toBeTruthy();

  await wrapper.setProps({ animated: false });
  expect(wrapper.find('.skeleton-animation').exists()).toBeFalsy();
});

test('should change avatar size when using avatarSize prop', () => {
  const wrapper = mount(Skeleton, {
    props: {
      avatar: true,
      avatarSize: '20px'
    }
  });

  const avatar: any = wrapper.find('.avatarClass');
  expect(avatar.element.style.width).toMatchSnapshot('20px');
  expect(avatar.element.style.height).toMatchSnapshot('20px');
});

test('should change avatar shape when using avatarShape prop', () => {
  const wrapper = mount(Skeleton, {
    props: {
      avatar: true,
      avatarShape: 'square'
    }
  });
  expect(wrapper.find('.avatarClass').html()).toMatchSnapshot();
});

test('should be round when using round prop', () => {
  const wrapper = mount(Skeleton, {
    props: {
      title: true,
      round: true,
      avatar: true
    }
  });
  expect(wrapper.find('.avatarClass').exists()).toBeTruthy();
});

test('should render default slot', () => {
  const wrapper = mount(Skeleton, {
    slots: {
      default: 'default'
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render correctly when title uses false', () => {
  const wrapper = mount(Skeleton, {
    props: {
      title: false,
      row: '1'
    }
  });

  const content = wrapper.find('.cub-skeleton-content__line');

  expect(content.find('.cub-skeleton-blockTitle').exists()).toBeFalsy();
  expect(content.findAll('.cub-skeleton-blockLine').length).toBe(1);
});

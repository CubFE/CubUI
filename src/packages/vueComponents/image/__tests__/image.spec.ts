import { config, mount } from '@vue/test-utils';
import ImagePage from '../index.vue';
import { Loading, CloseCircle, Image, ImageError } from '@cubfe/icons-vue';
beforeAll(() => {
  config.global.components = {
    Loading,
    CloseCircle,
    Image,
    ImageError
  };
});

afterAll(() => {
  config.global.components = {};
});

test('ImagePage render', async () => {
  const wrapper = mount(ImagePage, {
    props: {
      src: 'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg',
      width: '100',
      height: '100',
      showLoading: false
    }
  });
  await wrapper.find('img').trigger('load');
  expect(wrapper.html()).toMatchSnapshot();
});

test('ImagePage load error', async () => {
  const wrapper = mount(ImagePage, {
    props: {
      src: 'https://x',
      width: '100',
      height: '100',
      showError: true
    }
  });
  await wrapper.find('img').trigger('error');
  expect(wrapper.find('.cub-img-error').exists()).toBeTruthy();
  expect(wrapper.html()).toMatchSnapshot();
});

test('ImagePage loading', async () => {
  const wrapper = mount(ImagePage, {
    props: {
      src: '',
      width: '100',
      height: '100',
      showLoading: true
    }
  });
  // await wrapper.find('img').trigger('load');
  expect(wrapper.find('.cub-img-loading').exists()).toBeTruthy();
  expect(wrapper.html()).toMatchSnapshot();
});

test('ImagePage render Round', async () => {
  const wrapper = mount(ImagePage, {
    props: {
      src: 'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg',
      width: '100',
      height: '100',
      round: true
    }
  });
  await wrapper.find('img').trigger('load');
  expect(wrapper.find('.cub-image-round').exists()).toBeTruthy();
  expect(wrapper.html()).toMatchSnapshot();
});

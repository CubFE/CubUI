import { mount } from '@vue/test-utils';
import ImagePreview from '../index.vue';
import { nextTick } from 'vue';
import { sleep } from '@/packages/utils/unit';

const images = [
  {
    src: 'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'
  },
  {
    src: 'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'
  },
  {
    src: 'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'
  },
  {
    src: 'https://oss.netconcepts.cn/website/assets/media/wap/blog-wap-bg-1.jpg'
  }
];

test('basic usage test', async () => {
  const wrapper = mount(ImagePreview, {
    props: {
      show: true,
      images
    }
  });
  await nextTick();
  expect((wrapper.find('.cub-image-preview-custom-pop').element as any).style.display).toEqual('');
});

test('test autoplay', async () => {
  const wrapper = mount(ImagePreview, {
    props: {
      show: true,
      images,
      autoplay: 3000
    }
  });

  await nextTick();

  expect(wrapper.vm.active).toBe(0);

  setTimeout(() => {
    expect(wrapper.vm.active).toBe(1);
  }, 3000);
});

test('init page No.', async () => {
  const wrapper = mount(ImagePreview, {
    props: {
      show: true,
      images,
      initNo: 3
    }
  });
  await nextTick();
  expect(wrapper.find('.cub-image-preview-index').text()).toEqual('4 / 4');
});

test('customize pagination and color', async () => {
  const wrapper = mount(ImagePreview, {
    props: {
      show: true,
      images,
      paginationVisible: true,
      paginationColor: 'red'
    }
  });
  await nextTick();
  const swiperPagination = wrapper.find('.cub-swiper-pagination');
  expect(swiperPagination.exists()).toBe(true);
  expect(swiperPagination.findAll('i')[0].element.style.backgroundColor).toEqual('red');
});

test('dynamic images', async () => {
  const wrapper = mount(ImagePreview, {
    props: {
      show: true,
      images: []
    }
  });
  await nextTick();
  wrapper.setProps({
    images
  });
  await sleep(1);
  expect((wrapper.find('.cub-swiper-inner').element as any).style.transform).toEqual('translateX(0px)');
});

import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import Address from '../index.vue';
import { addressListData, addressExistData } from '../address-list';
import { mockElementMethod, sleep } from '@/packages/utils/unit';

mockElementMethod(Element, 'scrollTo');

test('Address: address render', async () => {
  const wrapper = mount(Address, {
    props: {
      visible: true,
      province: addressListData.province,
      city: addressListData.city,
      country: addressListData.country,
      town: addressListData.town
    }
  });
  await nextTick();
  expect(wrapper.find('.cub-address__header-close').exists()).toBeTruthy();
  expect(wrapper.findAll('.cub-address__detail-item').length).toBe(5);
});

test('Address: choose address item', async () => {
  const wrapper = mount(Address, {
    props: {
      visible: true,
      province: addressListData.province,
      city: addressListData.city,
      country: addressListData.country,
      town: addressListData.town
    },
    global: {
      stubs: {
        teleport: true
      }
    }
  });
  const fn = mockElementMethod(Element, 'scrollTo');
  expect(wrapper.html()).toMatchSnapshot();
  expect(wrapper.find('.cub-address__region-item').text()).toEqual('请选择');
  wrapper.find('.cub-address__detail-item').trigger('click');
  await sleep(0);
  expect(fn).toBeCalled();
});

test('Address: default choose address', async () => {
  const wrapper = mount(Address, {
    props: {
      modelValue: [1, 7, 3],
      visible: true,
      province: addressListData.province,
      city: addressListData.city,
      country: addressListData.country,
      town: addressListData.town
    }
  });
  wrapper.vm.initCustomSelected();
  await nextTick();
  expect(wrapper.findAll('.cub-address__region-item ')[0].text()).toEqual('北京');
  expect(wrapper.findAll('.cub-address__region-item ')[1].text()).toEqual('朝阳区');
  expect(wrapper.findAll('.cub-address__region-item ')[2].text()).toEqual('八里庄街道');
});

test('Address: Exist address', async () => {
  const wrapper = mount(Address, {
    props: {
      type: 'exist',
      visible: true,
      existAddress: addressExistData,
      isShowCustomAddress: false
    }
  });
  await nextTick();
  expect(wrapper.find('.choose-other').exists()).toBeFalsy();
  expect(wrapper.findAll('.cub-address__exist-group-item').length).toBe(3);
});

test('Address: Exist address choose event', async () => {
  const wrapper = mount(Address, {
    props: {
      type: 'exist',
      visible: true,
      existAddress: addressExistData
    }
  });
  await nextTick();
  wrapper.find('.cub-address__exist-group-item').trigger('click');
  const chooseAddress = wrapper.emitted().selected[0];
  expect((chooseAddress as []).length).toBe(3);
});

test('Address: Exist address & list address', async () => {
  const wrapper = mount(Address, {
    props: {
      type: 'exist',
      visible: true,
      existAddress: addressExistData,
      province: addressListData.province,
      city: addressListData.city,
      country: addressListData.country,
      town: addressListData.town
    }
  });
  await nextTick();
  const changeBtn = wrapper.find('.cub-address__exist-choose-btn');
  expect(changeBtn.exists()).toBeTruthy();

  changeBtn.trigger('click');
  await nextTick();
  expect(wrapper.find('.cub-address__header-back').exists()).toBeTruthy();
  expect(wrapper.find('.cub-address__custom').exists()).toBeTruthy();
});

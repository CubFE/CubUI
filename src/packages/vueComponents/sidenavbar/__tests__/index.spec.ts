import { mount } from '@vue/test-utils';
import SideNavBar from '../index.vue';
import SideNavBarItem from '../../sidenavbaritem/index.vue';
import SubSideNavBar from '../../subsidenavbar/index.vue';
import { nextTick } from 'vue';

const template = `
<cub-side-navbar offset="30">
  <cub-sub-side-navbar title="智能城市AI" ikey="6">
    <cub-sub-side-navbar title="人体识别1" ikey="9" :open="false">
      <cub-side-navbar-item ikey="10" title="人体检测1"></cub-side-navbar-item>
      <cub-side-navbar-item ikey="11" title="细粒度人像分割1"></cub-side-navbar-item>
    </cub-sub-side-navbar>
    <cub-sub-side-navbar title="人体识别2" ikey="12">
      <cub-side-navbar-item ikey="13" title="人体检测2"></cub-side-navbar-item>
      <cub-side-navbar-item ikey="14" title="细粒度人像分割2"></cub-side-navbar-item>
    </cub-sub-side-navbar>
  </cub-sub-side-navbar>
</cub-side-navbar>
`;

test('render offset props', async () => {
  const wrapper = mount({
    components: {
      'cub-side-navbar': SideNavBar,
      'cub-side-navbar-item': SideNavBarItem,
      'cub-sub-side-navbar': SubSideNavBar
    },
    template,
    setup: () => {}
  });

  await nextTick();

  const subSideNavBar = wrapper.findAll('.cub-sub-side-navbar__title');

  expect((subSideNavBar[0].element as HTMLElement).style.paddingLeft).toEqual('30px');
  expect((subSideNavBar[1].element as HTMLElement).style.paddingLeft).toEqual('60px');
  expect((subSideNavBar[2].element as HTMLElement).style.paddingLeft).toEqual('60px');
});

test('render subsidenavbar open props', async () => {
  const wrapper = mount({
    components: {
      'cub-side-navbar': SideNavBar,
      'cub-side-navbar-item': SideNavBarItem,
      'cub-sub-side-navbar': SubSideNavBar
    },
    template,
    setup: () => {}
  });

  await nextTick();

  const subSideNavBar = wrapper.findAll('.cub-sub-side-navbar__list');

  expect((subSideNavBar[1].element as HTMLElement).style.height).toEqual('0px');
});

test('subsidenavbar trigger click', async () => {
  const wrapper = mount({
    components: {
      'cub-side-navbar': SideNavBar,
      'cub-side-navbar-item': SideNavBarItem,
      'cub-sub-side-navbar': SubSideNavBar
    },
    template
  });

  await nextTick();

  const subSideNavBarTitle = wrapper.findAll('.cub-sub-side-navbar__title');
  const subSideNavBarList = wrapper.findAll('.cub-sub-side-navbar__list');

  await subSideNavBarTitle[0].trigger('click');
  await nextTick();

  expect((subSideNavBarList[0].element as HTMLElement).style.height).toEqual('0px');
});

import { mount } from '@vue/test-utils';
import Checkboxgroup from '../index.vue';
import Checkbox from '../../checkbox/index.vue';
import { reactive, toRefs } from 'vue';

test('checkbox-group basic usage', async () => {
  const wrapper = mount({
    components: {
      'cub-checkbox-group': Checkboxgroup,
      'cub-checkbox': Checkbox
    },
    template: `
      <template>
        <cub-checkbox-group v-model="checkboxgroup1">
          <cub-checkbox label="1">组合复选框</cub-checkbox>
          <cub-checkbox label="2">组合复选框</cub-checkbox>
          <cub-checkbox label="3">组合复选框</cub-checkbox>
          <cub-checkbox label="4">组合复选框</cub-checkbox>
        </cub-checkbox-group>
      </template>
    `,
    setup() {
      const state = reactive({
        checkboxgroup1: []
      });
      return { ...toRefs(state) };
    }
  });

  const items = wrapper.findAll('.cub-checkbox');

  await items[0].trigger('click');
  expect(wrapper.vm.checkboxgroup1).toEqual(['1']);
});

test('checkbox-group disabled test', async () => {
  const wrapper = mount({
    components: {
      'cub-checkbox-group': Checkboxgroup,
      'cub-checkbox': Checkbox
    },
    template: `
      <template>
        <cub-checkbox-group v-model="checkboxgroup1" disabled>
          <cub-checkbox label="1">组合复选框</cub-checkbox>
          <cub-checkbox label="2">组合复选框</cub-checkbox>
          <cub-checkbox label="3">组合复选框</cub-checkbox>
          <cub-checkbox label="4">组合复选框</cub-checkbox>
        </cub-checkbox-group>
      </template>
    `,
    setup() {
      const state = reactive({
        checkboxgroup1: []
      });
      return { ...toRefs(state) };
    }
  });

  const items = wrapper.findAll('.cub-checkbox');

  await items[0].trigger('click');
  expect(wrapper.vm.checkboxgroup1).toEqual([]);
  expect(wrapper.find('.cub-checkbox__icon--disable')).toBeTruthy();
});

// test('checkbox-group change event test',async () => {
//   const wrapper = mount({
//     components: {
//       'cub-checkbox-group': Checkboxgroup,
//       'cub-checkbox': Checkbox
//     },
//     template: `
//       <template>
//         <cub-checkbox-group v-model="checkboxgroup1" @change="">
//           <cub-checkbox label="1">组合复选框</cub-checkbox>
//           <cub-checkbox label="2">组合复选框</cub-checkbox>
//           <cub-checkbox label="3">组合复选框</cub-checkbox>
//           <cub-checkbox label="4">组合复选框</cub-checkbox>
//         </cub-checkbox-group>
//       </template>
//     `,
//     setup() {
//       const state = reactive({
//         checkboxgroup1: [],
//       });
//       return { ...toRefs(state) };
//     }
//   });

//   const items = wrapper.findAll('.cub-checkbox');

//   await items[0].trigger('click');
//   // expect(wrapper.vm.checkboxgroup1).toEqual(['1']);
//   expect(wrapper.emitted('change')![0]).toEqual(['1']);
// });

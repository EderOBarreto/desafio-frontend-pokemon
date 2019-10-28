import { storiesOf } from '@storybook/vue';

import PokSelect from '~/shared/components/PokSelect.vue';

storiesOf('PokSelect', module).add('default', () => ({
  components: { PokSelect },
  props: {
    options: {
      default: [
        {label:'1', value: '1'},
        {label:'2', value: '2'},
        {label:'3', value: '3'},
        {label:'4', value: '4'},
        {label:'5', value: '5'},
        {label:'6', value: '6'},
        {label:'7', value: '7'},
      ]
    },
    placeholder: {
      default: "Teste",
    },
    value: {
      default: null,
    }
  },
  template: '<pok-select :options="options" :placeholder="placeholder" :model.sync="value"/>',
}));

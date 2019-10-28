import { storiesOf } from '@storybook/vue';

import PokButton from '../shared/components/PokButton.vue';

storiesOf('PokButton', module).add('default', () => ({
  components: { PokButton },
  template: '<pok-button>Test</pok-button>',
}));

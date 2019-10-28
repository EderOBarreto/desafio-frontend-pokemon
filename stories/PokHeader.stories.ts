import { storiesOf } from '@storybook/vue';

import PokHeader from '~/components/layout/header/PokHeader.vue';

storiesOf('PokHeader', module).add('default', () => ({
  components: { PokHeader },
  template: '<pok-header />',
}));

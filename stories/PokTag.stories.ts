import { storiesOf } from '@storybook/vue';

import PokTag from '~/shared/components/PokTag.vue';

storiesOf('PokTag', module).add('default', () => ({
  components: {PokTag},
  template: '<pok-tag pokemon-type="grass"/>'
}));

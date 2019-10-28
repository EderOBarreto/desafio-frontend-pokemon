import { storiesOf } from '@storybook/vue';

import PokFavorite from '~/shared/components/PokFavorite.vue';

storiesOf('PokFavorite', module).add('default', () => ({
  components: { PokFavorite },
  template: '<PokFavorite/>',
}));

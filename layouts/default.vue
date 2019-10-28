<template>
  <div class="pokemon-content">
    <header>
      <pok-header />
    </header>
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PokHeader from '~/components/layout/header/PokHeader.vue';

@Component({
  components: { PokHeader },
})
class Default extends Vue {}
export default Default;
</script>

<style lang="scss" scoped>
@import '~/assets/scss/settings/measures.scss';
.pokemon-content {
  > .content {
    padding-top: $headerHeight;
    min-height: calc(100vh - #{$headerHeight});
  }
}
</style>

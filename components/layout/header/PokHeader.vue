<template>
  <ul class="pok-header">
    <li class="brand">
      <nuxt-link class="link" to="/">
        <img src="@/assets/icons/pokemon_lg.png" alt="Pokemon" class="icon">
      </nuxt-link>
    </li>
  </ul>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
class PokHeader extends Vue {

}

export default PokHeader;
</script>

<style lang="scss" scoped>
@import '~/assets/scss/settings/measures.scss';
@import '~/assets/scss/settings/colors.scss';
  .pok-header {
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    align-items: center;
    width: 100vw;
    height: $headerHeight;
    padding: 0;
    margin: 0;
    background-color: $white;
    z-index: 5;
  }
  .pok-header > .brand > .link > .icon {
    height: 55px;
    width: auto;
  }
</style>

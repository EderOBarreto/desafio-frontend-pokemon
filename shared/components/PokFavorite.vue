<template>
  <span class="pok-favorite">

  </span>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
class PokFavorite extends Vue {
}

export default PokFavorite;
</script>

<style lang="scss" scoped>
  .pok-favorite {
    cursor: pointer;
  }
</style>

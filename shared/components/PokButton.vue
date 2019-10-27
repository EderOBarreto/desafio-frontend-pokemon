<template>
  <button>
    <slot/>
  </button>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
class PokButton extends Vue {}

export default PokButton;
</script>

<style lang="scss" scoped>

</style>

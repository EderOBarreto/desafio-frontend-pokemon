<template>
  <div class="pok-select" @click="showOptions()">
    <div class="label" v-html="showValue"/>
    <ul :class="['options', {'-open': optionsOpened}]">
      <li
        class="item"
        v-for="option in options"
        @click="setValue(option.value)"
        :key="option.label"
      >{{option.label}}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator';

@Component<PokSelect>({
  computed: {
    showValue: function() {
      if (this.placeholder && !this.selectedValue) {
        return this.placeholder;
      }
      return this.selectedValue;
    },
  },
})
class PokSelect extends Vue {
  @Prop({ default: [] }) options!: any;
  @Prop({ default: '' }) placeholder?: string;
  @PropSync('model', {type: String}) selectedValue!: String;
  optionsOpened = false;

  setValue(value: string) {
    this.selectedValue = value;
  }

  showOptions() {
    this.optionsOpened = !this.optionsOpened;
  }
}

export default PokSelect;
</script>

<style lang="scss" scoped>
@import '~/assets/scss/settings/colors.scss';
.pok-select {
  display: inline-block;
  min-width: 100px;
  font-family: inherit;
  font-size: 17px;
  font-weight: 600;
  height: 40px;
  border-radius: 20px;
  color: $white;
  background-color: $shamrock;
  cursor: pointer;

  & > .label {
    padding: 0 20px;
    line-height: 40px;
    user-select: none;
    z-index: 2;
  }

  & > .options {
    visibility: hidden;
    transform: translate3d(0,-100%,0);
    transition: transform 0.3s ease;

    &.-open {
      visibility: visible;
      min-width: inherit;
      display: block;
      margin: 5px 0px 0px;
      padding: 0;
      max-height: 160px;
      line-height: 40px;
      text-align: left;
      background-color: $shamrock;
      border-radius: 5px;
      overflow: scroll;
      transform: translate3d(0,0,0);

      > .item {
        z-index: 2;
        padding: 0 5px;
       &:hover {
          background-color: darken($shamrock, 10);
       }
      }
    }
  }
}
</style>

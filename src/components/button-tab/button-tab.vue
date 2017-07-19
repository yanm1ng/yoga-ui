<template>
  <div class="yui-button-tab">
    <slot></slot>
  </div>
</template>

<script>
import { parentMixin } from 'mixins/multi-items'

export default {
  mixins: [parentMixin],
  props: {
    color: {
      type: String,
      default: '#108ee9'
    }
  },
  watch: {
    currentIndex(newVal, oldVal) {
      this.$emit('on-change', newVal, oldVal)
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
.yui {
  &-btn-tab {
    display: flex;
    text-align: center;
    position: relative;
    &:before {
      position: absolute;
      border: 1px solid #c5cdd8;
      width: 200%;
      height: 200%;
      transform: scale(.5);
      left: -50%;
      top: -50%;
    }
  }
}
</style>

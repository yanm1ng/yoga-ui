<template>
  <div class="yui-button-tab">
    <slot></slot>
  </div>
</template>

<script>
import { parentMixin } from 'mixins/multi-items'

export default {
  name: 'button-tab',
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
  &-button-tab {
    display: flex;
    text-align: center;
    position: relative;
    margin: 0 20px;
    user-select: none;
    &:after {
      content: '';
      position: absolute;
      box-sizing: border-box;
      border: 1px solid $border-color;
      border-radius: 32px;
      width: 200%;
      height: 200%;
      transform: scale(.5);
      left: -50%;
      top: -50%;
    }
    & > a {
      z-index: 100;
      display: block;
      position: relative;
      padding: 0;
      flex: 1;
      font-size: 14px;
      line-height: 32px;
      text-align: center;
      text-decoration: none;
    }
  }
}
</style>

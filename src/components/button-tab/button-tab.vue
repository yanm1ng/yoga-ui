<template>
  <div class="yui-button-tabs">
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
  &-button-tabs {
    display: flex;
    text-align: center;
    position: relative;
    margin: 0 20px;
    user-select: none;
    & > a {
      z-index: 200;
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

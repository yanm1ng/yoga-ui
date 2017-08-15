<template>
  <footer class="yui-tab-bar">
    <slot></slot>
  </footer>
</template>

<script>
import { parentMixin } from 'mixins/multi-items'

export default {
  name: 'tab-bar',
  mixins: [parentMixin],
  props: {
    color: {
      type: String,
      default: '#108ee9'
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-tab-bar {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 5px;
    background-color: $white-color;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      border-top: 1px solid $border-color;
      transform: scaleY(0.5);
    }
  }
}
</style>

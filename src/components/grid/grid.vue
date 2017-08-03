<template>
  <div class="yui-grids">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'grid',
  props: {
    rows: {
      type: Number,
      default: 3
    },
    title: String
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-grids {
    position: relative;
    overflow: hidden;
    width: 100%;
    &:first-child {
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 200;
        border-top: 1px solid $border-color;
        transform-origin: 0 0;
        transform: scaleY(0.5);
      }
    }
  }
}
</style>
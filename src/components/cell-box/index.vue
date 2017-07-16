<template>
  <div>
    <div class="yui-cells-title">{{ title }}</div>
    <div class="yui-cells">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
.yui {
  &-cells {
    position: relative;
    margin-top: 10px;
    &-title {
      margin-top: 10px;
      padding-left: 15px;
      padding-right: 15px;
      color: $grey-color;
      font-size: 14px;
    }
    &:after, &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      transform-origin: 0 0;
      transform: scaleY(0.5);
    }
    &:before {
      top: -1px;
      border-top: 1px solid $border-color;
    }
    &:after {
      bottom: -1px;
      border-bottom: 1px solid $border-color;
    }
  }
}
</style>

<template>
  <p class="yui-divider">
    <span class="yui-divider-bar"></span>
    <span class="yui-divider-content">
      <slot></slot>
    </span>
    <span class="yui-divider-bar"></span>
  </p>
</template>

<script>
export default {
  name: 'divider'
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-divider {
    font-size: 14px;
    overflow: hidden;
    text-align: center;
    padding: 10px 0;
    color: $grey-color;
    position: relative;
    display: flex;
    align-items: center;
    &-bar {
      flex: 1;
      height: 1px;
      background-color: $border-color;
      transform: scaleY(0.5);
    }
    &-content {
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: auto;
      max-width: 200px;
      padding: 0 10px;
    }
  }
}
</style>


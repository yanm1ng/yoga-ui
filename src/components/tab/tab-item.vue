<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    selected: Boolean
  },
  computed: {
    classes() {
      return [
        `yui-tab-item`,
        {
          'yui-tab-selected': this.selected,
          'yui-tab-disabled': this.disabled
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
.yui-tab {
  &-item {
    box-sizing: border-box;
    flex: 1;
    font-size: 14px;
    line-height: 0.88rem;
    text-align: center;
    color: $dark-color;
  }
  &-selected {
    color: $primary-color;
  }
  &-disabled {
    cursor: not-allowed;
    color: $grey-color;
  }
}
</style>

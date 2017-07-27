<template>
  <button class="yui-btn" :class="classes" :disabled="disabled" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'x-button',
  props: {
    disabled: Boolean,
    type: {
      default: 'primary'
    }
  },
  computed: {
    classes() {
      return [
        `yui-btn-${this.type}`,
        {
          'yui-btn-disabled': this.disabled
        }
      ]
    }
  },
  methods: {
    clickHandler(e) {
      this.$emit('on-click', e)
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
.yui {
  &-btn {
    border: 0;
    outline: none;
    background-color: transparent;
    text-align: center;
    user-select: none;
    box-shadow: none;
    height: .9rem;
    background-color: $white-color;
    color: $white-color;
    border-radius: 4px;
    font-size: 18px;
    cursor: default;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    &:before {
      border: 1px solid $primary-color;
      box-sizing: border-box;
      position: absolute;
      content: '';
      width: 200%;
      height: 200%;
      transform: scale(.5);
      border-radius: 8px;
      left: -50%;
      top: -50%;
    }
    &:active {
      box-shadow: 1px 0 100px rgba(0,0,0,0.15) inset;
    }
    &-primary {
      background-color: $primary-color;
    }
    &-ghost {
      color: $primary-color;
      background-color: $white-color;
      &:active {
        box-shadow: none;
      }
      &:before {
        border-color: $primary-color;
      }
    }
    &-danger {
      background-color: $danger-color;
      &:before {
        border-color: $danger-color;
      }
    }
    &-disabled {
      opacity: $normal-opacity;
      cursor: not-allowed;
    }
  }
}
</style>

<template>
  <input type="checkbox" class="yui-switch" :disabled="disabled" :checked="value" @change="checkHandler" />
</template>

<script>
export default {
  name: 'switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkHandler(e) {
      this.$emit('on-change', e.target.checked)
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-switch {
    position: relative;
    width: 52px;
    height: 32px;
    border: 1px solid $border-color;
    outline: 0;
    border-radius: 16px;
    box-sizing: border-box;
    background-color: $white-color;
    -webkit-appearance: none;
    -webkit-transition: background-color 0.1s, border 0.1s;
    transition: background-color 0.1s, border 0.1s;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 30px;
      border-radius: 15px;
      background-color: $white-color;
      transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background-color: $white-color;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
      transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    }
    &:checked {
      background-color: $primary-color;
      border-color: $primary-color;
      &:before {
        transform: scale(0);
      }
      &:after {
        transform: translateX(20px);
      }
    }
    &:disabled {
      opacity: $normal-opacity;
    }
  }
}
</style>

<template>
  <button class="yui-btn" :class="classes" :disabled="disabled" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'x-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary',
      validator: function(val) {
        return ['primary', 'ghost', 'danger'].indexOf(val) !== -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator: function(val) {
        return ['normal', 'mini'].indexOf(val) !== -1
      }
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        `yui-btn-${this.type}`,
        {
          'yui-btn-mini': this.size === 'mini',
          'yui-btn-circle': this.circle,
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
    background-color: transparent;
    text-align: center;
    box-shadow: none;
    height: .9rem;
    background-color: $white-color;
    color: $white-color;
    border-radius: 3px;
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
      border-radius: 6px;
      left: -50%;
      top: -50%;
    }
    &:active {
      box-shadow: 1px 0 100px rgba(0,0,0,0.15) inset;
    }
    &-circle {
      border-radius: 200px;
      &.yui-btn {
        &:before {
          border-radius: 200px;
        }
      }
    }
    &-mini {
      display: inline-block;
      font-size: 13px;
      height: .6rem;
      width: auto;
      padding: 0 20px;
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

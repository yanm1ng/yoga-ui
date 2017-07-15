<template>
  <button class="yui-btn" :class="classes" :disabled="disabled" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    type: {
      default: 'primary'
    }
  },
  computed: {
    classes () {
      return [
        `yui-btn-${this.type}`,
        {
          'yui-btn-disabled': this.disabled
        }
      ]
    }
  },
  methods: {
    clickHandler (e) {
      this.$emit('on-click', e)
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  .#{$css-prefix} {
    &btn {
      width: 100%;
      border-width: 0;
      outline: 0;
      position: relative;
      display: block;
      margin: 0 auto;
      padding-left: 14px;
      padding-right: 14px;
      box-sizing: border-box;
      font-size: 18px;
      line-height: 2.3;
      text-align: center;
      text-decoration: none;
      color: #FFFFFF;
      border-radius: 4px;
      overflow: hidden;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-appearance: none;
      &:active {
        box-shadow:1px 0 100px rgba(0,0,0,0.15) inset;
      }
      &-primary {
        background-color: #005cc5;
      }
    }
  }
</style>

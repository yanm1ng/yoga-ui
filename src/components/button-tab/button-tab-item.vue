<template>
  <a :class="classes" :style="style" href="javascript:;" @click="onItemClick">
    <slot></slot>
  </a>
</template>

<script>
import { childMixin } from 'mixins/multi-items'

export default {
  name: 'button-tab-item',
  mixins: [childMixin],
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      const childLen = this.$parent.$children.length - 1
      return [
        `yui-button-tab-item`,
        {
          'yui-button-tab-current': this.currentSelected,
          'yui-button-tab-item-first': this.currentIndex === 0,
          'yui-button-tab-item-last': this.currentIndex === childLen,
          'yui-button-tab-item-middle': this.currentIndex > 0 && this.currentIndex !== childLen,
          'yui-button-tab-disabled': this.disabled
        }
      ]
    },
    style() {
      if (this.currentSelected) {
        return {
          'background-color': this.$parent.color
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
.yui {
  &-button-tab {
    &-item {
      color: $dark-color;
      background-color: $white-color;
      white-space: nowrap;
      overflow: hidden;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 200%;
        color: $border-color;
        height: 200%;
        transform-origin: left top;
        transform: scale(.5);
        background-clip: padding-box;
        box-sizing: border-box;
      }
      &-first {
        border-top-left-radius: 32px;
        border-bottom-left-radius: 32px;
        &:after {
          border: 1px solid $border-color;
          border-right: none;
          border-top-left-radius: 32px;
          border-bottom-left-radius: 32px;
        }
      }
      &-middle {
        &:after {
          border: 1px solid $border-color;
          border-right: none;
        }
      }
      &-last {
        border-top-right-radius: 32px;
        border-bottom-right-radius: 32px;
        &:after {
          border: 1px solid $border-color;
          border-top-right-radius: 32px;
          border-bottom-right-radius: 32px;
        }
      }
    }
    &-current {
      background-color: $primary-color;
      color: $white-color;
    }
    &-disabled {
      cursor: not-allowed;
      color: $grey-color;
    }
  }
}
</style>
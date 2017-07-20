<template>
  <a :class="classes" :style="style" href="javascript:;" @click="onItemClick">
    <slot></slot>
  </a>
</template>

<script>
import { childMixin } from 'mixins/multi-items'

export default {
  mixins: [childMixin],
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        `yui-button-tab-item`,
        {
          'yui-button-tab-current': this.currentSelected,
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
      position: relative;
      color: $dark-color;
      background-color: $white-color;
      white-space: nowrap;
      overflow: hidden;
      z-index: 1;
      &:before {
        content: '';
        border-left: 1px solid $border-color;
        transform: scaleX(.5);
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
      &:first-child {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }
      &:last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
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
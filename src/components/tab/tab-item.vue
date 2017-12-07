<template>
  <div :class="classes" :style="styles" @click="onItemClick">
    <slot></slot>
  </div>
</template>

<script>
import { childMixin } from 'mixins/multi-items'

export default {
  name: 'tab-item',
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
        'yui-tab-item',
        {
          'yui-tab-selected': this.childSelected,
          'yui-tab-disabled': this.disabled
        }
      ]
    },
    styles() {
      if (this.currentSelected) {
        return {
          color: this.$parent.color
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
.yui {
  &-tab-item {
    box-sizing: border-box;
    flex: 1;
    font-size: 14px;
    line-height: 0.88rem;
    text-align: center;
    color: $dark-color;
  }
  &-tab-selected {
    color: $primary-color;
  }
  &-tab-disabled {
    cursor: not-allowed;
    color: $grey-color;
  }
}
</style>

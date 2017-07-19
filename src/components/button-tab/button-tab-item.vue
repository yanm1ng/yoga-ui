<template>
  <a :class="classes" href="javascript:" @click="onItemClick">
    <slot></slot>
  </a>
</template>

<script>
import { childMixin } from 'mixins/multi-items'

export default {
  mixins: [childMixin],
  computed: {
    classes () {
      return [
        `yui-buttob-tab-item`,
        {
          'yui-button-tab-current': this.currentIndex === this.$parent.currentIndex,
          'yui-buttob-tab-first': this.currentIndex === 0,
          'yui-buttob-tab-last': this.currentIndex === this.$parent.$children.length - 1,
          'yui-buttob-tab-middle': this.currentIndex > 0 && this.currentIndex !== this.$parent.$children.length - 1
        }
      ]
    }
  }
}
</script>

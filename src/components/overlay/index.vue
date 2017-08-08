<template>
  <div class="yui-overlay" :style="style" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'overlay',
  props: {
    opacity: {
      type: Number,
      default: 0.3,
      validator: function(value) {
        return value > 0 && value < 1
      }
    }
  },
  computed: {
    style() {
      return {
        'background-color': `rgba(0, 0, 0, ${this.opacity})`
      }
    }
  },
  methods: {
    clickHandler(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
.yui {
  &-overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    user-select: none;
  }
}
</style>
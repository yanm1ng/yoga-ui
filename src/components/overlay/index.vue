<template>
  <div class="yui-overlay" :style="style" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    opacity: {
      type: Number,
      default: 0.35
    }
  },
  computed: {
    style () {
      return {
        'opacity': this.opacity
      }
    }
  },
  methods: {
    clickHandler (e) {
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
    background: #000;
    user-select: none;
  }
}
</style>
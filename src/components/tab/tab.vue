<template>
  <div class="yui-tab" :class="{ 'yui-tab-animate': animate }">
    <slot></slot>
    <div v-if="animate" :class="classes" :style="{ 'left': percentLeft, 'right': percentRight, 'background': color }"></div>
  </div>
</template>

<script>
export default {
  props: {
    animate: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#108ee9'
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes() {
      return [
        'yui-tab-ink-bar',
        {
          'yui-tab-animate': this.animate
        }
      ]
    },
    percentLeft() {
      return `${this.currentIndex * (100 / this.number)}%`
    },
    percentRight() {
      return `${(this.number - this.currentIndex - 1) * (100 / this.number)}%`
    }
  },
  watch: {
    currentIndex(oldVal, newVal) {
      this.$emit('on-change', oldVal, newVal)
    }
  },
  mounted () {
    this.number = this.$children.length
  },
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
.yui-tab {
  height: 0.88rem;
  background-color: $white-color;
  position: relative;
  display: flex;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    transform-origin: 0 0;
    transform: scaleY(0.5);
    bottom: -1px;
    border-bottom: 1px solid $border-color;
  }
  &-ink-bar {
    position: absolute;
    height: 3px;
    bottom: 0;
    left: 0;
  }
  &-animate {
    transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;
  }
}
</style>

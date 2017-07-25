<template>
  <div class="yui-popup">
    <transition name="popup-fade" v-if="!full">
      <overlay v-if="open" @click="closeHandler"></overlay>
    </transition>
    <transition :name="transitionName" @enter="enterHandler">
      <div v-if="open" :class="classes">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Overlay from '../overlay'

export default {
  name: 'popup',
  components: {
    Overlay
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'bottom'
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes() {
      return [
        'yui-popup-inner',
        `yui-popup-${this.direction}`,
        {
          'yui-popup-full': this.full
        }
      ]
    },
    transitionName() {
      const { full, direction } = this
      return full ? 'popup-full-slide-' + direction : 'popup-slide-' + direction
    }
  },
  mounted() {
    if (this.open) {
      requestAnimationFrame(() => {
        this.$el.style.display = 'block'
      })
    }
  },
  watch: {
    open(value) {
      if (value) {
        requestAnimationFrame(() => {
          this.$el.style.display = 'block'
          this.$emit('on-open')
        })
      } else {
        setTimeout(() => {
          requestAnimationFrame(() => {
            this.$el.style.display = 'none'
          })
        }, 300)
      }
    }
  },
  methods: {
    enterHandler() {
      this.$emit('on-enter')
    },
    closeHandler() {
      this.autoClose && this.$emit('on-close')
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
@import '~styles/transition.scss';

.yui {
  &-popup{
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1000;
    display: none;
    user-select: none;
    &-inner {
      background: $white-color;
      position: absolute;
      overflow: auto;
    }
    &-top {
      top: 0;
      left: 0;
      width: 100%;
      max-height: 80%;
    }
    &-bottom {
      bottom: 0;
      left: 0;
      width: 100%;
      max-height: 80%;
    }
    &-left {
      top: 0;
      left: 0;
      height: 100%;
      max-width: 80%;
    }
    &-right {
      top: 0;
      right: 0;
      height: 100%;
      max-width: 80%;
    }
    &-center {
      top: 50%;
      left: 50%;
      width: 6rem;
      transform: translate(-50%, -50%);
      border-radius: 5px;
    }
    &-full {
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 100%;
    }
  }
}
</style>
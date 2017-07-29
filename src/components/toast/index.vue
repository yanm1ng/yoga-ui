<template>
  <div class="yui-toast" v-show="show">
    <div :class="classes">
      <icon :name="iconName" v-if="checkStatus" />
      <div><slot></slot></div>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'toast',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'center',
      validator: function (value) {
        return ['top', 'bottom', 'center'].indexOf(value) !== -1
      }
    },
    time: {
      type: Number,
      default: 2000
    },
    status: String,
    destroy: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        'yui-toast-content',
        `yui-toast-${this.direction}`
      ]
    },
    iconName() {
      const { status } = this
      const iconMap = { success: 'roundcheck', error: 'roundclose', loading: 'loading', warning: 'warn' }
      return iconMap[status]
    },
    checkStatus() {
      const { status } = this
      return [ 'success', 'error', 'loading', 'warning' ].indexOf(status) !== -1
    }
  },
  mounted() {
    const { show } = this
    this.showChange(show)
  },
  watch: {
    show(value) {
      this.showChange(value)
    }
  },
  methods: {
    showChange(value) {
      if (value) {
        requestAnimationFrame(() => {
          this.$el.style.opacity = 1
        })
        setTimeout(() => {
          requestAnimationFrame(() => {
            this.$el.style.opacity = 0
            this.$emit('on-close')
            if (this.destroy) {
              this.$el.remove()
            }
          })
        }, this.time)
      }
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
@keyframes rotating {
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
}
.yui {
  &-toast {
    z-index: 1000;
    position: fixed;
    width: 100%;
    height: 100%;
    text-align: center;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease-in-out;
    &-content {
      background: rgba(0, 0, 0, .75);
      color: $white-color;
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 3px;
      box-shadow: 0 1px 5px rgba(0, 0, 0, .1);
      display: inline-block;
      word-break: break-all;
      box-sizing: border-box;
      max-width: 80%;
      min-width: 2rem;
      position: absolute;
      i {
        font-size: 40px;
        display: block;
        margin-bottom: 10px;
      }
      .yui-icon-loading {
        animation:rotating 1.2s linear infinite
      }
    }
    &-center {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &-bottom {
      bottom: .8rem;
      left: 50%;
      transform: translate(-50%, 0);
    }
    &-top {
      top: .8rem;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
}
</style>

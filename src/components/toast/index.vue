<template>
  <transition name="toast-fade">
    <div class="yui-toast" v-show="currentValue">
      <div :class="classes">
        <icon :name="iconName" v-if="checkStatus" />
        <div><slot>{{ title }}</slot></div>
      </div>
    </div>
  </transition>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'toast',
  props: {
    value: {
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
    title: String,
    time: {
      type: Number,
      default: 2000
    },
    status: {
      type: String,
      validator: function (value) {
        return ['success', 'error', 'loading', 'warning'].indexOf(value) !== -1
      }
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
      return ['success', 'error', 'loading', 'warning'].indexOf(status) !== -1
    }
  },
  data() {
    return {
      currentValue: this.value,
      timeout: null
    }
  },
  watch: {
    currentValue(value) {
      if (value) {
        this.$emit('input', true)
        this.$emit('on-show')
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.currentValue = false
          this.$emit('input', false)
          this.$emit('on-hide')
        }, this.time)
      }
    },
    value(value) {
      this.currentValue = value
    }
  },
  created() {
    if (this.currentValue) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.currentValue = false
        this.$emit('input', false)
        this.$emit('on-hide')
      }, this.time)
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
@import '~styles/transition.scss';

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
    &-content {
      background: rgba(0, 0, 0, .7);
      color: $white-color;
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 4px;
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

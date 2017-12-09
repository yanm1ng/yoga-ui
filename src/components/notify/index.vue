<template>
  <popup :open="currentValue" :with-mask="false" direction="top" :auto-close="autoClose" :class="classes">
    <slot>{{ content }}</slot>
  </popup>
</template>

<script>
import Popup from '../popup'

export default {
  name: 'notify',
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    content: {
      type: String
    },
    status: {
      type: String,
      default: 'default',
      validator: function(value) {
        return ['default', 'success', 'warning', 'error', 'info'].indexOf(value) !== -1
      }
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    time: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      currentValue: this.open,
      timeout: null
    }
  },
  watch: {
    currentValue(value) {
      if (this.autoClose && value) {
        this.$emit('change', true)
        this.$emit('on-show')
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.currentValue = false
          this.$emit('change', false)
          this.$emit('on-hide')
        }, this.time)
      }
    },
    open(value) {
      this.currentValue = value
    }
  },
  created() {
    if (this.autoClose && this.currentValue) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.currentValue = false
        this.$emit('change', false)
        this.$emit('on-hide')
      }, this.time)
    }
  },
  computed: {
    classes() {
      return [
        'yui-notify',
        `yui-notify-${this.status}`
      ]
    }
  },
  components: {
    Popup
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-notify {
    height: auto !important;
    & > .yui-popup-inner {
      position: relative;
      font-size: 14px;
      padding: 10px 20px;
      color: $white-color;
      text-align: center;
      word-break: break-all;
      background-color: rgba(40, 40, 40, 0.85);
    }
    &-success {
      & > .yui-popup-inner {
        background-color: rgba(0, 168, 84, 0.85);
      }
    }
    &-warning {
      & > .yui-popup-inner {
        background-color: rgba(245, 106, 0, 0.85);
      }
    }
    &-error {
      & > .yui-popup-inner {
        background-color: rgba(240, 65, 52, 0.85);
      }
    }
    &-info {
      & > .yui-popup-inner {
        background-color: rgba(16, 142, 233, 0.85);
      }
    }
  }
}
</style>

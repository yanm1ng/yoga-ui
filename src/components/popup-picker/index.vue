<template>
  <popup :open="open" direction="bottom" :auto-close="autoClose" @on-close="onClose" class="yui-popup-picker">
    <div class="yui-popup-picker-body">
      <div class="yui-popup-picker-header">
        <a href="javascript:;" class="yui-popup-picker-btn cancel-btn" @click="onClose">{{ cancelText }}</a>
        <a href="javascript:;" class="yui-popup-picker-btn confirm-btn" @click="onConfirm">{{ confirmText }}</a>
      </div>
      <div class="yui-popup-picker-content">
        <picker
          v-if="item.options.length"
          v-for="(item, index) in pickers"
          :key="index"
          :options="item.options"
          :value="item.value"
          @on-change="(val) => onChange(val, index)"
        ></picker>
      </div>
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'
import Picker from '../picker'
import { pure } from 'utils'

export default {
  name: 'popup-picker',
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    placeholder: String,
    pickers: {
      type: Array,
      required: true,
      validator: function (options) {
        let i = 0
        options.forEach(function(elm) {
          if (elm.hasOwnProperty('title') && elm.hasOwnProperty('options')) {
            i++
          }
        }, this)
        return i === options.length
      }
    }
  },
  watch: {
    open(val) {
      this.$emit(val ? 'on-show' : 'on-hide')
    }
  },
  data() {
    return {
      picked: this.pickers,
      values: {}
    }
  },
  created() {
    for(let item of this.pickers) {
      this.values[item.title] = item.options[0].value || ''
    }
  },
  methods: {
    onClose() {
      this.$emit('change', false)
    },
    onConfirm() {
      this.$emit('on-change', pure(this.values)).$emit('change', false)
    },
    onChange(val, index) {
      const { title } = this.picked[index]
      this.values[title] = val
    }
  },
  components: {
    Popup,
    Picker
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-popup-picker {
    &-header {
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      background-color: rgba(206, 206, 206, 0.1);
      position: relative;
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px solid $border-color;
        transform: scaleY(0.5);
      }
    }
    &-btn {
      &.cancel-btn {
        color: $grey-color;
      }
      &.confirm-btn {
        color: $primary-color;
      }
    }
    &-content {
      display: flex;
      width: 100%;
      position: relative;
      & > .yui-picker-wrapper {
        flex: 1;
      }
    }
  }
}
</style>

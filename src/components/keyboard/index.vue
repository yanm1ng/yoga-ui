<template>
  <popup :open="open" :with-mask="false" :auto-close="false" direction="bottom" @on-close="onClose" class="yui-keyboard">
    <div class="yui-keyboard-body">
      <div class="yui-keyboard-header">
        <a href="javascript:;" class="yui-keyboard-btn cancel-btn" @click="onClose">{{ cancelText }}</a>
        <a href="javascript:;" class="yui-keyboard-btn confirm-btn" @click="onConfirm">{{ confirmText }}</a>
      </div>
      <div class="yui-keyboard-content">
        <grid v-for="(numbers, index) in keyNumbers" :key="index">
          <grid-item v-for="item in numbers" :key="item" :label="item" @on-item-click="onInput(item)"></grid-item>
        </grid>
      </div>
    </div>
  </popup>
</template>

<script>
import { Grid, GridItem } from '../grid'
import Popup from '../popup'

export default {
  name: 'keyboard',
  props: {
    random: {
      type: Boolean,
      default: false
    },
    confirmText: {
      type: String,
      default: '完成'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  data() {
    return {
      open: true,
      value: ''
    }
  },
  computed: {
    keyNumbers() {
      let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
      if (this.random) {
        numbers = numbers.sort(() => {
          return 0.5 - Math.random() 
        })
      }
      numbers.splice(9, 0, '.')
      numbers.push('Del')
      return this.split(numbers)
    }
  },
  methods: {
    onInput(key) {
      let { value } = this
      const len = value.length
      if (key === 'Del') {
        value = value.slice(0, len - 1)
      } else {
        value += key
      }
      this.value = value
      this.$emit('input', value)
    },
    onClose() {
      this.open = false
    },
    onConfirm() {
      this.open = false
    },
    split(array) {
      let chunks = []
      let count = array.length / 3
      while (count > 0) {
        chunks.push(array.slice((count - 1) * 3, count * 3))
        count--
      }
      chunks = chunks.reverse()
      return chunks
    }
  },
  components: {
    Grid,
    GridItem,
    Popup
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-keyboard {
    &-body {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid $border-color;
        transform: scaleY(0.5);
      }
    }
    &-header {
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      background-color: rgba(206, 206, 206, 0.1);
      position: relative;
    }
    &-content {
      
    }
    &-btn {
      &.cancel-btn {
        color: $grey-color;
      }
      &.confirm-btn {
        color: $primary-color;
      }
    }
  }
}
</style>

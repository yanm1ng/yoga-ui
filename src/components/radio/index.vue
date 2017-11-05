<template>
  <cell-box :title="title">
    <cell v-for="radio in options" :title="radio.label" :key="radio.value" @on-click="onItemClick(radio.value)">
      <div :slot="slot" :class="classes(radio.value)" :style="styles">
        <icon name="roundcheckfill"></icon>
      </div>
    </cell>
  </cell-box>
</template>

<script>
import Cell from '../cell'
import CellBox from '../cell-box'
import Icon from '../icon'

export default {
  name: 'radio',
  props: {
    title: String,
    value: {
      type: String,
      required: true
    },
    position: {
      type: String,
      default: 'left',
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1
      }
    },
    options: {
      type: Array,
      required: true,
      validator: function (options) {
        let i = 0
        options.forEach(function(elm) {
          if (elm.hasOwnProperty('label') && elm.hasOwnProperty('value')) {
            i++
          }
        }, this)
        return i === options.length
      }
    }
  },
  computed: {
    slot() {
      const slotMap = { left: 'icon', right: 'value' }
      return slotMap[this.position]
    },
    styles() {
      if (this.position === 'right') {
        return {
          margin: 0
        }
      }
    }
  },
  methods: {
    classes(val) {
      return [
        'yui-radio',
        {
          'yui-radio-checked': this.value === val
        }
      ]
    },
    onItemClick(val) {
      this.$emit('input', val)
      this.$emit('on-change', val)
    }
  },
  components: {
    Cell,
    CellBox,
    Icon
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-radio {
    width: 20px;
    height: 20px;
    border: 1px solid $border-color;
    border-radius: 10px;
    margin-right: 10px;
    position: relative;
    .yui-iconfont {
      display: none;
    }
    &-checked {
      .yui-iconfont {
        position: absolute;
        top: -7px;
        left: -3px;
        display: block;
        font-size: 26px;
        color: $primary-color;
      }
    }
  }
}
</style>

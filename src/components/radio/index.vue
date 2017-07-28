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
    value: String,
    position: {
      type: String,
      default: 'left',
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1
      }
    },
    options: {
      type: Array,
      required: true
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
        top: -6px;
        left: -2px;
        display: block;
        font-size: 24px;
        color: $primary-color;
      }
    }
  }
}
</style>

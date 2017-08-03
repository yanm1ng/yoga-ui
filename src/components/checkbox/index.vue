<template>
  <cell-box :title="title">
    <cell v-for="checkbox in options" :title="checkbox.label" :key="checkbox.value" @on-click="onItemClick(checkbox.value)">
      <div slot="value" :class="classes(checkbox.value)">
        <icon name="check"></icon>
      </div>
    </cell>
  </cell-box>
</template>

<script>
import Cell from '../cell'
import CellBox from '../cell-box'
import Icon from '../icon'

export default {
  name: 'checkbox',
  props: {
    title: String,
    values: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      required: true
    },
    max: Number
  },
  data() {
    return {
      currentValues: this.values
    }
  },
  computed: {
    _max() {
      const { options, max } = this
      const total = options.length
      if (max) {
        if (max > total) {
          return total
        }
        return max
      } else {
        return total
      }
    }
  },
  methods: {
    classes(val) {
      return [
        'yui-checkbox',
        {
          'yui-checkbox-checked': this.currentValues.indexOf(val) !== -1
        }
      ]
    },
    onItemClick(val) {
      const index = this.currentValues.indexOf(val)
      if (index === -1) {
        (this._max > this.currentValues.length) && this.currentValues.push(val)
      } else {
        this.currentValues.splice(index, 1)
      }
      this.$emit('on-change', pure(this.currentValues))
    }
  },
  components: {
    Cell,
    CellBox,
    Icon
  }
}

function pure(obj) {
  return JSON.parse(JSON.stringify(obj))
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-checkbox {
    width: 20px;
    height: 20px;
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

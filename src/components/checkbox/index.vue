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
import { pure, bubbleSort } from 'utils'

export default {
  name: 'checkbox',
  props: {
    title: String,
    values: {
      type: Array
    },
    defaultValues: {
      type: Array
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
    },
    max: Number
  },
  data() {
    return {
      currentValues: null
    }
  },
  watch: {
    values(val) {
      this.currentValues = val
    }
  },
  created() {
    if (this.defaultValues) {
      this.currentValues = pure(this.defaultValues)
    } else if (this.values) {
      this.currentValues = pure(this.values)
    } else {
      this.currentValues = []
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
      let newValues = pure(this.currentValues)
      const index = newValues.indexOf(val)
      if (index === -1) {
        (this._max > this.currentValues.length) && newValues.push(val)
      } else {
        newValues = newValues.filter(el => el !== val)
      }
      if (!this.values) {
        this.currentValues = newValues
      }
      this.$emit('on-change', pure(bubbleSort(newValues)))
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

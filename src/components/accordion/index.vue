<template>
  <cell-box :title="title">
    <div class="yui-accordion" v-for="(item, index) in list" :key="item.title">
      <cell :title="item.title" is-link @on-click="clickHandler(index)" :class="{ 'yui-cell-active': currentActiveKeys.indexOf(index) !== -1 }"></cell>
      <div :class="classes(index)">
        <div class="yui-accordion-content-inner">{{ item.content }}</div>
      </div>
    </div>
  </cell-box>
</template>

<script>
import Cell from '../cell'
import CellBox from '../cell-box'
import { pure, bubbleSort } from 'utils'

export default {
  name: 'accordion',
  props: {
    title: String,
    list: Array,
    activeKeys: {
      type: Array,
      default: () => []
    },
    defaultActiveKeys: {
      type: Array,
      default: () => []
    },
    animate: {
      type: Boolean,
      default: true
    },
    single: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentActiveKeys: null
    }
  },
  watch: {
    activeKeys(val) {
      this.currentActiveKeys = val
    }
  },
  created() {
    const { defaultActiveKeys, activeKeys, single } = this
    if (defaultActiveKeys && defaultActiveKeys.length) {
      this.currentActiveKeys = single ? [defaultActiveKeys[0]] : defaultActiveKeys
    } else if (activeKeys && activeKeys.length) {
      this.currentActiveKeys = single ? [activeKeys[0]] : activeKeys
    } else {
      this.currentActiveKeys = []
    }
  },
  methods: {
    clickHandler(val) {
      const { single } = this
      let returnActiveKeys = pure(this.currentActiveKeys)
      const index = returnActiveKeys.indexOf(val)
      if (index === -1) {
        single ? returnActiveKeys = [val] : returnActiveKeys.push(val)
      } else {
        returnActiveKeys.splice(index, 1)
      }
      if (this.activeKeys.length === 0) {
        this.currentActiveKeys = returnActiveKeys
      }
      this.$emit('on-change', pure(bubbleSort(returnActiveKeys)))
    },
    classes(index) {
      const { currentActiveKeys, animate } = this
      return [
        'yui-accordion-content',
        {
          'no-animate': !animate,
          'animate': animate && currentActiveKeys.indexOf(index) !== -1
        }
      ]
    }
  },
  components: {
    Cell,
    CellBox
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
@import '~styles/transition.scss';

.yui {
  &-accordion {
    position: relative;
    & > .yui-cell-arrow .yui-cell-ft {
      &:after {
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(90deg);
        transition: transform .3s;
      }
    }
    & > .yui-cell-active .yui-cell-ft {
      &:after {
        transform: matrix(.71, .71, -.71, .71, 0, 0) rotate(-90deg);
      }
    }
    & > .yui-cell-active + .yui-accordion-content {
      max-height: 9999px;
    }
    &-content {
      overflow: hidden;
      font-size: 14px;
      line-height: 1.6;
      background-color: $white-color;
      max-height: 0;
      transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.2s;
      &-inner {
        padding: 10px 20px;
      }
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      transform-origin: 0 100%;
      width: 100%;
      border-bottom: 1px solid $border-color;
      transform: scaleY(0.5);
    }
    .animate {
      transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    }
    .no-animate {
      transition: none;
    }
  }
}
</style>

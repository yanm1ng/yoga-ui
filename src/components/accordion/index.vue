<template>
  <cell-box :title="title">
    <div class="yui-accordion" v-for="(item, index) in list" :key="item.title">
      <cell :title="item.title" is-link @on-click="clickHandler(index)" :class="{ 'yui-cell-active': currentOpened.indexOf(index) !== -1 }"></cell>
      <div :class="classes(index)">
        <div class="yui-accordion-content-inner">{{ item.content }}</div>
      </div>
    </div>
  </cell-box>
</template>

<script>
import Cell from '../cell'
import CellBox from '../cell-box'

export default {
  name: 'accordion',
  props: {
    title: String,
    list: Array,
    defaultOpened: {
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
      currentOpened: []
    }
  },
  created() {
    const { defaultOpened, single } = this
    if (single) {
      this.currentOpened = defaultOpened.length ? [defaultOpened[0]] : []
    } else {
      this.currentOpened = defaultOpened
    }
  },
  methods: {
    clickHandler(val) {
      const { single } = this
      const index = this.currentOpened.indexOf(val)
      if (index === -1) {
        single ? this.currentOpened = [val] : this.currentOpened.push(val)
      } else {
        this.currentOpened.splice(index, 1)
      }
      this.$emit('on-change', pure(this.currentOpened))
    },
    classes(index) {
      const { currentOpened, animate } = this
      return [
        'yui-accordion-content',
        {
          'no-animate': !animate,
          'animate': animate && currentOpened.indexOf(index) !== -1
        }
      ]
    }
  },
  components: {
    Cell,
    CellBox
  }
}

function pure(obj) {
  return JSON.parse(JSON.stringify(obj))
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
        transition: transform .3s, -webkit-transform .3s;
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
      transition-delay: 0s;
    }
    .no-animate {
      transition: none;
    }
  }
}
</style>

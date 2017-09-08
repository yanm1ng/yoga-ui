<template>
  <div class="yui-popover" v-click-outside="outsideHandler">
    <div class="yui-popover-trigger" ref="trigger" @click="toggleHandler">
      <slot></slot>
    </div>
    <div class="yui-popover-body" ref="popover" :style="style" v-show="currentShow">
      <div :class="arrowClass"></div>
      <div class="yui-popover-content" @click="contenthandler">
        <slot name="content">
          <div v-html="content"></div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import clickOutside from 'directives/click-outside'

const arrowMap = {
  'bottom': 'up',
  'left': 'right',
  'right': 'left',
  'top': 'down'
}

export default {
  name: 'popover',
  directives: {
    clickOutside
  },
  model: {
    props: 'show',
    event: 'change'
  },  
  props: {
    show: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'top',
      validator: function(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1
      }
    },
    gutter: {
      type: Number,
      default: 8
    },
    background: {
      type: String,
      default: '#efeff4'
    },
    arrowAlign: {
      type: String,
      default: 'center',
      validator: function(value) {
        return ['center', 'start', 'end'].indexOf(value) !== -1
      }
    },
    content: String
  },
  data() {
    return {
      currentShow: true,
      style: {}
    }
  },
  computed: {
    arrowClass() {
      const { direction, arrowAlign } = this
      const arrowDirection = arrowMap[direction]
      return [
        'yui-popover-arrow',
        `yui-popover-arrow-${arrowDirection}`,
        `yui-popover-arrow-${arrowDirection}-${arrowAlign}`
      ]
    }
  },
  watch: {
    show: function(val) {
      this.currentShow = val
    },
    currentShow: function(val) {
      val ? this.$emit('on-show') : this.$emit('on-hide')
      this.$emit('change', val)
    }
  },
  methods: {
    outsideHandler() {
      if (this.currentShow) {
        this.currentShow = false
      }
    },
    toggleHandler() {
      this.currentShow = !this.currentShow
    },
    contenthandler() {
      this.$emit('on-click-content')
    }
  },
  mounted() {
    this.$nextTick(() => {
      const trigger = this.$refs.trigger.children[0]
      const popover = this.$refs.popover
      let left = 0
      let top = 0
      switch (this.direction) {
      case 'top' :
        left = trigger.offsetLeft + trigger.offsetWidth / 2  - popover.offsetWidth / 2
        top = trigger.getBoundingClientRect().top - popover.offsetHeight - this.gutter
        break
      case 'bottom':
        left = trigger.offsetLeft + trigger.offsetWidth / 2  - popover.offsetWidth / 2 
        top = trigger.getBoundingClientRect().top + trigger.offsetHeight + this.gutter
        break
      case 'left':
        left = trigger.offsetLeft - popover.offsetWidth - this.gutter
        top = trigger.getBoundingClientRect().top + trigger.offsetHeight / 2 - popover.offsetHeight / 2
        break
      case 'right':
        left = trigger.offsetLeft + trigger.offsetWidth + this.gutter
        top = trigger.getBoundingClientRect().top + trigger.offsetHeight / 2 - popover.offsetHeight / 2
        break
      default:
      }
      this.currentShow = false
      this.style = {
        top: top + 'px',
        left: left + 'px',
        backgroundColor: this.background,
        display: 'none'
      }
    })
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-popover {
    font-size: 16px;
    text-align: center;
    &-arrow {
      position: absolute;
      width: 0;
      height: 0;
      &-up, &-down {
        &-start {
          left: 10px;
        }
        &-end {
          right: 10px;
        }
      }
      &-left, &-right {
        &-start {
          top: 5px;
        }
        &-end {
          bottom: 5px;
        }
      }
      &-up {
        border-left: $arrow-width solid transparent;
        border-right: $arrow-width solid transparent;
        border-bottom: $arrow-width solid $background-color;
        top: -$arrow-width;
        &-center {
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &-down {
        border-left: $arrow-width solid transparent;
        border-right: $arrow-width solid transparent;
        border-top: $arrow-width solid $background-color;
        bottom: -$arrow-width;
        &-center {
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &-left {
        border-top: $arrow-width solid transparent;
        border-bottom: $arrow-width solid transparent;
        border-right: $arrow-width solid $background-color;
        left: -$arrow-width;
        &-center {
          top: 50%;
          transform: translateY(-50%);
        }
      }
      &-right {
        border-top: $arrow-width solid transparent;
        border-bottom: $arrow-width solid transparent;
        border-left: $arrow-width solid $background-color;
        right: -$arrow-width;
        &-center {
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    &-body {
      position: absolute;
      left: 0;
      top: 0;
      background-color: $background-color;
      color: $dark-color;
      border-radius: 3px;
      z-index: 500;
    }
    &-content {
      padding: 5px 10px;
    }
  }
}
</style>

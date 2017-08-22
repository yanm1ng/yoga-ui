<template>
  <div class="yui-marquee" :style="{ height: height + 'px' }">
    <div :class="classes" :style="styles">
      <div class="yui-marquee-item" v-html="lastItem"></div>
      <slot></slot>
      <div class="yui-marquee-item" v-html="firtstItem"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-marquee',
  props: {
    height: {
      type: Number,
      default: 30
    },
    direction: {
      type: String,
      validator(value) {
        return ['up', 'down'].indexOf(value) !== -1
      },
      default: 'up'
    },
    time: {
      type: Number,
      default: 2000
    },
    speed: {
      type: Number,
      default: 500
    },
    align: {
      type: String,
      validator(value) {
        return ['center', 'left', 'right'].indexOf(value) !== -1
      },
      default: 'center'
    }
  },
  data() {
    return {
      styles: {
        transform: 0,
        transitionDuration: 0
      },
      timer: null,
      index: 1,
      childLength: 0,
      firtstItem: '',
      lastItem: ''
    }
  },
  computed: {
    classes() {
      return [
        'yui-marquee-box',
        `yui-marquee-box-align-${this.align}`
      ]
    }
  },
  methods: {
    init() {
      const children = this.$children.filter(item => item.$options.name === 'x-marquee-item')
      if (children.length) {
        this.childLength = children.length
        this.firtstItem = children[0].$el.innerHTML
        this.lastItem = children[this.childLength - 1].$el.innerHTML
        this.setTranslate(0, -this.height)
        this.autoPlay()
      }
    },
    setTranslate(speed, translate) {
      this.styles.transform = 'translate3d(0, ' + translate + 'px, 0)'
      this.styles.transitionDuration = speed + 'ms'
    },
    autoPlay() {
      const { height, time, speed, direction, childLength } = this
      this.timer = setInterval(() => {
        if (direction == 'up') {
          this.setTranslate(speed, -(++this.index * height))
          if (this.index >= childLength) {
            this.index = 0
            setTimeout(() => {
              this.setTranslate(0, 0)
            }, speed)
          }
        } else {
          this.setTranslate(this.speed, -(--this.index * height))
          if (this.index <= 0) {
            this.index = childLength
            setTimeout(() => {
              this.setTranslate(0, -childLength * height)
            }, speed)
          }
        }
      }, time)
    },
    destroy() {
      clearInterval(this.timer)
    }
  },
  mounted() {
    this.init()
  },
  destroyed() {
    this.destroy()
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-marquee {
    overflow: hidden;
    width: 100%;
    background-color: $white-color;
    padding: 0 20px;
    &-box {
      height: inherit;
      &-align {
        &-center {
          justify-content: center;
        }
        &-left {
          justify-content: flex-start;
        }
        &-right {
          justify-content: flex-end;
        }
      }
    }
    &-item {
      height: inherit;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: inherit;
      font-size: 14px;
    }
  }
}
</style>

<template>
  <div class="yui-picker-wrapper">
    <div
      class="yui-picker"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @scroll="onScroll"
    >
      <div class="yui-picker-scroller">
        <div v-if="placeholder" class="yui-picker-item yui-picker-placeholder">
          {{ placeholder }}
        </div>
        <div
          v-for="(item, index) in options"
          :key="item.value"
          :class="{ 'yui-picker-item': true, 'yui-picker-active': item.value === value }"
          :data-value="item.value"
          :data-index="index"
          v-text="item.label"
        >
        </div>
      </div>
      <div class="yui-picker-indicator"></div>
    </div>
  </div>
</template>

<script>
let easeout = (A, B, rate, callback) => {
  if (A === B || typeof A !== 'number') {
    return
  }
  B = B || 0
  rate = rate || 2
  let step = () => {
    A = A + (B - A) / rate
    if (Math.abs(B - A) < 1) {
      callback(B, true)
      return
    }
    callback(A, false)
    requestAnimationFrame(step)
  }
  step()
}

export default {
  name: 'picker',
  props: {
    options: Array,
    placeholder: String,
    value: {
      type: String
    },
    index: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    this.$touch.scrollElement = this.$el.querySelector('.yui-picker')
    requestAnimationFrame(this.scrollToActive)
  },
  methods: {
    scrollToActive () {
      let node = this.$el.querySelector('.yui-picker-active')
      let index = 0
      Array.from(this.$el.querySelectorAll('.yui-picker-item')).forEach((item, i) => {
        if (item === node) {
          index = i
        }
      })
      requestAnimationFrame(() => {
        this.$touch.scrollElement.scrollTop = node ? index * (node.offsetHeight || 34) : 0
      })
    },
    onTouchEnd () {
      this.$touch.scrollEnd = true
      this.computedScrollTop()
    },
    onTouchMove (e) {
      let pageY = e.changedTouches[0].pageY
      if (this.pageY) {
        if (this.$touch.scrollElement.scrollTop === 0 && pageY - this.pageY > 0) {
          this.$pullTimer && clearTimeout(this.$pullTimer)
          this.$pullTimer = setTimeout(() => {
            this.$emit('on-pulldown')
          }, 500)
          e.preventDefault()
          e.stopPropagation()
        } else if (Math.round(this.$touch.scrollElement.scrollTop) === this.$touch.maxScrollTop && pageY - this.pageY < 0) {
          this.$pullTimer && clearTimeout(this.$pullTimer)
          this.$pullTimer = setTimeout(() => {
            this.$emit('on-pullup')
          }, 500)
          e.preventDefault()
          e.stopPropagation()
        }
      }
      this.pageY = pageY
    },
    onTouchStart (e) {
      this.$touch.scrollEnd = false
      this.$touch.maxScrollTop = this.$touch.scrollElement.scrollHeight - this.$touch.scrollElement.offsetHeight
      this.pageY = e.changedTouches[0].pageY
      this.$timer && clearTimeout(this.$timer)
      this.$pullTimer && clearTimeout(this.$pullTimer)
    },
    onScroll() {
      if (this.$touch && this.$touch.scrollEnd) {
        this.computedScrollTop()
      }
    },
    computedScrollTop() {
      this.$timer && clearTimeout(this.$timer)
      this.$timer = setTimeout(() => {
        this.$touch.scrollEnd = false
        let node = this.$el.querySelector('.yui-picker')
        let _scrollTop = node.scrollTop
        let index = Math.round(_scrollTop / 34)
        let scrollTop = index * 34
        requestAnimationFrame(() => {
          if (_scrollTop !== scrollTop) {
            easeout(_scrollTop, scrollTop, 4, (value) => {
              node.scrollTop = value
            })
          }
          let active = this.$el.querySelectorAll('.yui-picker-item')[index]
          if (active) {
            let value = active.dataset.value
            value !== this.value && this.$emit('on-change', value, this.index).$emit('input', value, this.index)
          }
        })
      }, 51)
    }
  },
  created() {
    this.$touch = {}
  },
  destroyed () {
    this.$touch = null
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-picker {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: 240px;
    &::-webkit-scrollbar {
      display: none;
    }
    &-wrapper {
      position: relative;
      background: $white-color;
      text-align: center;
      overflow: hidden;
    }
    &-scroller {
      padding: 103px 0;
    }
    &-indicator {
      &:before {
        border-top: 1px solid $border-color;
        content: '';
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        top: 102px;
        transform-origin: 0 0;
        transform: scaleY(0.5);
        box-shadow:
          0 -45px 0 45px hsla(0, 0%, 100%, .3),
          0 -158px 0 3px hsla(0, 0%, 100%, .4),
          0 -228px 0 2px hsla(0, 0%, 100%, .5);
      }
      &:after {
        border-bottom: 1px solid $border-color;
        content: '';
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        transform-origin: 0 0;
        transform: scaleY(0.5);
        top: 135px;
        box-shadow:
          0 45px 0 45px hsla(0, 0%, 100%, .3),
          0 125px 0 34px hsla(0, 0%, 100%, .4),
          0 184px 0 24px hsla(0, 0%, 100%, .5);
      }
    }
    &-item {
      font-size: 16px;
      line-height: 34px;
      overflow: hidden;
      white-space: nowrap;
      padding: 0px 20px;
      height: 34px;
    }
  }
}
</style>
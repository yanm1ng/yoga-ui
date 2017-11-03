<template>
  <div class="yui-picker-wrapper">
    <div
      class="yui-picker"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
    >
      <div class="yui-picker-scroller">
        <div v-if="placeholder" class="yui-picker-item yui-picker-placeholder" data-value="">
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
    </div>
    <div class="yui-picker-indicator"></div>
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
    placeholder: String,
    value: String
  },
  watch: {
    options() {
      requestAnimationFrame(this.scrollToActive)
    }
  },
  mounted() {
    this.$touch.element = this.$el.querySelector('.yui-picker')
    requestAnimationFrame(this.scrollToActive)
    this.isScrolling = false
    this.$touch.element.addEventListener('scroll', () => {
      clearTimeout(this.isScrolling)
      this.isScrolling = setTimeout(() => {
        this.$touch.scrollEnd = true
        this.computedScrollTop()
      }, 60)
    }, false)
  },
  methods: {
    scrollToActive() {
      let node = this.$el.querySelector('.yui-picker-active')
      let index = 0
      Array.from(this.$el.querySelectorAll('.yui-picker-item')).forEach((item, i) => {
        if (item === node) {
          index = i
        }
      })
      requestAnimationFrame(() => {
        this.$touch.element.scrollTop = node ? index * 34 : 0
      })
    },
    onTouchStart(e) {
      this.$touch.scrollEnd = false
      this.$touch.maxScrollTop = this.$touch.element.scrollHeight - this.$touch.element.offsetHeight
      this.pageY = e.changedTouches[0].pageY
      this.$timer && clearTimeout(this.$timer)
      this.$pullTimer && clearTimeout(this.$pullTimer)
    },
    onTouchMove(e) {
      let pageY = e.changedTouches[0].pageY
      if (this.pageY) {
        if (this.$touch.element.scrollTop === 0 && pageY - this.pageY > 0) {
          this.$pullTimer && clearTimeout(this.$pullTimer)
          this.$pullTimer = setTimeout(() => {
            this.$emit('on-pulldown')
          }, 500)
          e.preventDefault()
          e.stopPropagation()
        } else if (Math.round(this.$touch.element.scrollTop) === this.$touch.maxScrollTop && pageY - this.pageY < 0) {
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
    computedScrollTop() {
      this.$timer && clearTimeout(this.$timer)
      this.$timer = setTimeout(() => {
        this.$touch.scrollEnd = false
        let _scrollTop = this.$touch.element.scrollTop
        let index = Math.round(_scrollTop / 34)
        let scrollTop = index * 34
        requestAnimationFrame(() => {
          if (_scrollTop !== scrollTop) {
            easeout(_scrollTop, scrollTop, 4, (value) => {
              this.$touch.element.scrollTop = value
            })
          }
          let active = this.$el.querySelectorAll('.yui-picker-item')[index]
          if (active) {
            let value = active.dataset.value
            value !== this.value && this.$emit('on-change', value).$emit('input', value)
          }
        })
      }, 50)
    }
  },
  created() {
    this.$touch = {}
  },
  destroyed() {
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
      position: absolute;
      height: 34px;
      width: 100%;
      background-color: rgba(206, 206, 206, 0.1);
      top: 50%;
      transform: translateY(-50%);
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        border-top: 1px solid $border-color;
        transform-origin: 0 0;
        transform: scaleY(.5);
      }
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: 1px solid $border-color;
        transform-origin: 0 0;
        transform: scaleY(.5);
      }
    }
    &-item {
      font-size: 16px;
      line-height: 34px;
      overflow: hidden;
      white-space: nowrap;
      padding: 0px 20px;
      height: 34px;
      color: $black-color;
    }
    &-placeholder {
      color: $grey-color;
    }
  }
}
</style>
<template>
  <div class="yui-progress">
    <div class="yui-progress-bar" v-if="type === 'bar'">
      <div class="yui-progress-bar-main" :style="{ height: width + 'px' }">
        <div class="yui-progress-bar-inner" :style="percentStyle"></div>
      </div>
      <div class="yui-progress-bar-content">
        <slot></slot>
      </div>
    </div>
    <div class="yui-progress-circle" v-if="type === 'circle'">
      <svg viewBox="0 0 100 100">
        <path
          :d="pathString"
          :stroke-width="width"
          stroke="#dddddd"
          fill-opacity="0"
        />
        <path
          :d="pathString"
          :stroke-width="width"
          :style="pathStyle"
          :stroke="color"
          troke-linecap="round"
          fill-opacity="0"
        />
      </svg>
      <div class="yui-progress-circle-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-progress',
  props: {
    type: {
      type: String,
      default: 'bar',
      validator: function(value) {
        return ['bar', 'circle'].indexOf(value) !== -1
      }
    },
    percent: {
      type: Number,
      default: 0,
      validator: function(value) {
        return value >= 0 && value <= 100
      }
    },
    color: {
      type: String,
      default: '#108ee9'
    },
    width: {
      type: Number,
      default: 3
    }
  },
  computed: {
    percentStyle() {
      return {
        width: this.percent + '%',
        backgroundColor: this.color
      }
    },
    radius() {
      return 50 - this.width / 2
    },
    pathString() {
      const { radius } = this
      return `M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}`
    },
    len() {
      return Math.PI * 2 * this.radius
    },
    pathStyle() {
      return {
        'stroke-dasharray': `${this.len}px ${this.len}px`,
        'stroke-dashoffset': `${((100 - this.percent) / 100 * this.len)}px`,
        'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
      }
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-progress {
    margin: 20px auto;
    display: flex;
    justify-content: center;
    &-bar {
      flex: 1;
      position: relative;
      &-main {
        background-color: $border-color;
        height: 3px;
      }
      &-inner {
        background-color: $primary-color;
        height: 100%;
        transition: width 0.6s ease;
      }
      &-content {
        width: 100%;
        margin-top: 5px;
        text-align: center;
        font-size: 20px;
      }
    }
    &-circle {
      flex: 1;
      position: relative;
      width: 100%;
      &-content {
        width: 100%;
        text-align: center;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
      }
    }
  }
}
</style>

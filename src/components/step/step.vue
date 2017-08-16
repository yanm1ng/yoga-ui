<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { parentMixin } from 'mixins/multi-items'

export default {
  name: 'step',
  mixins: [parentMixin],
  props: {
    current: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: function(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1
      }
    }
  },
  computed: {
    classes() {
      return [
        'yui-steps',
        {
          'yui-steps-vertical': this.direction === 'vertical'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-steps {
    display: flex;
    padding: 20px 15px;
    justify-content: space-between;
    align-items: center;
    &-vertical {
      align-items: flex-start;
      flex-direction: column;
      height: 100%;
      .yui-step-item {
        flex-direction: column;
        &-tail {
          height: 100%;
          width: 1px;
        }
        &-body-title {
          text-align: left;
          top: 50%;
          left: 35px;
          transform: translate(0, -50%);
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>

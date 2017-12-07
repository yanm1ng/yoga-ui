<template>
  <div :class="classes">
    <div class="yui-step-item-body">
      <div class="yui-step-item-body-main">
        <icon v-if="status === 'finish'" class="yui-step-item-body-icon" name="roundcheckfill"></icon>
        <span v-else class="yui-step-item-body-process">{{ this.childIndex + 1 }}</span>
      </div>
      <p class="yui-step-item-body-title">{{ title }}</p>
    </div>
    <div class="yui-step-item-tail"></div>
  </div>
</template>

<script>
import Icon from '../icon'
import { childMixin } from 'mixins/multi-items'

export default {
  name: 'step-item',
  mixins: [childMixin],
  props: {
    title: String
  },
  computed: {
    status() {
      const { current } = this.$parent
      if (this.childIndex === current) {
        return 'process'
      } else if (this.childIndex < current) {
        return 'finish'
      } else {
        return 'wait'
      }
    },
    classes() {
      return [
        'yui-step-item',
        `yui-step-item-${this.status}`
      ]
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-step-item {
    flex: 1;
    display: flex;
    align-items: center;
    &:last-child {
      flex: 0;
      .yui-step-item-tail {
        display: none;
      }
    }
    &-process {
      .yui-step-item-body-title {
        color: $dark-color;
      }
    }
    &-finish {
      .yui-step-item-tail {
        background-color: $primary-color;
      }
    }
    &-body {
      position: relative;
      &-main {
        display: flex;
        align-items: center;
        max-height: 24px;
        max-width: 24px;
      }
      &-title {
        position: absolute;
        font-size: 14px;
        color: $grey-color;
        white-space: nowrap;
        text-align: center;
        left: 50%;
        top: 30px;
        transform: translate(-50%, 0);
      }
      &-icon {
        font-size: 26px !important;
        color: $primary-color;
      }
      &-process {
        border-radius: 50%;
        border: 1px solid $primary-color;
        text-align: center;
        color: $primary-color;
        width: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 16px;
      }

    }
    &-tail {
      height: 1px;
      background-color: $border-color;
      width: 100%;
    }
  }
}
</style>

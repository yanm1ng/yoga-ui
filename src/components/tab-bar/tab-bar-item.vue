<template>
  <a :class="classes" :style="styles" @click="onItemClick">
    <span class="yui-tab-bar-item-icon">
      <icon :name="icon" v-if="icon"></icon>
      <slot name="icon"></slot>
      <badge v-if="badge === ''" class="yui-tab-bar-item-badge-dot"></badge>
      <badge :text="badge" v-if="badge" class="yui-tab-bar-item-badge"></badge>
    </span>
    <span class="yui-tab-bar-item-title">
      {{ title }}
    </span>
  </a>
</template>

<script>
import { childMixin } from 'mixins/multi-items'
import Icon from '../icon'
import Badge from '../badge'

export default {
  name: 'tab-bar-item',
  mixins: [childMixin],
  props: {
    icon: {
      type: String,
      validator: function(value) {
        return ['check', 'close', 'emoji', 'favorfill', 'favor', 'loading', 'roundcheckfill', 'roundcheck', 'roundclosefill', 'roundclose', 'roundrightfill', 'roundright', 'search', 'timefill', 'time', 'unfold', 'warnfill', 'warn', 'likefill', 'like', 'order', 'back', 'more', 'scan', 'questionfill', 'question', 'top', 'pulldown', 'pullup', 'right', 'refresh', 'deletefill', 'delete', 'home', 'homefill', 'squarecheckfill', 'square', 'squarecheck', 'round', 'roundaddfill', 'roundadd', 'add', 'share'].indexOf(value) !== -1
      }
    },
    title: String,
    badge: String
  },
  computed: {
    classes() {
      console.log(this.badge)
      return [
        'yui-tab-bar-item',
        {
          'yui-tab-bar-item-active': this.currentSelected
        }
      ]
    },
    styles() {
      if (this.currentSelected) {
        return {
          color: this.$parent.color
        }
      }
    }
  },
  components: {
    Icon,
    Badge
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-icon {
      width: 26px;
      height: 26px;
      font-size: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    &-badge {
      position: absolute;
      top: -2px;
      left: 18px;
    }
    &-badge-dot {
      position: absolute;
      top: 0px;
      left: 24px;
    }
    &-title {
      font-size: 12px;
    }
  }
}
</style>

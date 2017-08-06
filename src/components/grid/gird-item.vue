<template>
  <a href="javascript:;" class="yui-grid" @click="onClick" :style="styles">
    <div v-if="hasIcon" class="yui-grid-icon">
      <slot name="icon">
        <icon :name="icon"></icon>
      </slot>
    </div>
    <p v-if="hasLabel" class="yui-grid-label">
      <slot name="label">
        <span v-html="label"></span>
      </slot>
    </p>
  </a>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'grid-item',
  props: {
    label: String,
    icon: String
  },
  data() {
    return {
      hasLabel: false,
      hasIcon: false
    }
  },
  mounted() {
    this.hasLabel = this.$slots.label || this.label
    this.hasIcon = this.$slots.icon || this.icon
  },
  computed: {
    styles() {
      const { rows } = this.$parent
      return {
        width: `${100 / rows}%`
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('on-item-click')
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
  &-grid {
    position: relative;
    float: left;
    padding: 20px 10px;
    width: 33.33333333%;
    box-sizing: border-box;
    background-color: $white-color;
    &:active {
      background-color: $background-color;
    }
    &:before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      border-right: 1px solid $border-color;
      transform-origin: 100% 0;
      transform: scaleX(0.5);
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-bottom: 1px solid $border-color;
      transform-origin: 0 100%;
      transform: scaleY(0.5);
    }
    &-icon {
      width: 28px;
      height: 28px;
      font-size: 28px;
      text-align: center;
      color: $primary-color;
      margin: 0 auto 5px auto;
    }
    &-label {
      display: block;
      text-align: center;
      color: $black-color;
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
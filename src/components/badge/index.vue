<template>
  <span :class="classes">{{ text }}</span>
</template>

<script>
export default {
  name: 'badge',
  props: {
    text: {
      type: [String, Number]
    },
    type: {
      type: String,
      default: 'circle',
      validator: function(value) {
        return ['circle', 'square'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      const { text } = this
      return [
        'yui-badge',
        {
          'yui-badge-square': this.type === 'square',
          'yui-badge-single': typeof text !== 'undefined' && text.toString().length === 1,
          'yui-badge-dot': typeof text === 'undefined'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-badge {
    display: inline-block;
    background-color: $danger-color;
    color: $white-color;
    font-size: 12px;
    line-height: 1;
    border-radius: 9px;
    text-align: center;
    vertical-align: middle;
    padding: 3px 8px;
    &-square {
      border-radius: 2px;
    }
    &-single {
      width: 18px;
      padding: 3px 3px;
    }
    &-dot {
      padding: 4px;
    }
  }
}
</style>

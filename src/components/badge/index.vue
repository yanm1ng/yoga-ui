<template>
  <span :class="classes">{{ text }}</span>
</template>

<script>
export default {
  name: 'badge',
  props: {
    text: {
      type: [String, Number]
    }
  },
  computed: {
    classes() {
      const { text } = this
      return [
        'yui-badge',
        {
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
    line-height: 16px;
    border-radius: 8px;
    text-align: center;
    vertical-align: middle;
    padding: 0 6px;
    &-single {
      width: 16px;
      padding: 0;
    }
    &-dot {
      padding: 4px;
    }
  }
}
</style>

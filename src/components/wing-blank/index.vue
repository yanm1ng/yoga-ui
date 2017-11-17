<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wing-blank',
  props: {
    size: {
      type: String,
      default: 'md',
      validator: function(value) {
        return ['lg', 'md', 'sm'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return [
        'yui-wing-blank',
        `yui-wing-blank-${this.size}`
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-wing-blank {
    &-sm {
      margin-left: 5px;
      margin-right: 5px;
    }
    &-md {
      margin-left: 10px;
      margin-right: 10px;
    }
    &-lg {
      margin-left: 15px;
      margin-right: 15px;
    }
  }
}
</style>
<template>
  <div :class="classes"></div>
</template>

<script>
export default {
  name: 'white-space',
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
        'yui-white-space',
        `yui-white-space-${this.size}`
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-white-space {
    width: 100%;
    &-sm {
      height: 5px;
    }
    &-md {
      height: 10px;
    }
    &-lg {
      height: 15px;
    }
  }
}
</style>
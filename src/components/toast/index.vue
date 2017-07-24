<template>
  <div :class="classes">

  </div>
</template>

<script>
export default {
  name: 'toast',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'center'
    },
    time: {
      type: Number,
      default: 3000
    }
  },
  computed: {
    classes() {
      return [
        'yui-toast',
        `yui-toast-${this.direction}`
      ]
    }
  }
}
</script>

<style lang="scss">

</style>

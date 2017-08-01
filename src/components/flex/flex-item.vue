<template>
  <div class="yui-flex-item" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'flex-item',
  props: {
    span: Number
  },
  beforeMount () {
    this.bodyWidth = document.documentElement.offsetWidth
  },
  methods: {
    buildWidth(width) {
      return width < 1 ? width : width / 12
    }
  },
  computed: {
    styles() {
      const { direction, gutter } = this.$parent
      const prefixList = ['-moz-box-', '-webkit-box-', '']
      let styles = {}
      if (this.span) {
        for (let i = 0; i < prefixList.length; i++) {
          styles[`${prefixList[i]}flex`] = `0 0 ${this.buildWidth(this.span) * 100}%`
        }
      }
      let marginName = direction === 'row' ? 'marginLeft' : 'marginTop'
      styles[marginName] = `${gutter}px`
      return styles
    }
  },
  data() {
    return {
      bodyWidth: 0
    }
  }
}
</script>

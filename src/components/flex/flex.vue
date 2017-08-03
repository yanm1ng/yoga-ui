<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'flex',
  props: {
    gutter: {
      type: Number,
      default: 8
    },
    direction: {
      type: String,
      default: 'row',
      validator: function(val) {
        return ['row', 'col'].indexOf(val) !== -1
      }
    },
    justify: String,
    align: String,
    wrap: String
  },
  computed: {
    classes() {
      return [
        'yui-flex',
        `yui-flex-${this.direction}`
      ]
    },
    styles() {
      const styles = {
        'justify-content': this.justify,
        '-webkit-justify-content': this.justify,
        'align-items': this.align,
        '-webkit-align-items': this.align,
        'flex-wrap': this.wrap,
        '-webkit-flex-wrap': this.wrap
      }
      return styles
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-flex {
    width: 100%;
    display: flex;
    align-items: center;
    &-row {
      flex-direction: row;
    }
    &-col {
      flex-direction: column;
      & > .yui-flex-item {
        width: 100%;
      }
    }
    .yui-flex-item {
      flex: 1;
      min-width: 20px;
      &:first-child {
        margin-top: 0 !important;
        margin-left: 0 !important;
      }
    }
  }
}
</style>

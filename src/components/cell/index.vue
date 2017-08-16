<template>
  <div class="yui-cell" :class="{ 'yui-cell-arrow': isLink }" @click="clickHandler">
    <div class="yui-cell-hd">
      <slot name="icon"></slot>
    </div>
    <div class="yui-cell-bd">
      <p>
        <label class="yui-label">{{ title }}</label>
      </p>
      <span class="yui-label-desc">{{ desc }}</span>
    </div>
    <div class="yui-cell-ft">
      <slot name="value">{{ value }}</slot>
    </div>
    <slot name="child"></slot>
  </div>
</template>

<script>
export default {
  name: 'cell',
  props: {
    title: String,
    desc: String,
    value: String,
    isLink: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickHandler(e) {
      this.$emit('on-click', e)
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
.yui {
  &-cell {
    padding: 10px 15px;
    position: relative;
    display: flex;
    align-items: center;
    line-height: 1.4;
    font-size: 16px;
    background-color: $white-color;
    overflow: hidden;
    position: relative;
    &:active {
      background-color: $background-color;
    }
    &:first-child:before {
      display: none;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 1px;
      border-top: 1px solid $border-color;
      transform-origin: 0 0;
      transform: scaleY(0.5);
      left: 15px;
    }
    &-hd {
      display: flex;
      align-items: center;
    }
    &-bd {
      flex: 1;
    }
    &-ft {
      text-align: right;
      color: $grey-color;
      display: flex;
    }
    &-arrow {
      .yui-cell-ft {
        padding-right: 15px;
        position: relative;
        &:after {
          content: '';
          display: inline-block;
          height: 6px;
          width: 6px;
          border-width: 2px 2px 0 0;
          border-color: $border-color;
          border-style: solid;
          transform: matrix(.71,.71,-.71,.71,0,0);
          position: absolute;
          top: 50%;
          margin-top: -4px;
          right: 2px;
        }
      }
    }
  }
  &-label {
    display: block;
    word-wrap: break-word;
    word-break: break-all;
  }
  &-label-desc {
    font-size: 14px;
    color: $grey-color;
  }
}
</style>


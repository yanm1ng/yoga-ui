<template>
  <div class="yui-card">
    <div class="yui-card-hd" v-if="hasHead" @click="onHeadClick">
      <div class="yui-card-hd-left">
        <slot name="icon"></slot>
        <span>{{ headTitle }}</span>
      </div>
      <div class="yui-card-hd-right">{{ headDesc }}</div>
    </div>
    <div class="yui-card-bd" @click="onBodyClick">
      <slot name="body"></slot>
    </div>
    <div class="yui-card-ft" v-if="footer">
      <a href="javascript:;" @click="onFooterClick">{{ footer }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    headTitle: String,
    headDesc: String,
    hasHead: {
      type: Boolean,
      default: true
    },
    footer: String
  },
  methods: {
    onHeadClick() {
      this.$emit('on-head-click')
    },
    onBodyClick() {
      this.$emit('on-body-click')
    },
    onFooterClick() {
      this.$emit('on-footer-click')
    }
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-card {
    margin-top: 20px;
    background-color: $white-color;
    position: relative;
    font-size: 16px;
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      border-top: 1px solid $border-color;
      transform: scaleY(0.5);
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid $border-color;
      transform: scaleY(0.5);
    }
    &-hd {
      position: relative;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-left {
        flex: 1;
        display: flex;
        align-items: center;
      }
      &-right {
        flex: 1;
        text-align: right;
        margin-right: 10px;
        color: $grey-color;
      }
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        left: 15px;
        bottom: 0;
        border-bottom: 1px solid $border-color;
        transform: scaleY(0.5);
      }
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
        right: 15px;
      }
    }
    &-bd {
      padding: 10px 15px;
    }
    &-ft {
      padding: 10px 15px;
      font-size: 14px;
      position: relative;
      & > a {
        color: $primary-color;
      }
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        left: 15px;
        top: 0;
        border-top: 1px solid $border-color;
        transform: scaleY(0.5);
      }
    }
  }
}
</style>

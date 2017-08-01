<template>
  <transition>
    <popup :open="open" direction="center" :autoClose="false" @on-close="closeHandler" class="yui-confirm">
      <div class="yui-confirm-content">
        <div class="yui-confirm-content-hd">
          <strong>{{ title }}</strong>
        </div>
        <div class="yui-confirm-content-bd">{{ content }}</div>
      </div>
      <div class="yui-confirm-footer">
        <a href="javascript:;" class="yui-confirm-btn yui-confirm-btn-default" @click="onCancel">{{ cancelText }}</a>
        <a href="javascript:;" class="yui-confirm-btn yui-confirm-btn-primary" @click="onConfirm">{{ confirmText }}</a>
      </div>
    </popup>
  </transition>
</template>

<script>
import Popup from '../popup'

export default {
  name: 'confirm',
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    title: String,
    content: {
      type: String,
      required: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    closeOnConfirm: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    open(val) {
      if (val) {
        this.$emit('on-show')
      }
    }
  },
  methods: {
    closeHandler() {
      this.$emit('change', false)
    },
    onCancel() {
      this.$emit('change', false)
      this.$emit('on-cancel')
    },
    onConfirm() {
      if (this.closeOnConfirm) {
        this.$emit('change', false)
      }
      this.$emit('on-confirm')
    }
  },
  components: {
    Popup
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';
.yui {
  &-confirm {
    &-content {
      padding: 15px 20px;
      min-height: 1rem;
      &-hd {
        font-size: 18px;
        padding-bottom: 15px;
      }
      &-bd {
        font-size: 15px;
      }
    }
    &-footer {
      font-size: 16px;
      position: relative;
      line-height: 42px;
      display: flex;
      &:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid $border-color;
        transform-origin: 0 0;
        transform: scaleY(0.5);
      }
    }
    &-btn {
      text-decoration: none;
      display: block;
      flex: 1;
      position: relative;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      &-default {
        color: $grey-color;
      }
      &-primary {
        color: $primary-color;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 1px;
          bottom: 0;
          border-left: 1px solid $border-color;
          transform-origin: 0 0;
          transform: scaleX(.5);
        }
      }
      &:active {
        background-color: $background-color;
      }
    }
  }
}
</style>
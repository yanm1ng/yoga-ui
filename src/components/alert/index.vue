<template>
  <transition>
    <popup :open="open" direction="center" :autoClose="false" @on-close="closeHandler" class="yui-alert">
      <div class="yui-alert-content">
        <div class="yui-alert-content-hd">
          <strong>{{ title }}</strong>
        </div>
        <div class="yui-alert-content-bd">{{ content }}</div>
      </div>
      <div class="yui-alert-footer" @click="closeHandler">{{ btnText }}</div>
    </popup>
  </transition>
</template>

<script>
import Popup from '../popup'

export default {
  name: 'alert',
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
    btnText: {
      type: String,
      default: '好的'
    }
  },
  watch: {
    open(val) {
      this.$emit(val ? 'on-show' : 'on-hide')
    }
  },
  methods: {
    closeHandler() {
      this.$emit('change', false)
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
  &-alert {
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
      color: $primary-color;
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
      &:active {
        background-color: $background-color;
      }
    }
  }
}
</style>

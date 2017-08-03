<template>
  <popup :open="open" direction="bottom" :autoClose="autoClose" @on-close="closeHandler">
    <div class="yui-actionsheet">
      <ul v-if="menus.length" class="yui-actionsheet-menus">
        <li v-for="item in menus" :key="item.value" @click="itemHandler(item.value)">{{ item.label }}</li>
      </ul>
      <div v-if="showCancel" class="yui-actionsheet-cancel" @click="closeHandler">取消</div>
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'

export default {
  name: 'actionsheet',
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    open: {
      type: Boolean,
      default: false
    },
    showCancel: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    closeHandler() {
      this.autoClose && this.$emit('on-close')
    },
    itemHandler(value) {
      this.$emit('on-change', value)
      this.autoClose && this.$emit('on-close')
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
  &-actionsheet {
    font-size: 16px;
    background-color: $background-color;
    &-menus {
      li {
        padding: 10px 20px;
        position: relative;
        background-color: $white-color;
        &:last-child {
          &:before {
            display: none;
          }
        }
        &:before {
          content: '';
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          border-bottom: 1px solid $border-color;
          transform-origin: 0 0;
          transform: scaleY(0.5);
        }
      }
    }
    &-cancel {
      font-size: 16px;
      padding: 10px 20px;
      position: relative;
      margin-top: 8px;
      background-color: $white-color;
    }
  }
}
</style>
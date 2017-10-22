<template>
  <cell :title="title" :desc="desc" class="yui-input-cell">
    <div slot="value" class="yui-input-content">
      <input
        v-if="!type || type === 'text'"
        type="text"
        class="yui-input"
        ref="input"
        :maxlength="max"
        :placeholder="placeholder"
        :disabled="disabled"
        v-model="currentValue"
        @focus="onFocus"
        @blur="onBlur"
      />
      <input
        v-if="type === 'number'"
        type="number"
        class="yui-input"
        ref="input"
        :maxlength="max"
        :placeholder="placeholder"
        :disabled="disabled"
        v-model="currentValue"
        @focus="onFocus"
        @blur="onBlur"
      />
      <input
        v-if="type === 'tel'"
        type="tel"
        class="yui-input"
        ref="input"
        :maxlength="max"
        :placeholder="placeholder"
        :disabled="disabled"
        v-model="currentValue"
        @focus="onFocus"
        @blur="onBlur"
      />
      <input
        v-if="type === 'email'"
        type="email"
        class="yui-input"
        ref="input"
        :maxlength="max"
        :placeholder="placeholder"
        :disabled="disabled"
        v-model="currentValue"
        @focus="onFocus"
        @blur="onBlur"
      />
      <icon v-show="showClear && currentValue && controlClear" name="roundclosefill" @click.native="clearInput"></icon>
    </div>
  </cell>
</template>

<script>
import Cell from '../cell'
import Icon from '../icon'

export default {
  name: 'x-input',
  props: {
    value: String,
    title: {
      type: String,
      required: true
    },
    desc: String,
    type: {
      type: String,
      default: 'text',
      validator: function(value) {
        return ['text', 'tel', 'number', 'email'].indexOf(value) !== -1
      }
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentValue: this.value,
      controlClear: false
    }
  },
  methods: {
    clearInput() {
      this.currentValue = ''
      this.$refs.input.focus()
    },
    onFocus($event) {
      this.controlClear = true
      this.$emit('on-focus', this.currentValue, $event)
    },
    onBlur($event) {
      setTimeout(() => {
        this.controlClear = false
      }, 200)
      this.$emit('on-blur', this.currentValue, $event)
    }
  },
  watch: {
    currentValue(val) {
      if (val) {
        this.controlClear = true
      }
      this.$emit('input', val)
      this.$emit('on-change', val)
    },
    value(val) {
      this.currentValue = val
    }
  },
  components: {
    Cell,
    Icon
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-input {
    width: 100%;
    background-color: transparent;
    font-size: inherit;
    height: 1.4em;
    line-height: 1.4;
    color: $black-color;
    vertical-align: middle;
    &-content {
      width: 100%;
      display: flex;
      align-items: center;
      .yui-icon-roundclosefill {
        color: $grey-color;
      }
    }
    &-cell {
      &:active {
        background-color: $white-color !important;
      }
      .yui-cell-bd {
        flex: none;
        margin-right: 20px;
      }
      .yui-cell-ft {
        flex: 1;
      }
    }
  }
}
</style>

<template>
  <cell class="yui-textarea-cell">
    <div slot="value" class="yui-textarea-content">
      <textarea
        class="yui-textarea"
        :placeholder="placeholder"
        :rows="rows"
        :cols="cols"
        :maxlength="max"
        :style="textareaStyle"
        @focus="$emit('on-focus')"
        @blur="$emit('on-blur')"
        v-model="currentValue"
        ref="textarea"
      ></textarea>
      <div class="yui-textarea-counter" v-show="showCounter && max">
        <span>{{ count }}/{{ max }}</span>
      </div>
    </div>
  </cell>
</template>

<script>
import Cell from '../cell'
import autosize from 'autosize'

export default {
  name: 'x-textarea',
  props: {
    value: String,
    placeholder: String,
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 30
    },
    max: Number,
    height: Number,
    showCounter: {
      type: Boolean,
      default: true
    },
    autoSize: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.autoSize) {
        autosize(this.$refs.textarea)
      }
    })
  },
  computed: {
    count() {
      let len = 0
      if (this.currentValue) {
        len = this.currentValue.replace(/\n/g, 'xx').length
      }
      return len > this.max ? this.max : len
    },
    textareaStyle() {
      if (this.height) {
        return {
          height: `${this.height}px`
        }
      }
    },
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val)
      this.$emit('on-change', val)
    },
    value(val) {
      this.currentValue = val
    }
  },
  components: {
    Cell
  }
}
</script>

<style lang="scss">
@import '~styles/variable.scss';

.yui {
  &-textarea {
    width: 100%;
    border: 0;
    outline: 0;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    resize: none;
    font-size: inherit;
    line-height: 1.4;
    color: $black-color;
    vertical-align: middle;
    &-content {
      width: 100%;
      position: relative;
    }
    &-cell {
      .yui-cell-bd {
        flex: none;
      }
      .yui-cell-ft {
        width: 100%;
      }
    }
    &-counter {
      text-align: right;
    }
  }
}
</style>

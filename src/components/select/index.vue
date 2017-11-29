<template>
  <cell :title="title" :desc="desc" is-link class="yui-select-cell" @on-click="clickHandler">
    <span slot="value">{{ currentValue || placeholder }}</span>
  </cell>
</template>

<script>
import Vue from 'vue'
import Cell from '../cell'
import PopupPicker from '../popup-picker'
import Actionsheet from '../actionsheet'

export default {
  name: 'x-select',
  props: {
    title: String,
    desc: String,
    value: String,
    type: {
      type: String,
      default: 'actionsheet',
      validator: function(val) {
        return ['actionsheet', 'picker'].indexOf(val) !== -1
      }
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    options: {
      type: Array,
      required: true,
      validator: function (options) {
        let i = 0
        options.forEach(function(elm) {
          if (elm.hasOwnProperty('label') && elm.hasOwnProperty('value')) {
            i++
          }
        }, this)
        return i === options.length
      }
    },
    defaultValue: String
  },
  data() {
    return {
      currentValue: ''
    }
  },
  created() {
    if (this.defaultValue) {
      this.currentValue = this.defaultValue
    } else if (this.value) {
      this.currentValue = this.value
    } else {
      this.currentValue = ''
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  },
  methods: {
    clickHandler() {
      const select = this
      let node = document.createElement('div')
      document.body.appendChild(node)
      if (this.type === 'actionsheet') {
        this.$popup = new Vue({
          el: node,
          template: `
            <actionsheet v-model="open" :value="value" :menus="menus" active-color auto-close @on-close="closeHandler" @on-change="changeHandler"></actionsheet>
          `,
          components: { Actionsheet },
          data: {
            menus: select.options,
            open: false,
            value: select.currentValue
          },
          mounted() {
            this.open = true
          },
          destroyed() {
            requestAnimationFrame(() => {
              this.$el.remove()
            })
          },
          methods: {
            closeHandler() {
              setTimeout(() => {
                this.$destroy()
              }, 800)
            },
            changeHandler(value) {
              if (select.currentValue !== value) {
                select.$emit('on-change', value).$emit('input', value)
              } else {
                this.closeHandler()
              }
            }
          }
        })
      } else {
        this.$popup = new Vue({
          el: node,
          template: `
            <popup-picker v-model="open" :value="value" :pickers="pickers" auto-close @on-hide="closeHandler" @on-change="changeHandler"></popup-picker>
          `,
          components: { PopupPicker },
          data: {
            pickers: [{
              title: 'value',
              options: select.options
            }],
            open: false,
            value: {
              value: select.currentValue
            }
          },
          mounted() {
            this.open = true
          },
          destroyed() {
            requestAnimationFrame(() => {
              this.$el.remove()
            })
          },
          methods: {
            closeHandler() {
              setTimeout(() => {
                this.$destroy()
              }, 800)
            },
            changeHandler({ value }) {
              if (select.currentValue !== value) {
                select.$emit('on-change', value).$emit('input', value)
              } else {
                this.closeHandler()
              }
            }
          }
        })
      }
    }
  },
  components: {
    Cell,
    PopupPicker
  }
}
</script>

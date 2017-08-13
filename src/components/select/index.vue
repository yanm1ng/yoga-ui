<template>
  <cell :title="title" :desc="desc" is-link class="yui-select-cell" @on-click="clickHandler">
    <span slot="value">{{ value || placeholder }}</span>
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
      required: true
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
            <actionsheet v-model="open" :menus="menus" @on-close="closeHandler" @on-change="changeHandler"></actionsheet>
          `,
          components: { Actionsheet },
          data: {
            menus: select.options,
            open: false,
            value: select.value
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
              if (select.value !== value) {
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
            <popup-picker v-model="open" :pickers="pickers" @on-change="changeHandler"></popup-picker>
          `,
          components: { PopupPicker },
          data: {
            pickers: [{
              title: 'value',
              options: select.options
            }],
            open: false,
            value: select.value
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
              if (select.value !== value) {
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

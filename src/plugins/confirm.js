import ConfirmComponent from 'components/confirm'
import { mergeOptions } from 'utils'

let vm

const plugin = {
  install: function(Vue) {
    const Confirm = Vue.extend(ConfirmComponent)

    if (!vm) {
      vm = new Confirm({
        el: document.createElement('div'),
        propsData: {
          content: ''
        }
      })
      document.body.appendChild(vm.$el)
    }

    const confirm = {
      show: function(options = {}) {
        if (typeof options === 'string') {
          vm.content = options
        } else if (typeof options === 'object') {
          mergeOptions(vm, options)
        }
        if (typeof options === 'object' && options.onShow) {
          options.onShow && options.onShow()
        }
        this.$watcher && this.$watcher()
        this.$watcher = vm.$watch('currentValue', (val) => {
          if (!val && options && options.onHide) {
            options.onHide()
          }
        })

        vm.$off('on-cancel')
        vm.$off('on-confirm')

        vm.$on('on-cancel', () => {
          options && options.onCancel && options.onCancel()
        })
        vm.$on('on-confirm', () => {
          options && options.onConfirm && options.onConfirm()
        })
        vm.currentValue = true
      },
      hide: function() {
        vm.currentValue = false
      }
    }

    Vue.prototype.$confirm = confirm
  }
}

export default plugin
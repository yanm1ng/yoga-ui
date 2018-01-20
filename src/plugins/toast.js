import ToastComponent from 'components/toast'
import { mergeOptions } from 'utils'

let vm

const plugin = {
  install: function(Vue) {
    const Toast = Vue.extend(ToastComponent)

    if (!vm) {
      vm = new Toast({
        el: document.createElement('div')
      })
      document.body.appendChild(vm.$el)
    }

    const toast = {
      show: function(options = {}) {
        if (typeof options === 'string') {
          vm.title = options
        } else if (typeof options === 'object') {
          mergeOptions(vm, options)
        }
        this.$watcher && this.$watcher()
        if (typeof options === 'object' && options.onShow || options.onHide) {
          this.$watcher = vm.$watch('currentValue', (val) => {
            val && options.onShow && options.onShow(vm)
            val === false && options.onHide && options.onHide(vm)
          })
        }
        vm.currentValue = true
      },
      hide: function() {
        vm.currentValue = false
      }
    }

    Vue.prototype.$toast = toast
  }
}

export default plugin
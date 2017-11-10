import ToastComponent from 'components/toast'
import { mergeOptions } from 'utils'

let vm
let watcher

const plugin = {
  install: function(Vue) {
    const Toast = Vue.extend(ToastComponent)

    if (!vm) {
      vm = new Toast({
        el: document.createElement('div')
      })
      document.body.appendChild(vm.$el)
    }

    const defaults = {}
    for (let i in vm.$options.props) {
      if (i !== 'value') {
        defaults[i] = vm.$options.props[i].default
      }
    }

    const toast = {
      show: function(options = {}) {
        watcher && watcher()
        if (typeof options === 'string') {
          vm.title = options
        } else if (typeof options === 'object') {
          mergeOptions(vm, options)
        }
        if (typeof options === 'object' && options.onShow || options.onHide) {
          watcher = vm.$watch('value', (val) => {
            val && options.onShow && options.onShow(vm)
            val === false && options.onHide && options.onHide(vm)
          })
        }
        vm.value = true
      },
      hide: function() {
        vm.value = false
      }
    }

    Vue.prototype.$toast = toast
  }
}

export default plugin
import AlertComponent from 'components/alert'
import { mergeOptions } from 'utils'

let vm

const plugin = {
  install: function(Vue) {
    const Alert = Vue.extend(AlertComponent)

    if (!vm) {
      vm = new Alert({
        el: document.createElement('div'),
        propsData: {
          content: ''
        }
      })
      document.body.appendChild(vm.$el)
    }

    const alert = {
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

        vm.currentValue = true
      },
      hide: function() {
        vm.currentValue = false
      }
    }

    Vue.prototype.$alert = alert
  }
}

export default plugin
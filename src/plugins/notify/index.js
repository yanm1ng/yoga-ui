import NotifyComponent from 'components/notify'
import { mergeOptions } from 'utils'

let vm

const plugin = {
  install: function(Vue) {
    const Notify = Vue.extend(NotifyComponent)

    if (!vm) {
      vm = new Notify({
        el: document.createElement('div')
      })
      document.body.appendChild(vm.$el)
    }

    const notify = {
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

    Vue.prototype.$notify = notify
  }
}

export default plugin
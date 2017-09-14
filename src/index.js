import * as components from 'components'

const install = function(Vue) {
  // 全局注册组件
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.document.body.addEventListener('touchstart', function () {
    // Do nothing
  }, false)
  install(window.Vue)
}

export default {
  install
}
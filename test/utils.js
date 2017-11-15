import Vue from 'vue'
import yogaUI from 'src'

Vue.use(yogaUI)

let id = 0
const createElm = function() {
  const elm = document.createElement('div')
  elm.id = 'app' + ++id
  document.body.appendChild(elm)
  return elm
}

export function getRenderedVm(Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData }).$mount()
  return vm
}

export function createVue(Component) {
  if (Object.prototype.toString.call(Component) === '[object String]') {
    Component = { template: Component }
  }
  return new Vue(Component).$mount(createElm())
}

export function destroyVM(vm) {
  vm.$destroy && vm.$destroy()
  vm.$el &&
  vm.$el.parentNode &&
  vm.$el.parentNode.removeChild(vm.$el)
}
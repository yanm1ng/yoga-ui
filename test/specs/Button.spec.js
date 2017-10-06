import Vue from 'vue'
import { getRenderedVm } from '../utils'
import Button from 'components/button'

describe('Button.vue', () => {
  it('should render correct classes', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor().$mount()
    expect(vm.$el.className).toEqual('yui-btn yui-btn-primary')
  })
  it('should render correct props', () => {
    let vm = getRenderedVm(Button, {
      size: 'mini'
    })
    expect(vm.size).toEqual('mini')
  })
})

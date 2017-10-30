import { getRenderedVm, createVue } from '../utils'
import Divider from 'components/divider'

describe('component divider testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(Divider)
    expect(vm.$el.className).toEqual('yui-divider')
  })
  it('should render with slot', () => {
    let vm = createVue({
      template: `
        <divider>我是有底线的</divider>
      `
    })
    expect(vm.$el.querySelector('.yui-divider-content').textContent).toEqual('我是有底线的')
  })
  it('should render props:barColor', () => {
    let vm = createVue({
      template: `
        <divider bar-color="#ffffff">我是有底线的</divider>
      `
    })
    expect(vm.$el.querySelector('.yui-divider-bar').style.backgroundColor).toEqual('rgb(255, 255, 255)')
  })
})
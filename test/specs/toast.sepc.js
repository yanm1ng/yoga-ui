import { getRenderedVm } from '../utils'
import Toast from 'components/toast'

describe('component toast testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(Toast, {
      value: true
    })
    expect(vm.$el.className).toEqual('yui-toast')
  })
  it('should render props:direction', () => {
    let vm = getRenderedVm(Toast, {
      value: true,
      direction: 'top'
    })
    expect(vm.direction).toEqual('top')
    expect(vm.$el.querySelector('.yui-toast-top')).not.toBeNull()
  })
  it('should render props:title', () => {
    let vm = getRenderedVm(Toast, {
      value: true,
      title: 'title'
    })
    expect(vm.title).toEqual('title')
    expect(vm.$el.querySelector('.yui-toast-content').innerHTML).toEqual('<div>title</div>')
  })
})
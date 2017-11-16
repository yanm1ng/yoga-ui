import { getRenderedVm, destroyVM } from '../utils'
import Badge from 'components/badge'

describe('component alert testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(Badge, {})
    expect(vm.$el.classList.contains('yui-badge')).toEqual(true)
  })
  it('should render props:short title', () => {
    vm = getRenderedVm(Badge, {
      text: 'a'
    })
    expect(vm.text).toEqual('a')
    expect(vm.$el.classList.contains('yui-badge-single')).toEqual(true)
  })
  it('should render props:no title', () => {
    vm = getRenderedVm(Badge, {})
    expect(vm.text).toBeUndefined()
    expect(vm.$el.classList.contains('yui-badge-dot')).toEqual(true)
  })
  it('should render props:long title', () => {
    vm = getRenderedVm(Badge, {
      text: 'aaa'
    })
    expect(vm.text).toEqual('aaa')
    expect(vm.$el.classList.contains('yui-badge-single')).toEqual(false)
  })
  it('should render props:type', () => {
    vm = getRenderedVm(Badge, {
      type: 'square'
    })
    expect(vm.$el.classList.contains('yui-badge-square')).toEqual(true)
  })
})

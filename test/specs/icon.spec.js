import { getRenderedVm, destroyVM } from '../utils'
import Icon from 'components/icon'

describe('component icon testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(Icon, {})
    expect(vm.$el.classList.contains('yui-iconfont')).toEqual(true)
  })
  it('should render props:name', () => {
    vm = getRenderedVm(Icon, {
      name: 'check'
    })
    expect(vm.$el.classList.contains('yui-icon-check')).toEqual(true)
  })
})
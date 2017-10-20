import { getRenderedVm } from '../utils'
import Icon from 'components/icon'

describe('component icon testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(Icon, {})
    expect(vm.$el.classList.contains('yui-iconfont')).toEqual(true)
  })
  it('should render props:name', () => {
    let vm = getRenderedVm(Icon, {
      name: 'check'
    })
    expect(vm.$el.classList.contains('yui-icon-check')).toEqual(true)
  })
})
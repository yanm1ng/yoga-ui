import { getRenderedVm, destroyVM } from '../utils'
import WingBlank from 'components/wing-blank'

describe('component wing-blank testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(WingBlank)
    expect(vm.$el.classList.contains('yui-wing-blank')).toEqual(true)
  })
  it('should render props:size', () => {
    vm = getRenderedVm(WingBlank, {
      size: 'sm'
    })
    expect(vm.size).toEqual('sm')
    expect(vm.$el.classList.contains('yui-wing-blank-sm')).toEqual(true)
    expect(vm.$el.style.marginLeft).toEqual('5px')
    expect(vm.$el.style.marginRight).toEqual('5px')
  })
})
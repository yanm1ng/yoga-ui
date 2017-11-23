import { getRenderedVm, destroyVM } from '../utils'
import WhiteSpace from 'components/white-space'

describe('component white-space testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(WhiteSpace)
    expect(vm.$el.classList.contains('yui-white-space')).toEqual(true)
  })
  it('should render props:size', () => {
    vm = getRenderedVm(WhiteSpace, {
      size: 'sm'
    })
    expect(vm.size).toEqual('sm')
    expect(vm.$el.classList.contains('yui-white-space-sm')).toEqual(true)
    expect(vm.$el.style.height).toEqual('5px')
  })
})
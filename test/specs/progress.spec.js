import { getRenderedVm, destroyVM } from '../utils'
import Progress from 'components/progress'

describe('component progress testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(Progress, {})
    expect(vm.$el.className).toEqual('yui-progress')
  })
  it('should render props:type', () => {
    vm = getRenderedVm(Progress, {
      type: 'bar'
    })
    expect(vm.type).toEqual('bar')
    expect(vm.$el.querySelector('.yui-progress-bar')).not.toBeNull()
  })
  it('should render props:type', () => {
    vm = getRenderedVm(Progress, {
      type: 'circle'
    })
    expect(vm.type).toEqual('circle')
    expect(vm.$el.querySelector('.yui-progress-circle')).not.toBeNull()
  })
  it('should render props:percent', () => {
    vm = getRenderedVm(Progress, {
      percent: 80
    })
    expect(vm.percent).toEqual(80)
    expect(vm.$el.querySelector('.yui-progress-bar-inner').style.width).toEqual('80%')
  })
  it('should render props:color', () => {
    vm = getRenderedVm(Progress, {
      color: '#dddddd'
    })
    expect(vm.color).toEqual('#dddddd')
    expect(vm.$el.querySelector('.yui-progress-bar-inner').style.backgroundColor).toEqual('rgb(221, 221, 221)')
  })
  it('should render props:width;bar', () => {
    vm = getRenderedVm(Progress, {
      width: 5
    })
    expect(vm.width).toEqual(5)
    expect(vm.$el.querySelector('.yui-progress-bar-main').style.height).toEqual('5px')
  })
  it('should render props:width;circle', () => {
    vm = getRenderedVm(Progress, {
      type: 'circle',
      width: 5
    })
    expect(vm.$el.querySelector('svg path').getAttribute('stroke-width')).toEqual('5')
  })
})
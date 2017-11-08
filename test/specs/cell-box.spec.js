import { getRenderedVm, createVue, destroyVM } from '../utils'
import CellBox from 'components/cell-box'

describe('component cell-box testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(CellBox, {})
    expect(vm.$el.className).toEqual('yui-cells-box')
  })
  it('should render props:title', () => {
    vm = getRenderedVm(CellBox, {
      title: 'title'
    })
    expect(vm.title).toEqual('title')
    expect(vm.$el.querySelector('.yui-cells-title').textContent).toEqual('title')
  })
  it('child render', () => {
    vm = createVue({
      template: `
        <cell-box title="列表">
          <cell title="haha" desc="asasa" value="asas"></cell>
          <cell title="haha" desc="asasa" value="asas"></cell>
        </cell-box>
      `
    })
    expect(vm.$el.querySelectorAll('.yui-cell').length).toEqual(2)
  })
})
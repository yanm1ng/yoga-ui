import { getRenderedVm, createVue } from '../utils'
import CellBox from 'components/cell-box'

describe('component cell-box testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(CellBox, {})
    expect(vm.$el.className).toEqual('yui-cells-box')
  })
  it('should render props:title', () => {
    let vm = getRenderedVm(CellBox, {
      title: 'title'
    })
    expect(vm.title).toEqual('title')
    expect(vm.$el.querySelector('.yui-cells-title').textContent).toEqual('title')
  })
  it('child render', () => {
    let vm = createVue({
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
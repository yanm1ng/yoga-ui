import { getRenderedVm, createVue } from '../utils'
import Cell from 'components/cell'

describe('component cell testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(Cell, {})
    expect(vm.$el.className).toEqual('yui-cell')
  })
  it('should render props:title', () => {
    let vm = getRenderedVm(Cell, {
      title: 'title'
    })
    expect(vm.title).toEqual('title')
    expect(vm.$el.querySelector('.yui-label').textContent).toEqual('title')
  })
  it('should render props:desc', () => {
    let vm = getRenderedVm(Cell, {
      desc: 'desc'
    })
    expect(vm.desc).toEqual('desc')
    expect(vm.$el.querySelector('.yui-label-desc').textContent).toEqual('desc')
  })
  it('should render props:value', () => {
    let vm = getRenderedVm(Cell, {
      value: 'value'
    })
    expect(vm.value).toEqual('value')
    expect(vm.$el.querySelector('.yui-cell-ft').textContent).toEqual('value')
  })
  it('should render props:isLink', () => {
    let vm = getRenderedVm(Cell, {
      isLink: true
    })
    expect(vm.isLink).toEqual(true)
    expect(vm.$el.classList.contains('yui-cell-arrow')).toEqual(true)
  })
  it('click event', () => {
    let result = null
    let vm = createVue({
      template: `
        <cell title="haha" desc="asasa" value="asas" @on-click="clickHandler"></cell>
      `,
      methods: {
        clickHandler(e) {
          result = e
        }
      }
    })
    vm.$el.click()
    setTimeout(() => {
      expect(result).not.toBeNull()
      expect(vm.$el.children.length).toEqual(0)
    }, 200)
  })
})
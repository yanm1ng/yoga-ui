import { getRenderedVm, createVue } from '../utils'
import Button from 'components/button'

describe('component button testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(Button, {})
    expect(vm.$el.className).toEqual('yui-btn yui-btn-primary')
  })
  it('should render props:type', () => {
    let vm = getRenderedVm(Button, {
      type: 'ghost'
    })
    expect(vm.type).toEqual('ghost')
    expect(vm.$el.className).toEqual('yui-btn yui-btn-ghost')
  })
  it('should render props:size', () => {
    let vm = getRenderedVm(Button, {
      size: 'mini'
    })
    expect(vm.size).toEqual('mini')
    expect(vm.$el.classList.contains('yui-btn-mini')).toEqual(true)
  })
  it('should render props:circle', () => {
    let vm = getRenderedVm(Button, {
      circle: true
    })
    expect(vm.circle).toEqual(true)
    expect(vm.$el.classList.contains('yui-btn-circle')).toEqual(true)
  })
  it('should render props:disable', () => {
    let vm = getRenderedVm(Button, {
      disabled: true
    })
    expect(vm.$el.disabled).toEqual(true)
    expect(vm.$el.classList.contains('yui-btn-disabled')).toEqual(true)
  })
  it('click', () => {
    let result = null
    let vm = createVue({
      template: `
        <x-button @on-click="handleClick">button</x-button>
      `,
      methods: {
        handleClick(e) {
          result = e
        }
      }
    })
    vm.$el.click()
    setTimeout(() => {
      expect(vm.$el.textContent).toEqual('button')
      expect(result).not.toBeNull()
    }, 20)
  })
})

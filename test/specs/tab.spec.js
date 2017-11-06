import { createVue } from '../utils'

describe('component tab testing', () => {
  it('should render correct class', () => {
    let vm = createVue({
      template: `
        <tab>
          <tab-item>item1</tab-item>
          <tab-item>item2</tab-item>
        </tab>
      `
    })
    expect(vm.$el.classList.contains('yui-tab')).toEqual(true)
    expect(vm.$el.querySelectorAll('.yui-tab-item').length).toEqual(2)
  })
  it('should render props:animate', () => {
    let vm = createVue({
      template: `
        <tab :animate="false">
          <tab-item>item1</tab-item>
          <tab-item>item2</tab-item>
        </tab>
      `
    })
    expect(vm.$el.classList.contains('yui-tab-animate')).toEqual(false)
  })
  it('should render props:color', next => {
    let vm = createVue({
      template: `
        <tab color="#eb4735">
          <tab-item>item1</tab-item>
          <tab-item>item2</tab-item>
        </tab>
      `
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('.yui-tab-selected').style.color).toEqual('rgb(235, 71, 53)')
      expect(vm.$el.querySelector('.yui-tab-ink-bar').style.backgroundColor).toEqual('rgb(235, 71, 53)')
      next()
    }, 500)
  })
  it('should render props:disabled', next => {
    let vm = createVue({
      template: `
        <tab>
          <tab-item>item1</tab-item>
          <tab-item>item2</tab-item>
          <tab-item disabled>item3</tab-item>
        </tab>
      `
    })
    const items = vm.$el.querySelectorAll('.yui-tab-item')
    setTimeout(() => {
      expect(items[2].classList.contains('yui-tab-disabled')).toEqual(true)
      next()
    }, 500)
  })
  it('click events', next => {
    let result = null
    let vm = createVue({
      template: `
        <tab @on-change="handleChange">
          <tab-item>item1</tab-item>
          <tab-item>item2</tab-item>
          <tab-item>item3</tab-item>
        </tab>
      `,
      methods: {
        handleChange(e) {
          result = e
        }
      }
    })
    const items = vm.$el.querySelectorAll('.yui-tab-item')
    items[1].click()
    setTimeout(() => {
      expect(result).toEqual(1)
      expect(items[1].classList.contains('yui-tab-selected')).toEqual(true)
      expect(vm.$el.querySelector('.yui-tab-ink-bar').style.left.slice(0, 4)).toEqual('33.3')
      expect(vm.$el.querySelector('.yui-tab-ink-bar').style.right.slice(0, 4)).toEqual('33.3')
      next()
    }, 500)
  })
})
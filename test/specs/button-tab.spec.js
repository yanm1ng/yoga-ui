import { getRenderedVm, createVue, destroyVM } from '../utils'
import { 
  ButtonTab
} from 'components/button-tab'

describe('component button-tab testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(ButtonTab, {})
    expect(vm.$el.className).toEqual('yui-button-tabs')
  })
  it('child should render correct classes', next => {
    vm = createVue({
      template: `
        <button-tab>
          <button-tab-item>全部</button-tab-item>
          <button-tab-item>热门</button-tab-item>
          <button-tab-item>最近</button-tab-item>
        </button-tab>
      `
    })
    const buttons = vm.$el.querySelectorAll('.yui-button-tab-item')
    setTimeout(() => {
      expect(buttons.length).toEqual(3)
      expect(buttons[0].classList.contains('yui-button-tab-item-first')).toEqual(true)
      expect(buttons[1].classList.contains('yui-button-tab-item-middle')).toEqual(true)
      expect(buttons[2].classList.contains('yui-button-tab-item-last')).toEqual(true)
      next()
    }, 200)
  })
  it('should render props:color', next => {
    vm = createVue({
      template: `
        <button-tab color="#eeeeee">
          <button-tab-item>全部</button-tab-item>
          <button-tab-item>热门</button-tab-item>
          <button-tab-item>最近</button-tab-item>
        </button-tab>
      `
    })
    const buttons = vm.$el.querySelectorAll('.yui-button-tab-item')
    setTimeout(() => {
      expect(buttons[0].style.backgroundColor).toEqual('rgb(238, 238, 238)')
      next()
    }, 200)
  })
  it('click button item', next => {
    let result = null
    vm = createVue({
      template: `
        <button-tab @on-change="handleChange">
          <button-tab-item>全部</button-tab-item>
          <button-tab-item>热门</button-tab-item>
          <button-tab-item>最近</button-tab-item>
        </button-tab>
      `,
      methods: {
        handleChange(e) {
          result = e
        }
      }
    })
    const buttons = vm.$el.querySelectorAll('.yui-button-tab-item')
    buttons[1].click()
    setTimeout(() => {
      expect(buttons[1].classList.contains('yui-button-tab-current')).toEqual(true)
      expect(result).not.toBeNull()
      next()
    }, 200)
  })
})
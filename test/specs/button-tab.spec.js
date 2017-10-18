import { getRenderedVm, createVue } from '../utils'
import { 
  ButtonTab
} from 'components/button-tab'

describe('component button-tab testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(ButtonTab, {})
    expect(vm.$el.className).toEqual('yui-button-tabs')
  })
  it('child should render correct classes', () => {
    let vm = createVue({
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
    }, 200)
  })
  it('should render props:color', () => {
    let vm = createVue({
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
    }, 200)
  })
  it('click button item', () => {
    let result = null
    let vm = createVue({
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
    }, 200)
  })
})

import { getRenderedVm, createVue } from '../utils'
import Notify from 'components/notify'

describe('component notify testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(Notify, {})
    expect(vm.$el.classList.contains('yui-notify')).toEqual(true)
  })
  it('should render props:status', () => {
    let vm = createVue({
      template: `
        <notify :open="true" status="success">重要提示</notify>
      `
    })
    expect(vm.$el.classList.contains('yui-notify-success')).toEqual(true)
  })
  it('should render props:autoClose', () => {
    let vm = createVue({
      template: `
        <notify :open="true" auto-close>重要提示</notify>
      `
    })
    setTimeout(() => {
      expect(vm.open).toEqual(false)
      expect(vm.$el.childNodes).toBeNull()
    }, 2500)
  })
  it('should render props:time', () => {
    let vm = createVue({
      template: `
        <notify :open="true" :time="1000">重要提示</notify>
      `
    })
    setTimeout(() => {
      expect(vm.time).toEqual(1000)
      expect(vm.$el.childNodes).toBeNull()
    }, 1500)
  })
  it('should render with slot', () => {
    let vm = createVue({
      template: `
        <notify :open="true">重要提示</notify>
      `
    })
    expect(vm.$el.querySelector('.yui-popup-inner').textContent).toEqual('重要提示')
  })
  it('state change callback', () => {
    let result = null
    let vm = createVue({
      template: `
        <notify :open="true" auto-close @change="onChange">重要提示</notify>
      `,
      methods: {
        onChange(value) {
          result = value
        }
      }
    })
    setTimeout(() => {
      expect(result).toEqual(false)
      expect(vm.$el.childNodes).toBeNull()
    }, 2500)
  })
})
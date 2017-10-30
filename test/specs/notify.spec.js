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
        <notify :open="true" :auto-close="false">重要提示</notify>
      `
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('.yui-popup-inner')).not.toBeNull()
    }, 2500)
  })
  it('should render props:time', next => {
    let vm = createVue({
      template: `
        <notify v-model="open" :time="1000">重要提示</notify>
      `,
      data() {
        return {
          open: true
        }
      }
    })
    setTimeout(() => {
      expect(vm.$el.children.length).toEqual(0)
      next()
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
  it('state change callback', next => {
    let result = null
    let vm = createVue({
      template: `
        <notify v-model="open" @change="onChange">重要提示</notify>
      `,
      data() {
        return {
          open: true
        }
      },
      methods: {
        onChange() {
          result = false
        }
      }
    })
    setTimeout(() => {
      expect(result).toEqual(false)
      expect(vm.$el.children.length).toEqual(0)
      next()
    }, 2500)
  })
})
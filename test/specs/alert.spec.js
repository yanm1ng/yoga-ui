import { getRenderedVm, createVue } from '../utils'
import Alert from 'components/alert'

describe('component alert testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(Alert, {
      open: true,
      content: 'content'
    })
    expect(vm.$el.className).toEqual('yui-popup yui-alert')
  })
  it('should render props:title', () => {
    let vm = getRenderedVm(Alert, {
      open: true,
      title: 'title',
      content: 'content'
    })
    expect(vm.title).toEqual('title')
    expect(vm.$el.querySelector('.yui-alert-content-hd').textContent).toEqual('title')
  })
  it('should render props:content', () => {
    let vm = getRenderedVm(Alert, {
      open: true,
      content: 'content'
    })
    expect(vm.content).toEqual('content')
    expect(vm.$el.querySelector('.yui-alert-content-bd').textContent).toEqual('content')
  })
  it('should render props:btnText', () => {
    let vm = getRenderedVm(Alert, {
      open: true,
      content: 'content',
      btnText: 'btnText'
    })
    expect(vm.btnText).toEqual('btnText')
    expect(vm.$el.querySelector('.yui-alert-footer').textContent).toEqual('btnText')
  })
  it('click hidden', () => {
    let vm = createVue({
      template: `
        <alert v-model="open" content="你好吗？" title="温馨提示"></alert>
      `,
      data() {
        return {
          open: true
        }
      }
    })
    vm.$el.querySelector('.yui-alert-footer').click()
    // waiting vue transition
    setTimeout(() => {
      expect(vm.$el.children.length).toEqual(0)
    }, 500)
  })
})

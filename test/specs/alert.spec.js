import { getRenderedVm, createVue, destroyVM } from '../utils'
import Alert from 'components/alert'

describe('component alert testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(Alert, {
      value: true,
      content: 'content'
    })
    expect(vm.$el.className).toEqual('yui-popup yui-alert')
  })
  it('should render props:title', () => {
    vm = getRenderedVm(Alert, {
      value: true,
      title: 'title',
      content: 'content'
    })
    expect(vm.title).toEqual('title')
    expect(vm.$el.querySelector('.yui-alert-content-hd').textContent).toEqual('title')
  })
  it('should render props:content', () => {
    vm = getRenderedVm(Alert, {
      value: true,
      content: 'content'
    })
    expect(vm.content).toEqual('content')
    expect(vm.$el.querySelector('.yui-alert-content-bd').textContent).toEqual('content')
  })
  it('should render props:btnText', () => {
    vm = getRenderedVm(Alert, {
      value: true,
      content: 'content',
      btnText: 'btnText'
    })
    expect(vm.btnText).toEqual('btnText')
    expect(vm.$el.querySelector('.yui-alert-footer').textContent).toEqual('btnText')
  })
  it('click hidden', next => {
    vm = createVue({
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
      next()
    }, 500)
  })
})

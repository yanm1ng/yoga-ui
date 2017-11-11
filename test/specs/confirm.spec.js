import { getRenderedVm, createVue, destroyVM } from '../utils'
import Confirm from 'components/confirm'

describe('component confirm testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(Confirm, {
      content: 'content'
    })
    expect(vm.$el.classList.contains('yui-confirm')).toEqual(true)
  })
  it('should render props:value', () => {
    vm = getRenderedVm(Confirm, {
      value: true,
      content: 'content'
    })
    expect(vm.value).toEqual(true)
    expect(vm.$el.children).not.toBeNull()
  })
  it('should render props:title', () => {
    vm = getRenderedVm(Confirm, {
      value: true,
      title: 'title',
      content: 'content'
    })
    expect(vm.title).toEqual('title')
    expect(vm.$el.querySelector('.yui-confirm-content-hd').textContent).toEqual('title')
  })
  it('should render props:content', () => {
    vm = getRenderedVm(Confirm, {
      value: true,
      title: 'title',
      content: 'content'
    })
    expect(vm.content).toEqual('content')
    expect(vm.$el.querySelector('.yui-confirm-content-bd').textContent).toEqual('content')
  })
  it('should render props:cancelText', () => {
    vm = getRenderedVm(Confirm, {
      value: true,
      cancelText: 'cancelText',
      content: 'content'
    })
    expect(vm.cancelText).toEqual('cancelText')
    expect(vm.$el.querySelector('.yui-confirm-btn-default').textContent.replace(/\s/g, '')).toEqual('cancelText')
  })
  it('should render props:confirmText', () => {
    vm = getRenderedVm(Confirm, {
      value: true,
      confirmText: 'confirmText',
      content: 'content'
    })
    expect(vm.confirmText).toEqual('confirmText')
    expect(vm.$el.querySelector('.yui-confirm-btn-primary').textContent.replace(/\s/g, '')).toEqual('confirmText')
  })
  it('click confirm', next => {
    let result = null
    vm = createVue({
      template: `
        <confirm v-model="open" content="你好吗？" @on-confirm="onConfirm"></confirm>
      `,
      data() {
        return {
          open: true
        }
      },
      methods: {
        onConfirm() {
          result = 'confirm'
        }
      }
    })
    const confirmBtn = vm.$el.querySelector('.yui-confirm-btn-primary')
    confirmBtn.click()
    setTimeout(() => {
      expect(result).toEqual('confirm')
      expect(vm.open).toEqual(false)
      next()
    }, 200)
  })
  it('click cancel', next => {
    let result = null
    vm = createVue({
      template: `
        <confirm v-model="open" content="你好吗？" @on-cancel="onCancel"></confirm>
      `,
      data() {
        return {
          open: true
        }
      },
      methods: {
        onCancel() {
          result = 'cancel'
        }
      }
    })
    const cancelBtn = vm.$el.querySelector('.yui-confirm-btn-default')
    cancelBtn.click()
    setTimeout(() => {
      expect(result).toEqual('cancel')
      expect(vm.open).toEqual(false)
      next()
    }, 200)
  })
})
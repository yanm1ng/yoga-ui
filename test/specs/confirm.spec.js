import { getRenderedVm, createVue } from '../utils'
import Confirm from 'components/confirm'

describe('component confirm testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(Confirm, {
      content: 'content'
    })
    expect(vm.$el.classList.contains('yui-confirm')).toEqual(true)
  })
  it('should render props:open', () => {
    let vm = getRenderedVm(Confirm, {
      open: true,
      content: 'content'
    })
    expect(vm.open).toEqual(true)
    expect(vm.$el.children).not.toBeNull()
  })
  it('should render props:title', () => {
    let vm = getRenderedVm(Confirm, {
      open: true,
      title: 'title',
      content: 'content'
    })
    expect(vm.title).toEqual('title')
    expect(vm.$el.querySelector('.yui-confirm-content-hd').textContent).toEqual('title')
  })
  it('should render props:content', () => {
    let vm = getRenderedVm(Confirm, {
      open: true,
      title: 'title',
      content: 'content'
    })
    expect(vm.content).toEqual('content')
    expect(vm.$el.querySelector('.yui-confirm-content-bd').textContent).toEqual('content')
  })
  it('should render props:cancelText', () => {
    let vm = getRenderedVm(Confirm, {
      open: true,
      cancelText: 'cancelText',
      content: 'content'
    })
    expect(vm.cancelText).toEqual('cancelText')
    expect(vm.$el.querySelector('.yui-confirm-btn-default').textContent.replace(/\s/g, '')).toEqual('cancelText')
  })
  it('should render props:confirmText', () => {
    let vm = getRenderedVm(Confirm, {
      open: true,
      confirmText: 'confirmText',
      content: 'content'
    })
    expect(vm.confirmText).toEqual('confirmText')
    expect(vm.$el.querySelector('.yui-confirm-btn-primary').textContent.replace(/\s/g, '')).toEqual('confirmText')
  })
  it('click confirm', next => {
    let result = null
    let vm = createVue({
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
    let vm = createVue({
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
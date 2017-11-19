import { getRenderedVm, createVue, destroyVM } from '../utils'
import Actionsheet from 'components/actionsheet'

describe('component actionsheet testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(Actionsheet, {
      open: true,
      menus: [
        { label: '选项一', value: 'value1' },
        { label: '选项二', value: 'value2' }
      ]
    })
    expect(vm.$el.className).toEqual('yui-popup')
    expect(vm.$el.querySelector('.yui-actionsheet')).not.toBeNull()
    expect(vm.$el.querySelector('.yui-actionsheet-menus').children.length).toEqual(2)
  })
  it('should render props:showCancel', () => {
    vm = getRenderedVm(Actionsheet, {
      open: true,
      menus: [
        { label: '选项一', value: 'value1' },
        { label: '选项二', value: 'value2' }
      ],
      showCancel: true
    })
    expect(vm.showCancel).toEqual(true)
    expect(vm.$el.querySelector('.yui-actionsheet-cancel')).not.toBeNull()
  })
  it('should render props:cancelText', () => {
    vm = getRenderedVm(Actionsheet, {
      open: true,
      menus: [
        { label: '选项一', value: 'value1' },
        { label: '选项二', value: 'value2' }
      ],
      showCancel: true,
      cancelText: 'cancelText'
    })
    expect(vm.cancelText).toEqual('cancelText')
    expect(vm.$el.querySelector('.yui-actionsheet-cancel').textContent).toEqual('cancelText')
  })
  it('should render inner message', () => {
    vm = getRenderedVm(Actionsheet, {
      open: true,
      menus: [
        { label: '选项一', value: 'value1', message: '<span>i am message</span>' },
        { label: '选项二', value: 'value2' }
      ]
    })
    const menus = vm.$el.querySelector('.yui-actionsheet-menus').children
    expect(menus[0].querySelector('.yui-actionsheet-menu-message').innerHTML).toEqual('<span>i am message</span>')
  })
  it('should render props:autoClose', () => {
    vm = getRenderedVm(Actionsheet, {
      open: true,
      menus: [
        { label: '选项一', value: 'value1' },
        { label: '选项二', value: 'value2' }
      ],
      autoClose: false
    })
    expect(vm.autoClose).toEqual(false)
  })
  it('click menu', next => {
    let result = null
    vm = createVue({
      template: `
        <actionsheet v-model="open" :menus="menus" @on-change="onChange"></actionsheet>
      `,
      data() {
        return {
          open: true,
          menus: [
            { label: '选项一', value: 'value1' },
            { label: '选项二', value: 'value2' }
          ]
        }
      },
      methods: {
        onChange(value) {
          result = value
        }
      }
    })
    const menus = vm.$el.querySelector('.yui-actionsheet-menus').children
    menus[1].click()
    setTimeout(() => {
      expect(vm.open).toEqual(false)
      expect(result).toEqual('value2')
      expect(vm.$el.querySelector('.yui-actionsheet')).toBeNull()
      next()
    }, 500)
  })
  it('click menu not close menus', next => {
    let result = null
    vm = createVue({
      template: `
        <actionsheet v-model="open" :menus="menus" :auto-close="false" @on-change="onChange"></actionsheet>
      `,
      data() {
        return {
          open: true,
          menus: [
            { label: '选项一', value: 'value1' },
            { label: '选项二', value: 'value2' }
          ]
        }
      },
      methods: {
        onChange(value) {
          result = value
        }
      }
    })
    const menus = vm.$el.querySelector('.yui-actionsheet-menus').children
    menus[0].click()
    setTimeout(() => {
      expect(vm.open).toEqual(true)
      expect(result).toEqual('value1')
      expect(vm.$el.querySelector('.yui-actionsheet')).not.toBeNull()
      next()
    }, 500)
  })
})
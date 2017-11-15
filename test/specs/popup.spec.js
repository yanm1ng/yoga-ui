import { getRenderedVm, createVue, destroyVM } from '../utils'
import Popup from 'components/popup'

describe('component popup testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(Popup, {})
    expect(vm.$el.className).toEqual('yui-popup')
  })
  it('should render props:open', () => {
    vm = getRenderedVm(Popup, {
      open: true
    })
    expect(vm.open).toEqual(true)
    expect(vm.$el.querySelector('.yui-popup-inner')).not.toBeNull()
  })
  it('should render props:direction', () => {
    vm = getRenderedVm(Popup, {
      open: true,
      direction: 'top'
    })
    expect(vm.direction).toEqual('top')
    expect(vm.$el.querySelector('.yui-popup-top')).not.toBeNull()
  })
  it('should render props:full', () => {
    vm = getRenderedVm(Popup, {
      open: true,
      full: true
    })
    expect(vm.full).toEqual(true)
    expect(vm.$el.querySelector('.yui-popup-full')).not.toBeNull()
    expect(vm.$el.querySelector('.yui-overlay')).toBeNull()
  })
  it('should render props:withMask', () => {
    vm = getRenderedVm(Popup, {
      open: true,
      withMask: false
    })
    expect(vm.withMask).toEqual(false)
    expect(vm.$el.querySelector('.yui-overlay')).toBeNull()
  })
  it('should render props:autoClose', next => {
    vm = createVue({
      template: `
        <popup :open="open" :auto-close="false">
          <div>hello</div>
        </popup>
      `,
      data() {
        return {
          open: true
        }
      }
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('.yui-popup-inner')).not.toBeNull()
      next()
    }, 1000)
  })
  it('events enter', next => {
    let result = null
    vm = createVue({
      template: `
        <div>
          <x-button @on-click="open = true">Open</x-button>
          <popup :open="open" @on-enter="handleEnter">
            <div>hello</div>
          </popup>
        </div>
      `,
      data() {
        return {
          open: false
        }
      },
      methods: {
        handleEnter() {
          result = 'enter'
        }
      }
    })
    vm.$el.querySelector('.yui-btn').click()
    setTimeout(() => {
      expect(vm.$el.querySelector('.yui-popup').style.zIndex).toEqual('1000')
      expect(vm.$el.querySelector('.yui-popup-inner')).not.toBeNull()
      expect(result).toEqual('enter')
      next()
    }, 1000)
  })
  it('events close', next => {
    vm = createVue({
      template: `
        <popup :open="open" @on-close="handleClose">
          <div>hello</div>
        </popup>
      `,
      data() {
        return {
          open: true
        }
      },
      methods: {
        handleClose() {
          this.open = false
        }
      }
    })
    vm.$el.querySelector('.yui-overlay').click()
    setTimeout(() => {
      expect(vm.$el.querySelector('.yui-popup-inner')).toBeNull()
      next()
    }, 1000)
  })
})
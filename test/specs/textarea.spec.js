import { getRenderedVm, createVue, destroyVM } from '../utils'
import Textarea from 'components/textarea'

describe('component textarea testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(Textarea, {})
    expect(vm.$el.classList.contains('yui-textarea-cell')).toEqual(true)
  })
  it('should render props:value', () => {
    vm = getRenderedVm(Textarea, {
      value: 'textarea'
    })
    expect(vm.value).toEqual('textarea')
    expect(vm.$el.querySelector('textarea').value).toEqual('textarea')
  })
  it('should render props:placeholder', () => {
    vm = getRenderedVm(Textarea, {
      placeholder: 'placeholder'
    })
    expect(vm.placeholder).toEqual('placeholder')
    expect(vm.$el.querySelector('textarea').getAttribute('placeholder')).toEqual('placeholder')
  })
  it('should render props:placeholder', () => {
    vm = getRenderedVm(Textarea, {
      placeholder: 'placeholder'
    })
    expect(vm.placeholder).toEqual('placeholder')
    expect(vm.$el.querySelector('textarea').getAttribute('placeholder')).toEqual('placeholder')
  })
  it('should render props:rows', () => {
    vm = getRenderedVm(Textarea, {
      rows: 4
    })
    expect(vm.rows).toEqual(4)
    expect(vm.$el.querySelector('textarea').getAttribute('rows')).toEqual('4')
  })
  it('should render props:cols', () => {
    vm = getRenderedVm(Textarea, {
      cols: 40
    })
    expect(vm.cols).toEqual(40)
    expect(vm.$el.querySelector('textarea').getAttribute('cols')).toEqual('40')
  })
  it('should render props:max', () => {
    vm = getRenderedVm(Textarea, {
      max: 100
    })
    expect(vm.max).toEqual(100)
    expect(vm.$el.querySelector('textarea').getAttribute('maxlength')).toEqual('100')
  })
  it('should render props:height', () => {
    vm = getRenderedVm(Textarea, {
      height: 200
    })
    expect(vm.height).toEqual(200)
    expect(vm.$el.querySelector('textarea').style.height).toEqual('200px')
  })
  it('should render props:showCounter', () => {
    vm = getRenderedVm(Textarea, {
      showCounter: false
    })
    expect(vm.showCounter).toEqual(false)
    expect(vm.$el.querySelector('.yui-textarea-counter').style.display).toEqual('none')
  })
  it('should render props:disabled', () => {
    vm = getRenderedVm(Textarea, {
      disabled: true
    })
    expect(vm.disabled).toEqual(true)
    expect(vm.$el.querySelector('textarea').disabled).toEqual(true)
  })
  it('focus event', () => {
    vm = createVue({
      template: `
        <x-textarea v-model="value" @on-focus="handleFocus"></x-textarea>
      `,
      data() {
        return {
          value: '',
          isFocus: false
        }
      },
      methods: {
        handleFocus() {
          this.isFocus = true
        }
      }
    })
    const textareaEle = vm.$el.querySelector('textarea')
    textareaEle.focus()
    expect(vm.isFocus).toEqual(true)
  })
  it('blur event', () => {
    vm = createVue({
      template: `
        <x-textarea v-model="value" @on-blur="handleBlur"></x-textarea>
      `,
      data() {
        return {
          value: '',
          isBlur: false
        }
      },
      methods: {
        handleBlur() {
          this.isBlur = true
        }
      }
    })
    const textareaEle = vm.$el.querySelector('textarea')
    textareaEle.focus()
    textareaEle.blur()
    expect(vm.isBlur).toEqual(true)
  })
})
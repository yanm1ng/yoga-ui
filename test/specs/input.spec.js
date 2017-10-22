import { getRenderedVm, createVue } from '../utils'
import Input from 'components/input'

describe('component input testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(Input, {
      title: 'title'
    })
    expect(vm.$el.classList.contains('yui-input-cell')).toEqual(true)
    expect(vm.$el.querySelector('.yui-input')).not.toBeNull()
  })
  it('should render props:type', () => {
    let vm = getRenderedVm(Input, {
      title: 'title',
      type: 'email'
    })
    expect(vm.type).toEqual('email')
    expect(vm.$el.querySelector('.yui-input').type).toEqual('email')
  })
  it('should render props:placeholder', () => {
    let vm = getRenderedVm(Input, {
      title: 'title',
      placeholder: 'placeholder'
    })
    expect(vm.placeholder).toEqual('placeholder')
    expect(vm.$el.querySelector('.yui-input').getAttribute('placeholder')).toEqual('placeholder')
  })
  it('should render props:max', () => {
    let vm = getRenderedVm(Input, {
      title: 'title',
      max: 12
    })
    expect(vm.max).toEqual(12)
    expect(vm.$el.querySelector('.yui-input').getAttribute('maxlength')).toEqual('12')
  })
  it('should render props:showClear', () => {
    let vm = createVue({
      template: `
        <cell-box>
          <x-input title="姓名" v-model="value" @on-focus="handleFocus"></x-input>
        </cell-box>
      `,
      data() {
        return {
          value: '',
          inputFocus: false
        }
      },
      methods: {
        handleFocus() {
          this.inputFocus = true
        }
      }
    })
    const inputEle = vm.$el.querySelector('input')
    inputEle.focus()
    expect(vm.inputFocus).toEqual(true)
  })
  it('should render props:disabled', () => {
    let vm = createVue({
      template: `
        <cell-box>
          <x-input title="title" disabled></x-input>
        </cell-box>
      `
    })
    expect(vm.$el.querySelector('input').disabled).toEqual(true)
  })
})
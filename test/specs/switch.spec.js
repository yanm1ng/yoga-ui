import { getRenderedVm, createVue } from '../utils'
import Switch from 'components/switch'

describe('component switch testing', () => {
  it('should render correct class', () => {
    let vm = getRenderedVm(Switch, {})
    expect(vm.$el.querySelector('input').type).toEqual('checkbox')
    expect(vm.$el.querySelector('.yui-switch')).not.toBeNull()
  })
  it('should render props:title', () => {
    let vm = createVue({
      template: `
        <cell-box title="switch">
          <x-switch v-model="value" title="title"></x-switch>
        </cell-box>
      `,
      data() {
        return {
          value: false
        }
      }
    })
    expect(vm.$el.querySelector('.yui-label').textContent).toEqual('title')
  })
  it('should render props:desc', () => {
    let vm = createVue({
      template: `
        <cell-box title="switch">
          <x-switch v-model="value" title="title" desc="desc"></x-switch>
        </cell-box>
      `,
      data() {
        return {
          value: false
        }
      }
    })
    expect(vm.$el.querySelector('.yui-label-desc').textContent).toEqual('desc')
  })
  it('should render props:value', () => {
    let vm = createVue({
      template: `
        <cell-box title="switch">
          <x-switch v-model="value" title="title" desc="desc"></x-switch>
        </cell-box>
      `,
      data() {
        return {
          value: true
        }
      }
    })
    expect(vm.$el.querySelector('.yui-switch').value).toEqual('on')
  })
  it('should render props:disabled', () => {
    let vm = createVue({
      template: `
        <cell-box title="switch">
          <x-switch v-model="value" title="title" :disabled="true"></x-switch>
        </cell-box>
      `,
      data() {
        return {
          value: true
        }
      }
    })
    expect(vm.$el.querySelector('.yui-switch').getAttribute('disabled')).toEqual('disabled')
  })
  it('events', next => {
    let result = null
    let vm = createVue({
      template: `
        <cell-box title="switch">
          <x-switch v-model="value" title="title" @on-change="onChange"></x-switch>
        </cell-box>
      `,
      data() {
        return {
          value: false
        }
      },
      methods: {
        onChange() {
          result = 'changed'
        }
      }
    })
    vm.$el.querySelector('.yui-switch').click()
    setTimeout(() => {
      expect(vm.$el.querySelector('.yui-switch').value).toEqual('on')
      expect(result).toEqual('changed')
      next()
    }, 500)
  })
})
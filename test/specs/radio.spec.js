import { getRenderedVm, createVue } from '../utils'
import Radio from 'components/radio'

describe('component radio testing', () => {
  it('should render correct class', () => {
    let vm = getRenderedVm(Radio, {
      value: '1',
      options: [
        { label: '选项一', value: '1' },
        { label: '选项二', value: '2' }
      ]
    })
    expect(vm.$el.querySelectorAll('.yui-cell').length).toEqual(2)
  })
  it('should render props:title', () => {
    let vm = createVue({
      template: `
        <radio title="title" :value="value" :options="options"></radio>
      `,
      data() {
        return {
          value: '1',
          options: [
            { label: '选项一', value: '1' },
            { label: '选项二', value: '2' }
          ]
        }
      }
    })
    expect(vm.$el.querySelector('.yui-cells-title').textContent).toEqual('title')
  })
  it('should render props:position', () => {
    let vm = createVue({
      template: `
        <radio title="title" position="right" :value="value" :options="options"></radio>
      `,
      data() {
        return {
          value: '1',
          options: [
            { label: '选项一', value: '1' },
            { label: '选项二', value: '2' }
          ]
        }
      }
    })
    expect(vm.$el.querySelector('.yui-cell-ft').innerHTML.indexOf('yui-radio')).not.toEqual(-1)
  })
  it('v-model bind', next => {
    let vm = createVue({
      template: `
        <radio title="title" v-model="value" :options="options"></radio>
      `,
      data() {
        return {
          value: '1',
          options: [
            { label: '选项一', value: '1' },
            { label: '选项二', value: '2' }
          ]
        }
      }
    })
    const radios = vm.$el.querySelectorAll('.yui-cell')
    radios[1].click()
    setTimeout(() => {
      expect(vm.value).toEqual('2')
      next()
    }, 500)
  })
  it('check events', next => {
    let result = null
    let vm = createVue({
      template: `
        <radio title="title" v-model="value" :options="options" @on-change="onChange"></radio>
      `,
      data() {
        return {
          value: '1',
          options: [
            { label: '选项一', value: '1' },
            { label: '选项二', value: '2' }
          ]
        }
      },
      methods: {
        onChange() {
          result = 'checked'
        }
      }
    })
    const radios = vm.$el.querySelectorAll('.yui-cell')
    radios[1].click()
    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.yui-radio')[1].classList.contains('yui-radio-checked')).toEqual(true)
      expect(result).toEqual('checked')
      next()
    }, 500)
  })
})
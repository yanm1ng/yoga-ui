import { getRenderedVm, createVue, destroyVM } from '../utils'
import Checkbox from 'components/checkbox'

describe('component checkbox testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(Checkbox, {
      options: [
        { label: '选项一', value: '1' },
        { label: '选项二', value: '2' }
      ]
    })
    expect(vm.$el.className).toEqual('yui-cells-box')
    expect(vm.$el.querySelector('.yui-checkbox')).not.toBeNull()
  })
  it('should render props:title', () => {
    vm = getRenderedVm(Checkbox, {
      title: 'title',
      options: [
        { label: '选项一', value: '1' },
        { label: '选项二', value: '2' }
      ]
    })
    expect(vm.title).toEqual('title')
    expect(vm.$el.querySelector('.yui-cells-title').textContent).toEqual('title')
  })
  it('should render props:options', () => {
    vm = getRenderedVm(Checkbox, {
      options: [
        { label: '选项一', value: '1' },
        { label: '选项二', value: '2' }
      ]
    })
    expect(vm.options.length).toEqual(2)
    expect(vm.$el.querySelectorAll('.yui-checkbox').length).toEqual(2)
  })
  it('should render props:values', () => {
    vm = getRenderedVm(Checkbox, {
      options: [
        { label: '选项一', value: '1' },
        { label: '选项二', value: '2' }
      ],
      values: ['1']
    })
    expect(vm.values.length).toEqual(1)
    expect(vm.$el.querySelectorAll('.yui-checkbox-checked').length).toEqual(1)
  })
  it('click checked', next => {
    let result = null
    vm = createVue({
      template: `
        <checkbox title="title" :options="options" @on-change="handleChange"></checkbox>
      `,
      data() {
        return {
          options: [
            { label: '选项一', value: '1' },
            { label: '选项二', value: '2' }
          ]
        }
      },
      methods: {
        handleChange(values) {
          result = values
        }
      }
    })
    const options = vm.$el.querySelectorAll('.yui-cell')
    options[0].click()
    setTimeout(() => {
      expect(result).not.toBeNull()
      expect(result.length).toEqual(1)
      expect(vm.$el.querySelectorAll('.yui-checkbox-checked').length).toEqual(1)
      next()
    }, 200)
  })
  it('click with props:max', next => {
    let result = null
    vm = createVue({
      template: `
        <checkbox title="title" :values="values" :max="2" :options="options" @on-change="handleChange"></checkbox>
      `,
      data() {
        return {
          options: [
            { label: '选项一', value: '1' },
            { label: '选项二', value: '2' },
            { label: '选项三', value: '3' }
          ],
          values: ['1', '2']
        }
      },
      methods: {
        handleChange(values) {
          result = values
        }
      }
    })
    const options = vm.$el.querySelectorAll('.yui-cell')
    options[2].click()
    setTimeout(() => {
      expect(result).not.toBeNull()
      expect(result.length).toEqual(2)
      expect(vm.$el.querySelectorAll('.yui-checkbox-checked').length).toEqual(2)
      expect(options[2].querySelector('.yui-checkbox').classList.contains('yui-checkbox-checked')).toEqual(false)
      next()
    }, 200)
  })
})
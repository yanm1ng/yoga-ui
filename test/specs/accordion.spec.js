import { getRenderedVm, createVue, destroyVM } from '../utils'
import Accordion from 'components/accordion'

describe('component accordion testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(Accordion, {
      list: [
        { title: 'title1', content: 'content1' },
        { title: 'title2', content: 'content2' }
      ]
    })
    expect(vm.$el.className).toEqual('yui-cells-box')
    expect(vm.$el.querySelectorAll('.yui-accordion').length).toEqual(2)
  })
  it('should render props:defaultOpened', () => {
    vm = getRenderedVm(Accordion, {
      list: [
        { title: 'title1', content: 'content1' },
        { title: 'title2', content: 'content2' }
      ],
      defaultOpened: [0, 1]
    })
    expect(vm.defaultOpened.length).toEqual(2)
    expect(vm.$el.querySelectorAll('.yui-cell-active').length).toEqual(2)
  })
  it('should render props:animate', () => {
    vm = getRenderedVm(Accordion, {
      list: [
        { title: 'title1', content: 'content1' },
        { title: 'title2', content: 'content2' }
      ],
      animate: false
    })
    expect(vm.animate).toEqual(false)
    expect(vm.$el.querySelector('.no-animate')).not.toBeNull()
  })
  it('should render props:single', () => {
    vm = getRenderedVm(Accordion, {
      list: [
        { title: 'title1', content: 'content1' },
        { title: 'title2', content: 'content2' }
      ],
      single: true
    })
    expect(vm.single).toEqual(true)
  })
  it('click', next => {
    let result = null
    vm = createVue({
      template: `
        <accordion title="title" :list="list" @on-change="handleChange"></accordion>
      `,
      data() {
        return {
          list: [
            { title: 'title1', content: 'content1' },
            { title: 'title2', content: 'content2' }
          ]
        }
      },
      methods: {
        handleChange(values) {
          result = values
        }
      }
    })
    vm.$el.querySelector('.yui-cell-arrow').click()
    setTimeout(() => {
      expect(result).not.toBeNull()
      next()
    }, 200)
  })
  it('click single', next => {
    let result = null
    vm = createVue({
      template: `
        <accordion title="title" :single="true" :list="list" @on-change="handleChange"></accordion>
      `,
      data() {
        return {
          list: [
            { title: 'title1', content: 'content1' },
            { title: 'title2', content: 'content2' }
          ]
        }
      },
      methods: {
        handleChange(values) {
          result = values
        }
      }
    })
    const accordions = vm.$el.querySelectorAll('.yui-cell-arrow')
    accordions[0].click()
    accordions[1].click()
    setTimeout(() => {
      expect(result).not.toBeNull()
      expect(result.length).toEqual(1)
      next()
    }, 200)
  })
})
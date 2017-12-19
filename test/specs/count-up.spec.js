import { createVue, destroyVM } from '../utils'

describe('component divider testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct tag', () => {
    vm = createVue({
      template: `
        <count-up :start-val="0" :end-val="2017"></count-up>
      `
    })
    expect(vm.$el.tagName).toEqual('SPAN')
  })
  it('should render props:startVal', () => {
    vm = createVue({
      template: `
        <count-up :start="false" :start-val="0" :end-val="2017"></count-up>
      `
    })
    expect(vm.$el.textContent).toEqual('0')
  })
  it('should render props:endVal', next => {
    vm = createVue({
      template: `
        <count-up :start-val="0" :end-val="2017"></count-up>
      `
    })
    setTimeout(() => {
      expect(vm.$el.textContent).toEqual('2,017')
      next()
    }, 2000)
  })
  it('should render props:decimals', next => {
    vm = createVue({
      template: `
        <count-up :start-val="0" :end-val="2017" :decimals="2"></count-up>
      `
    })
    setTimeout(() => {
      expect(vm.$el.textContent).toEqual('2,017.00')
      next()
    }, 2100)
  })
  it('should render props:duration', next => {
    vm = createVue({
      template: `
        <count-up :start-val="0" :end-val="2017" :duration="1"></count-up>
      `
    })
    setTimeout(() => {
      expect(vm.$el.textContent).toEqual('2,017')
      next()
    }, 2100)
  })
  it('should render props:delay', next => {
    vm = createVue({
      template: `
        <count-up :start-val="0" :end-val="2017" :delay="500"></count-up>
      `
    })
    setTimeout(() => {
      expect(vm.$el.textContent).toEqual('0')
      next()
    }, 500)
  })
})
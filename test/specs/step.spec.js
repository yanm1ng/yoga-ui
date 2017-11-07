import { createVue } from '../utils'

describe('component step testing', () => {
  it('should render correct class', () => {
    let vm = createVue({
      template: `
        <step :current="1">
          <step-item title="step1"></step-item>
          <step-item title="step2"></step-item>
          <step-item title="step3"></step-item>
        </step>
      `
    })
    expect(vm.$el.className).toEqual('yui-steps')
    expect(vm.$el.querySelectorAll('.yui-step-item').length).toEqual(3)
  })
  it('should render props:current', next => {
    let vm = createVue({
      template: `
        <step :current="1">
          <step-item title="step1"></step-item>
          <step-item title="step2"></step-item>
          <step-item title="step3"></step-item>
        </step>
      `
    })
    setTimeout(() => {
      const steps = vm.$el.querySelectorAll('.yui-step-item')
      expect(steps[0].classList.contains('yui-step-item-finish')).toEqual(true)
      expect(steps[1].classList.contains('yui-step-item-process')).toEqual(true)
      expect(steps[2].classList.contains('yui-step-item-wait')).toEqual(true)
      next()
    }, 500)
  })
  it('should render props:direction', () => {
    let vm = createVue({
      template: `
        <step direction="vertical">
          <step-item title="step1"></step-item>
          <step-item title="step2"></step-item>
          <step-item title="step3"></step-item>
        </step>
      `
    })
    expect(vm.$el.classList.contains('yui-steps-vertical')).toEqual(true)
  })
  it('should render props:title', () => {
    let vm = createVue({
      template: `
        <step>
          <step-item title="step1"></step-item>
          <step-item title="step2"></step-item>
          <step-item title="step3"></step-item>
        </step>
      `
    })
    const steps = vm.$el.querySelectorAll('.yui-step-item')
    expect(steps[0].querySelector('.yui-step-item-body-title').textContent).toEqual('step1')
    expect(steps[1].querySelector('.yui-step-item-body-title').textContent).toEqual('step2')
    expect(steps[2].querySelector('.yui-step-item-body-title').textContent).toEqual('step3')
  })
})
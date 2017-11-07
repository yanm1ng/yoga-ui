import { createVue } from '../utils'

describe('component tab-bar testing', () => {
  it('should render correct class', () => {
    let vm = createVue({
      template: `
        <tab-bar>
          <tab-bar-item title="Home" icon="home"></tab-bar-item>
          <tab-bar-item title="Add" icon="add"></tab-bar-item>
          <tab-bar-item title="Share" icon="share"></tab-bar-item>
        </tab-bar>
      `
    })
    expect(vm.$el.className).toEqual('yui-tab-bar')
    expect(vm.$el.querySelectorAll('.yui-tab-bar-item').length).toEqual(3)
  })
  it('should render props:color', next => {
    let vm = createVue({
      template: `
        <tab-bar color="#eb4735">
          <tab-bar-item title="Home" icon="home"></tab-bar-item>
          <tab-bar-item title="Add" icon="add"></tab-bar-item>
          <tab-bar-item title="Share" icon="share"></tab-bar-item>
        </tab-bar>
      `
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('.yui-tab-bar-item-active').style.color).toEqual('rgb(235, 71, 53)')
      next()
    }, 500)
  })
  it('should render props:icon', () => {
    let vm = createVue({
      template: `
        <tab-bar color="#eb4735">
          <tab-bar-item title="Home" icon="home"></tab-bar-item>
          <tab-bar-item title="Add" icon="add"></tab-bar-item>
          <tab-bar-item title="Share" icon="share"></tab-bar-item>
        </tab-bar>
      `
    })
    expect(vm.$el.querySelector('.yui-icon-home')).not.toBeNull()
    expect(vm.$el.querySelector('.yui-icon-add')).not.toBeNull()
    expect(vm.$el.querySelector('.yui-icon-share')).not.toBeNull()
  })
  it('should render props:title', () => {
    let vm = createVue({
      template: `
        <tab-bar color="#eb4735">
          <tab-bar-item title="Home" icon="home"></tab-bar-item>
          <tab-bar-item title="Add" icon="add"></tab-bar-item>
          <tab-bar-item title="Share" icon="share"></tab-bar-item>
        </tab-bar>
      `
    })
    const titles = vm.$el.querySelectorAll('.yui-tab-bar-item-title')
    expect(titles[0].textContent).toEqual('Home')
    expect(titles[1].textContent).toEqual('Add')
    expect(titles[2].textContent).toEqual('Share')
  })
  it('should render props:badge-dot', () => {
    let vm = createVue({
      template: `
        <tab-bar color="#eb4735">
          <tab-bar-item title="Home" icon="home" badge></tab-bar-item>
          <tab-bar-item title="Add" icon="add"></tab-bar-item>
          <tab-bar-item title="Share" icon="share"></tab-bar-item>
        </tab-bar>
      `
    })
    const items = vm.$el.querySelectorAll('.yui-tab-bar-item')
    expect(items[0].innerHTML.indexOf('yui-tab-bar-item-badge-dot')).not.toEqual(-1)
  })
  it('should render props:badge-text', () => {
    let vm = createVue({
      template: `
        <tab-bar color="#eb4735">
          <tab-bar-item title="Home" icon="home" badge="3"></tab-bar-item>
          <tab-bar-item title="Add" icon="add"></tab-bar-item>
          <tab-bar-item title="Share" icon="share"></tab-bar-item>
        </tab-bar>
      `
    })
    const items = vm.$el.querySelectorAll('.yui-tab-bar-item')
    expect(items[0].innerHTML.indexOf('yui-tab-bar-item-badge')).not.toEqual(-1)
    expect(vm.$el.querySelector('.yui-tab-bar-item-badge').textContent).toEqual('3')
  })
  it('click events', next => {
    let vm = createVue({
      template: `
        <tab-bar>
          <tab-bar-item title="Home" icon="home"></tab-bar-item>
          <tab-bar-item title="Add" icon="add"></tab-bar-item>
          <tab-bar-item title="Share" icon="share"></tab-bar-item>
        </tab-bar>
      `
    })
    const items = vm.$el.querySelectorAll('.yui-tab-bar-item')
    items[1].click()
    setTimeout(() => {
      expect(items[1].classList.contains('yui-tab-bar-item-active')).toEqual(true)
      next()
    }, 500)
  })
})
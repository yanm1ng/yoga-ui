import { getRenderedVm, createVue } from '../utils'
import Card from 'components/card'

describe('component card testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(Card, {})
    expect(vm.$el.className).toEqual('yui-card')
  })
  it('should render props:headTitle', () => {
    let vm = getRenderedVm(Card, {
      headTitle: 'headTitle'
    })
    expect(vm.headTitle).toEqual('headTitle')
    expect(vm.$el.querySelector('.yui-card-hd-left').textContent.trim()).toEqual('headTitle')
  })
  it('should render props:headDesc', () => {
    let vm = getRenderedVm(Card, {
      headDesc: 'headDesc'
    })
    expect(vm.headDesc).toEqual('headDesc')
    expect(vm.$el.querySelector('.yui-card-hd-right').textContent).toEqual('headDesc')
  })
  it('should render props:hasHead', () => {
    let vm = getRenderedVm(Card, {
      hasHead: false
    })
    expect(vm.hasHead).toEqual(false)
    expect(vm.$el.querySelector('.yui-card-hd')).toBeNull()
  })
  it('should render props:footer', () => {
    let vm = getRenderedVm(Card, {
      footer: 'footer'
    })
    expect(vm.footer).toEqual('footer')
    expect(vm.$el.querySelector('.yui-card-ft')).not.toBeNull()
    expect(vm.$el.querySelector('.yui-card-ft').textContent).toEqual('footer')
  })
  it('should render slot:icon', () => {
    let vm = createVue({
      template: `
        <card head-title="标题" head-desc="描述" footer="查看更多">
          <div slot="icon" style="width: 20px; height: 20px;"></div>
        </card>
      `
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('.yui-card-hd-left').innerHTML.replace(/\s/g, '')).toEqual('<divstyle="width:20px;height:20px;"></div><span>标题</span>')
    }, 200)
  })
  it('should render slot:body', () => {
    let vm = createVue({
      template: `
        <card head-title="标题" head-desc="描述" footer="查看更多">
          <div slot="body">
            <p>custom content</p>
          </div>
        </card>
      `
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('.yui-card-bd').innerHTML.replace(/\s/g, '')).toEqual('<div><p>customcontent</p></div>')
    }, 200)
  })
  it('click events', () => {
    let headResult = null
    let bodyResult = null
    let footerResult = null
    let vm = createVue({
      template: `
        <card head-title="标题" head-desc="描述" footer="查看更多" @on-head-click="onHeadClick" @on-body-click="onBodyClick" @on-footer-click="onFooterClick">
          <div slot="body">
            <p>custom content</p>
          </div>
        </card>
      `,
      methods: {
        onHeadClick() {
          headResult = 'head'
        },
        onBodyClick() {
          bodyResult = 'body'
        },
        onFooterClick() {
          footerResult = 'footer'
        }
      }
    })
    vm.$el.querySelector('.yui-card-hd').click()
    vm.$el.querySelector('.yui-card-bd').click()
    vm.$el.querySelector('.yui-card-ft a').click()
    setTimeout(() => {
      expect(headResult).not.toBeNull()
      expect(bodyResult).not.toBeNull()
      expect(footerResult).not.toBeNull()
    }, 200)
  })
})

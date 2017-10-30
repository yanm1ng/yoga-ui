import { getRenderedVm, createVue } from '../utils'
import Toast from 'components/toast'

describe('component toast testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(Toast, {
      value: true
    })
    expect(vm.$el.className).toEqual('yui-toast')
  })
  it('should render props:direction', () => {
    let vm = getRenderedVm(Toast, {
      value: true,
      direction: 'top'
    })
    expect(vm.direction).toEqual('top')
    expect(vm.$el.querySelector('.yui-toast-top')).not.toBeNull()
  })
  it('should render props:title', () => {
    let vm = getRenderedVm(Toast, {
      value: true,
      title: 'title'
    })
    expect(vm.title).toEqual('title')
    expect(vm.$el.querySelector('.yui-toast-content').innerHTML).toEqual('<div>title</div>')
  })
  it('should render props:time', next => {
    let vm = createVue({
      template: `
        <toast v-model="show" :time="1000">恭喜你答对了</toast>
      `,
      data() {
        return {
          show: true
        }
      }
    })
    setTimeout(() => {
      expect(vm.$el.style.display).toEqual('none')
      next()
    }, 1000)
  })
  it('should render props:status', () => {
    let vm = getRenderedVm(Toast, {
      value: true,
      status: 'success'
    })
    expect(vm.status).toEqual('success')
    expect(vm.$el.querySelector('.yui-iconfont').classList.contains('yui-icon-roundcheck')).toEqual(true)
  })
})
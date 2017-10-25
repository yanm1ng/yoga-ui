import { getRenderedVm, createVue } from '../utils'
import Overlay from 'components/overlay'

describe('component overlay testing', () => {
  it('should render correct classes', () => {
    let vm = getRenderedVm(Overlay, {})
    expect(vm.$el.className).toEqual('yui-overlay')
  })
  it('should render props:type', () => {
    let vm = getRenderedVm(Overlay, {
      opacity: 0.8
    })
    expect(vm.opacity).toEqual(0.8)
    expect(vm.$el.style.backgroundColor).toEqual('rgba(0, 0, 0, 0.8)')
  })
  it('click event', () => {
    let result = null
    let vm = createVue({
      template: `
        <overlay @click="onClick">
          <div>body</div>
        </overlay>
      `,
      methods: {
        onClick() {
          result = 'clicked'
        }
      }
    })
    vm.$el.click()
    expect(result).toEqual('clicked')
  })
})
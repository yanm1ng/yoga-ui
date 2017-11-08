import { getRenderedVm, createVue, destroyVM } from '../utils'
import Overlay from 'components/overlay'

describe('component overlay testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct classes', () => {
    vm = getRenderedVm(Overlay, {})
    expect(vm.$el.className).toEqual('yui-overlay')
  })
  it('should render props:type', () => {
    vm = getRenderedVm(Overlay, {
      opacity: 0.8
    })
    expect(vm.opacity).toEqual(0.8)
    expect(vm.$el.style.backgroundColor).toEqual('rgba(0, 0, 0, 0.8)')
  })
  it('click event', () => {
    let result = null
    vm = createVue({
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
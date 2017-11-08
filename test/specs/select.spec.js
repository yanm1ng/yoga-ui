import { createVue, destroyVM } from '../utils'

describe('component select testing', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('should render correct class', () => {
    vm = createVue({
      template: `
        <cell-box>
          <x-select title="title" v-model="value" :options="options"></x-select>
        </cell-box>
      `,
      data() {
        return {
          options: [
            { label: '初中', value: '初中' },
            { label: '高中', value: '高中' },
            { label: '本科', value: '本科' }
          ],
          value: ''
        }
      }
    })
    expect(vm.$el.querySelector('.yui-select-cell')).not.toBeNull()
  })
  it('should render props:title', () => {
    vm = createVue({
      template: `
        <cell-box>
          <x-select title="title" v-model="value" :options="options"></x-select>
        </cell-box>
      `,
      data() {
        return {
          options: [
            { label: '初中', value: '初中' },
            { label: '高中', value: '高中' },
            { label: '本科', value: '本科' }
          ],
          value: ''
        }
      }
    })
    expect(vm.$el.querySelector('.yui-label').textContent).toEqual('title')
  })
  it('should render props:desc', () => {
    vm = createVue({
      template: `
        <cell-box>
          <x-select title="title" desc="desc" v-model="value" :options="options"></x-select>
        </cell-box>
      `,
      data() {
        return {
          options: [
            { label: '初中', value: '初中' },
            { label: '高中', value: '高中' },
            { label: '本科', value: '本科' }
          ],
          value: ''
        }
      }
    })
    expect(vm.$el.querySelector('.yui-label-desc').textContent).toEqual('desc')
  })
  it('should render props:default type', next => {
    vm = createVue({
      template: `
        <cell-box>
          <x-select title="title" v-model="value" :options="options"></x-select>
        </cell-box>
      `,
      data() {
        return {
          options: [
            { label: '初中', value: '初中' },
            { label: '高中', value: '高中' },
            { label: '本科', value: '本科' }
          ],
          value: ''
        }
      }
    })
    vm.$el.click()
    setTimeout(() => {
      document.querySelector('.yui-actionsheet').not.toBeNull()
      next()
    }, 1000)
  })
})
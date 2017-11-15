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
  it('should render props:actionsheet type', next => {
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
    vm.$el.querySelector('.yui-select-cell').click()
    setTimeout(() => {
      expect(document.body.querySelector('.yui-actionsheet')).not.toBeNull()
      expect(document.body.querySelector('.yui-actionsheet-menus').children.length).toEqual(3)
      next()
    }, 1000)
  })
  it('should render props:picker type', next => {
    vm = createVue({
      template: `
        <cell-box>
          <x-select title="title" type="picker" v-model="value" :options="options"></x-select>
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
    vm.$el.querySelector('.yui-select-cell').click()
    setTimeout(() => {
      expect(document.body.querySelector('.yui-popup-picker-body')).not.toBeNull()
      expect(document.body.querySelector('.yui-picker-scroller').children.length).toEqual(3)
      next()
    }, 1000)
  })
  it('should render props:placeholder', () => {
    vm = createVue({
      template: `
        <cell-box>
          <x-select title="title" placeholder="placeholder" v-model="value" :options="options"></x-select>
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
    expect(vm.$el.querySelector('.yui-cell-ft span').textContent).toEqual('placeholder')
  })
  it('should render props:value', () => {
    vm = createVue({
      template: `
        <cell-box>
          <x-select title="title" value="初中" :options="options"></x-select>
        </cell-box>
      `,
      data() {
        return {
          options: [
            { label: '初中', value: '初中' },
            { label: '高中', value: '高中' },
            { label: '本科', value: '本科' }
          ]
        }
      }
    })
    expect(vm.$el.querySelector('.yui-cell-ft span').textContent).toEqual('初中')
  })
})
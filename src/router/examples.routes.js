const Demo = r => require.ensure([], () => r(require('examples/Demo')), 'Demo')
const Button = r => require.ensure([], () => r(require('examples/Button')), 'Button')
const Cell = r => require.ensure([], () => r(require('examples/Cell')), 'Cell')


export default [
  {
    path: '/',
    component: Demo
  },
  {
    path: '/button',
    component: Button
  },
  {
    path: '/cell',
    component: Cell
  }
]
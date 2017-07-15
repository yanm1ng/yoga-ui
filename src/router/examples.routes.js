const Demo = r => require.ensure([], () => r(require('examples/Demo')), 'Demo')
const Button = r => require.ensure([], () => r(require('examples/Button')), 'Button')

export default [
  {
    path: '/',
    component: Demo
  },
  {
    path: '/button',
    component: Button
  }
]
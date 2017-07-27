const Demo = r => require.ensure([], () => r(require('examples/Demo')), 'Demo')
const Button = r => require.ensure([], () => r(require('examples/Button')), 'Button')
const Cell = r => require.ensure([], () => r(require('examples/Cell')), 'Cell')
const Tab = r => require.ensure([], () => r(require('examples/Tab')), 'Tab')
const ButtonTab = r => require.ensure([], () => r(require('examples/ButtonTab')), 'ButtonTab')
const Popup = r => require.ensure([], () => r(require('examples/Popup')), 'Popup')
const Toast = r => require.ensure([], () => r(require('examples/Toast')), 'Toast')
const Icon = r => require.ensure([], () => r(require('examples/Icon')), 'Icon')
const Actionsheet = r => require.ensure([], () => r(require('examples/Actionsheet')), 'Actionsheet')
const Badge = r => require.ensure([], () => r(require('examples/Badge')), 'Badge')

export default [
  {
    path: '/',
    component: Demo
  }, {
    path: '/button',
    component: Button
  }, {
    path: '/cell',
    component: Cell
  }, {
    path: '/tab',
    component: Tab
  }, {
    path: '/button-tab',
    component: ButtonTab
  }, {
    path: '/popup',
    component: Popup
  }, {
    path: '/toast',
    component: Toast
  }, {
    path: '/icon',
    component: Icon
  }, {
    path: '/actionsheet',
    component: Actionsheet
  }, {
    path: '/badge',
    component: Badge
  }
]
const Demo = r => require.ensure([], () => r(require('examples/pages/Demo')), 'Demo')
const Button = r => require.ensure([], () => r(require('examples/pages/Button')), 'Button')
const Cell = r => require.ensure([], () => r(require('examples/pages/Cell')), 'Cell')
const Card = r => require.ensure([], () => r(require('examples/pages/Card')), 'Card')
const Tab = r => require.ensure([], () => r(require('examples/pages/Tab')), 'Tab')
const ButtonTab = r => require.ensure([], () => r(require('examples/pages/ButtonTab')), 'ButtonTab')
const Popup = r => require.ensure([], () => r(require('examples/pages/Popup')), 'Popup')
const Toast = r => require.ensure([], () => r(require('examples/pages/Toast')), 'Toast')
const Icon = r => require.ensure([], () => r(require('examples/pages/Icon')), 'Icon')
const Actionsheet = r => require.ensure([], () => r(require('examples/pages/Actionsheet')), 'Actionsheet')
const Badge = r => require.ensure([], () => r(require('examples/pages/Badge')), 'Badge')
const Switch = r => require.ensure([], () => r(require('examples/pages/Switch')), 'Switch')
const Input = r => require.ensure([], () => r(require('examples/pages/Input')), 'Input')
const Radio = r => require.ensure([], () => r(require('examples/pages/Radio')), 'Radio')
const Checkbox = r => require.ensure([], () => r(require('examples/pages/Checkbox')), 'Checkbox')
const Textarea = r => require.ensure([], () => r(require('examples/pages/Textarea')), 'Textarea')
const Alert = r => require.ensure([], () => r(require('examples/pages/Alert')), 'Alert')
const Confirm = r => require.ensure([], () => r(require('examples/pages/Confirm')), 'Confirm')
const Flex = r => require.ensure([], () => r(require('examples/pages/Flex')), 'Flex')
const Picker = r => require.ensure([], () => r(require('examples/pages/Picker')), 'Picker')
const Grid = r => require.ensure([], () => r(require('examples/pages/Grid')), 'Grid')
const Accordion = r => require.ensure([], () => r(require('examples/pages/Accordion')), 'Accordion')
const PopupPicker = r => require.ensure([], () => r(require('examples/pages/PopupPicker')), 'PopupPicker')
const Step = r => require.ensure([], () => r(require('examples/pages/Step')), 'Step')
const Select = r => require.ensure([], () => r(require('examples/pages/Select')), 'Select')
const Progress = r => require.ensure([], () => r(require('examples/pages/Progress')), 'Progress')
const Divider = r => require.ensure([], () => r(require('examples/pages/Divider')), 'Divider')
const Notify = r => require.ensure([], () => r(require('examples/pages/Notify')), 'Notify')
const TabBar = r => require.ensure([], () => r(require('examples/pages/TabBar')), 'TabBar')
const Keyboard = r => require.ensure([], () => r(require('examples/pages/Keyboard')), 'Keyboard')
const Marquee = r => require.ensure([], () => r(require('examples/pages/Marquee')), 'Marquee')
const Popover = r => require.ensure([], () => r(require('examples/pages/Popover')), 'Popover')

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
    path: '/card',
    component: Card
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
  }, {
    path: '/switch',
    component: Switch
  }, {
    path: '/input',
    component: Input
  }, {
    path: '/radio',
    component: Radio
  }, {
    path: '/checkbox',
    component: Checkbox
  }, {
    path: '/textarea',
    component: Textarea
  }, {
    path: '/alert',
    component: Alert
  }, {
    path: '/confirm',
    component: Confirm
  }, {
    path: '/flex',
    component: Flex
  }, {
    path: '/picker',
    component: Picker
  }, {
    path: '/grid',
    component: Grid
  }, {
    path: '/accordion',
    component: Accordion
  }, {
    path: '/popup-picker',
    component: PopupPicker
  }, {
    path: '/step',
    component: Step
  }, {
    path: '/select',
    component: Select
  }, {
    path: '/progress',
    component: Progress
  }, {
    path: '/divider',
    component: Divider
  }, {
    path: '/notify',
    component: Notify
  }, {
    path: '/tab-bar',
    component: TabBar
  }, {
    path: '/keyboard',
    component: Keyboard
  }, {
    path: '/marquee',
    component: Marquee
  }, {
    path: '/popover',
    component: Popover
  }
]
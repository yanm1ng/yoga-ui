import XButton from './components/button'
import Cell from './components/cell'
import CellBox from './components/cell-box'
import Card from './components/card'
import { Tab, TabItem } from './components/tab'
import { ButtonTab, ButtonTabItem } from './components/button-tab'
import Popup from './components/popup'
import Toast from './components/toast'
import Icon from './components/icon'
import Actionsheet from './components/actionsheet'
import Badge from './components/badge'
import XSwitch from './components/switch'
import Radio from './components/radio'
import Checkbox from './components/checkbox'
import Alert from './components/alert'
import Confirm from './components/confirm'
import XInput from './components/input'
import XTextarea from './components/textarea'
import { Flex, FlexItem } from './components/flex'
import Picker from './components/picker'
import { Grid, GridItem } from './components/grid'
import Accordion from './components/accordion'
import PopupPicker from './components/popup-picker'
import { Step, StepItem } from './components/step'
import XSelect from './components/select'
import XProgress from './components/progress'
import Divider from './components/divider'
import Notify from './components/notify'
import { TabBar, TabBarItem } from './components/tab-bar'
import Keyboard from './components/keyboard'
import { XMarquee, XMarqueeItem } from './components/marquee'
import Popover from './components/popover'

const install = function(Vue) {
  Vue.component(XButton.name, XButton)
  Vue.component(Cell.name, Cell)
  Vue.component(CellBox.name, CellBox)
  Vue.component(Card.name, Card)
  Vue.component(Tab.name, Tab)
  Vue.component(TabItem.name, TabItem)
  Vue.component(ButtonTab.name, ButtonTab)
  Vue.component(ButtonTabItem.name, ButtonTabItem)
  Vue.component(Popup.name, Popup)
  Vue.component(Toast.name, Toast)
  Vue.component(Icon.name, Icon)
  Vue.component(Actionsheet.name, Actionsheet)
  Vue.component(Badge.name, Badge)
  Vue.component(XSwitch.name, XSwitch)
  Vue.component(Radio.name, Radio)
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(Alert.name, Alert)
  Vue.component(Confirm.name, Confirm)
  Vue.component(XInput.name, XInput)
  Vue.component(XTextarea.name, XTextarea)
  Vue.component(Flex.name, Flex)
  Vue.component(FlexItem.name, FlexItem)
  Vue.component(Picker.name, Picker)
  Vue.component(Popover.name, Popover)
  Vue.component(Grid.name, Grid)
  Vue.component(GridItem.name, GridItem)
  Vue.component(Accordion.name, Accordion)
  Vue.component(PopupPicker.name, PopupPicker)
  Vue.component(Step.name, Step)
  Vue.component(StepItem.name, StepItem)
  Vue.component(XSelect.name, XSelect)
  Vue.component(XProgress.name, XProgress)
  Vue.component(Divider.name, Divider)
  Vue.component(Notify.name, Notify)
  Vue.component(TabBar.name, TabBar)
  Vue.component(TabBarItem.name, TabBarItem)
  Vue.component(Keyboard.name, Keyboard)
  Vue.component(XMarquee.name, XMarquee)
  Vue.component(XMarqueeItem.name, XMarqueeItem)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.document.body.addEventListener('touchstart', function () {
    // Do nothing
  }, false)
  install(window.Vue)
}

export default {
  install
}
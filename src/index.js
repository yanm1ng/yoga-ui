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
  Vue.components(XButton.name, XButton)
  Vue.components(Cell.name, Cell)
  Vue.components(CellBox.name, CellBox)
  Vue.components(Card.name, Card)
  Vue.components(Tab.name, Tab)
  Vue.components(TabItem.name, TabItem)
  Vue.components(ButtonTab.name, ButtonTab)
  Vue.components(ButtonTabItem.name, ButtonTabItem)
  Vue.components(Popup.name, Popup)
  Vue.components(Toast.name, Toast)
  Vue.components(Icon.name, Icon)
  Vue.components(Actionsheet.name, Actionsheet)
  Vue.components(Badge.name, Badge)
  Vue.components(XSwitch.name, XSwitch)
  Vue.components(Radio.name, Radio)
  Vue.components(Checkbox.name, Checkbox)
  Vue.components(Alert.name, Alert)
  Vue.components(Confirm.name, Confirm)
  Vue.components(XInput.name, XInput)
  Vue.components(XTextarea.name, XTextarea)
  Vue.components(Flex.name, Flex)
  Vue.components(FlexItem.name, FlexItem)
  Vue.components(Picker.name, Picker)
  Vue.components(Popover.name, Popover)
  Vue.components(Grid.name, Grid)
  Vue.components(GridItem.name, GridItem)
  Vue.components(Accordion.name, Accordion)
  Vue.components(PopupPicker.name, PopupPicker)
  Vue.components(Step.name, Step)
  Vue.components(StepItem.name, StepItem)
  Vue.components(XSelect.name, XSelect)
  Vue.components(XProgress.name, XProgress)
  Vue.components(Divider.name, Divider)
  Vue.components(Notify.name, Notify)
  Vue.components(TabBar.name, TabBar)
  Vue.components(TabBarItem.name, TabBarItem)
  Vue.components(Keyboard.name, Keyboard)
  Vue.components(XMarquee.name, XMarquee)
  Vue.components(XMarqueeItem.name, XMarqueeItem)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
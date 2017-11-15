import Vue from 'vue'
import app from './app'
import router from './router'
import { resetRootFontSize } from 'utils'
import yogaUI from 'src'
import {
  ToastPlugin,
  ConfirmPlugin,
  AlertPlugin
} from 'src/plugins'

Vue.use(yogaUI)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')

window.addEventListener('resize', resetRootFontSize)
resetRootFontSize()
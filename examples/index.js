import Vue from 'vue'
import app from './app'
import router from './router'
import { resetRootFontSize } from 'utils'
import yogaUI from 'src'

Vue.use(yogaUI)

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')

window.addEventListener('resize', resetRootFontSize)
resetRootFontSize()
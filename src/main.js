import Vue from 'vue'
import router from './router'
import './mock'
import App from './App.vue'
import './styles/global.less'

import showMessage from './utils/showMessage'

Vue.prototype.$showMessage = showMessage
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import router from './router'
import store from './store'
// import './mock'
import App from './App.vue'
import './mock'

import './styles/global.less'
import showMessage from './utils/showMessage'

import vLoading from '@/directives/loading'
import vLazy from '@/directives/lazy'

import './eventBus'

store.dispatch('setting/fetchSetting')

Vue.prototype.$showMessage = showMessage

Vue.config.productionTip = false

// 全局注册指令
Vue.directive('loading', vLoading)
Vue.directive('lazy', vLazy)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


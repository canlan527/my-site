import Vue from 'vue'
import router from './router'
// import './mock'
import App from './App.vue'
import './mock'

import './styles/global.less'

import showMessage from './utils/showMessage'
import vLoading from '@/directives/loading'

Vue.prototype.$showMessage = showMessage
Vue.config.productionTip = false

// 全局注册指令
Vue.directive('loading', vLoading)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// import * as blog from './api/blog';

// blog.getBlogType().then(res => {
//   console.log(res)
// })

// blog.getBlog(2, 20,3).then(res => {
//   console.log(res)
// })

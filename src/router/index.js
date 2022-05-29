import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
import { setTitle } from '@/utils'
Vue.use(VueRouter)

const router = new VueRouter({
  routes, // 路由匹配规则
  mode: 'history', // location.pathname 获取
})

router.afterEach((to, from) => {
  if(to.meta.title) {
    setTitle.setRouteTitle(to.meta.title)
  }
})

export default router
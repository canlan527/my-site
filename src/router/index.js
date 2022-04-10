import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes, // 路由匹配规则
  mode: 'hash', // location.pathname 获取
})

export default router
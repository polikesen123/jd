import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
//引入子映射表
import home from './home'
import classify from './classify'
import surprise from './surprise'
import carts from './carts'
import user from './user'
//引入兄弟路由映射表
import setting from './setting'
import mange from './mange'
import jdSeconds from './jdSeconds'
import order from './myorder'
Vue.use(VueRouter)

let routes = [{
    path: '/',
    name: 'index',
    component: Index,
    redirect: '/home',
    children: [].concat(home, classify, surprise, user, carts)
  },
  {
    path: '/login',
    name: 'login',
    component: Login

  }, 
  {

    path: '/surprise/barbaby',
    name: 'barbaby',
    component: () => import('@/components/surprise/banner/barbaby.vue')
  }
]
routes = routes.concat(setting, mange,jdSeconds,order)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes.concat([{
    path: '*',
    redirect: '/'
  }])
})

export default router
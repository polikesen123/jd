import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
//引入子映射表
import home from'./home'
import classify from './classify'
import surprise from './surprise'
import carts from './carts'
import user from './user'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    redirect:'/home',
    children:[].concat(home,classify,surprise,user,carts)
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'*',
    redirect:'/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

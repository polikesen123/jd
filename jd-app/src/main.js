import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/less/common.less'//引入公用样式

import { Search ,Button,Icon,Tab,Tabs} from 'vant';
Vue.use(Search).use(Button).use(Icon).use(Tab).use(Tabs)


Vue.config.productionTip = false
//判断登录
let token = localStorage.getItem('token');
if(token){
  store.commit('stateChange',{loginState:true})
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

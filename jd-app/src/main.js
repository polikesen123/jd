import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/less/common.less' //引入公用样式

import {
  Search,
  Button,
  Icon,
  Tab,
  Tabs,
  NavBar,
  Field,
  CellGroup,
  Toast,
  Swipe,
  SwipeItem,
  Divider,
  Overlay,
  Panel,
  Grid, GridItem,Sidebar, SidebarItem,TreeSelect
} from 'vant';
Vue.use(Search).use(Button).use(Icon).use(Tab).use(Tabs).use(NavBar).use(Field).use(CellGroup).use(Toast).use(Swipe).use(SwipeItem).use(Divider).use(Overlay).use(Panel).use(Grid).use(GridItem).use(TreeSelect)
Vue.use(Sidebar);
Vue.use(SidebarItem);



Vue.config.productionTip = false
//判断登录

// 判断登录？
let token = localStorage.getItem('token');
if (token) {
  store.commit('stateChange', {
    loginState: true
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
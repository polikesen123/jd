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
  Checkbox,
  CheckboxGroup,
  NoticeBar,
  CouponCell, 
  CouponList,
  Popup,
  Stepper,
  SubmitBar,
  Cell,
  Card,
  Grid,
  GridItem,
  Tag,
  CountDown
  ,Sidebar, SidebarItem,TreeSelect,Tabbar, TabbarItem
} from 'vant';
Vue.use(Search).use(Button).use(Icon).use(Tab).use(Tabs).use(NavBar).use(Field).use(CellGroup).use(Toast).use(Swipe).use(SwipeItem).use(Divider).use(Overlay).use(Panel).use(Grid).use(GridItem).use(CountDown).use(Checkbox).use(CheckboxGroup).use(NoticeBar).use(CouponCell).use(CouponList).use(Popup).use(Stepper).use(SubmitBar).use(Card).use(CountDown).use(TreeSelect).use(Tabbar).use(TabbarItem)
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Cell);
Vue.use(Tag);



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
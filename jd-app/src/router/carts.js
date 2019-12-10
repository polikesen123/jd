import Carts from '@/components/carts/carts.vue'
// 购物车的路由。先引入购物车的组件并注册，编写路由路径，名字，
export default [
    {
        path:'/carts',
        name:'carts',
        component:Carts
    }
]
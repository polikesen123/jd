export default [{
    path: '/user/order',
    name: 'order',
    component: () => import( /* webpackChunkName: "focus" */'@/components/user/myorder/myorder.vue')
}
]
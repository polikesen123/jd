import User from '@/components/user/user.vue'
export default [{
    path: '/user',
    name: 'user',
    component: User,
    children: [{
            path: '/user/countMange',
            component: () => import( /* webpackChunkName: "focus" */ '../components/user/countMange.vue')
        },
        {
            path: '/user/countSetting',
            component: () => import( /* webpackChunkName: "recommend" */ '../components/user/countSetting.vue')
        }
    ]
}]
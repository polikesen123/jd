export default [{
    path: '/jdSeconds',
    name: 'jdSeconds',
    redirect:'/jdSeconds/msPage',
    component: () => import( /* webpackChunkName: "focus" */ '@/components/common/jdSecond/jdSeconds.vue'),
    children: [{
            path: '/jdSeconds/msPage',
            component: () => import( /* webpackChunkName: "focus" */ '@/components/common/jdSecond/msPage.vue')
        },
        {
            path: '/jdSeconds/daily',
            component: () => import( /* webpackChunkName: "recommend" */ '@/components/common/jdSecond/daily.vue')
        },
        {
            path: '/jdSeconds/category',
            component: () => import( /* webpackChunkName: "hot" */ '@/components/common/jdSecond/category.vue')
        },
        {
            path: '/jdSeconds/sort',
            component: () => import( /* webpackChunkName: "hot" */ '@/components/common/jdSecond/sort.vue')
        }
    ]
}]
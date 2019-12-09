import Surprise from '@/components/surprise/surprise.vue'
import phone from '@/components/surprise/content/baby/phone.vue'
import foot from '@/components/surprise/content/baby/foot.vue'
import homeshod from '@/components/surprise/content/baby/homeshod.vue'
import underwear from '@/components/surprise/content/baby/underwear.vue'
import department from '@/components/surprise/content/baby/department.vue'
import makeup from '@/components/surprise/content/baby/makeup.vue'
import decoration from '@/components/surprise/content/baby/decoration.vue'
import motion from '@/components/surprise/content/baby/motion.vue'
import books from '@/components/surprise/content/baby/books.vue'
import block from '@/components/surprise/content/baby/block.vue'
import digital from '@/components/surprise/content/baby/digital.vue'
import fresh from '@/components/surprise/content/baby/fresh.vue'
import furniture from '@/components/surprise/content/baby/furniture.vue'
import bus from '@/components/surprise/content/baby/bus.vue'
import protect from '@/components/surprise/content/baby/protect.vue'
import bags from '@/components/surprise/content/baby/bags.vue'
import mubaby from '@/components/surprise/content/baby/mubaby.vue'
import ornaments from '@/components/surprise/content/baby/ornaments.vue'
import shoes from '@/components/surprise/content/baby/shoes.vue'
import manwear from '@/components/surprise/content/baby/manwear.vue'
import girlwear from '@/components/surprise/content/baby/girlwear.vue'
export default [
    {
        path: '/surprise',
        name: 'surprise',
        component: Surprise,
        children:[
            
            {
                path:"/surprise/phone",
                component: phone,
                // children:org
            },
            {
                path:"/surprise/foot",
                component: foot,
            },
            {
                path:"/surprise/homeshod",
                component: homeshod,
            },
            {
                path:"/surprise/underwear",
                component: underwear,
            },
            {
                path:"/surprise/department",
                component: department,
            },
            {
                path:"/surprise/makeup",
                component: makeup,
            },
            {
                path:"/surprise/decoration",
                component: decoration,
            },
            {
                path:"/surprise/motion",
                component: motion,
            },
            {
                path:"/surprise/books",
                component: books,
            },
            {
                path:"/surprise/block",
                component: block,
            },
            {
                path:"/surprise/digital",
                component: digital,
            },
            {
                path:"/surprise/fresh",
                component: fresh,
            },
            {
                path:"/surprise/furniture",
                component: furniture,
            },
            {
                path:"/surprise/bus",
                component: bus,
            },
            {
                path:"/surprise/protect",
                component: protect,
            },
            {
                path:"/surprise/bags",
                component: bags,
            },
            {
                path:"/surprise/mubaby",
                component: mubaby,
            },
            {
                path:"/surprise/ornaments",
                component: ornaments,
            },
            {
                path:"/surprise/shoes",
                component: shoes,
            },
            {
                path:"/surprise/manwear",
                component: manwear,
            },
            {
                path:"/surprise/girlwear",
                component: girlwear,
            }
        
        ]
    },

]
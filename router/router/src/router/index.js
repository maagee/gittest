import { createRouter,createWebHistory } from 'vue-router'
const routes = [
    {
        path:'/',
        name:'root',
        component:(()=>import('../components/Root.vue')),
        children:[
            {
                path:'/pagea',
                components:{
                    default:()=>import('../components/A.vue')
                }
            },
            {
                path:'/pageb',
                components:{
                    'bbb':()=>import('../components/B.vue'),
                    'ccc':()=>import('../components/C.vue')
                }
            }
        ]
    }
    
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router
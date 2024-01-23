import { createRouter,createWebHistory } from 'vue-router'
const routes = [
    {
        path:'/',
        component:(()=>import('../components/Footer.vue')),
        children:[
        {
            path:'/',
            components:{
                default:()=>import('../components/Login.vue')
            }
        },
        {
            path:'/login',
            components:{
                listone:()=>import('../components/ListOne.vue'),
                listtwo:()=>import('../components/ListTwo.vue')
            }
        },
        {
            path:'detail/:id',
            name:'detail',
            component:(()=>import('../components/Detail.vue'))
        }]
    }
    
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router
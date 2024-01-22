import { createRouter,createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
const routes = [
    {
        path:'/',
        name:'login',
        component:Login
    },
    {
        path:'/reg',
        name:'reg',
        component:(()=>import('../components/Reg.vue'))
    },{
        path:'/detail/:id',
        name:'detail',
        component:(()=>import('../components/Detail.vue'))
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router
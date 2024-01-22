import { createRouter,createWebHistory } from 'vue-router'
const routes = [
    {
        path:'/user',
        component:(()=>import('../components/Footer.vue')),
        children:[
        {
            path:'',
            name:'login',
            component:(()=>import('../components/Login.vue'))
        },{
            path:'reg',
            name:'reg',
            component:(()=>import('../components/Reg.vue'))
        },{
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
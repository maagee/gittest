import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children:[
        {
            path: '/',
            name: 'Default',
            // redirect:'/about',
            components: {
                default:() => import ('../views/Default.vue')
            },
        },
        {
            path: '/about',
            name: 'About',
            components: {
                default:() => import ('../views/About.vue'),
                list:() => import ('../views/List.vue')
            },
        },
        {
            path: '/pic',
            name: 'Pic',
            components: {
                default:() => import ('../views/Pic.vue')
            },
        },
        {
            path: '/show/:id',
            name: 'Show',
            components: {
                default:() => import ('../views/Show.vue')
            },
        },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

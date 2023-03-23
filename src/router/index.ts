import VueRouter  from 'vue-router'

const routes = [
    {
        path:'/',
        name:'Home',
        component:import('../pages/home/index.vue'),
    },
    {
        path:'/About',
        name:'About',
        component:() => import('../pages/about/index.vue'),
    },
    {
        path:'/About',
        name:'About',
        component:() => import('../pages/login/index.vue'),
    }
]

const router = new VueRouter({
    routes,
    mode:'history',
    linkActiveClass:'active'
})

export default router

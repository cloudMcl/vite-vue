import VueRouter  from 'vue-router'
import {autoCreateRoute} from '../utils/autoCreateRoute'

const routes = autoCreateRoute()
console.log("[vite] 自动生成路由:",routes)

const router = new VueRouter({
    routes,
    mode:'history',
    linkActiveClass:'active'
})

export default router

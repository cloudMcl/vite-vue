import Vue from 'vue'
import App from './App.vue'
import './use'
import router from './router/index'
import store from "./store/index";

new Vue({
    render: (h) => h(App),
    router,
    store,
    beforeCreate () {
        Vue.prototype.$bus = this //安装全局事件总线
    }
}).$mount('#app')



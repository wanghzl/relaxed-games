import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'
export default createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home
    }, {
        path: '/login',
        component: Login
    }]
})

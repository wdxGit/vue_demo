import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/login', //登录
        name: 'login',
        component: () =>
            import ('@/views/Login/Login.vue')
    }, {
        path: '/home', //主页
        name: 'home',
        component: () =>
            import ('@/views/Home/Home.vue'),
        children: [{
            path: '/',
            redirect: '/home/charts'
        }, {
            path: '/home/charts', //图表主页
            name: 'charts',
            component: () =>
                import ('@/views/Home/charts/charts.vue')
        }, {
            path: '/home/myOrder', //我的订单
            name: 'myOrder',
            component: () =>
                import ('@/views/Home/myOrder/myOrder.vue')
        }, {
            path: '/home/quickOrder', //快速下单
            name: 'quickOrder',
            component: () =>
                import ('@/views/Home/quickOrder/quickOrder.vue')
        }]
    }, {
        path: '/register', //注册
        name: 'register',
        component: () =>
            import ('@/views/Register/Register.vue')
    }, {
        path: '/forget',
        name: 'forget',
        component: () =>
            import ('@/views/Forget/Forget.vue')
    }]
})
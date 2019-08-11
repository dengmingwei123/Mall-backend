import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Users from '@/components/Users.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: Login },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{ path: '/users', name: 'users', component: Users }]
    }
  ]
})
// 配置导航首尾
// to:去哪里
// from:从哪里来
// next:放行
router.beforeEach((to, from, next) => {
  // 判断有没有tuken,如果有,直接放行,没有则拦截到登录页
  // 如果是去login页面,直接放行即可
  if (localStorage.getItem('mytoken') || to.path === '/login') {
    next()
  } else {
    next('/login')
  }
})

export default router

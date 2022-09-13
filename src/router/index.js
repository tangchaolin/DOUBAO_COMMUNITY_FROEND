import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import("@/views/Home")
  },
  {
    path: '/register',
    name: 'register',
    component: ()=>import("@/views/auth/Register"),
    meta:{ titile: '注册'}
  },
    // 登录
    { 
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/Login'),
      meta: { title: '登录' }
    },
  {
  path: '/404',
  name: '404',
  component: ()=>import("@/views/error/404"),
  meta:{ titile: '404-NotFound'}
  },
  {
  path: '*',
  redirect:'/404',
  hidden :true
  }

]

const router = new VueRouter({
  routes
})

export default router

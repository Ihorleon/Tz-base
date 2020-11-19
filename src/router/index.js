import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  node: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'empty'},
      component: () => import('./views/Register.vue')
    },
    {
      path:'/',
      name:'home',
      meta: {layout: 'main'},
      component: () => import('./views/Home.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'main'},
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/regord',
      name: 'regord',
      meta: {layout: 'main'},
      component: () => import('./views/Regord.vue')
    },
    {
      path: '/empty',
      name: 'empty',
      meta: {layout: 'main'},
      component: () => import('@/layouts/EmptyLayout')
    },
    {
    path: '/rider',
    name: 'rider',
    meta: {layout: 'main'},
    component: () => import('./views/Rider.vue')
    }
  ]
})



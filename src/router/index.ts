import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import MyTests from '../views/MyTests.vue'
import About from '../views/About.vue'
import Tabs from '../views/Tabs.vue'
import MoreTests from '../views/MoreTests.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MyTests',
    name: 'MyTests',
    component: MyTests
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Tabs',
    name: 'Tabs',
    component: Tabs
  },
  {
    path: '/MoreTests',
    name: 'MoreTests',
    component: MoreTests
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

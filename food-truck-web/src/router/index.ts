import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/food-truck-home',
    name: 'food-truck-home',
    component: () => import('../views/FoodTruckView.vue')
  },
  {
    path: '/Shopping-Cart',
    name: 'Shopping-Cart',
    component: () => import('../views/Shopping-cartView.vue')
  },
  {
    path: '/Tasty-Kabob',
    name: 'Tasty Kabob',
    component: () => import('../views/Truck1View.vue')
  },
  {
    path: '/Yumpling',
    name: 'Yumpling',
    component: () => import('../views/Truck2View.vue')
  },
  {
    path: '/Gourment-Mediterranean-Food',
    name: 'Gourment Mediterranean Food',
    component: () => import('../views/Truck3View.vue')
  },
  {
    path: '/truck4',
    name: 'Truck4',
    component: () => import('../views/Truck4View.vue')
  },
  {
    path: '/HAVELI',
    name: 'HAVELI',
    component: () => import('../views/Truck5View.vue')
  },
  {
    path: '/truck-temp',
    name: 'Truck-temp',
    component: () => import('../components/TruckTemp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

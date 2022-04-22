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
    component: () => import('../views/FoodTruckView.vue'),
    children: [{
      path: 'Truck1',
      component: () => import('../views/Truck1View.vue')
    }, {
      path: 'Truck2',
      component: () => import('../views/Truck2View.vue')
    }]

  },
  {
    path: '/Shopping-Cart',
    name: 'Shopping-Cart',
    component: () => import('../views/Shopping-cartView.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

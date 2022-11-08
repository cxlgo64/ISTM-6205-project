import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  // Here is place to mapping the URL with the componenets, Path defined the URL,
  // name define the page name, component define the Vue document is used
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'GWU Food Truck',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of GWU Food Truck.'
        },
        {
          property: 'og:description',
          content: 'The home page of GWU Food Truck..'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/food-truck-home',
    name: 'food-truck-home',
    component: () => import('../views/FoodTruckView.vue')
  },
  {
    path: '/Shopping-Cart',
    name: 'Shopping-Cart',
    component: () => import('../views/cartlist.vue')
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
    path: '/gwu-snack-truck',
    name: 'GWU Snack Truck',
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

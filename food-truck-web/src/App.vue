<template>
  <app-header/>
  <router-view/>
  <app-footer />
  <sidebar-menu :menu="menu" />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { SidebarMenu } from 'vue-sidebar-menu'

export default {
  components: {
    AppHeader,
    AppFooter,
    SidebarMenu
  },
  data () {
    return {
      menu: [
        {
          header: 'GWU Food Trucks Foggy Bottom',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Home',
          icon: 'fa fa-user'
        },
        {
          href: '/food-truck-home',
          title: 'Foodtrucks',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/food-truck-home/Truck1',
              title: 'Truck1'
            },
            {
              href: '/food-truck-home/Truck2',
              title: 'Truck2'
            }
          ]
        },
        {
          href: '/about',
          title: 'About Us',
          icon: 'fa fa-user'
        },
        {
          href: '/Shopping-Cart',
          title: 'Cart',
          icon: 'fa fa-user'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";
@import "src/scss/_base2.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

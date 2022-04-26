<template>
  <app-header/>
  <app-navi />
  <sidebar-menu :menu="menu" />
  <router-view/>
  <app-footer />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { SidebarMenu } from 'vue-sidebar-menu'
import AppNavi from './components/AppNavi.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppNavi,
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
          title: 'Food Trucks',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/Tasty-Kabob',
              title: 'Tasty Kabob'
            },
            {
              href: '/Yumpling',
              title: 'Yumpling'
            },
            {
              href: '/Gourment-Mediterranean-Food',
              title: 'Gourment Mediterranean Food'
            },
            {
              href: '/gwu-snack-truck',
              title: 'GWU Snack Truck'
            },
            {
              href: '/HAVELI',
              title: 'HAVELI'
            },
            {
              href: '/truck-temp',
              title: 'TruckTemplate'
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

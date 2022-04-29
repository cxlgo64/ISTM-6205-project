<template>
  <app-header/>
 <div id="sidebarmenu"><sidebar-menu v-model:collapsed="collapsed" :menu="menu"  :theme="selectedTheme" @update:collapsed="onToggleCollapse" @item-click="onItemClick"/></div>
  <div
    v-if="isOnMobile && !collapsed"
    class="sidebar-overlay"
    @click="collapsed = true"
  />
    <div
    id="main"
    :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]">
    <app-navi />
<router-view/>
    </div>
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
  metaInfo: {
    title: 'GWU Food Truck',
    titleTemplate: '%s | vue-meta Example App'
  },
  data () {
    return {
      collapsed: false,
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
      ],
      mounted () {
        this.onResize()
        window.addEventListener('resize', this.onResize)
      },
      methods: {
        onToggleCollapse (collapsed) {
          console.log('onToggleCollapse')
        },
        onItemClick (event, item) {
          console.log('onItemClick')
          // console.log(event)
          // console.log(item)
        },
        onResize () {
          if (window.innerWidth <= 767) {
            this.isOnMobile = true
            this.collapsed = true
          } else {
            this.isOnMobile = false
            this.collapsed = false
          }
        }
      }
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
#main {
  padding-left: 290px;
  transition: 0.3s ease;
  padding-right: 10%;
}
#main.collapsed {
  padding-left: 65px;
}
#main.onmobile {
  padding-left: 65px;
  padding-right: 0%;
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
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: 900;
}
</style>

<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>
      In this website, you can find the "Hidden Treasure" in the GWU Foggy Bottom Campus
    </p>
    <h3>Mexicon Food</h3>
    <ul class="list1">
      <li><a href="/food-truck-homek#truck1" target="_blank" rel="noopener">Truck1</a></li>
      <li><a href="/food-truck-homek#truck2" target="_blank" rel="noopener">Truck2</a></li>
      <li><a href="/food-truck-homek#truck3" target="_blank" rel="noopener">Truck3</a></li>
      <li><a href="/food-truck-homek#truck4" target="_blank" rel="noopener">Truck4</a></li>
      <li><a href="/food-truck-homek#truck5" target="_blank" rel="noopener">Truck5</a></li>
    </ul>
    <ul>
      <li id="picture"><img alt="Truck1 Logo" src="..\assets\logo.png" height="50" width="100"></li>
      <li id="picture"><img alt="Truck2 Logo" src="..\assets\logo.png" height="50" width="100"></li>
      <li id="picture"><img alt="Truck3 Logo" src="..\assets\logo.png" height="50" width="100"></li>
      <li id="picture"><img alt="Truck4 Logo" src="..\assets\logo.png" height="50" width="100"></li>
      <li id="picture"><img alt="Truck5 Logo" src="..\assets\logo.png" height="50" width="100"></li>
    </ul>
    <h3>Halal food</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>American Food</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
  props: {
    msg: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.list1 li{
  margin: 0 35px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

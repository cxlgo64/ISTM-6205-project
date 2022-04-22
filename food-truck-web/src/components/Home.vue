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
    <ul class="picturelist">
      <li id="picture"><img alt="Truck1 Logo" src="..\assets\logo.png" height="50" width="100"></li>
      <li id="picture"><img alt="Truck2 Logo" src="..\assets\logo.png" height="50" width="100"></li>
      <li id="picture"><img alt="Truck3 Logo" src="..\assets\logo.png" height="50" width="100"></li>
      <li id="picture"><img alt="Truck4 Logo" src="..\assets\logo.png" height="50" width="100"></li>
      <li id="picture"><img alt="Truck5 Logo" src="..\assets\logo.png" height="50" width="100"></li>
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
h1 {
    font-size: 55px;
  }
h2 {
    font-size: 33px;
}
h3 {
  font-size: 30px;
}
p {
  font-size: 20px;
}
@media only screen and (max-width: 768px) {
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 25px;
  }
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 15px;
  }
}
@media only screen and (max-width: 320px) {
  h1 {
    font-size: 23px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 15px;
  }
  p {
    font-size: 10px;
  }
}
</style>

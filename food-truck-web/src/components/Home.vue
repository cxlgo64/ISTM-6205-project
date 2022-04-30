<template>
  <div class="home">
    <img alt="Truck1 Logo" src="..\assets\TruckSrc\Map.jpg" height="800" width="600">
    <h1 class="title1">{{ msg }}</h1>
    <p style="page-break-after: always;">
      "Hidden Treasure" in the GWU Foggy Bottom Campus
    </p>
    <h3>Truck Exhibits</h3>
    <div class="TrucksPicture">
      <img id="pic1" alt="Truck1 Logo" src="..\assets\TruckSrc\Truck1.jpg" height="400" width="300"><br>
      <img id="pic2" alt="Truck2 Logo" src="..\assets\TruckSrc\Truck2.jpg" height="400" width="300"><br>
      <img id="pic3" alt="Truck3 Logo" src="..\assets\TruckSrc\Truck3.jpg" height="400" width="300"><br>
      <img id="pic4" alt="Truck4 Logo" src="..\assets\TruckSrc\Truck4.jpg" height="400" width="300"><br>
      <img id="pic5" alt="Truck5 Logo" src="..\assets\TruckSrc\Truck5.jpg" height="400" width="300"><br>
    </div>
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
<style lang="scss">
@import "src/scss/_base2.scss";
.title1{
  margin: 5px;
  padding: 5px;
}
.TrucksPicture{
  #pic1{
    position:relative;
    left: 30%;
    margin:auto;
  }
  #pic2{
    position:relative;
    right: 30%;
    margin:auto;
  }
  #pic3{
    position:relative;
    left: 30%;
    margin:auto;
  }
  #pic4{
    position:relative;
    right: 30%;
    margin:auto;
  }
  #pic5{
    position:relative;
    left: 30%;
    margin:auto;
  }
}
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

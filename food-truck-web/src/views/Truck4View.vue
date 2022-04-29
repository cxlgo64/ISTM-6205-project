<template>
  <div class="Truck4">
    <TruckTemp Tname="GWU Snack Truck" Thours="10 am - 4pm Weekday" TLocation="801 22nd St NW, Washington, DC 20052, between Gelmen library and Phillips Hall">
        <template v-slot:Tpicture>
  <section class="gallery">
  <div class="gallery__item">
    <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="..\assets\TruckSrc\Truck4.jpg" height="800" width="600" alt=""/>
    <label for="img-1" class="gallery__thumb"><img src="..\assets\TruckSrc\Truck4.jpg" height="150" width="100" alt=""/></label>
  </div></section></template>
        <template v-slot:TlocationP><img alt="Truck4 Location" src="..\assets\TruckSrc\Truck4-Location.jpg" height="800" width="600"></template>
        <template v-slot:Tmenu><table id="menu">
          <caption>GWU Snack Truck</caption>
          <thead>
            <tr>
                <th>Item Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Pretzel</td>
            </tr>
            <tr>
                <td>Polish Sausage</td>
            </tr>
            <tr>
                <td>Beef Hot Dog</td>
            </tr>
            <tr>
                <td>Beef Patties</td>
            </tr>
            <tr>
                <td>Veggie Egg Roll</td>
            </tr>
             <tr>
                <td>Hot Soft Pretzel</td>
            </tr>
            <tr>
                <td>Cold Water</td>
            </tr>
            <tr>
                <td>Soda</td>
            </tr>
          </tbody>
      </table></template>
    </TruckTemp>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TruckTemp from '../components/TruckTemp.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Truck4View',
  components: {
    TruckTemp
  }
})
</script>

<template>
  <div class="Truck1">
    <TruckTemp Tname="Tasty Kobab" Thours="10 am - 4pm Weekday" TLocation="736 22nd St NW, Washington, DC 20052, Facing Madison Hall">
        <template v-slot:TlocationP><img alt="Truck1 Location" src="..\assets\TruckSrc\Truck1-Location.jpg" height="800" width="600"></template>
        <template v-slot:Tpicture>
<section class="gallery">
  <div class="gallery__item">
    <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="..\assets\TruckSrc\Truck1.jpg" max-height="1200" max-width="800" alt=""/>
    <label for="img-1" class="gallery__thumb"><img src="..\assets\TruckSrc\Truck1.jpg" height="150" width="100" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="..\assets\TruckSrc\Truck1-Menu.jpg" height="600" width="400" alt=""/>
    <label for="img-2" class="gallery__thumb"><img src="..\assets\TruckSrc\Truck1-Menu.jpg" height="150" width="100" alt=""/></label>
  </div>
</section>
        </template>
        <template v-slot:Tmenu><table id="menu">
          <caption>Tasty Kobab</caption>
          <thead>
            <tr>
                <th>Item Name</th>
                <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Chicken & Rice</td>
                <td>$12.99</td>
            </tr>
            <tr>
                <td>Chicken Over Salad</td>
                <td>$12.99</td>
            </tr>
            <tr>
                <td>Chicken on Pita</td>
                <td>$10.99</td>
            </tr>
            <tr>
                <td>Lamb & Rice</td>
                <td>$12.99</td>
            </tr>
            <tr>
                <td>Lamb Over Salad</td>
                <td>$12.99</td>
            </tr>
             <tr>
                <td>Lamb Gyro</td>
                <td>$10.99</td>
            </tr>
            <tr>
                <td>Combo Over Rice</td>
                <td>$12.99</td>
            </tr>
            <tr>
                <td>Combo Over Salad</td>
                <td>$12.99</td>
            </tr>
            <tr>
                <td>Combo Gyro</td>
                <td>$10.99</td>
            </tr>
            <tr>
                <td>Veggie Platter</td>
                <td>$11.99</td>
            </tr>
            <tr>
                <td>Meatball Kabob</td>
                <td>$12.99</td>
            </tr>
            <tr>
                <td>Chicken & Mushroom</td>
                <td>$12.99</td>
            </tr>
            <tr>
                <td>Drinks</td>
                <td>$2.00</td>
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
  name: 'Truck1View',
  components: {
    TruckTemp
  }
})
</script>

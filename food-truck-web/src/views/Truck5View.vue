<template>
  <div class="Truck5">
    <TruckTemp Tname="HAVELI" Thours="10 am - 4pm Weekday" TLocation="2021 F St NW, Washington, DC 20052, Facing Potomac House">
        <template v-slot:Tpicture> <section class="gallery">
  <div class="gallery__item">
    <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="..\assets\TruckSrc\Truck5.jpg" height="600" width="400" alt=""/>
    <label for="img-1" class="gallery__thumb"><img src="..\assets\TruckSrc\Truck5.jpg" height="150" width="100" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="..\assets\TruckSrc\Truck5-Menu.jpg" height="600" width="400" alt=""/>
    <label for="img-2" class="gallery__thumb"><img src="..\assets\TruckSrc\Truck5-Menu.jpg" height="150" width="100" alt=""/></label>
  </div>
</section></template>
        <template v-slot:Tmenu1></template>
        <template v-slot:TlocationP><img alt="Truck5 Location" src="..\assets\TruckSrc\Truck5-Location.jpg" height="800" width="600"></template>
        <template v-slot:Tmenu><table id="menu">
          <caption>HAVELI</caption>
          <thead>
            <tr>
                <th>Item Name</th>
                <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Chicken over Rice</td>
                <td>$10.00</td>
            </tr>
            <tr>
                <td>Lamb over Rice</td>
                <td>$10.00</td>
            </tr>
            <tr>
                <td>Combo over Rice</td>
                <td>$11.00</td>
            </tr>
            <tr>
                <td>Butter Chicken</td>
                <td>$12.00</td>
            </tr>
            <tr>
                <td>Chicken Curry</td>
                <td>$12.00</td>
            </tr>
             <tr>
                <td>Rogan Josh</td>
                <td>$13.00</td>
            </tr>
            <tr>
                <td>Checken Tikka Masala</td>
                <td>$12.00</td>
            </tr>
            <tr>
                <td>Chicken Gyro Sandwich</td>
                <td>$9.00</td>
            </tr>
            <tr>
                <td>Lamb Gyro Sandwich</td>
                <td>$9.00</td>
            </tr>
            <tr>
                <td>Veggie Gyro Sandwich</td>
                <td>$9.00</td>
            </tr>
            <tr>
                <td>Chicken Biryani</td>
                <td>$11.00</td>
            </tr>
            <tr>
                <td>Veggie Biryani</td>
                <td>$11.00</td>
            </tr>
            <tr>
                <td>Lamb Gyro Salad</td>
                <td>$11.00</td>
            </tr>
            <tr>
                <td>Chicken Gyro Salad</td>
                <td>$8.00</td>
            </tr>
            <tr>
                <td>Samosa Chaat</td>
                <td>$9.00</td>
            </tr>
            <tr>
                <td>Mango Lassi</td>
                <td>$5.00</td>
            </tr>
            <tr>
                <td>Soda</td>
                <td>$2.00</td>
            </tr>
            <tr>
                <td>Naan Bread</td>
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
  name: 'Truck5View',
  components: {
    TruckTemp
  }
})
</script>

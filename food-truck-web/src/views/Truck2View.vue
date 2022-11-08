<template>
  <div class="Truck2">
    <TruckTemp Tname="Yumpling" Thours="10 am - 4pm Weekday" TLocation="736 22nd St NW, Washington, DC 20052, Facing Madison Hall">
        <template v-slot:Tpicture>
  <section class="gallery">
  <div class="gallery__item">
    <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="..\assets\TruckSrc\Truck2.jpg" height="600" width="400" alt=""/>
    <label for="img-1" class="gallery__thumb"><img src="..\assets\TruckSrc\Truck2.jpg" height="300" width="150" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="..\assets\TruckSrc\Truck2-Location.jpg" height="600" width="400" alt=""/>
    <label for="img-2" class="gallery__thumb"><img src="..\assets\TruckSrc\Truck2-Location.jpg" height="300" width="150" alt=""/></label>
  </div>
</section></template>
        <template v-slot:TlocationP><img alt="Truck2 Location" src="..\assets\TruckSrc\Truck2-Location.jpg" height="800" width="600"></template>
        <template v-slot:Tmenu><table id="menu">
          <caption>Yumpling</caption>
          <thead>
            <tr>
                <th>Item Name</th>
                <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Rice bowls(Bian Dang)</td>
                <td>$15.99</td>
            </tr>
            <tr>
                <td>Crispy Chicken</td>
                <td>$11.99</td>
            </tr>
            <tr>
                <td>Slow braised beef</td>
                <td>$16.00</td>
            </tr>
            <tr>
                <td>Pork Yumplings</td>
                <td>$18.00</td>
            </tr>
            <tr>
                <td>Beef noodle soup</td>
                <td>$15.00</td>
            </tr>
             <tr>
                <td>Fried chicken sandwich</td>
                <td>$13.00</td>
            </tr>
            <tr>
                <td>Edamame &Tofu salad</td>
                <td>$12.00</td>
            </tr>
            <tr>
                <td>Pickled Lotus roots</td>
                <td>$12.00</td>
            </tr>
            <tr>
                <td>Shoestring fries</td>
                <td>$7.00</td>
            </tr>
            <tr>
                <td>Passion fruit tea</td>
                <td>$4.50</td>
            </tr>
            <tr>
                <td>Jasmine green milk tea</td>
                <td>$9.00</td>
            </tr>
            <tr>
                <td>Bubble tea</td>
                <td>$5.00</td>
            </tr>
            <tr>
                <td>Iced matcha latte</td>
                <td>$6.00</td>
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
  name: 'Truck2View',
  components: {
    TruckTemp
  }
})
</script>

<template>
  <div class="Truck3">
    <TruckTemp Tname="Gourment Mediterranean Food" Thours="10 am - 4pm Weekday" TLocation="2145 G St NW, Washington, DC 20037, Facing GW Emergency Medical Response Group (EMeRG)">
        <template v-slot:Tpicture>
  <section class="gallery">
  <div class="gallery__item">
    <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="..\assets\TruckSrc\Truck3.jpg" height="600" width="400" alt=""/>
    <label for="img-1" class="gallery__thumb"><img src="..\assets\TruckSrc\Truck3.jpg" height="150" width="100" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="..\assets\TruckSrc\Truck3-Menu1.jpg" height="600" width="400" alt=""/>
    <label for="img-2" class="gallery__thumb"><img src="..\assets\TruckSrc\Truck3-Menu1.jpg" height="150" width="100" alt=""/></label>
  </div>
  <div class="gallery__item">
    <input type="radio" id="img-3" name="gallery" class="gallery__selector"/>
    <img class="gallery__img" src="..\assets\TruckSrc\Truck3-Menu2.jpg" height="600" width="400" alt=""/>
    <label for="img-3" class="gallery__thumb"><img src="..\assets\TruckSrc\Truck3-Menu2.jpg" height="150" width="100" alt=""/></label>
  </div>
</section></template>
        <template v-slot:TlocationP><img alt="Truck3 Location" src="..\assets\TruckSrc\Truck3-Location.jpg" height="800" width="600"></template>
        <template v-slot:Tmenu><table id="menu">
          <caption>Gourment Mediterranean Food</caption>
          <thead>
            <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Falafel Side</td>
                <td>$5.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Hummus & Veggy Pita</td>
                <td>$8.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Falafel Pita</td>
                <td>$8.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Stuffed Grape Leaves</td>
                <td>$5.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Falafel Over Rice</td>
                <td>$10.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
             <tr>
                <td>Veggy Platter</td>
                <td>$12.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Lamb Gyro</td>
                <td>$9.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Chicken Shawarma Pita</td>
                <td>$9.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Beef Shawarma Pita</td>
                <td>$9.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Chicken Over Rice</td>
                <td>$10.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Beef Over Rice</td>
                <td>$10.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Beef Platter</td>
                <td>$12.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Checken Platter</td>
                <td>$12.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Assorted Platter</td>
                <td>$14.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Lamb Over Salad</td>
                <td>$10.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Chicken Over Salad</td>
                <td>$10.00</td>
                <td><button>Add to Cart</button></td>
            </tr>
            <tr>
                <td>Combo Platter</td>
                <td>$13.00</td>
                <td><button>Add to Cart</button></td>
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
  name: 'Truck3View',
  components: {
    TruckTemp
  }
})
</script>

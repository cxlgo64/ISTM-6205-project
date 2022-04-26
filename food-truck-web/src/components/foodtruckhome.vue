<template>
   <div class="food-truck-home">
    <h1>{{ msg }}</h1>
     <table id="trucks">
        <thead>
          <tr>
              <th>Truck Name</th>
              <th>Food Genre</th>
              <th>Location</th>
              <th>Menu</th>
              <th>Contact Info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tasty Kabob</td>
            <td>Kabob, Middle Eastern Food</td>
            <td>H Street NW and 22nd St NW, Facing Madison Hall</td>
            <td><router-link to="/Tasty-Kabob">Details</router-link></td>
            <td><a href="https://tastykabobinc.com/" target="_blank" rel="noopener">Home Page</a></td>
          </tr>
           <tr>
            <td>Yumpling</td>
            <td>Chinese Dumpling, Chinese Food</td>
            <td>H Street NW and 22nd St NW, Facing Madison Hall</td>
            <td><router-link to="/Yumpling">Details</router-link></td>
            <td><a href="https://tastykabobinc.com/" target="_blank" rel="noopener">Home Page</a></td>
          </tr>
          <tr>
            <td>GOURMET MEDITERRANEAN FOOD</td>
            <td>Mediterranean</td>
            <td>H Street NW and 22nd St NW, Facing Madison Hall</td>
            <td><router-link to="/Gourment-Mediterranean-Food">Details</router-link></td>
            <td><a href="https://tastykabobinc.com/" target="_blank" rel="noopener">Home Page</a></td>
          </tr>
          <tr>
            <td>HAVELI</td>
            <td>Halal Food</td>
            <td>H Street NW and 22nd St NW, Facing Madison Hall</td>
            <td><router-link to="/gwu-snack-truck">Details</router-link></td>
            <td><a href="https://tastykabobinc.com/" target="_blank" rel="noopener">Home Page</a></td>
          </tr>
          <tr>
            <td>GWU Snack Truck</td>
            <td>Pretzel, Hotdog, snacks</td>
            <td>H Street NW and 22nd St NW, Facing Madison Hall</td>
            <td><router-link to="/HAVELI">Details</router-link></td>
            <td><a href="https://tastykabobinc.com/" target="_blank" rel="noopener">Home Page</a></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'food-truck-home',
  props: {
    msg: String,
    trucklist: String
  }
})
</script>

<style lang="scss">
#trucks{
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  thead{
    background-color:bisque;
  }
}
</style>

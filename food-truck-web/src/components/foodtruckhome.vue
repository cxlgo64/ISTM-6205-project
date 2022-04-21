<template>
   <div class="food-truck-home">
    <h1>{{ msg }}</h1>
     <table id="trucks">
        <tr>
            <th>Truck Name</th>
            <th>Food Genre</th>
            <th>Location</th>
            <th>Description</th>
             <th>Menu</th>
            <th>Contact Info</th>
        </tr>
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

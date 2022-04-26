<template>
  <div class="Truck1">
    <TruckTemp Tname="Tasty Kobab" Thours="10 to 12" TLocation="22nd St NW">
        <template v-slot:Tpicture><img alt="Truck1 Logo" src="..\assets\TruckSrc\Truck1.jpg" height="400" width="300"></template>
        <template v-slot:TlocationP><img alt="Truck1 Location" src="..\assets\TruckSrc\Truck1-Location.jpg" height="800" width="600"></template>
        <template v-slot:Tmenu1><img alt="Truck1 Menu" src="..\assets\TruckSrc\Truck1-Menu.jpg" height="800" width="600"></template>
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

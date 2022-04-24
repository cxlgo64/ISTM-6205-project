<template>
  <div class="Truck5">
    <TruckTemp Tname="HAVELI" Thours="10 to 12" TLocation="22nd St NW">
        <template v-slot:Tpicture><img alt="Truck5 Logo" src="..\assets\TruckSrc\Truck5.jpg" height="800" width="600"></template>
        <template v-slot:Tmenu1><img alt="Truck5 Menu1" src="..\assets\TruckSrc\Truck5-Menu.jpg" height="800" width="600"></template>
        <template v-slot:TlocationP><img alt="Truck5 Location" src="..\assets\TruckSrc\Truck5-Location.jpg" height="800" width="600"></template>
    </TruckTemp>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TruckTemp from '@/components/TruckTemp.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Truck2View',
  components: {
    TruckTemp
  }
})
</script>

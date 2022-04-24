<template>
  <div class="Truck3">
    <TruckTemp Tname="Gourment Mediterranean Food" Thours="10 to 12" TLocation="22nd St NW">
        <template v-slot:Tpicture><img alt="Truck2 Logo" src="..\assets\TruckSrc\Truck3.jpg" height="800" width="600"></template>
        <template v-slot:TlocationP><img alt="Truck3 Location" src="..\assets\TruckSrc\Truck3-Location.jpg" height="800" width="600"></template>
        <template v-slot:Tmenu1><img alt="Truck3 Menu1" src="..\assets\TruckSrc\Truck3-Menu1.jpg" height="800" width="600"></template>
        <template v-slot:Tmenu2><img alt="Truck3 Menu2" src="..\assets\TruckSrc\Truck3-Menu2.jpg" height="800" width="600"></template>
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

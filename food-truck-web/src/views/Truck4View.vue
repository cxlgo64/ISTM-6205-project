<template>
  <div class="Truck4">
    <TruckTemp Tname="Tasty Kobab" Thours="10 to 12" TLocation="22nd St NW">
        <template v-slot:Tpicture><img alt="Truck4 Logo" src="..\assets\TruckSrc\Truck4.jpg" height="800" width="600"></template>
        <template v-slot:TlocationP><img alt="Truck4 Location" src="..\assets\TruckSrc\Truck4-Location.jpg" height="800" width="600"></template>
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

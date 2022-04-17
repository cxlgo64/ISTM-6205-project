<template>
  <div class="home">
    <Homepage msg="Delicous Fresh Food to your hand - Food Truck in GWU Foggy Bottom"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Homepage from '@/components/Home.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    Homepage
  }
})
</script>

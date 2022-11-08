<template>
  <div class="food-truck-home">
    <foodtruckhome msg="Food Truck List"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import foodtruckhome from '../components/foodtruckhome.vue'

export default defineComponent({
  name: 'ContactView',
  components: {
    foodtruckhome
  }
})
</script>

<style lang="scss">
  .food-truck-home h1 {
    font-size: 30px;
  }
  #total{
    text-align: right;
  }
</style>

<template>
  <div class="food-truck-home">
    <foodtruckhome msg="Food Truck List"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import foodtruckhome from '@/components/foodtruckhome.vue' // @ is an alias to /src

export default defineComponent({
  name: 'ContactView',
  components: {
    foodtruckhome
  }
})
</script>

<style lang="scss">
  .food-truck-home h1 {
    font-size: 25px;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  #total{
    text-align: right;
  }
</style>

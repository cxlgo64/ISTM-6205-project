<template>
  <div class="food-truck-home">
    <foodtruckhome msg="Here is the food truck homepage"/>
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

<template>
   <div class="food-truck-home">
    <h1>{{ msg }}</h1>
    <p></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'food-truck-home',
  props: {
    msg: String
  }
})
</script>

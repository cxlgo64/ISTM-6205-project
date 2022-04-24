<template>
  <div class="home">
    <Homepage msg="Delicious Fresh Food to your hand"/>
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

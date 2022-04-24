<template>
  <footer>
    <p id="ft">Copyright &copy; Xueliang Chen,  Younghwan Choi , Jeffrey Techie-Menson {{year}} </p>
  </footer>
</template>

...
<script>
import { computed } from 'vue'

export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
    return { year }
  }
}
</script>

<style lang="scss">
  #ft{
    margin:20px;
    font-size: 12px;
    background-color: bisque;
    position: relative;
    bottom: 0;
  }
</style>

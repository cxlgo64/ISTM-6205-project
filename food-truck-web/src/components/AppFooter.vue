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
    font-size: 8px;
    background-color: bisque;
  }
</style>

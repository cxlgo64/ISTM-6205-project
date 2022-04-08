<template>
  <footer>
    <p>Copyright &copy; Xueliang Chen,  Younghwan Choi , Jeffrey Techie-Menson {{year}} </p>
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

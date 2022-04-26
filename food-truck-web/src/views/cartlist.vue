<template>
  <div class="Scratlist">
    <ShoppingCart>
        <template v-slot:cratlist>
            <tr id="crat1">
                <td>Tasty Kobab</td>
                <td>001</td>
                <td>Chicken & rick</td>
                <td>1</td>
                <td>$12.99</td>
                <td>
                    <button  @click="removeFunc()">remove</button>
                    <button  @click="addquantity()">+</button>
                    <button  @click="reducequantity()">-</button>
                </td>
            </tr>
        </template>
    </ShoppingCart>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShoppingCart from '../components/Shopping-cartView.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Shopping-cartView',
  components: {
    ShoppingCart
  },

  methods: {
    removeFunc (): void {
      // document.getElementById('crat1').innerHTML = ''
    },
    addquantity (): void {
      // document.getElementById('crat1').innerHTML = ''
    },
    reducequantity (): void {
      // document.getElementById('crat1').innerHTML = ''
    }
  }
})
</script>

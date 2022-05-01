<template>
  <div class="Scratlist">
    <ShoppingCart>
        <template v-slot:cratlist>
            <tr id='crat1'>
                <td>Gourmet Mediterranean</td>
                <td>005</td>
                <td>Falafel Side</td>
                <td id='qtt1'>1</td>
                <td id='price1'>$5.00</td>
                <td>
                    <button  @click="removeFunc(this)">remove</button>
                    <button  @click="addquantity(this)">+</button>
                    <button  @click="reducequantity(this)">-</button>
                </td>
            </tr>
            <tr id='crat2'>
                <td>Gourmet Mediterranean</td>
                <td>001</td>
                <td>Falafel Over Rice</td>
                <td id='qtt2'>1</td>
                <td id='price2'>$12.99</td>
                <td>
                    <button  @click="removeFunc()">remove</button>
                    <button  @click="addquantity(this)">+</button>
                    <button  @click="reducequantity(this)">-</button>
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
      document.getElementById('crat1').innerHTML = ''
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

<style lang="scss">
@import "src/scss/_base2.scss";
</style>
